const COLOR_DEFAULT = "black";
const GRID_DEFAULT = 16;

let penColor = COLOR_DEFAULT;
let gridDimensions = GRID_DEFAULT;
let mouseIsDown = false;
let colorIsToggled = true;
let eraserIsToggled = false;

const canvasContainer = document.querySelector("#canvasContainer");
const colorPicker = document.querySelector("#colorPicker");
const colorButton = document.querySelector("#colorButton");
colorButton.addEventListener("click", () => {
  eraserIsToggled = false;
});
colorButton.textContent = "Color";
const eraser = document.querySelector("#eraser");
eraser.textContent = "Eraser";
eraser.addEventListener("click", () => {
  eraserIsToggled = true;
});
const clear = document.querySelector("#clearButton");
clear.textContent = "Clear";

function createCanvas() {
  for (let i = 0; i < gridDimensions * gridDimensions; i++) {
    let canvasUnit = document.createElement("div");
    canvasUnit.classList.add("canvas");
    canvasContainer.appendChild(canvasUnit);
    canvasContainer.addEventListener("mouseleave", () => {
      mouseIsDown = false;
    });
    canvasUnit.addEventListener("mousemove", () => {
      if (mouseIsDown) {
        getBrushColor(canvasUnit);
      }
    });
    canvasUnit.addEventListener("mousedown", () => {
      getBrushColor(canvasUnit);
    });
    canvasContainer.addEventListener("mousedown", (e) => {
      e.preventDefault();
      mouseIsDown = true;
    });
    canvasContainer.addEventListener("mouseup", () => {
      mouseIsDown = false;
    });

    clear.addEventListener("click", () => {
      clearCanvas(canvasUnit);
    });
  }
}

function getBrushColor(canvasUnit) {
  penColor = colorPicker.value;
  if (colorIsToggled) {
    canvasUnit.style.backgroundColor = penColor;
  }
  if (eraserIsToggled) {
    canvasUnit.style.backgroundColor = "";
  }
}

function clearCanvas(canvasUnit) {
  penColor = "";
  canvasUnit.style.backgroundColor = penColor;
}

createCanvas();
