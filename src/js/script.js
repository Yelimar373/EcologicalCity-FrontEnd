document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.main-nav ul li a');
    const navOverlay = document.querySelector('.nav-overlay');

    if (navToggle && mainNav && navOverlay) {
        navToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            navToggle.classList.toggle('open');
            navOverlay.classList.toggle('active');
        });
        navOverlay.addEventListener('click', () => {
            mainNav.classList.remove('active');
            navToggle.classList.remove('open');
            navOverlay.classList.remove('active');
        })
    }
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                navToggle.classList.remove('open');
                navOverlay.classList.remove('active')
            }
        });
    });
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
});
