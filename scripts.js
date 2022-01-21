let gridSize = document.querySelector("input");
const gridContainer = document.querySelector(".grid-container");
const clear = document.querySelector(".clear");
const chooseSize = document.querySelector(".choose-size");
const apply = document.querySelector(".apply");
const display = document.querySelector(".display");

const containerSize = 600;
let size = gridSize.value;

display.textContent = `${size}px x ${size}px`;

function makeGrid(size) {
  for (let c = 1; c <= size * size; c++) {
    let cell = document.createElement("div");
    gridContainer.appendChild(cell).className = "grid-item";

    cell.style.setProperty("min-width", `${containerSize / size}px`);
    cell.style.setProperty("min-height", `${containerSize / size}px`);
  }
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((gridItem) => {
    gridItem.addEventListener("mouseover", () => {
      gridItem.classList.add("active");
    });
  });
}

function reset() {
  const gridItems = document.querySelectorAll(".grid-item");

  gridItems.forEach((gridItem) => {
    gridItem.classList.remove("active");
  });
}
function change() {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.lastChild);
  }
  makeGrid(size);
}

clear.addEventListener("click", reset);
apply.addEventListener("click", change);

makeGrid(size);

gridSize.addEventListener("input", () => {
  size = gridSize.value;
  display.textContent = `${size}px x ${size}px`;
});
