const dealBtn = document.querySelector("#deal-btn");
const cardDisplay = document.querySelector("#card-display");
const total = document.querySelector("#total");
let value = document.querySelector(".value");
let suit = document.querySelector(".suit");
let totalCards = null;
let acesHigh = false;

dealBtn.addEventListener("click", () => {
  cardDisplay.textContent = dealCard();
});

const dealCard = () => {
  let suits = ["Hearts", "Diamonds", "Spades", "Clubs"];
  let randomSuit = suits[Math.floor(Math.random() * 4)];
  let randomCard = Math.floor(Math.random() * 13) + 1;
  value.textContent = randomCard;
  suit.textContent = randomSuit;
  //let returnText = `${value} ${suit}`;
  // let returnText = `${randomCard} ${randomSuit}`;
  return returnText;
};
