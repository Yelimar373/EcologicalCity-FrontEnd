import { typingEffect }  from "/js/utils/typing-effect.js";
document.addEventListener('DOMContentLoaded', () => {
    const typedElement = document.getElementById('typed-slogan');
    typingEffect( typedElement, "El Futuro Sostenible En Tus Manos", () => {
        typedElement.classList.toggle('animation');
    });
})