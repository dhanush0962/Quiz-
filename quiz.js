const quizData = [
    {
        question: "What does HTML stand for?",
        a: "Hyper Trainer Marking Language",
        b: "Hyper Text Marketing Language",
        c: "Hyper Text Markup Language",
        d: "Hyper Tool Multi Language",
        correct: "c"
    },
    {
        question: "Which language is used for styling web pages?",
        a: "HTML",
        b: "JQuery",
        c: "CSS",
        d: "XML",
        correct: "c"
    },
    {
        question: "Which is not a JavaScript framework?",
        a: "Python",
        b: "React",
        c: "Angular",
        d: "Vue",
        correct: "a"
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        a: "//",
        b: "<!-- -->",
        c: "#",
        d: "**",
        correct: "a"
    }
];

let currentQuiz = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEls = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answersEls.forEach(answer => answer.checked = false);
}

function getSelected() {
    let answer;

    answersEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            document.querySelector(".quiz-container").innerHTML =
                `<h2>You answered ${score}/${quizData.length} questions correctly</h2>
                 <button onclick="location.reload()">Restart Quiz</button>`;
        }
    }
});