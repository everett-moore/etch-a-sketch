let penColor = "black";
let canvasSize = 500;
let mouseIsDown = false;
let colorIsToggled = true;
let eraserIsToggled = false;
let rainbowIsToggled = false;

const canvasContainer = document.querySelector("#canvasContainer");
canvasContainer.addEventListener("mousedown", (e) => {
  e.preventDefault();
  mouseIsDown = true;
});
canvasContainer.addEventListener("mouseleave", () => {
  mouseIsDown = false;
});
canvasContainer.addEventListener("mouseup", () => {
  mouseIsDown = false;
});
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
  rainbowIsToggled = false;
});
const rainbow = document.querySelector("#rainbowButton");
rainbow.textContent = "Rainbow";
rainbow.addEventListener("click", () => {
  rainbowIsToggled = true;
});
const clear = document.querySelector("#clearButton");
clear.textContent = "Clear";

const gridSlider = document.querySelector("#gridSlider");
gridSlider.addEventListener("mouseup", () => {
  canvasContainer
    .querySelectorAll("*")
    .forEach((canvasUnit) => canvasUnit.remove());
  createCanvas(gridSlider.value);
});

const dimensionNum = document.querySelector("#dimensionNum");
dimensionNum.textContent = `${gridSlider.value} x ${gridSlider.value} `;
gridSlider.addEventListener("input", () => {
  dimensionNum.textContent = `${gridSlider.value} x ${gridSlider.value} `;
});

function createCanvas(gridDimensions) {
  for (let i = 0; i < gridDimensions * gridDimensions; i++) {
    let canvasUnit = document.createElement("div");
    canvasUnit.style.width = canvasSize / gridDimensions + "px";
    canvasUnit.style.height = canvasSize / gridDimensions + "px";
    canvasContainer.appendChild(canvasUnit);

    canvasUnit.addEventListener("mouseenter", () => {
      if (mouseIsDown) {
        getBrushColor(canvasUnit);
      }
    });
    canvasUnit.addEventListener("mousedown", () => {
      getBrushColor(canvasUnit);
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

createCanvas(gridSlider.value);
