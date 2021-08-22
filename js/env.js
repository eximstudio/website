// @ts-check
import * as THREE from "https://unpkg.com/three@0.131/build/three.module.js";
import { OrbitControls } from "https://unpkg.com/three@0.131/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://unpkg.com/three@0.131/examples/jsm/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "https://unpkg.com/three@0.131/examples/jsm/loaders/DRACOLoader";

(() => {
  let canvas,
    scene,
    camera,
    renderer,
    animations = [],
    paused = false,
    mixer;

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
  let geometry = new THREE.PlaneGeometry(1000, 1000);
  let material = new THREE.MeshPhongMaterial({
    color: 0x2b2b2b,
    depthWrite: false,
  });

  let ground = new THREE.Mesh(geometry, material);
  ground.position.set(0, -3, 0);
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  scene.add(ground);

  let grid = new THREE.GridHelper(1000, 500, 0x000000, 0x000000);
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
  controls.dampingFactor = 0.05;
  controls.maxDistance = 100;
  controls.minDistance = 4.5;
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

  const animate = () => {
    controls.update();

    renderer.render(scene, camera);

    window.requestAnimationFrame(animate);
  };

  animate();

  window.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      controls.autoRotate = !controls.autoRotate;
    } else if (e.code === "Space") {
      animations.forEach((a) => {
        a.paused = !paused;
      });
    }
  });

  // loader
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  loader.setDRACOLoader(dracoLoader);

  loader.load(canvas.dataset.url, function (gltf) {
    gltf.scene.scale.set(0.3, 0.3, 0.3);
    scene.add(gltf.scene);
    if (canvas.dataset.animate) {
      mixer = new THREE.AnimationMixer(gltf.scene);
      gltf.animations.forEach((a) => {
        let animation = mixer.clipAction(a);
        animations.push(animation);
        animation.play();
      });
    }
  });
})();
