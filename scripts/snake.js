let score = document.querySelector("#score");
//board
const grid = document.querySelector("#grid");
const squares = [];

//snake
let snake = [2, 1, 0];
let direction = 1;
let width = 40;
let snakeTimer = null;

//buttons
const startBtn = document.querySelector("#start-btn");
const pauseBtn = document.querySelector("#pause-btn");

//functions
const createSquare = () => {
  for (let i = 0; i < 1600; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    grid.appendChild(square);
    squares.push(square);
  }
};

createSquare();

snake.forEach((index) => {
  squares[index].classList.add("snake");
});

const move = () => {
  if (
    (snake[0] % width === 1 && direction === -1) || //left
    (snake[0] % width === 39 && direction === 1) || //right
    (snake[0] - width < 0 && direction === -width) || //top
    (snake[0] + width >= 1600 && direction === width) || //bottom
    squares[snake[0] + direction].classList.contains("snake") //self
  ) {
    clearInterval(snakeTimer);
    console.log("stopped");
  }

  const removedSquare = snake.pop();
  squares[removedSquare].classList.remove("snake");
  snake.unshift(snake[0] + direction);
  squares[snake[0]].classList.add("snake");
  // console.log(snake[0]);
};

move();

const createFruit = () => {
  let randomNumber = Math.floor(Math.random() * 1600) + 1;
  squares[randomNumber].classList.add("apple");
};

createFruit();

function control(event) {
  if (event.key === "ArrowRight") {
    direction = 1;
  } else if (event.key === "ArrowUp") {
    direction = -width;
  } else if (event.key === "ArrowLeft") {
    direction = -1;
  } else if (event.key === "ArrowDown") {
    direction = +width;
  }
}

//event listeners
document.addEventListener("keydown", control);
startBtn.addEventListener("click", () => {
  snakeTimer = setInterval(move, 500);
});
pauseBtn.addEventListener("click", () => {
  clearInterval(snakeTimer);
});
