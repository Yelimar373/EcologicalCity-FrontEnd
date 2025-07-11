// public/js/the-game.js

// Asegúrate de que quizData.js se cargue ANTES que the-game.js en tu HTML.
// O, si prefieres mantenerlo aquí, simplemente actualiza esta sección:
// const quizData = [ ... tus preguntas ... ];

class QuizEngine {
    constructor(quizData, quizContainerId, startButtonId) {
        this.quizData = quizData;
        this.quizMainContentWrapper = document.querySelector('.quiz-main-content-wrapper');
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
        const currentQuizCard = this.quizContainer.querySelector('.quiz-card');

        if (currentQuizCard) {
            currentQuizCard.classList.remove('active');
            currentQuizCard.classList.add('exit');
            // Wait for the exit animation to complete before loading new content
            currentQuizCard.addEventListener('transitionend', () => {
                this.renderQuestionContent(categoryClass);
            }, { once: true });
        } else {
            this.renderQuestionContent(categoryClass);
        }
    }
    renderQuestionContent(categoryClass) {
        if (this.scoreDisplay) {
            this.scoreDisplay.textContent = this.score;
        }
        if (this.questionValueDisplay) {
            this.questionValueDisplay.textContent = this.currentQuestion.points || 1; 
        }
        this.quizMainContentWrapper.classList.add(categoryClass);
        const questionHtml = `
            <div class="card quiz-card enter">
                <div class="quiz-question-main-content">
                    <div class="question-column">
                        <p class="quiz-category">Categoría: ${this.currentQuestion.category.replace(/_/g, ' ').toUpperCase()}</p>
                        <p>Puntuación Actual: <strong id="current-score-display">${this.score}</strong></p>
                        <h3 class="quiz-question">${this.currentQuestion.question}</h3>
                        <p>Valor Pregunta: <strong id="question-value-display">${this.currentQuestion.points || 1}</strong></p>
                    </div>
                    <div class="options-column">
                        <div class="quiz-options">
                            ${this.currentQuestion.options.map((option, index) => `
                                <button class="btn btn-third quiz-option-btn" data-option-index="${index}">
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

        // Trigger enter animation
        const newQuizCard = this.quizContainer.querySelector('.quiz-card');
        if (newQuizCard) {
            // A slight delay to ensure the `enter` class is applied before `active`
            setTimeout(() => {
                newQuizCard.classList.add('active');
                newQuizCard.classList.remove('enter');
            }, 50); // Small delay
        }


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
         if (quizQuestionMainContent) {
            quizQuestionMainContent.classList.add('fade-out');
            quizQuestionMainContent.addEventListener('transitionend', () => {
                quizQuestionMainContent.style.display = 'none';
                quizQuestionMainContent.classList.remove('fade-out');
            }, { once: true });
        }
        if (feedbackArea) {
            feedbackArea.innerHTML = `
                <p class="${isCorrect ? 'feedback-correct' : 'feedback-incorrect'} feedback-message">
                    ${isCorrect ? (feedback.correct || '¡Correcto!') : (feedback.incorrect || 'Incorrecto.')}
                </p>
                ${explanationHTML ? `<div class="quiz-explanation">${explanationHTML}</div>` : ''}
                <button id="continue-quiz-btn" class="btn btn-primary">Continuar</button>
            `;
            const feedbackMessage = this.quizContainer.querySelector('.feedback-message');
            const quizExplanation = this.quizContainer.querySelector('.quiz-explanation')
            feedbackArea.style.display = 'block';
            feedbackArea.classList.add('fade-in');
            feedbackMessage.classList.add('fade-in');
            quizExplanation.classList.add('fade-in');
            document.getElementById('continue-quiz-btn').addEventListener('click', () => {
                feedbackArea.classList.remove('fade-in');
                feedbackMessage.classList.remove('fade-in');
                quizExplanation.classList.remove('fade-in');
                feedbackArea.classList.add('fade-out');
                feedbackMessage.classList.add('fade-out');
                quizExplanation.classList.add('fade-out');
                feedbackArea.addEventListener('transitionend', () => {
                    this.moveToNextQuestion(isCorrect);
                    feedbackArea.style.display = 'none';
                    feedbackArea.classList.remove('fade-out');
                }, { once: true });
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