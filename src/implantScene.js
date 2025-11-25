import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { VertexNormalsHelper } from "three/addons/helpers/VertexNormalsHelper.js";

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
    1000
  );
  camera.position.z = 50;

  // Renderer with enhanced settings
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.2;
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
  let implant; // Will hold the loaded model

  // DEBUG: Add test sphere to verify environment map is working
  const testSphereGeometry = new THREE.SphereGeometry(5, 64, 64);
  const testSphereMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xaaaaaa,
    metalness: 1.0,
    roughness: 0.1,
    envMap: envMap,
    envMapIntensity: 2.0,
  });
  const testSphere = new THREE.Mesh(testSphereGeometry, testSphereMaterial);
  testSphere.position.set(-20, 0, 0); // Position to the left
  testSphere.name = "DEBUG_TEST_SPHERE";
  scene.add(testSphere);
  console.log(
    "🔍 DEBUG - Test sphere added at (-20, 0, 0) - if this looks metallic, env map works!"
  );

  // Setup DRACO Loader for compressed models
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath(
    "https://www.gstatic.com/draco/versioned/decoders/1.5.6/"
  );
  dracoLoader.setDecoderConfig({ type: "js" });

  // Load the implant-body.glb model
  const loader = new GLTFLoader();
  loader.setDRACOLoader(dracoLoader);
  loader.load(
    "/assets/models/body.glb",
    (gltf) => {
      // Successfully loaded the model
      implant = gltf.scene;

      // DEBUG: Log scene environment
      console.log("🔍 DEBUG - Scene environment:", scene.environment);
      console.log("🔍 DEBUG - EnvMap texture:", envMap);

      // Apply polished titanium material with debugging
      implant.traverse((child) => {
        if (child.isMesh) {
          const geometry = child.geometry;

          // DEBUG: Check geometry attributes
          console.log("🔍 DEBUG - Mesh found:", child.name);
          console.log(
            "🔍 DEBUG - Has position:",
            !!geometry.attributes.position
          );
          console.log("🔍 DEBUG - Has normal:", !!geometry.attributes.normal);
          console.log(
            "🔍 DEBUG - Vertex count:",
            geometry.attributes.position?.count
          );

          // FIX: Compute normals if missing or corrupted
          if (!geometry.attributes.normal) {
            console.warn("⚠️ No normals found - computing...");
            geometry.computeVertexNormals();
          } else {
            // Force recompute normals in case they're wrong
            console.log("🔧 Recomputing vertex normals...");
            geometry.computeVertexNormals();
          }

          // Check bounding box to ensure geometry is valid
          geometry.computeBoundingBox();
          console.log("🔍 DEBUG - Bounding box:", geometry.boundingBox);

          // Use MeshPhysicalMaterial for better metallic rendering
          const material = new THREE.MeshPhysicalMaterial({
            color: 0xaaaaaa,
            metalness: 1.0,
            roughness: 0.2,
            envMapIntensity: 2.0,
            clearcoat: 0.1,
            clearcoatRoughness: 0.2,
          });

          // Explicitly set the environment map
          material.envMap = envMap;
          material.needsUpdate = true;

          child.material = material;
          child.castShadow = true;
          child.receiveShadow = true;

          // DEBUG: Log final material state
          console.log("🔍 DEBUG - Material type:", material.type);
          console.log("🔍 DEBUG - Material envMap:", material.envMap);
          console.log("🔍 DEBUG - Material metalness:", material.metalness);

          // DEBUG: Sample some normals to check their values
          const normalAttr = geometry.attributes.normal;
          if (normalAttr) {
            console.log("🔍 DEBUG - Sample normals (first 5 vertices):");
            for (let i = 0; i < Math.min(5, normalAttr.count); i++) {
              const nx = normalAttr.getX(i);
              const ny = normalAttr.getY(i);
              const nz = normalAttr.getZ(i);
              console.log(
                `  Vertex ${i}: (${nx.toFixed(3)}, ${ny.toFixed(
                  3
                )}, ${nz.toFixed(3)})`
              );
            }
          }
        }
      });

      // Scale and position the model appropriately
      implant.scale.set(15, 15, 15);

      // DEBUG: Add normal helper to visualize normals (red lines)
      implant.traverse((child) => {
        if (child.isMesh) {
          const normalsHelper = new VertexNormalsHelper(child, 0.5, 0xff0000);
          scene.add(normalsHelper);
          console.log("🔍 DEBUG - Added normals helper for:", child.name);
        }
      });
      implant.position.set(0, 0, 0);
      scene.add(implant);
      console.log("✅ Implant model loaded successfully");
    },
    (progress) => {
      // Loading progress - silenced to avoid console spam
    },
    (error) => {
      // If loading fails, use fallback
      console.error("Error loading model, using fallback:", error);
    }
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
    new THREE.BufferAttribute(posArray, 3)
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

  const pointLight1 = new THREE.PointLight(0xd71a21, 3.0); // Red tint - bright for reflections
  pointLight1.position.set(5, 5, 8); // Front-right position
  scene.add(pointLight1);

  const pointLight2 = new THREE.PointLight(0xffcd00, 3.0); // Gold tint - bright for reflections
  pointLight2.position.set(-5, -3, -8); // Back-left position
  scene.add(pointLight2);

  // Additional spotlight for highlighting details and creating specular highlights
  const spotLight = new THREE.SpotLight(0xffffff, 3.0);
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
    targetX = mouseX * 0.003; // 3x more sensitive
    targetY = mouseY * 0.001;

    if (implant) {
      // Rotate Implant
      implant.rotation.y += 0.005;
      implant.rotation.x += 0.002;

      // Interactive Rotation - increased responsiveness
      implant.rotation.y += 0.12 * (targetX - implant.rotation.y); // More responsive
      implant.rotation.x += 0.12 * (targetY - implant.rotation.x); // More responsive

      // Scroll Effect
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = maxScroll > 0 ? scrollY / maxScroll : 0;

      // Calculate target positions combining scroll and mouse
      const scrollTargetX = scrollPercent * 3;
      // Add mouse parallax to X position (targetX is derived from mouseX)
      // Multiplier controls how much it moves. targetX is roughly -3 to +3 range based on screen width
      const mouseParallaxX = targetX * 2.0;

      implant.position.x = THREE.MathUtils.lerp(
        implant.position.x,
        scrollTargetX + mouseParallaxX,
        0.1
      );

      implant.position.z = THREE.MathUtils.lerp(
        implant.position.z,
        scrollPercent * -2,
        0.1
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
