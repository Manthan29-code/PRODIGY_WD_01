// navigation.js - Navigation Logic

window.navigationInit = function() {
    const nav = document.querySelector('nav');
    const menu = document.querySelector('.menu');
    const hamburger = document.querySelector('.hamburger');
    const menuLinks = document.querySelectorAll('.menu a');

    // Scroll detection for nav background
    window.addEventListener('scroll', () => {
        if (window.scrollY > 60) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    if (hamburger && menu) {
        hamburger.addEventListener('click', () => {
            menu.classList.toggle('open');
        });
    }

    // Smooth scroll to sections
    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
                menu.classList.remove('open'); // close mobile menu
            }
        });
    });

    // Active menu item highlighting
    window.addEventListener('scroll', () => {
        let fromTop = window.scrollY + 80;
        menuLinks.forEach(link => {
            const section = document.querySelector(link.hash);
            if (section && section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    });
}; 