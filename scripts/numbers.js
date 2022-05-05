const number = Math.round(Math.random() * 20);

let message = document.querySelector(".message");
let score = document.querySelector(".score");
let highScore = document.querySelector(".high-score");
let displayNumber = document.querySelector(".display-number");
let inputNumber = document.querySelector("#input-box");
const checkButton = document.querySelector(".check-btn");

displayNumber.textContent = number;
message.textContent = "Start Guessing";
highScore.textContent = 0;
score.textContent = 20;

checkButton.addEventListener("click", () => {
  console.log(inputNumber.value);
});
