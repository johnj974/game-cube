const dealBtn = document.querySelector("#deal-btn");
const cardDisplay = document.querySelector("#card-display");
let playerTotal = document.querySelector("#total");
let card = document.querySelector(".card");
let value = document.querySelector(".value");
let suit = document.querySelector(".suit");
let totalCards = null;
let acesHigh = false;
let total = 0;

dealBtn.addEventListener("click", () => {
  cardDisplay.textContent = dealCard();
});

const dealCard = () => {
  let suits = ["♥", "♦", "♠", "♣"];
  let randomSuit = suits[Math.floor(Math.random() * 4)];
  if (randomSuit === "♥" || randomSuit === "♦") {
    card.style.border = "3px solid red";
    suit.style.color = "red";
  } else {
    card.style.border = "3px solid black";
    suit.style.color = "black";
  }
  let randomCard = Math.floor(Math.random() * 13) + 1;
  value.textContent = randomCard;
  suit.textContent = randomSuit;
  total += randomCard;
  playerTotal.textContent = total;
};
