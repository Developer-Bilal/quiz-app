const questions = [
  {
    question: "What is heat?",
    options: ["Form of energy", "Matter", "Sound", "Light"],
    correctAnswer: "Form of energy",
  },
  {
    question: "Which carries weight and occupy space?",
    options: ["Energy", "Matter", "Sound", "Light"],
    correctAnswer: "Matter",
  },
  {
    question: "What is the powerhouse of the cell?",
    options: ["Nucleus", "Ribosome", "Mitochondria", "Endoplasmic reticulum"],
    correctAnswer: "Mitochondria",
  },
];

const questionElement = document.getElementById("question");
const options = document.querySelectorAll(".option");
const optionsContainer = document.querySelector(".options-container");
const statusElement = document.querySelector(".status");
const playAgainButton = document.getElementById("play-again");
const scoreElement = document.getElementById("score");

let currentQuestionIndex = 0;
let score = 0;

displayQuestion();

function displayQuestion() {
  statusElement.innerHTML = "";
  questionElement.innerText = questions[currentQuestionIndex].question;

  options.forEach((option, index) => {
    option.innerText = questions[currentQuestionIndex].options[index];
    // option.addEventListener("click", () => checkAnswer(option));
    option.onclick = () => checkAnswer(option);
  });
}

async function checkAnswer(optionClicked) {
  if (
    optionClicked.innerText === questions[currentQuestionIndex].correctAnswer
  ) {
    questionElement.innerText = "Correct";
    score = score + 100;
    scoreElement.innerText = "You Earned: $" + score;
    await wait(1000);
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
      displayQuestion();
    } else {
      finishQuiz();
    }
  } else {
    statusElement.innerHTML = "Wrong Answer";
  }
}

function finishQuiz() {
  questionElement.innerText = "Congractulations!";
  optionsContainer.style.display = "none";
  playAgainButton.style.display = "block";
  statusElement.innerHTML = "";

  playAgainButton.onclick = () => restartQuiz();
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;

  scoreElement.innerText = "You Earned: $" + score;
  optionsContainer.style.display = "flex";
  playAgainButton.style.display = "none";

  displayQuestion();
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
