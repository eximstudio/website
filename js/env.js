// @ts-check
import * as THREE from "https://cdn.skypack.dev/three";
import { OrbitControls } from "https://cdn.skypack.dev/three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "https://cdn.skypack.dev/three/examples/jsm/loaders/DRACOLoader.js";
// import Icon from "./icon.js";

// Icon();

(() => {
  let canvas,
    scene,
    camera,
    renderer,
    animations = [],
    paused = false,
    mixer,
    clock = new THREE.Clock();

  // Sizes
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  // Canvas
  canvas = document.getElementById("model");

  // Scene
  scene = new THREE.Scene();

  // Lights
  const pointLight = new THREE.DirectionalLight(0xffffff, 0.5);
  pointLight.position.set(0, 1, 0);
  scene.add(pointLight);

  //ambient light
  const light = new THREE.AmbientLight(0x404040, 1); // soft white light
  scene.add(light);

  // Camera
  camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 1, 1000);
  camera.position.set(10, 3, 10);
  scene.add(camera);

  //Grid
  let geometry = new THREE.PlaneGeometry(70, 70);
  let material = new THREE.MeshPhongMaterial({
    color: 0x2b2b2b,
    depthWrite: false,
  });

  let ground = new THREE.Mesh(geometry, material);
  ground.position.set(0, -3, 0);
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  scene.add(ground);

  let grid = new THREE.GridHelper(70, 70, 0x000000, 0x000000);
  grid.position.y = -3;
  // @ts-ignore
  grid.material.fog = false;
  // @ts-ignore
  grid.material.transparent = true;
  scene.add(grid);

  //Fog
  scene.fog = new THREE.FogExp2(0x404040, 0.008);
  scene.background = new THREE.Color(0x2b2b2b);

  // Renderer
  renderer = new THREE.WebGLRenderer({
    // @ts-ignore
    canvas: canvas,
  });
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  let controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.maxDistance = 80;
  controls.minDistance = 2;
  controls.autoRotate = true;

  window.addEventListener("resize", () => {
    // Update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    // Update camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    // Update renderer
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });

  window.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      controls.autoRotate = !controls.autoRotate;
    } else if (e.code === "Space") {
      animations.forEach((a) => {
        a.paused = !paused;
        paused = !paused;
      });
    } else if (e.code === "Numpad0") {
      document.getElementById("description").style.right = "0%";
      document.getElementById("description").style.opacity = "1";
    } else if (e.code === "Numpad1") {
      document.getElementById("description").style.right = "-51%";
      document.getElementById("description").style.opacity = "0.1";
    }
  });

  // Loader animation

  class Loader {
    constructor() {
      this.woking = true;
      this.geo = new THREE.BoxGeometry(1, 1, 1);
      this.material = new THREE.MeshPhongMaterial({ color: 0xffffff });
      this.mesh = new THREE.Mesh(this.geo, this.material);
      scene.add(this.mesh);
    }

    animate() {
      if (!this.woking) return;
      this.mesh.rotation.x += 0.01;
      this.mesh.rotation.y += 0.01;
    }

    dispose() {
      this.working = false;
      scene.remove(this.mesh);
      this.geo.dispose();
      this.material.dispose();
    }
  }

  const loader = new Loader();

  // loader
  const GLTFloader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  GLTFloader.setDRACOLoader(dracoLoader);

  GLTFloader.load(canvas.dataset.url, function (gltf) {
    gltf.scene.scale.set(0.3, 0.3, 0.3);
    scene.add(gltf.scene);
    loader.dispose();
    if (canvas.dataset.animate) {
      mixer = new THREE.AnimationMixer(gltf.scene);
      gltf.animations.forEach((a) => {
        let animation = mixer.clipAction(a);
        animations.push(animation);
        animation.play();
      });
    }
  });

  const animate = () => {
    controls.update();

    renderer.render(scene, camera);

    if (mixer) mixer.update(clock.getDelta());

    loader.animate();

    window.requestAnimationFrame(animate);
  };
  animate();
})();
