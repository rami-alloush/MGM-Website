import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";

export class ImplantViewer {
  constructor(container) {
    this.container = container;
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.model = null;
    this.mixer = null;
    this.targetPosition = new THREE.Vector3(0, 0, 0); // Where the camera looks
    this.targetCameraPosition = new THREE.Vector3(0, 0, 50); // Where the camera is
    this.targetLightPosition = new THREE.Vector3(10, 20, 20); // Where the light is
    this.currentViewIndex = 0;

    // Animation/Lerp factors
    this.lerpFactor = 0.05;

    this.init();
  }

  init() {
    // 1. Scene
    this.scene = new THREE.Scene();

    // 2. Camera
    // Initial position, will be overridden by animate
    this.camera = new THREE.PerspectiveCamera(
      45,
      this.container.clientWidth / this.container.clientHeight,
      0.1,
      1000,
    );
    this.camera.position.set(0, 0, 50);

    // 3. Renderer
    this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    this.renderer.setSize(
      this.container.clientWidth,
      this.container.clientHeight,
    );
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.0;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.container.appendChild(this.renderer.domElement);

    // 4. Environment / Lighting
    const pmremGenerator = new THREE.PMREMGenerator(this.renderer);
    pmremGenerator.compileEquirectangularShader();
    const environment = new RoomEnvironment();
    const envMap = pmremGenerator.fromScene(environment).texture;
    this.scene.environment = envMap;
    // this.scene.background = new THREE.Color(0xffffff); // Optional: if we want white bg
    environment.dispose();

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    this.scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 0.5);
    dirLight.position.set(10, 15, 10);
    this.dirLight = dirLight;
    this.scene.add(dirLight);

    const spotLight = new THREE.SpotLight(0xffffff, 2.0);
    spotLight.position.set(0, 20, 15);
    spotLight.angle = Math.PI / 6;
    spotLight.penumbra = 0.3;
    this.spotLight = spotLight;
    this.scene.add(spotLight);
    this.scene.add(spotLight.target);

    // Particles
    this.addParticles();

    // 5. Load Model
    this.loadModel(envMap);

    // 6. Events
    window.addEventListener("resize", this.onResize.bind(this));

