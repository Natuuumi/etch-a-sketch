const container = document.querySelector("#container");
const reset = document.querySelector("#reset");
const gridSize = document.querySelector("#gridSize");
let remove = container.getElementsByClassName("gridWidth");
gridSize.addEventListener("click", function (e) {
  while (remove.length > 0) {
    remove[0].remove();
  }

  let height = prompt("Height 0-100");
  if (height >= 100) {
    height = prompt("Height cant be more than 100", 0);
  }
  let width = prompt("Width 0-100", height);
  if (width >= 100) {
    width = prompt("Width cant be more than 100", 0);
  }
  createGrid(height, width);
});

function createGrid(height, width) {
  for (w = 0; w < width; w++) {
    const widthDiv = document.createElement("div");
    widthDiv.setAttribute("class", "gridWidth");
    container.append(widthDiv);

    for (h = 0; h < height; h++) {
      const div = document.createElement("div");
      div.setAttribute("class", "grid");
      div.addEventListener("mouseover", function (e) {
        div.style.backgroundColor = `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`;
      });

      widthDiv.append(div);
      reset.addEventListener("click", function (e) {
        div.style.backgroundColor = "white";
      });
    }
  }
}

function randomRGB() {
  RGB = Math.floor(Math.random() * 255);

  return RGB;
}

createGrid(16, 16);
