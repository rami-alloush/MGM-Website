import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

export function initScene() {
  const container = document.getElementById("canvas-container");
  if (!container) return;

  // Scene Setup
  const scene = new THREE.Scene();
  // Light fog for clinical aesthetic
  scene.fog = new THREE.FogExp2(0xf4f6f8, 0.002);

  // Camera
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 5;

  // Renderer
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);

  // --- Objects ---
  let implant; // Will hold the loaded model

  // Create fallback cylinder
  const createFallbackImplant = () => {
    const geometry = new THREE.CylinderGeometry(1, 0.8, 4, 64, 20);
    const material = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      metalness: 0.8,
      roughness: 0.15,
    });
    const mesh = new THREE.Mesh(geometry, material);

    // Add wireframe for visual interest
    const wireframeGeo = new THREE.WireframeGeometry(geometry);
    const wireframeMat = new THREE.LineBasicMaterial({
      color: 0xcccccc, // Lighter wireframe
      transparent: true,
      opacity: 0.3,
    });
    const wireframe = new THREE.LineSegments(wireframeGeo, wireframeMat);
    mesh.add(wireframe);

    return mesh;
  };

  // Use fallback cylinder (GLB has Draco compression issues)
  implant = createFallbackImplant();
  scene.add(implant);

  // 2. Particles
  const particlesGeometry = new THREE.BufferGeometry();
  const particlesCount = 700;
  const posArray = new Float32Array(particlesCount * 3);

  for (let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 20;
  }

  particlesGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(posArray, 3)
  );
  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.03,
    color: 0xd71a21, // MGM Red particles
    transparent: true,
    opacity: 0.4,
  });
  const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particlesMesh);

  // --- Lights ---
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.8); // Brighter ambient
  scene.add(ambientLight);

  const pointLight1 = new THREE.PointLight(0xd71a21, 1.5); // Red tint
  pointLight1.position.set(2, 3, 4);
  scene.add(pointLight1);

  const pointLight2 = new THREE.PointLight(0xffcd00, 1.5); // Gold tint
  pointLight2.position.set(-3, -2, -3);
  scene.add(pointLight2);

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

    targetX = mouseX * 0.001;
    targetY = mouseY * 0.001;

    if (implant) {
      // Rotate Implant
      implant.rotation.y += 0.005;
      implant.rotation.x += 0.002;

      // Interactive Rotation
      implant.rotation.y += 0.05 * (targetX - implant.rotation.y);
      implant.rotation.x += 0.05 * (targetY - implant.rotation.x);

      // Scroll Effect
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = maxScroll > 0 ? scrollY / maxScroll : 0;

      implant.position.x = THREE.MathUtils.lerp(
        implant.position.x,
        scrollPercent * 3,
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
