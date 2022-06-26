const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  //   console.log(document.body);
  let hexColor = "#";
  const firstElementOfHexValue = 0;
  const maxNumberOfElementsInAHex = 6;
  for (let i = firstElementOfHexValue; i < maxNumberOfElementsInAHex; i++) {
    hexColor += hex[getRandomNumber()];
  }
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
