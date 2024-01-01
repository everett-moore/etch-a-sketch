let mouseIsDown = false;
const canvasContainer = document.querySelector("#canvasContainer");

for (let i = 0; i < 256; i++) {
  let canvasUnit = document.createElement("div");
  canvasUnit.classList.add("canvas");
  canvasContainer.appendChild(canvasUnit);

  canvasUnit.addEventListener("mousemove", () => {
    if (mouseIsDown) {
      canvasUnit.style.backgroundColor = "black";
    }
  });
  canvasUnit.addEventListener("mousedown", () => {
    mouseIsDown = true;
  });
  canvasUnit.addEventListener("mouseup", () => {
    mouseIsDown = false;
  });
}
