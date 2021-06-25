"use strict";

let arrayMove = [1, 2, 3, 4];

function machineTurn(arrayMove) {
  let ind = Math.ceil(Math.random() * (arrayMove.length - 1));
  return [arrayMove[ind], ind];
}

for (let index = 0; index < 12; index++) {
  if (index % 2 === 0) {
    let [box, position] = machineTurn(arrayMove);
    arrayMove[position] = arrayMove[position] + 4;
    //En este punto habría que recoger la casilla que almacena box y luego añadir la clase para que pinte la ficha del player1
  } else {
    const itemElement = document.querySelectorAll(".js-item");
    const handleClick = (event) => {
      const itemSelected = event.currentTarget;
      itemSelected.classList.add("player2");
    };
    itemElement.forEach((element) => {
      element.addEventListener("click", handleClick);
    });
    //Aquí debería identificar qué item a clickado el jugador para que la máquina descarte y pasarlo a number con parseInt
  }
}
