const questions = [
    { question: "Are you dreaming?", answers: ["Yes", "No"] },
    { question: "When was the last time you felt sunlight?", answers: ["Yes", "No"] },
    { question: "Do you remember who you are?", answers: ["Yes", "No"] },
    { question: "Is someone watching you?", answers: ["Yes", "They were"] },
    { question: "Will you continue?", answers: ["Yes"] }
];

let questionIndex = 0;

function startQuiz() {
    displayQuestion();
}

function exitQuiz() {
    document.getElementById('question').innerText = "Maybe next time...";
    document.getElementById('answer1').style.display = "none";
    document.getElementById('answer2').style.display = "none";
}

function displayQuestion() {
    if (questionIndex < questions.length) {
        const currentQuestion = questions[questionIndex];
        document.getElementById('question').innerText = currentQuestion.question;
        document.getElementById('answer1').innerText = currentQuestion.answers[0];
        document.getElementById('answer1').onclick = nextQuestion;

        if (currentQuestion.answers[1]) {
            document.getElementById('answer2').style.display = "inline-block";
            document.getElementById('answer2').innerText = currentQuestion.answers[1];
            document.getElementById('answer2').onclick = nextQuestion;
        } else {
            document.getElementById('answer2').style.display = "none";
        }
    } else {
        document.getElementById('question').innerText = "Quiz complete. Result: [Your Fate Awaits]";
        document.getElementById('answer1').style.display = "none";
        document.getElementById('answer2').style.display = "none";
    }
}

function nextQuestion() {
    questionIndex++;
    displayQuestion();
}
