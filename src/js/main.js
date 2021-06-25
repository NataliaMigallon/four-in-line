"use strict";

let arrayMove = [1, 2, 3, 4];

function machineTurn(arrayMove) {
  let ind = Math.ceil(Math.random() * (arrayMove.length - 1));
  return [arrayMove[ind], ind];
}

for (let index = 0; index < 12; index++) {
  if (index % 2 === 0) {
    // let [box, position] = machineTurn(arrayMove);
    // arrayMove[position] = arrayMove[position] + 4;
    const itemElement1 = document.querySelectorAll(".item");
    const renderMachine = () => {
      let [box, position] = machineTurn(arrayMove);
      arrayMove[position] = arrayMove[position] + 4;
      box.classList.add("player1");
    };
    itemElement1.addEventListener(renderMachine());
    // itemElement1.forEach((element) => {
    //   element.renderMachine();
    // });
    //itemElement1.addEventListener(renderMachine);
  } else {
    const itemElement = document.querySelectorAll(".item");

    const handleClick = (event) => {
      const itemSelected = event.currentTarget;
      itemSelected.classList.add("player2");
    };
    itemElement.forEach((element) => {
      element.addEventListener("click", handleClick);
    });
    //let jaja = parseInt(itemElement);
    let squareValue = itemElement.id;
    //let newSquareValue = squareValue.parseInt(itemElement);
    //let positionValue = arrayMove.findIndex(arrayMove === newValue);
  }
}

// for (let index = 1; index < 13; index++) {}
// const playerCurrently = 1; // Jugador actual 1-2 (defecto: 1)
// const playerOne = []; // Celdas seleccionadas por jugador 1
// const playerTwo = []; // Celdas seleccionadas por jugador 2
