/*Napisz skrypt, który reaguje na zmianę wartości elementu input#font-size-control (zdarzenie input)
 i zmienia styl inline span#text aktualizując właściwość font-size. 
W rezultacie, podczas zmiany wartości suwakiem, ma zmieniać się rozmiar tekstu w elemencie span.
*/

const fontSize = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

spanText.style.fontSize = `${fontSize.value}px`;

fontSize.addEventListener("input", () => {
  spanText.style.fontSize = `${fontSize.value}px`;
});
