const canvasContainer = document.querySelector("#canvasContainer");

for (let i = 0; i < 256; i++) {
  let canvasUnit = document.createElement("div");
  canvasUnit.classList.add("canvas");
  canvasContainer.appendChild(canvasUnit);
}
