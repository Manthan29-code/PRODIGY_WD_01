// animations.js - Animation Controller

window.animationsInit = function() {
    // Text fade-in
    const fadeEls = document.querySelectorAll('.text-fade-in');
    const slideEls = document.querySelectorAll('.slide-up');

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    fadeEls.forEach(el => observer.observe(el));
    slideEls.forEach(el => observer.observe(el));

    // Typewriter effect for hero headline
    const typewriter = (el) => {
        const text = el.textContent;
        el.textContent = '';
        let i = 0;
        function type() {
            if (i < text.length) {
                el.textContent += text.charAt(i);
                i++;
                setTimeout(type, 60);
            }
        }
        type();
    };
    const heroHeadline = document.querySelector('.hero-headline');
    if (heroHeadline) typewriter(heroHeadline);
}; 