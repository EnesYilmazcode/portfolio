// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Floating navigation bar logic
    const floatingNav = document.querySelector('.floating-nav');
    let lastScrollY = window.scrollY;
    const scrollThreshold = 50; // Show nav after scrolling past 50px from top

    function handleScroll() {
        const currentScrollY = window.scrollY;
        const scrollDirection = currentScrollY - lastScrollY;

        if (currentScrollY < scrollThreshold) {
            // Hide nav if near top of page
            floatingNav.classList.remove('visible');
            floatingNav.classList.add('hidden');
        } else if (scrollDirection < 0) {
            // Show nav when scrolling up
            floatingNav.classList.remove('hidden');
            floatingNav.classList.add('visible');
        } else if (scrollDirection > 0) {
            // Hide nav when scrolling down
            floatingNav.classList.remove('visible');
            floatingNav.classList.add('hidden');
        }

        lastScrollY = currentScrollY;
    }

    window.addEventListener('scroll', handleScroll);

    // Project card hover effects
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.querySelector('.card-overlay').style.opacity = '1';
        });
        card.addEventListener('mouseleave', () => {
            card.querySelector('.card-overlay').style.opacity = '0';
        });
    });

    // Contact form handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            console.log('Form submission:', { name, email, message });
            alert('Thanks for your message! I\'ll get back to you soon.');
            contactForm.reset();
        });
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Reveal animations on scroll
    function revealOnScroll() {
        const sections = document.querySelectorAll('section');
        const windowHeight = window.innerHeight;
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < windowHeight - 100) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    }

    // Initialize section animations
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    // Run reveal function on load and scroll
    window.addEventListener('load', revealOnScroll);
    window.addEventListener('scroll', revealOnScroll);

    // Add email copy functionality
    const emailButton = document.querySelector('button[title="Copy Email"]');
    if (emailButton) {
        emailButton.addEventListener('click', function() {
            const email = "enesyilmaz5157@gmail.com";
            navigator.clipboard.writeText(email).then(() => {
                const originalTitle = this.title;
                this.title = "Copied!";
                
                setTimeout(() => {
                    this.title = originalTitle;
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy email:', err);
            });
        });
    }
});
