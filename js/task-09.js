/*Napisz skrypt, który zmienia kolor tła elementu <body>
 (poprzez style inline) po kliknięciu na button.change-color i wyświetla wartość koloru w span.color.*/

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeColorBtn = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");

changeColorBtn.addEventListener("click", () => {
  colorSpan.innerHTML = getRandomHexColor();
  document.body.style.backgroundColor = getRandomHexColor();
});
