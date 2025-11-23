import * as THREE from "three";

export function initScene() {
  const container = document.getElementById("canvas-container");

  // Scene Setup
  const scene = new THREE.Scene();
  // Add a subtle fog for depth
  scene.fog = new THREE.FogExp2(0x0a0e17, 0.002);

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

  // 1. Abstract Implant (Cylinder with ridges)
  const geometry = new THREE.CylinderGeometry(1, 0.8, 4, 64, 20);
  const material = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    metalness: 0.9,
    roughness: 0.2,
    wireframe: false,
  });
  const implant = new THREE.Mesh(geometry, material);

  // Add some "threads" using a texture or displacement (simplified here with wireframe overlay or just geometry segments)
  // For a "wow" effect, let's add a glowing wireframe surrounding it
  const wireframeGeo = new THREE.WireframeGeometry(geometry);
  const wireframeMat = new THREE.LineBasicMaterial({
    color: 0x00d4ff,
    transparent: true,
    opacity: 0.1,
  });
  const wireframe = new THREE.LineSegments(wireframeGeo, wireframeMat);
  implant.add(wireframe);

  scene.add(implant);

  // 2. Particles
  const particlesGeometry = new THREE.BufferGeometry();
  const particlesCount = 700;
  const posArray = new Float32Array(particlesCount * 3);

  for (let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 20; // Spread out
  }

  particlesGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(posArray, 3)
  );
  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.02,
    color: 0x00d4ff,
    transparent: true,
    opacity: 0.8,
  });
  const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particlesMesh);

  // --- Lights ---
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  const pointLight1 = new THREE.PointLight(0x00d4ff, 2);
  pointLight1.position.set(2, 3, 4);
  scene.add(pointLight1);

  const pointLight2 = new THREE.PointLight(0xff00ff, 2); // A bit of contrast
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

    // Rotate Implant
    implant.rotation.y += 0.005;
    implant.rotation.x += 0.002;

    // Interactive Rotation
    implant.rotation.y += 0.05 * (targetX - implant.rotation.y);
    implant.rotation.x += 0.05 * (targetY - implant.rotation.x);

    // Scroll Effect
    // Move the implant to the side as we scroll down to make room for text
    const scrollPercent =
      scrollY / (document.body.scrollHeight - window.innerHeight);

    // Smoothly interpolate position based on scroll
    // Start center (0,0,0) -> Move right (2,0,0) as we scroll
    implant.position.x = THREE.MathUtils.lerp(
      implant.position.x,
      scrollPercent * 3,
      0.1
    );
    implant.position.z = THREE.MathUtils.lerp(
      implant.position.z,
      scrollPercent * -2,
      0.1
    ); // Move back slightly

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
