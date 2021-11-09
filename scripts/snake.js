let score = document.querySelector("#score");
//board
const grid = document.querySelector("#grid");
const squares = [];

//snake
let snake = [2, 1, 0];

//buttons
const startBtn = document.querySelector("#start-btn");

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
  const removedSquare = snake.pop();
  squares[removedSquare].classList.remove("square");
  console.log(removedSquare);
};

move();
