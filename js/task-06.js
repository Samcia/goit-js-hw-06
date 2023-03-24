/*1.Napisz skrypt, który przy utracie fokusu na polu input (zdarzenie blur) sprawdza czy wartość
 wprowadzona przez użytkownika spełnia warunek walidacji (ma odpowiednią długość)
 2.Informacja o liczbie symboli, która powinna znajdować się w polu input, zawarta się w jego atrybucie data-length.
3.Jeśli wprowadzono odpowiednią liczbę symboli, to border pola input staje się zielony, a jeśli liczba jest nieprawidłowa - czerwony.
Aby dodać style, używaj klas CSS valid i invalid, które już dodaliśmy do plików źródłowych zadania.
*/

const inputEl = document.getElementById("validation-input");

inputEl.addEventListener("blur", () => {
  if (inputEl.value.length == inputEl.dataset.length) {
    inputEl.className = "valid";
  } else {
    inputEl.className = "invalid";
  }
});
