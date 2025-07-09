// public/js/the-game.js

// Asegúrate de que quizData.js se cargue ANTES que the-game.js en tu HTML.
// O, si prefieres mantenerlo aquí, simplemente actualiza esta sección:
// const quizData = [ ... tus preguntas ... ];

class QuizEngine {
    constructor(quizData, quizContainerId, startButtonId) {
        this.quizData = quizData;
        this.quizContainer = document.getElementById(quizContainerId);
        this.startButton = document.getElementById(startButtonId);
        this.currentQuestion = null;
        this.score = 0;
        this.totalQuestionsAnswered = 0;
        this.quizStartTime = null;
        this.questionStartTime = null;

        this.init();
    }

    init() {
        if (this.startButton) {
            this.startButton.addEventListener('click', () => this.startQuiz());
        }
        // Añadir el listener para la culminación del quiz al navegar al glosario
        this.quizContainer.addEventListener('click', (event) => {
            const target = event.target;
            if (target.tagName === 'A' && target.href.includes('/glosary')) {
                // Prevenir la navegación inmediata para dar tiempo a registrar datos
                event.preventDefault();
                // Llamar al método para finalizar el quiz y luego navegar
                this.endQuiz(true, target.href); // Pasar `true` para indicar que fue una interrupción, y la URL
            }
        });
    }

    startQuiz() {
        this.score = 0;
        this.totalQuestionsAnswered = 0;
        this.quizStartTime = new Date();
        this.questionStartTime = new Date(); // Reset for the first question

        // Ocultar el botón de inicio
        if (this.startButton) {
            this.startButton.style.display = 'none';
        }

        // Mostrar el contenedor del quiz (asegurarse de que sea visible)
        this.quizContainer.style.display = 'block';

        // Seleccionar una pregunta inicial aleatoria
        const startQuestions = this.quizData.filter(q => q.isStartQuestion);
        if (startQuestions.length > 0) {
            const randomIndex = Math.floor(Math.random() * startQuestions.length);
            this.currentQuestion = startQuestions[randomIndex];
            this.loadQuestion();
        } else {
            this.quizContainer.innerHTML = '<p>No hay preguntas de inicio configuradas en quizData.</p>';
        }
    }

