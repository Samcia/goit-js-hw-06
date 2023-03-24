const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

/* Napisz skrypt, który dla każdego elementu tablicy ingredients:

1.Utworzy oddzielny element <li>. Obowiązkowo użyj metody document.createElement().
2.Doda nazwę elementu (string z tablicy) jako jego zawartość tekstową.
3.Doda do elementu klasę item.
4.Następnie jedna operacja umieści wszystkie <li> na liście ul#ingredients. */

const ingredientsUl = document.querySelector("#ingredients");
const ingredientsLi = document.createElement("li");

ingredients.forEach((element) => {
  const ingredientsLi = document.createElement("li");
  ingredientsLi.textContent = element;
  ingredientsLi.classList.add("item");
  ingredientsUl.append(ingredientsLi);
});
