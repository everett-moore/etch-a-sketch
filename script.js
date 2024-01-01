const COLOR_DEFAULT = "black";
const GRID_DEFAULT = 16;

let penColor = COLOR_DEFAULT;
let gridDimensions = GRID_DEFAULT;

let mouseIsDown = false;

const canvasContainer = document.querySelector("#canvasContainer");

for (let i = 0; i < gridDimensions * gridDimensions; i++) {
  let canvasUnit = document.createElement("div");
  canvasUnit.classList.add("canvas");
  canvasContainer.appendChild(canvasUnit);

  canvasUnit.addEventListener("mousemove", () => {
    if (mouseIsDown) {
      canvasUnit.style.backgroundColor = penColor;
    }
  });
  canvasUnit.addEventListener("mousedown", () => {
    mouseIsDown = true;
  });
  canvasUnit.addEventListener("mouseup", () => {
    mouseIsDown = false;
  });
}
