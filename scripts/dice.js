//
const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
const diceDisplay = document.querySelector("#dice-display");
const diceDisplayTwo = document.querySelector("#dice-display-two");
let playerOneScore = document.querySelector(".player-one-score");
let playerTwoScore = document.querySelector(".player-two-score");
let player1 = true;
let playerOneTotal = 0;
let playerTwoTotal = 0;

// action buttons
const rollBtn = document.querySelector("#roll-dice");
const resetBtn = document.querySelector("#reset-btn");
const passBtn = document.querySelector("#pass-btn");

//functions
const roll = () => {
  let diceRoll = Math.floor(Math.random() * 6) + 1;
  if (diceRoll === 6) {
    player1 = !player1;
  }
  if (player1) {
    playerOneTotal += diceRoll;
    playerOneScore.textContent = playerOneTotal;
    diceDisplay.innerHTML = diceFaces[diceRoll - 1];
    diceDisplayTwo.innerHTML = null;
  } else {
    playerTwoTotal += diceRoll;
    playerTwoScore.textContent = playerTwoTotal;
    diceDisplayTwo.innerHTML = diceFaces[diceRoll - 1];
    diceDisplay.innerHTML = null;
  }
};

const reset = () => {
  player1 = true;
  playerOneScore.textContent = 0;
  playerTwoScore.textContent = 0;
  playerOneTotal = 0;
  playerTwoTotal = 0;
  diceDisplay.innerHTML = null;
  diceDisplayTwo.innerHTML = null;
};

const pass = () => {
  player1 = !player1;
};

//events
rollBtn.addEventListener("click", roll);
resetBtn.addEventListener("click", reset);
passBtn.addEventListener("click", pass);
