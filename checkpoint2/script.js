const btn = document.getElementById("btn");
const box = document.getElementById("box");

function getRandomColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor.padStart(6, "0")}`;
}

btn.addEventListener("click", function () {
  box.style.backgroundColor = getRandomColor();
});