    loadQuestion() {
        if (!this.currentQuestion) {
            this.endQuiz(false);
            return;
        }

        this.totalQuestionsAnswered++;
        this.questionStartTime = new Date();

        const categoryClass = `category-${this.currentQuestion.category}`;

        // MODIFICACIÓN CLAVE AQUÍ: Estructura de dos columnas para la tarjeta del quiz
        const questionHtml = `
            <div class="card quiz-card ${categoryClass}">
                <div class="quiz-question-main-content">
                    <div class="question-column">
                        <p class="quiz-category">Categoría: ${this.currentQuestion.category.replace(/_/g, ' ').toUpperCase()}</p>
                        <h3 class="quiz-question">${this.currentQuestion.question}</h3>
                    </div>
                    <div class="options-column">
                        <div class="quiz-options">
                            ${this.currentQuestion.options.map((option, index) => `
                                <button class="btn btn-secondary quiz-option-btn" data-option-index="${index}">
                                    ${option.text}
                                </button>
                            `).join('')}
                        </div>
                    </div>
                </div>
                <div class="quiz-feedback-area " style="display: none;"></div>
            </div>
        `;
        this.quizContainer.innerHTML = questionHtml;

        this.quizContainer.querySelectorAll('.quiz-option-btn').forEach(button => {
            button.addEventListener('click', (event) => this.handleAnswerClick(event, this.currentQuestion));
        });
        this.scrollToQuizCard();
    }
    scrollToQuizCard() {
        const quizCard = this.quizContainer.querySelector('.quiz-card');
        if (quizCard) {
            quizCard.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    }

    handleAnswerClick(event, question) {
        const selectedOptionIndex = parseInt(event.target.dataset.optionIndex);
        const selectedOption = question.options[selectedOptionIndex];
        const isCorrect = selectedOption.isCorrect;

        // Deshabilitar todas las opciones después de la selección
        this.quizContainer.querySelectorAll('.quiz-option-btn').forEach(button => {
            button.disabled = true;
            button.classList.remove('btn-secondary'); // Remover estilo por defecto
            if (parseInt(button.dataset.optionIndex) === selectedOptionIndex) {
                button.classList.add(isCorrect ? 'btn-success' : 'btn-danger');
            } else if (question.options[parseInt(button.dataset.optionIndex)].isCorrect) {
                button.classList.add('btn-success-outline');
            } else {
                button.classList.add('btn-disabled');
            }
        });
        if (isCorrect) {
            this.score += question.points || 1;
        }
        setTimeout(() => {
            this.displayFeedback(isCorrect, question.feedback, question.explanation);
        }, 2500);
    }

    displayFeedback(isCorrect, feedback, explanationHTML = '') {
        const feedbackArea = this.quizContainer.querySelector('.quiz-feedback-area');
        const quizQuestionMainContent = this.quizContainer.querySelector('.quiz-question-main-content');
        if (quizQuestionMainContent) {
            quizQuestionMainContent.style.display = 'none';
        }

        if (feedbackArea) {
            feedbackArea.style.display = 'block';
            feedbackArea.innerHTML = `
                <p class="${isCorrect ? 'feedback-correct' : 'feedback-incorrect'}">
                    ${isCorrect ? (feedback.correct || '¡Correcto!') : (feedback.incorrect || 'Incorrecto.')}
                </p>
                ${explanationHTML ? `<div class="quiz-explanation">${explanationHTML}</div>` : ''}
                <button id="continue-quiz-btn" class="btn btn-primary">Continuar</button>
            `;
            document.getElementById('continue-quiz-btn').addEventListener('click', () => {
                this.moveToNextQuestion(isCorrect);
            });
        }
    }

    moveToNextQuestion(isCorrect) {
        // Antes de cargar la siguiente pregunta, asegúrate de que el área de la pregunta principal sea visible
        const quizQuestionMainContent = this.quizContainer.querySelector('.quiz-question-main-content');
        if (quizQuestionMainContent) {
            quizQuestionMainContent.style.display = 'block'; // Mostrar la pregunta y las opciones para la siguiente
        }
        // Ocultar el área de feedback/explicación antes de cargar la nueva pregunta
        const feedbackArea = this.quizContainer.querySelector('.quiz-feedback-area');
        if (feedbackArea) {
            feedbackArea.style.display = 'none';
        }


        const currentQuestionId = this.currentQuestion.id;
        const currentQuestion = this.quizData.find(q => q.id === currentQuestionId);

        let nextQuestionId = null;

        // Lógica de ramificación: si hay outcomes y la respuesta fue específica, úsalos
        if (currentQuestion.branching && currentQuestion.branching.outcomes) {
            const selectedOption = currentQuestion.options.find(opt => {
                const selectedOptionIndex = Array.from(this.quizContainer.querySelectorAll('.quiz-option-btn'))
                                                  .findIndex(btn => btn.classList.contains('btn-success') || btn.classList.contains('btn-danger'));
                return opt.text === currentQuestion.options[selectedOptionIndex].text; // Asumiendo que selectedOption.text es único para la opción elegida
            });

            if (selectedOption && currentQuestion.branching.outcomes[selectedOption.outcome]) {
                nextQuestionId = currentQuestion.branching.outcomes[selectedOption.outcome];
            } else {
                // Si no hay un outcome específico para la respuesta, usa el 'next' por defecto
                nextQuestionId = currentQuestion.branching.next;
            }
        } else if (currentQuestion.branching && currentQuestion.branching.next) {
            nextQuestionId = currentQuestion.branching.next;
        }

        if (nextQuestionId) {
            this.currentQuestion = this.quizData.find(q => q.id === nextQuestionId);
            this.loadQuestion();
        } else {
            // No hay una próxima pregunta definida, finaliza el quiz
            this.endQuiz(false);
        }
    }


    endQuiz(interrupted = false, redirectUrl = null) {
        const quizEndTime = new Date();
        const totalTimeSeconds = Math.round((quizEndTime - this.quizStartTime) / 1000);

        // Aquí es donde enviarías los datos al backend si existiera
        const quizResult = {
            score: this.score,
            totalQuestionsAnswered: this.totalQuestionsAnswered,
            totalTime: totalTimeSeconds,
            interrupted: interrupted, // Añadimos si fue interrumpido
            // Podrías añadir más detalles como las preguntas respondidas, respuestas dadas, etc.
        };

        console.log("Quiz culminado. Datos:", quizResult); // Para depuración

        let resultMessage = "";
        let resultAnalysis = "";
        const maxPossibleScore = this.quizData.reduce((sum, q) => sum + (q.points || 1), 0); // Esto debería ser más sofisticado, sumando solo las preguntas que se pudieron responder en un flujo completo, pero para este caso es un placeholder.
        const percentage = this.totalQuestionsAnswered > 0 ? (this.score / (this.totalQuestionsAnswered * 2) * 100) : 0; // Asumiendo un promedio de 2 puntos por pregunta para el %

        if (interrupted) {
            resultMessage = "Quiz Pausado.";
            resultAnalysis = "Parece que has decidido explorar más a fondo. Tus respuestas hasta ahora han sido registradas. ¡Vuelve pronto para seguir el desafío!";
        } else if (percentage >= 80) {
            resultMessage = "¡Felicidades! Eres un Experto en sostenibilidad.";
            resultAnalysis = "Tu conocimiento es profundo y tus decisiones muy acertadas. ¡Estás listo para construir la EcologicalCity definitiva!";
        } else if (percentage >= 50) {
            resultMessage = "¡Buen trabajo! Estás en camino de dominar la sostenibilidad.";
            resultAnalysis = "Has demostrado una buena comprensión. Continúa aprendiendo para tomar decisiones aún mejores en EcologicalCity.";
        } else {
            resultMessage = "Interesante intento. ¡A seguir aprendiendo!";
            resultAnalysis = "Hay conceptos clave que puedes reforzar. Cada decisión cuenta en EcologicalCity, ¡no te rindas!";
        }

        this.quizContainer.innerHTML = `
            <div class="card quiz-results-card text-center">
                <h2>${resultMessage}</h2>
                <p>${resultAnalysis}</p>
                ${!interrupted ? `<p>Tu puntuación final: <strong>${this.score} de ${this.totalQuestionsAnswered * 2}</strong> puntos (${percentage.toFixed(0)}%).</p>` : ''}
                <p>Tiempo total: ${totalTimeSeconds} segundos.</p>
                <button id="restart-quiz-btn" class="btn btn-primary mt-3">Volver a Intentar</button>
            </div>
        `;
        document.getElementById('restart-quiz-btn').addEventListener('click', () => this.startQuiz());

        if (interrupted && redirectUrl) {
            // Permitir la navegación después de que los resultados se muestren (o se registren)
            setTimeout(() => {
                window.location.href = redirectUrl;
            }, 100); // Pequeño retraso para asegurar que el logging/display ocurre
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Es CRUCIAL que quizData esté definido ANTES de instanciar QuizEngine.
    // Si quizData viene de un archivo separado (quizData.js),
    // asegúrate de que <script src="js/quizData.js"></script>
    // esté ANTES de <script src="js/the-game.js"></script> en the-game.html
    new QuizEngine(quizData, 'quiz-container', 'start-quiz-btn');
});