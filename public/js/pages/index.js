import { typingEffect }  from "/js/utils/typing-effect.js";
document.addEventListener('DOMContentLoaded', () => {
    const typedElement = document.getElementById('typed-slogan');
    typingEffect( typedElement, "El Futuro Sostenible En Tus Manos", () => {
        typedElement.classList.toggle('animation');
    });
    const splitContentSection = document.getElementById('split-content-section');
    if (splitContentSection) { // Asegurarse de que la sección existe
        const toggleButtons = splitContentSection.querySelectorAll('.toggle-button');
        const scenarioContents = splitContentSection.querySelectorAll('.scenario-content');

        toggleButtons.forEach(button => {
            button.addEventListener('click', () => {
                const targetScenario = button.dataset.scenario;

                // Remover 'active' de todos los botones y añadirlo al clicado
                toggleButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                // Ocultar todos los contenidos de escenario y mostrar el objetivo
                scenarioContents.forEach(content => {
                    if (content.dataset.scenario === targetScenario) {
                        content.classList.add('active');
                    } else {
                        content.classList.remove('active');
                    }
                });
            });
        });
    }
})