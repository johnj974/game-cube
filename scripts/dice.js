// action buttons
const rollBtn = document.querySelector("#rollDice");

//functions
let roll = () => {
  let diceRoll = Math.floor(Math.random() * 6) + 1;
  console.log(diceRoll);
};

//events
rollBtn.addEventListener("click", roll);
