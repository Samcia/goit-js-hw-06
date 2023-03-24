/*1.Napisz skrypt, który przy wpisywaniu tekstu w polu input input#name-input (zdarzenie input) wstawia jego aktualną 
wartość do span#name-output. 
2.Jeśli pole input jest puste, w spanie powinien wyświetlić się tekst "Anonymous".*/

const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
  if (event.currentTarget.value !== "") {
    nameOutput.textContent = event.currentTarget.value;
  } else {
    nameOutput.textContent = "Anonymous";
  }
});
