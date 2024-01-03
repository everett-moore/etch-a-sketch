const COLOR_DEFAULT = "black";
const GRID_DEFAULT = 16;

let penColor = COLOR_DEFAULT;
let gridDimensions = GRID_DEFAULT;
let mouseIsDown = false;

const canvasContainer = document.querySelector("#canvasContainer");
const colorPicker = document.querySelector("#colorPicker");

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
  }
}

function getBrushColor(canvasUnit) {
  penColor = colorPicker.value;
  canvasUnit.style.backgroundColor = penColor;
}

createCanvas();
