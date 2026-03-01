import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

export const Implant3DViewer = (
  containerId = "implant-3d-viewer",
  options = {},
) => {
  const { cinematic = false } = options;
  const container = document.createElement("div");
  container.id = containerId;
  container.className =
    "w-full h-[500px] relative bg-clinical-gray/30 rounded-2xl overflow-hidden cursor-move";

  // Wait for the container to be mounted before initializing Three.js
  setTimeout(() => {
    const el = document.getElementById(containerId);
    if (!el) return;

    // Scene Setup
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      el.clientWidth / el.clientHeight,
      0.1,
      1000,
    );
    camera.position.set(0, 5, 45);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(el.clientWidth, el.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    el.appendChild(renderer.domElement);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = true;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 2.0;

    // Environment
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    pmremGenerator.compileEquirectangularShader();
    const environment = new RoomEnvironment();
    const envMap = pmremGenerator.fromScene(environment).texture;
    scene.environment = envMap;
    environment.dispose();

    // Material Setup (Sandblasted)
    const maxAnisotropy = renderer.capabilities.getMaxAnisotropy();
    const textureLoader = new THREE.TextureLoader();

    const roughnessTexture = textureLoader.load(
      "/assets/images/materials/roughness.webp",
    );
    roughnessTexture.wrapS = THREE.RepeatWrapping;
    roughnessTexture.wrapT = THREE.RepeatWrapping;
    roughnessTexture.repeat.set(16, 16);
    roughnessTexture.anisotropy = maxAnisotropy;

    const normalTexture = textureLoader.load(
      "/assets/images/materials/normal.webp",
    );
    normalTexture.wrapS = THREE.RepeatWrapping;
    normalTexture.wrapT = THREE.RepeatWrapping;
    normalTexture.repeat.set(16, 16);
    normalTexture.anisotropy = maxAnisotropy;

    const sandblastedMaterial = new THREE.MeshStandardMaterial({
      color: 0x696969,
      metalness: 0.4,
      roughness: 0.8,
      roughnessMap: roughnessTexture,
      normalMap: normalTexture,
      normalScale: new THREE.Vector2(2, 2),
      envMap: envMap,
      envMapIntensity: 0.1,
    });

    const metallicInnerMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xc0c0c0,
      metalness: 1.0,
      roughness: 0.15,
      envMap: envMap,
      envMapIntensity: 1.8,
      clearcoat: 0.2,
      clearcoatRoughness: 0.05,
      reflectivity: 0.4,
    });

    // Load Model
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath(
      "https://www.gstatic.com/draco/versioned/decoders/1.5.6/",
    );
    dracoLoader.setDecoderConfig({ type: "js" });

    const loader = new GLTFLoader();
    loader.setDRACOLoader(dracoLoader);

    loader.load(
      "/assets/models/body.glb",
      (gltf) => {
        const model = gltf.scene;

        model.traverse((child) => {
          if (child.isMesh) {
            const geometry = child.geometry;
            if (!geometry.attributes.normal) geometry.computeVertexNormals();

            // Generate UVs if missing
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

            const meshName = child.name.toLowerCase();
            const isInnerPart =
              meshName.includes("thread") || meshName.includes("inner");

            child.material = isInnerPart
              ? metallicInnerMaterial
              : sandblastedMaterial;
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });

        // Center the model
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        model.position.sub(center);

        // Scale appropriately
        model.scale.set(5, 5, 5);

        scene.add(model);
      },
      undefined,
      (error) => console.error("An error happened loading the model:", error),
    );

    // Lights (Consistent with ThreeImplantViewer)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 0.5);
    dirLight.position.set(10, 15, 10);
    dirLight.castShadow = true;
    scene.add(dirLight);

    const backLight = new THREE.DirectionalLight(0xffffff, 1.0);
    backLight.position.set(-10, 10, -10);
    scene.add(backLight);

    const bottomLight = new THREE.DirectionalLight(0xffffff, 0.5);
    bottomLight.position.set(0, -10, 0);
    scene.add(bottomLight);

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);

      if (cinematic) {
        const time = Date.now() * 0.0005;
        // Cinematic camera movement
        camera.position.y = 5 + Math.sin(time) * 15;
        camera.position.x = Math.cos(time * 0.7) * 20;
        camera.position.z = 35 + Math.sin(time * 0.5) * 15;
        camera.lookAt(0, 0, 0);

        // Dynamic lighting
        dirLight.position.x = Math.sin(time * 1.5) * 20;
        dirLight.position.z = Math.cos(time * 1.5) * 20;

        controls.autoRotateSpeed = 4.0;
      }

      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Resize Handler
    const handleResize = () => {
      if (!el) return;
      camera.aspect = el.clientWidth / el.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(el.clientWidth, el.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup function stored on element for potential later use
    el._cleanup = () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      controls.dispose();
    };
  }, 100);

  return container;
};
