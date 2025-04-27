import { useEffect } from 'react';
import * as THREE from 'three';
import './App.css';
import { OrbitControls } from 'three/examples/jsm/Addons.js';

import Projects from "./Components/Projects/index";
import Footer from "./Components/Footer/index";
import Title from "./Components/Helpers/Title";
import Heading from "./Components/Heading";
import Timeline from "./Components/Timeline";
import Background from "./Components/Helpers/particles";
import FadeinSection from "./Components/Helpers/FadeinSection";
import Navbar from "./Components/Navbar";
import './index.css'
import Container from "./Components/Helpers/Container";

export default function App() {
  useEffect(() => {
    // Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector('#bg'),
    });
    
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.setZ(30);
    camera.position.setX(-3);
    
    renderer.render(scene, camera);

    // Lights
    // const pointLight = new THREE.PointLight(0xffffff);
    // pointLight.position.set(5, 5, -10);
    // scene.add(pointLight)
    
    const ambientLight = new THREE.AmbientLight(0xffffff,3);
    scene.add(ambientLight);
    
    // Helpers
    
    // const lightHelper = new THREE.PointLightHelper(pointLight)
    // const gridHelper = new THREE.GridHelper(200, 50);
    // scene.add(lightHelper, gridHelper)
    
    const controls = new OrbitControls(camera, renderer.domElement);
    
    function addStar() {
      const geometry = new THREE.SphereGeometry(0.25, 24, 24);
      const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
      const star = new THREE.Mesh(geometry, material);
    
      const [x, y, z] = Array(3)
        .fill()
        .map(() => THREE.MathUtils.randFloatSpread(100));
    
      star.position.set(x, y, z);
      scene.add(star);
    }
    
    Array(200).fill().forEach(addStar);
    
    // Background
    const spaceTexture = new THREE.TextureLoader().load('space.jpg');
    scene.background = spaceTexture;

    // Moon
    const moonTexture = new THREE.TextureLoader().load('moon.jpg');
    const normalTexture = new THREE.TextureLoader().load('normal.jpg');

    const moon = new THREE.Mesh(
      new THREE.SphereGeometry(3, 32, 32),
      new THREE.MeshStandardMaterial({
        map: moonTexture,
        normalMap: normalTexture,
      })
    );


    moon.position.setX(5);
    moon.position.setZ(-10);
    scene.add(moon);

    // Scroll Animation

    function moveCamera() {
      const t = document.body.getBoundingClientRect().top;
      moon.rotation.x += 0.02;
      moon.rotation.y += 0.002;
      moon.rotation.z += 0.02;

      camera.position.z = t * -0.01;
      camera.position.x = t * -0.0002;
      camera.rotation.y = t * -0.0002;
    }

    document.body.onscroll = moveCamera;
    moveCamera();

    function animate() {
      requestAnimationFrame(animate);
      
      moon.rotation.x += 0.01;
      moon.rotation.y += 0.001;
      moon.rotation.z += 0.01;

      controls.update();

      renderer.render(scene, camera);
    }

    animate();
  }, []);

  return (
    <div>
      <canvas id="bg"></canvas>
      <main>
      <Navbar />
      <Title/>
      <FadeinSection>
        <Container>
        <div>
          <Heading text="Experiences" />
          <Timeline/>
        </div>
        </Container>
      </FadeinSection>
      <FadeinSection>
        <Container>
        <div>
          <Heading text="Projects" />
          <Projects />
        </div>
        </Container>
      </FadeinSection>
      <Footer />
      </main>
    </div>
  );
}
