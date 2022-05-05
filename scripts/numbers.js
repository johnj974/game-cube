let number = Math.floor(Math.random() * 20) + 1;

let message = document.querySelector(".message");
let score = document.querySelector(".score");
let highScore = document.querySelector(".high-score");
let displayNumber = document.querySelector(".display-number");
let inputNumber = document.querySelector("#input-box");
const checkButton = document.querySelector(".check-btn");
const playAgain = document.querySelector(".play-again");

displayNumber.textContent = "?";
message.textContent = "Start Guessing";
highScore.textContent = 0;
score.textContent = 20;

checkButton.addEventListener("click", () => {
  let guessedNumber = +inputNumber.value;
  score.textContent--;
  console.log(number);

  if (+score.textContent === 0) {
    checkButton.disabled = true;
  }

  if (!guessedNumber) {
    message.textContent = "Please enter a number";
  } else if (guessedNumber === number) {
    message.textContent = "You Win";
    if (+score.textContent > +highScore.textContent) {
      highScore.textContent = score.textContent;
    }
    displayNumber.textContent = number;
    checkButton.disabled = true;
  } else if (guessedNumber < number) {
    message.textContent = "You Need To Go Higher";
  } else if (guessedNumber > number) {
    message.textContent = "You need To Go Lower";
  }
});

playAgain.addEventListener("click", () => {
  score.textContent = 20;
  message.textContent = "Start Guessing";
  displayNumber.textContent = "?";
  number = Math.floor(Math.random() * 20) + 1;
  inputNumber.value = null;
  checkButton.disabled = false;
});
