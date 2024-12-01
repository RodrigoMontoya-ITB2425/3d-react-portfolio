// Menú de navegación
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

if (menuIcon && navbar) {
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };
}

// Secciones y enlaces de navegación
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
            });
        }
    });

    let header = document.querySelector('header');
    if (header) {
        header.classList.toggle('sticky', window.scrollY > 100);
    }

    // Cerrar el menú móvil si se está desplazando
    if (menuIcon && navbar) {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    }
};

// Configuración de ScrollReveal
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content,.heading', { origin: 'top' });
ScrollReveal().reveal('.home-img,.skills-container,.portfolio-box,.contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1,.about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p,.about-content', { origin: 'right' });

// Configuración de Typed.js
const typed = new Typed('.multiple-text', {
    strings: ['ITB STUDENT ', 'ASIX LEARNER'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Configuración de Particles.js
document.addEventListener("DOMContentLoaded", function () {
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 207,
                "density": {
                    "enable": true,
                    "value_area": 600
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#ededed"
                },
                "polygon": {
                    "nb_sides": 12
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.6,
                "random": false
            },
            "size": {
                "value": 4,
                "random": true
            },
            "line_linked": {
                "enable": false
            },
            "move": {
                "enable": true,
                "speed": 3,
                "random": true,
                "out_mode": "bounce",
                "attract": {
                    "enable": true,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2
                },
                "repulse": {
                    "distance": 200
                },
                "push": {
                    "particles_nb": 4
                }
            }
        },
        "retina_detect": true
    });
});

// Asegurarse de que el DOM está completamente cargado antes de ejecutar
document.addEventListener("DOMContentLoaded", function () {
    // Configuración básica de Three.js
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    // Establecer el tamaño del renderizador
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Fondo transparente
    
    // Agregar el renderizador al contenedor del GLTF
    const gltfContainer = document.getElementById('gltf-animation');
    if (gltfContainer) {
        gltfContainer.appendChild(renderer.domElement);
    }

    // Iluminación ambiental
    const light = new THREE.AmbientLight(0xffffff, 1); // Luz blanca suave
    scene.add(light);

    // Cargar el modelo GLTF
    const loader = new THREE.GLTFLoader();
    loader.load(
        'pc/pc.gltf', // Ruta correcta al modelo GLTF
        function (gltf) {
            // Añadir el modelo cargado a la escena
            scene.add(gltf.scene);
            console.log('Modelo GLTF cargado correctamente');
        },
        undefined,
        function (error) {
            console.error('Error al cargar el modelo GLTF:', error);
        }
    );

    // Posicionar la cámara
    camera.position.set(0, 1, 5);

    // Ajustar la ventana al redimensionar
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Función de animación
    function animate() {
        requestAnimationFrame(animate);

        // Rotar el modelo para la animación
        if (scene.children.length > 1) { // Asegurarse de que el modelo se haya cargado
            scene.children[1].rotation.y += 0.01; // Rota el modelo alrededor del eje Y
        }

        renderer.render(scene, camera);
    }

    // Iniciar la animación
    animate();
});
