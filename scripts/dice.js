//
const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
const diceDisplay = document.querySelector("#dice-display");
let playerOneScore = document.querySelector(".player-one-score");
let player1 = true;
let playerOneTotal = 0;

// action buttons
const rollBtn = document.querySelector("#roll-dice");

//functions
let roll = () => {
  let diceRoll = Math.floor(Math.random() * 6) + 1;
  playerOneTotal += diceRoll;
  playerOneScore.textContent = playerOneTotal;
  diceDisplay.innerHTML = diceFaces[diceRoll - 1];
};

//events
rollBtn.addEventListener("click", roll);
