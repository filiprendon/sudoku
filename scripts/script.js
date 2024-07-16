const board = document.getElementById("board");
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numberDiv = document.querySelector(".numbers");
let numberValue = "";


function createSudokuBoard() {
  for (let i = 0; i < 81; i++) {
    const cell = document.createElement("span");
    cell.classList.add("cell");
    board.appendChild(cell);
  }
}

createSudokuBoard();

let cells = document.querySelectorAll(".cell");

cells.forEach((cell, i) => {
  cell.addEventListener("click", () => {
    let lastCell = document.querySelector(".selected-cell");
    if (lastCell) {
      lastCell.classList.remove("selected-cell");
    }
    cell.classList.add("selected-cell");
    console.log(i);
    cell.innerHTML = numberValue;
  });
});

numbers.forEach((n) => {
  const number = document.createElement("button");
  number.classList.add("number");
  number.textContent = n;
  number.style.color = "#325EB5";
  number.style.fontSize = "1.5rem";
  numberDiv.appendChild(number);
});

  let numSelected = document.querySelectorAll(".number");
  numSelected.forEach((num) => {
    num.addEventListener("click", () => {
      console.log(num.textContent);
      let selected = document.querySelector(".selected-num");
      if (selected) {
        selected.classList.remove("selected-num");
      }
      num.classList.add("selected-num");
      numberValue = num.textContent;
    });
  });


