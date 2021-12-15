const container = document.querySelector("#container");
const reset = document.querySelector("#reset");

reset.addEventListener("click", function (e) {
  div.style.backgroundColor = "white";
});

for (i = 0; i < 256; i++) {
  const div = document.createElement("div");
  div.setAttribute("class", "grid");
  div.addEventListener("mouseover", function (e) {
    div.style.backgroundColor = "black";
  });

  container.append(div);
  reset.addEventListener("click", function (e) {
    div.style.backgroundColor = "white";
  });
}
