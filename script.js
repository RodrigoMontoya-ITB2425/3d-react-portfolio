let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.158.0/build/three.module.js';
import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.158.0/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.158.0/examples/js/controls/OrbitControls.js';

// Configuración básica
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 0); // Fondo transparente
document.body.appendChild(renderer.domElement);

// Después de la configuración básica de la cámara y el renderizador
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // Habilita el efecto de desaceleración suave
controls.dampingFactor = 0.25; // Controla la velocidad de desaceleración
controls.screenSpacePanning = false; // Evita el desplazamiento hacia abajo
controls.maxPolarAngle = Math.PI / 2; // Limita la rotación vertical (evita voltear el modelo)
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 0); // Fondo transparente
document.body.appendChild(renderer.domElement);

// Luz
const light = new THREE.HemisphereLight(0xffffff, 0x444444, 1);
scene.add(light);

// Carga del modelo 3D
const loader = new GLTFLoader();
loader.load(
    'assets/Planeta/scene.gltf', // Ruta al archivo GLB
    (gltf) => {
        const model = gltf.scene;
        model.scale.set(0.5, 0.5, 0.5); // Ajusta el tamaño
        model.rotation.y = Math.PI;    // Rota el modelo si es necesario
        scene.add(model);

        // Animación
        const animate = () => {
            requestAnimationFrame(animate);
            model.rotation.y += 0.01; // Gira el modelo lentamente
            renderer.render(scene, camera);
        };
        animate();
    },
    undefined,
    (error) => {
        console.error('Error al cargar el modelo:', error);
    }
);

// Posiciona la cámara
camera.position.z = 5;

// Responsividad
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };

    });
    let header=document.querySelector('header');

    header.classList.toggle('sticky',window.screenY>100);
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

ScrollReveal({
    //reset:true,
    distance:'80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-content,.heading',{origin:'top'});
ScrollReveal().reveal('.home-img,.services-container,.portfolio-box,.contact form',{origin:'bottom'});
ScrollReveal().reveal('.home-content h1,.about-img',{origin:'left'});
ScrollReveal().reveal('.home-content p,.about-content',{origin:'right'});

const typed = new Typed('.multiple-text',{
    strings:['CSE Student at NMIT ','Frontend developer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});