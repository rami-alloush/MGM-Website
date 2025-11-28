import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";

export function initScene() {
  const container = document.getElementById("canvas-container");
  if (!container) return;

  // Scene Setup
  const scene = new THREE.Scene();

  // Camera
  const camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
  );
  camera.position.z = 50;

  // Renderer with enhanced settings
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  container.appendChild(renderer.domElement);

  // Create studio environment for realistic reflections
  const pmremGenerator = new THREE.PMREMGenerator(renderer);
  pmremGenerator.compileEquirectangularShader();
  const environment = new RoomEnvironment();
  const envMap = pmremGenerator.fromScene(environment).texture;
  scene.environment = envMap;
  environment.dispose();

  // --- Objects ---
  let implant1; // Will hold the sandblasted model
  let implant2; // Will hold the gold model

  // Setup DRACO Loader for compressed models
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath(
    "https://www.gstatic.com/draco/versioned/decoders/1.5.6/",
  );
  dracoLoader.setDecoderConfig({ type: "js" });

  // 1. Get the max anisotropy level your user's GPU supports
  // (Make sure this variable is available, or access renderer directly)
  const maxAnisotropy = renderer.capabilities.getMaxAnisotropy();

  const textureLoader = new THREE.TextureLoader();

  // --- Roughness Map ---
  const roughnessTexture = textureLoader.load(
    "/assets/images/materials/roughness.webp",
  );
  roughnessTexture.wrapS = THREE.RepeatWrapping;
  roughnessTexture.wrapT = THREE.RepeatWrapping;

  // FIX 1: Increase Repeat. Sandblasting is very fine grain.
  // 4x4 might be too large (blocky). Try 8x8 or 16x16.
  roughnessTexture.repeat.set(16, 16);

  // FIX 2: Max out Anisotropy to stop blurring at angles
  roughnessTexture.anisotropy = maxAnisotropy;

  // --- Normal Map ---
  const normalTexture = textureLoader.load(
    "/assets/images/materials/normal.webp",
  );
  normalTexture.wrapS = THREE.RepeatWrapping;
  normalTexture.wrapT = THREE.RepeatWrapping;
  normalTexture.repeat.set(16, 16); // Must match roughness repeat
  normalTexture.anisotropy = maxAnisotropy; // Sharpens the texture

  // Define Sandblasted material
  const sandblastedMaterial = new THREE.MeshStandardMaterial({
    color: 0x696969,
    metalness: 0.4,
    roughness: 0.8,
    roughnessMap: roughnessTexture,
    roughness: 0.8,

    normalMap: normalTexture,
    // FIX 3: Control the "depth" of the bumps.
    // If it looks like 'noise' or 'static', lower this vector (e.g., 0.5, 0.5)
    normalScale: new THREE.Vector2(2, 2),

    envMap: envMap,
    envMapIntensity: 0.1,
  });

  // Define Gold material
  const goldMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xd4af37,
    metalness: 0.9,
    roughness: 0.1,
    envMap: envMap,
    envMapIntensity: 2.5,
    clearcoat: 0.3,
    clearcoatRoughness: 0.1,
    reflectivity: 0.5,
  });

  // Define polished metallic material for inner parts (threading, cavity)
  const metallicInnerMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xc0c0c0, // Silver/titanium color
    metalness: 1.0,
    roughness: 0.15, // Very smooth, polished
    envMap: envMap,
    envMapIntensity: 1.8,
    clearcoat: 0.2,
    clearcoatRoughness: 0.05,
    reflectivity: 0.4,
  });

  // Load the implant-body.glb model
  const loader = new GLTFLoader();
  loader.setDRACOLoader(dracoLoader);
  loader.load(
    "/assets/models/body.glb",
    (gltf) => {
      // Clone the loaded scene for each model
      implant1 = gltf.scene.clone();
      implant2 = gltf.scene.clone();

      // Apply materials to implant1 - sandblasted outer, metallic inner
      implant1.traverse((child) => {
        if (child.isMesh) {
          const geometry = child.geometry;
          if (!geometry.attributes.normal) geometry.computeVertexNormals();
          if (!geometry.attributes.uv) {
            geometry.computeBoundingBox();
            const max = geometry.boundingBox.max;
            const min = geometry.boundingBox.min;
            const height = max.y - min.y;
            const rangeY = height || 1;
            const count = geometry.attributes.position.count;
            const uvs = new Float32Array(count * 2);
            const pos = geometry.attributes.position;
            for (let i = 0; i < count; i++) {
              const x = pos.getX(i);
              const y = pos.getY(i);
              const z = pos.getZ(i);
              const angle = Math.atan2(x, z);
              const u = angle / (2 * Math.PI) + 0.5;
              const v = (y - min.y) / rangeY;
              uvs[i * 2] = u;
              uvs[i * 2 + 1] = v;
            }
            geometry.setAttribute("uv", new THREE.BufferAttribute(uvs, 2));
          }

          // Check mesh name to determine material
          // Inner parts typically named: inner, cavity, thread, hole, internal
          const meshName = child.name.toLowerCase();
          const isInnerPart = meshName.includes("thread");

          child.material = isInnerPart
            ? metallicInnerMaterial
            : sandblastedMaterial;
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });

      // Apply same dual-material approach to implant2
      implant2.traverse((child) => {
        if (child.isMesh) {
          const geometry = child.geometry;
          if (!geometry.attributes.normal) geometry.computeVertexNormals();
          if (!geometry.attributes.uv) {
            geometry.computeBoundingBox();
            const max = geometry.boundingBox.max;
            const min = geometry.boundingBox.min;
            const height = max.y - min.y;
            const rangeY = height || 1;
            const count = geometry.attributes.position.count;
            const uvs = new Float32Array(count * 2);
            const pos = geometry.attributes.position;
            for (let i = 0; i < count; i++) {
              const x = pos.getX(i);
              const y = pos.getY(i);
              const z = pos.getZ(i);
              const angle = Math.atan2(x, z);
              const u = angle / (2 * Math.PI) + 0.5;
              const v = (y - min.y) / rangeY;
              uvs[i * 2] = u;
              uvs[i * 2 + 1] = v;
            }
            geometry.setAttribute("uv", new THREE.BufferAttribute(uvs, 2));
          }
          child.material = goldMaterial;
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });

      // Scale and position the models
      implant1.scale.set(5, 5, 5);
      implant1.position.set(0, 0, 0); // Position first implant to the left
      scene.add(implant1);

      implant2.scale.set(5, 5, 5);
      implant2.position.set(0, 0, 0); // Position second implant to the right
      scene.add(implant2);
    },
    (progress) => {
      // Loading progress - silenced to avoid console spam
    },
    (error) => {
      // If loading fails, use fallback
      console.error("Error loading model, using fallback:", error);
    },
  );

  // 2. Particles
  const particlesGeometry = new THREE.BufferGeometry();
  const particlesCount = 2000;
  const posArray = new Float32Array(particlesCount * 3);

  for (let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 100;
  }

  particlesGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(posArray, 3),
  );
  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.3, // Significantly increased for visibility
    color: 0xd71a21,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particlesMesh);

  // --- Enhanced Lights ---
  // Ambient light for base illumination (reduced to allow more contrast)
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
  scene.add(ambientLight);

  // Front Fill Light (Added to fix silhouette)
  const frontFillLight = new THREE.DirectionalLight(0xffffff, 1.5);
  frontFillLight.position.set(0, 0, 50); // Directly in front of camera
  scene.add(frontFillLight);

  // Main directional light from top-front for clear detail visibility
  const dirLight = new THREE.DirectionalLight(0xffffff, 1.0);
  dirLight.position.set(10, 15, 10); // Positioned from top-right-front
  dirLight.castShadow = true;
  scene.add(dirLight);

  // Secondary directional light from bottom for fill
  const dirLight2 = new THREE.DirectionalLight(0xffffff, 0.5);
  dirLight2.position.set(-8, -10, -8); // Positioned from bottom-left-back
  scene.add(dirLight2);

  const pointLight1 = new THREE.PointLight(0xffffff, 1.5); // Neutral white for realistic titanium
  pointLight1.position.set(5, 5, 8); // Front-right position
  scene.add(pointLight1);

  const pointLight2 = new THREE.PointLight(0xe8e8f0, 1.2); // Slight cool tint for metal highlights
  pointLight2.position.set(-5, -3, -8); // Back-left position
  scene.add(pointLight2);

  // Additional spotlight for highlighting details and creating specular highlights
  const spotLight = new THREE.SpotLight(0xffffff, 2.0);
  spotLight.position.set(0, 20, 15); // Positioned from above
  spotLight.angle = Math.PI / 6;
  spotLight.penumbra = 0.3;
  scene.add(spotLight);

  // --- Animation Loop ---
  const clock = new THREE.Clock();
  let scrollY = 0;

  window.addEventListener("scroll", () => {
    scrollY = window.scrollY;
  });

  // Mouse interaction
  let mouseX = 0;
  let mouseY = 0;
  let targetX = 0;
  let targetY = 0;

  const windowHalfX = window.innerWidth / 2;
  const windowHalfY = window.innerHeight / 2;

  document.addEventListener("mousemove", (event) => {
    mouseX = event.clientX - windowHalfX;
    mouseY = event.clientY - windowHalfY;
  });

  const animate = () => {
    const elapsedTime = clock.getElapsedTime();

    // Increased mouse sensitivity for more responsive movement
    targetX = mouseX * 0.008;
    targetY = mouseY * 0.004;

    if (implant1 && implant2) {
      // Scroll Effect - move model to the right as user scrolls
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = maxScroll > 0 ? scrollY / maxScroll : 0;

      // Move right on scroll (increased from 3 to 20 for more noticeable effect)
      const scrollTargetX = scrollPercent * 20;
      const mouseParallaxX = targetX * 2.0;

      // --- Implant 1 (Sandblasted) ---
      implant1.rotation.y += 0.005;
      implant1.rotation.x += 0.002;

      // Interactive Rotation
      implant1.rotation.y += 0.18 * (targetX - implant1.rotation.y);
      implant1.rotation.x += 0.18 * (targetY - implant1.rotation.x);

      // Position with offset -15
      implant1.position.x = THREE.MathUtils.lerp(
        implant1.position.x,
        -15 + scrollTargetX + mouseParallaxX,
        0.08,
      );
      implant1.position.z = THREE.MathUtils.lerp(
        implant1.position.z,
        scrollPercent * -5,
        0.08,
      );

      // --- Implant 2 (Gold) ---
      implant2.rotation.y += 0.005;
      implant2.rotation.x += 0.002;

      // Interactive Rotation
      implant2.rotation.y += 0.18 * (targetX - implant2.rotation.y);
      implant2.rotation.x += 0.18 * (targetY - implant2.rotation.x);

      // Position with offset +15
      implant2.position.x = THREE.MathUtils.lerp(
        implant2.position.x,
        15 + scrollTargetX + mouseParallaxX,
        0.08,
      );
      implant2.position.z = THREE.MathUtils.lerp(
        implant2.position.z,
        scrollPercent * -5,
        0.08,
      );
    }

    // Particles animation
    particlesMesh.rotation.y = -elapsedTime * 0.05;
    particlesMesh.rotation.x = elapsedTime * 0.02;

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  };

  animate();

  // Resize Handler
  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}
