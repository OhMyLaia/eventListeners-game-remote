const resultContainer = document.getElementById("result-span");
const questionsContainer = document.getElementById("questions-span");
const startQuizzBtn = document.getElementById("start-quizz-btn");
let currentQuestionIndex = 0;
let positiveCounter = 0;
let negativeCounter = 0;

const questionsArr = [
    { question: "El método addEventListener solo funciona con eventos de mouse.", answer: false },
    { question: "Si el tercer parámetro de addEventListener es true, el evento se captura en la fase de captura en lugar de burbuja.", answer: true },
    { question: "Un mismo elemento puede tener múltiples event listeners para el mismo evento.", answer: true },
    { question: "El método removeEventListener puede eliminar cualquier event listener, incluso si la función es anónima.", answer: false },
    { question: "El objeto event tiene una propiedad target que apunta al elemento que activó el evento.", answer: true },
    { question: "Usar event.stopPropagation() evita que el evento siga propagándose en la fase de burbuja.", answer: true },
    { question: "Los eventos en JavaScript solo pueden usarse con addEventListener y no de otra forma.", answer: false }
];

startQuizzBtn.addEventListener("click", showQuestion);

function showQuestion() {

    let questionIndex = questionsArr[currentQuestionIndex];

    if (currentQuestionIndex < questionsArr.length) {
        questionsContainer.innerHTML = `
        <td><strong>Pregunta ${currentQuestionIndex + 1}</strong>
        <br>
        <br>
        ${questionIndex.question}</td>
        <br>
        <button id="trueBtn">TRUE</button> <button id="falseBtn">FALSE</button>
        `;

        let trueBtn = document.getElementById("trueBtn");
        let falseBtn = document.getElementById("falseBtn");

        trueBtn.addEventListener("click", () => checkAnswer(true, trueBtn, falseBtn));
        falseBtn.addEventListener("click", () => checkAnswer(false, trueBtn, falseBtn));

    } else {

        if (positiveCounter >= negativeCounter) {
            resultContainer.innerHTML = `
            <h2>¡FELICIDADES!</h2>
            <h3>¡Has acabado el juego!</h3>
            <br>
            Sherlock Boolean Holmes 🕵️‍♀️ dice:
            <br>
            ${positiveCounter} ✅ ${negativeCounter} ❌
            <br>
            Como dijo un sabio una vez...
            <br>
            <br>
            <i>"La mediocridad no reconoce nada superior a sí misma, pero el talento reconoce al genio al instante."</i>🏆
            `;

        } else {
            resultContainer.innerHTML = `
            <h2>¡Felicidades!</h2>
            <h3>¡Has acabado el juego!</h3>
            <br>
            Sherlock Boolean Holmes 🕵️‍♀️ dice:
            <br>
            ${positiveCounter} ✅ ${negativeCounter} ❌
            <br>
            Pero como dijo un sabio una vez...
            <br>
            <i>"La educación nunca termina, Watson. Es una serie de lecciones, con la mayor para el final."</i>📚
            `;
        }
    }
}

function checkAnswer(userAnswer, trueBtn, falseBtn) {

    let correctAnswer = questionsArr[currentQuestionIndex].answer;
    const result = document.createElement("p");
    
    if (userAnswer === correctAnswer) {
        result.innerHTML = `✅`;
        positiveCounter++;
    } else {
        result.innerHTML = `❌`;
        negativeCounter++;
    }

    questionsContainer.appendChild(result);
    currentQuestionIndex++;

    trueBtn.disabled = true;
    falseBtn.disabled = true;

    setTimeout(() => {
        showQuestion();
    }, 1000);
}