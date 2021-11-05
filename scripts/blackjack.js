// Buttons
const dealBtn = document.querySelector("#deal-btn");
const resetBtn = document.querySelector("#reset-btn");
const holdBtn = document.querySelector("#hold-btn");
const dealerBtn = document.querySelector("#dealer-btn");
let message = document.querySelector("#message");
let acesHigh = false;
// ---------------------------------------------------------------
// Player
const cardDisplay = document.querySelector("#card-display");
let playerTotal = document.querySelector("#total");
let card = document.querySelector(".card");
let value = document.querySelector(".value");
let suit = document.querySelector(".suit");
let totalCards = null;
let total = 0;
// Dealer
const dealerCardDisplay = document.querySelector("#dealer-card-display");
let dealerTotal = document.querySelector("#dealer-total");
let dealerCard = document.querySelector(".dealer-card");
let dealerValue = document.querySelector(".dealer-value");
let dealerSuit = document.querySelector(".dealer-suit");
let dealerTotals = 0;
// ---------------------------------------------------------------
// Cards
const drawCard = () => {
  let dealtCard = Math.floor(Math.random() * 13) + 1;
  if (dealtCard > 10) {
    dealtCard = 10;
  }
  return dealtCard;
};
//----------------------------------------------------------------
// Player functions
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

  let randomCard = drawCard();
  value.textContent = randomCard;
  suit.textContent = randomSuit;
  total += randomCard;
  playerTotal.textContent = total;
  if (total > 21) {
    message.textContent = "You Lose";
  } else if (total === 21) {
    message.textContent = "BlackJack";
  }
};

const hold = () => {
  dealBtn.style.display = "none";
};
// ---------------------------------------------------------------
// Dealer Functions
const houseCard = () => {
  let suits = ["♥", "♦", "♠", "♣"];
  let randomSuit = suits[Math.floor(Math.random() * 4)];
  if (randomSuit === "♥" || randomSuit === "♦") {
    dealerCard.style.border = "3px solid red";
    dealerSuit.style.color = "red";
  } else {
    dealerCard.style.border = "3px solid black";
    dealerSuit.style.color = "black";
  }
  let randomCard = drawCard();
  dealerValue.textContent = randomCard;
  dealerSuit.textContent = randomSuit;
  dealerTotals += randomCard;
  dealerTotal.textContent = dealerTotals;
  if (dealerTotals > 21) {
    message.textContent = "Dealer Loses";
  }
};

const dealerCards = () => {
  houseCard();
};

const reset = () => {
  total = null;
  dealerTotals = null;
  value.textContent = null;
  dealerValue.textContent = null;
  suit.textContent = null;
  dealerSuit.textContent = null;
  card.style.border = "3px solid green";
  dealerCard.style.border = "3px solid green";
  playerTotal.textContent = total;
  dealerTotal.textContent = dealerTotals;
  dealBtn.style.display = "inline-block";
  message.textContent = null;
};

// ---------------------------------------------------------------

dealBtn.addEventListener("click", dealCard);

resetBtn.addEventListener("click", reset);

holdBtn.addEventListener("click", hold);

dealerBtn.addEventListener("click", dealerCards);
