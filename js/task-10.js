const createEl = document.querySelector("[data-create]");
const inputEl = document.querySelector("#controls input");
const boxesEl = document.getElementById("boxes");

let counter = 0;

createEl.addEventListener("click", () => {
  console.log("creating boxes...");

  boxesEl.append(...createBoxes(inputEl.value));
});

function createBoxes(amount) {
  const boxes = [];

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");

    box.classList.add("box");
    box.style.height = `${30 + counter * 10}px`;
    box.style.width = `${30 + counter * 10}px`;

    counter++;
    boxes.push(box);
  }

  return boxes;
}
