const colors = [
  "red",
  "green",
  "blue",
  "white",
  "grey",
  "black",
  "pink",
  "yellow",
  "orange",
  "purple",
];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
let counter = 0;
btn.addEventListener("click", function () {
  if (counter >= colors.length) {
    counter = 0;
  }
  console.log(counter);
  document.body.style.backgroundColor = colors[counter];
  color.textContent = colors[counter];
  counter++;
});
