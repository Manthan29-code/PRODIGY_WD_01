// scroll-effects.js - Scroll Interactions

window.scrollEffectsInit = function() {
    // Parallax effect for hero background
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (header) {
            header.style.backgroundPosition = `center ${window.scrollY * 0.3}px`;
        }
    });
    // Progress bar (optional, can be added to DOM if needed)
    // Fade-in/out handled by animations.js
}; 