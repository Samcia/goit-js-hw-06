/*Licznik składa się z elementu span i przycisków, które, po ich kliknięciu,
 powinny zwiększać i zmniejszać jego wartość o jednostkę.
1.Utwórz zmienną counterValue w której będzie przechowywana aktualna wartość licznika i nadaj jej 
początkową wartość wartość 0.
2.Dodaj click listeners do przycisków, i przy ich pomocy zwiększaj i zmniejszaj wartość licznika.
3.Aktualizuj interfejs (widok HTML) nową wartością zmiennej counterValue po każdej jej zmianie.
*/
const counterValue = document.querySelector("#value");
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
let counter = 0;

incrementBtn.addEventListener("click", () => {
  counter++;
  counterValue.textContent = counter;
});

decrementBtn.addEventListener("click", () => {
  counter--;
  counterValue.textContent = counter;
});
