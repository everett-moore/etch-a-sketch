const COLOR_DEFAULT = "black";
const GRID_DEFAULT = 16;

let penColor = COLOR_DEFAULT;
let gridDimensions = GRID_DEFAULT;

let mouseIsDown = false;

const canvasContainer = document.querySelector("#canvasContainer");
const colorPicker = document.querySelector("#colorPicker");

for (let i = 0; i < gridDimensions * gridDimensions; i++) {
  let canvasUnit = document.createElement("div");
  canvasUnit.classList.add("canvas");
  canvasUnit.setAttribute("draggable", "false");
  canvasContainer.appendChild(canvasUnit);
  canvasContainer.addEventListener("mouseleave", () => {
    mouseIsDown = false;
  });
  canvasUnit.addEventListener("mousemove", () => {
    if (mouseIsDown) {
      penColor = colorPicker.value;
      canvasUnit.style.backgroundColor = penColor;
    }
  });
  canvasUnit.addEventListener("mousedown", () => {
    penColor = colorPicker.value;
    canvasUnit.style.backgroundColor = penColor;
  });
  canvasContainer.addEventListener("mousedown", (e) => {
    e.preventDefault();
    mouseIsDown = true;
  });
  canvasContainer.addEventListener("mouseup", () => {
    mouseIsDown = false;
  });
}
