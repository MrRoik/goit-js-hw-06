/*
Напиши скрипт, який змінює кольори фону елемента <body>
через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

*/
const clickButton = document.querySelector(".change-color")
const spanColor = document.querySelector(".color")
const bodyColor = document.body;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

/*function getRandomHexButColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}*/

const changeColor = () => {
  spanColor.textContent = getRandomHexColor();
  bodyColor.style.backgroundColor = spanColor.textContent;
  //clickButton.style.backgroundColor = getRandomHexButColor();
}

clickButton.addEventListener("click", changeColor);