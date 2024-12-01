let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

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

    header.classList.toggle('sticky',window.scrollY>100);
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
ScrollReveal().reveal('.home-img,.skills-container,.portfolio-box,.contact form',{origin:'bottom'});
ScrollReveal().reveal('.home-content h1,.about-img',{origin:'left'});
ScrollReveal().reveal('.home-content p,.about-content',{origin:'right'});

const typed = new Typed('.multiple-text',{
    strings:['ITB STUDENT ','ASIX LEARNER'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

document.addEventListener("DOMContentLoaded", function() {
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
                "value": 0.5852454022159158,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 4.008530152163807,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 31.67101127975246,
                    "size_min": 4.060386061506725,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": false,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 3.206824121731046,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "bounce",
                "bounce": false,
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
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
});

// Asegurarse de que el DOM está completamente cargado antes de ejecutar
document.addEventListener("DOMContentLoaded", () => {
    try {
        // Verificar que el contenedor para el GLTF existe
        const gltfContainer = document.getElementById('gltf-animation');
        if (!gltfContainer) {
            console.error("El contenedor 'gltf-animation' no existe en el DOM.");
            return;
        }

        // Configuración básica de Three.js
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

        // Estilo y tamaño del renderizador
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0); // Fondo transparente
        gltfContainer.appendChild(renderer.domElement);

        // Iluminación
        const light = new THREE.AmbientLight(0xffffff, 1);
        scene.add(light);

        // Cargar el modelo GLTF
        const loader = new THREE.GLTFLoader();
        loader.load(
            'pc/pc.gltf', // Ruta correcta al modelo GLTF
            (gltf) => {
                scene.add(gltf.scene);
                console.log('Modelo GLTF cargado correctamente');
            },
            undefined,
            (error) => {
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

        // Animar la escena
        function animate() {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        }

        animate();
    } catch (error) {
        console.error("Ocurrió un error al inicializar Three.js:", error);
    }
});
