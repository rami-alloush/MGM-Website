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
      implant = gltf.scene;

      // Apply polished titanium material
      implant.traverse((child) => {
        if (child.isMesh) {
          const geometry = child.geometry;

          // Compute normals if missing (fixes flat shading)
          if (!geometry.attributes.normal) {
            geometry.computeVertexNormals();
          }

          // Use MeshPhysicalMaterial for realistic metallic rendering
          child.material = new THREE.MeshPhysicalMaterial({
            color: 0xb8b8b8,
            metalness: 1.0,
            roughness: 0.15,
            envMap: envMap,
            envMapIntensity: 1.5,
            clearcoat: 0.1,
            clearcoatRoughness: 0.2,
          });
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });

      // Scale and position the model
      implant.scale.set(15, 15, 15);
      implant.position.set(0, 0, 0);
      scene.add(implant);
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

      // Scroll Effect - move model to the right as user scrolls
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = maxScroll > 0 ? scrollY / maxScroll : 0;

      // Move right on scroll (increased from 3 to 20 for more noticeable effect)
      const scrollTargetX = scrollPercent * 20;
      const mouseParallaxX = targetX * 2.0;

      implant.position.x = THREE.MathUtils.lerp(
        implant.position.x,
        scrollTargetX + mouseParallaxX,
        0.08
      );

      // Move slightly back on scroll for depth effect
      implant.position.z = THREE.MathUtils.lerp(
        implant.position.z,
        scrollPercent * -5,
        0.08
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
