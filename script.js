import * as THREE from 'three';

// Initialize Three.js scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
    alpha: true // Enable transparency
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(5); // Bring the camera slightly closer

// Particle Geometry and Material
const particleGeometry = new THREE.BufferGeometry();
const particlesCnt = 500; // Reduced the number of particles for performance
const posArray = new Float32Array(particlesCnt * 3);

for (let i = 0; i < particlesCnt * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 10; // Adjusted range to -5 to 5
}

particleGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

const particleMaterial = new THREE.PointsMaterial({
    size: 0.05,
    color: 0x64ffda, // Primary color from your theme
    transparent: true,
    opacity: 0.6 // Adjusted opacity
});

const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
scene.add(particleSystem);

// Animation Loop
function animate() {
    requestAnimationFrame(animate);

    particleSystem.rotation.x += 0.0005;
    particleSystem.rotation.y += 0.001;

    renderer.render(scene, camera);
}

animate();

// Resize Event Listener
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

// Track if scroll indicator has been removed
let scrollIndicatorRemoved = false;

// Scroll Event Handler
document.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    // Parallax for each section with the class "parallax"
    document.querySelectorAll('.parallax').forEach(section => {
        const speed = parseFloat(section.dataset.parallaxSpeed) || 0.5;
        const offset = scrollPosition * speed;
        section.style.transform = `translateY(${offset}px)`;
    });

    // Header Transparency
    if (scrollPosition > 50) {
        document.body.classList.add('scrolling');
    } else {
        document.body.classList.remove('scrolling');
    }


        // Remove scroll indicator after scrolling a bit
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator && !scrollIndicatorRemoved && scrollPosition > 100) {
        scrollIndicator.remove();
        scrollIndicatorRemoved = true;
    }
});

// Navigation Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Project Slider Navigation (same as before)
const projectSlider = document.querySelector('.project-slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

if (prevBtn && nextBtn && projectSlider) {
    prevBtn.addEventListener('click', () => {
        projectSlider.scrollLeft -= 350; // Adjust scroll distance as needed
    });

    nextBtn.addEventListener('click', () => {
        projectSlider.scrollLeft += 350; // Adjust scroll distance as needed
    });
}

function displayRandomQuote() {
    const quoteElement = document.getElementById("quoteDisplay");
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    
    // First fade out
    quoteElement.style.opacity = "0";
    quoteElement.classList.remove("typing-effect");
    
    // Wait for fade out, then start typing effect
    setTimeout(() => {
        // Clear previous content
        quoteElement.textContent = "";
        quoteElement.style.opacity = "1";
        quoteElement.classList.add("typing-effect");
        
        // Set initial width to 0
        quoteElement.style.width = "0";
        
        // Animate to full width
        setTimeout(() => {
            quoteElement.textContent = quote;
            quoteElement.style.width = "100%";
        }, 100);
    }, 500);
}

// Initial display
document.addEventListener('DOMContentLoaded', function() {
    displayRandomQuote();
    
    // Change quotes every 15 seconds (increased from 10 for better reading time)
    setInterval(displayRandomQuote, 15000);
});