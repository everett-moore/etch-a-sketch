const COLOR_DEFAULT = "black";
const GRID_DEFAULT = 16;

let penColor = COLOR_DEFAULT;
let gridDimensions = GRID_DEFAULT;
let mouseIsDown = false;
let colorIsToggled = true;
let eraserIsToggled = false;
let rainbowIsToggled = false;

const canvasContainer = document.querySelector("#canvasContainer");
const colorPicker = document.querySelector("#colorPicker");
const colorButton = document.querySelector("#colorButton");
colorButton.addEventListener("click", () => {
  eraserIsToggled = false;
  rainbowIsToggled = false;
});
colorButton.textContent = "Color";
const eraser = document.querySelector("#eraser");
eraser.textContent = "Eraser";
eraser.addEventListener("click", () => {
  eraserIsToggled = true;
});
const rainbow = document.querySelector("#rainbowButton");
rainbow.textContent = "Rainbow";
rainbow.addEventListener("click", () => {
  rainbowIsToggled = true;
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

    canvasUnit.addEventListener("mouseenter", () => {
      if (mouseIsDown) {
        getBrushColor(canvasUnit);
      }
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
  if (rainbowIsToggled)
    canvasUnit.style.backgroundColor =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function clearCanvas(canvasUnit) {
  penColor = "";
  canvasUnit.style.backgroundColor = penColor;
}

createCanvas();
