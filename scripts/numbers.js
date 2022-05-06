let number = Math.floor(Math.random() * 20) + 1;

let message = document.querySelector(".message");
let score = document.querySelector(".score");
let highScore = document.querySelector(".high-score");
let displayNumber = document.querySelector(".display-number");
let inputNumber = document.querySelector("#input-box");
const displayGameNumber = document.querySelector(".game-number");
const checkButton = document.querySelector(".check-btn");
const playAgainButton = document.querySelector(".play-again-button");
const playAgain = document.querySelector(".play-again");

displayNumber.textContent = "?";
message.textContent = "Start Guessing";
highScore.textContent = 0;
score.textContent = 20;
let gameNumber = 1;
displayGameNumber.textContent = gameNumber;
playAgainButton.disabled = true;

const displayMessage = (newMessage) => (message.textContent = newMessage);
const changeColor = (newColor) => (message.style.color = newColor);

checkButton.addEventListener("click", () => {
  let guessedNumber = +inputNumber.value;
  score.textContent--;
  console.log(number);

  if (+score.textContent === 0) {
    checkButton.disabled = true;
  }

  if (!guessedNumber) {
    displayMessage("Please enter a number");
  } else if (guessedNumber === number) {
    displayMessage("You Win");
    changeColor("green");
    if (+score.textContent > +highScore.textContent) {
      highScore.textContent = score.textContent;
    }
    displayNumber.textContent = number;
    playAgainButton.disabled = false;
    checkButton.disabled = true;
    playAgainButton.style.backgroundColor = "green";
  } else if (guessedNumber < number) {
    displayMessage("You Need To Go Higher");
    changeColor("orange");
  } else if (guessedNumber > number) {
    displayMessage("You need To Go Lower");
    changeColor("red");
  }
});

playAgain.addEventListener("click", () => {
  score.textContent = 20;
  displayMessage("Start Guessing");
  displayNumber.textContent = "?";
  number = Math.floor(Math.random() * 20) + 1;
  inputNumber.value = null;
  checkButton.disabled = false;
  playAgainButton.style.backgroundColor = "white";
  displayGameNumber.textContent = ++gameNumber;
  playAgainButton.disabled = true;
  changeColor("white");
});