    // 7. Start Loop
    this.animate();
  }

  loadModel(envMap) {
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
        this.model = gltf.scene;

        // Material Setup (Reusing logic from implantScene.js)
        const textureLoader = new THREE.TextureLoader();
        const maxAnisotropy = this.renderer.capabilities.getMaxAnisotropy();

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

        this.model.traverse((child) => {
          if (child.isMesh) {
            const geometry = child.geometry;
            if (!geometry.attributes.normal) geometry.computeVertexNormals();
            // Simple UV generation if missing (spherical/cylindrical projection approximation)
            if (!geometry.attributes.uv) {
              geometry.computeBoundingBox();
              const min = geometry.boundingBox.min;
              const height = geometry.boundingBox.max.y - min.y || 1;
              const count = geometry.attributes.position.count;
              const uvs = new Float32Array(count * 2);
              const pos = geometry.attributes.position;
              for (let i = 0; i < count; i++) {
                const x = pos.getX(i);
                const y = pos.getY(i);
                const z = pos.getZ(i);
                const angle = Math.atan2(x, z);
                // u = angle mapped 0..1
                const u = angle / (2 * Math.PI) + 0.5;
                // v = height mapped 0..1
                const v = (y - min.y) / height;
                uvs[i * 2] = u;
                uvs[i * 2 + 1] = v;
              }
              geometry.setAttribute("uv", new THREE.BufferAttribute(uvs, 2));
            }

            const meshName = child.name.toLowerCase();
            // Assuming similar naming conventions as implantScene.js
            const isInnerPart =
              meshName.includes("thread") || meshName.includes("inner");
            child.material = isInnerPart
              ? metallicInnerMaterial
              : sandblastedMaterial;
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });

        // Center the model geometry
        const box = new THREE.Box3().setFromObject(this.model);
        const center = box.getCenter(new THREE.Vector3());
        this.model.position.sub(center); // Center at 0,0,0

        // Scale it up
        this.model.scale.set(5, 5, 5);

        // Add to scene
        this.scene.add(this.model);

        // Initial view
        this.setCameraView(0);
      },
      undefined,
      (error) => {
        console.error("Error loading model:", error);
      },
    );
  }

  // Define views: { camPos: [x,y,z], target: [x,y,z] }
  // Adjusted for model scaled 5x
  getViews() {
    return [
      // 0: Full view (Overview) - Tapered/Cylindrical Body
      {
        camPos: new THREE.Vector3(32, 14, 45),
        target: new THREE.Vector3(0, 0, 0),
        lightPos: new THREE.Vector3(10, 20, 20),
        lightColor: 0xffffff,
      },

      // 1: Smart Cervix (Top/Neck) - Zoom in top
      {
        camPos: new THREE.Vector3(20, 20, 15),
        target: new THREE.Vector3(0, 15, 0),
        lightPos: new THREE.Vector3(10, 25, 10),
        // lightColor: 0x4f46e5, // Indigo/Blueish for "Smart" look
      },

      // 2: Smart Thread (Side/Threads) - Close up side
      {
        camPos: new THREE.Vector3(25, 0, 25),
        target: new THREE.Vector3(0, -2, 0),
        lightPos: new THREE.Vector3(30, 5, 30),
        // lightColor: 0x10b981, // Emerald/Green for Growth/Biological
      },

      // 3: Smart Apex (Bottom) - Look from below
      {
        camPos: new THREE.Vector3(10, -25, 20),
        target: new THREE.Vector3(0, -10, 0),
        lightPos: new THREE.Vector3(5, -20, 25),
        // lightColor: 0xf59e0b, // Amber/Orange for Warning/Critical zone (Nerve)
      },

      // 4: Smart Connection (Top-down) - Look into the hole
      {
        camPos: new THREE.Vector3(0, 35, 10),
        target: new THREE.Vector3(0, 8, 0),
        lightPos: new THREE.Vector3(0, 40, 5),
        // lightColor: 0x3b82f6, // Blue for Connection
      },

      // 5: Surface (Extreme Close up)
      {
        camPos: new THREE.Vector3(12, 5, 12),
        target: new THREE.Vector3(0, 2, 0),
        lightPos: new THREE.Vector3(15, 5, 15),
        lightColor: 0xffffff, // White for Purity
      },
    ];
  }

  setSection(index) {
    if (index === this.currentViewIndex) return;
    this.currentViewIndex = index;
    this.setCameraView(index);
  }

  setCameraView(index) {
    const views = this.getViews();
    const view = views[index] || views[0];

    // We just update the target vectors, the animate loop handles the lerp
    // Clone to avoid reference issues, although we can just copy values
    this.targetCameraPosition.copy(view.camPos);
    this.targetPosition.copy(view.target);
    if (view.lightPos && this.targetLightPosition) {
      this.targetLightPosition.copy(view.lightPos);
    }

    // Animate SpotLight Color
    if (this.spotLight && view.lightColor !== undefined) {
      // We can't lerp color directly in animate easily without state,
      // but we can just Tween it or smooth transition manually.
      // For simplicity, let's just set it or use a simple transition logic if we had Tween.js.
      // Native Three.js Color lerp:
      this.targetLightColor = new THREE.Color(view.lightColor);
    } else if (this.spotLight) {
      this.targetLightColor = new THREE.Color(0xffffff);
    }
  }

  onResize() {
    if (!this.container) return;
    this.camera.aspect =
      this.container.clientWidth / this.container.clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(
      this.container.clientWidth,
      this.container.clientHeight,
    );
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));

    if (this.model) {
      // Gentle rotation for life
      this.model.rotation.y += 0.002;
    }

    // Animate Particles
    if (this.particlesMesh) {
      const elapsedTime = Date.now() * 0.001;
      this.particlesMesh.rotation.y = -elapsedTime * 0.05;
      this.particlesMesh.rotation.x = elapsedTime * 0.02;
    }

    // Smoothly interpolate camera position
    this.camera.position.lerp(this.targetCameraPosition, this.lerpFactor);

    // Smoothly interpolate light position
    if (this.spotLight && this.targetLightPosition) {
      this.spotLight.position.lerp(this.targetLightPosition, this.lerpFactor);
    }

    // Smoothly interpolate lookAt target
    // We can't directly lerp "lookAt", but we can lerp a target vector and call lookAt every frame
    // We can store currentLookAt and lerp it to targetPosition
    if (!this.currentLookAt)
      this.currentLookAt = new THREE.Vector3().copy(this.targetPosition);
    this.currentLookAt.lerp(this.targetPosition, this.lerpFactor);
    this.camera.lookAt(this.currentLookAt);

    // Spotlight target follows camera target
    if (this.spotLight && this.currentLookAt) {
      this.spotLight.target.position.copy(this.currentLookAt);
    }

    // Smoothly interpolate lights color
    if (this.targetLightColor) {
      if (this.spotLight)
        this.spotLight.color.lerp(this.targetLightColor, 0.05);
      if (this.dirLight) this.dirLight.color.lerp(this.targetLightColor, 0.05);
    }

    this.renderer.render(this.scene, this.camera);
  }

  addParticles() {
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
      size: 0.3,
      color: 0xd71a21, // Red-ish
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    this.particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    this.scene.add(this.particlesMesh);
  }
}
