/*Napisz skrypt, który:

Policzy i wypisze w konsoli liczbę kategorii w ul#categories, czyli elementy li.item.
Dla każdego elementu li.item na liście ul#categories, znajdzie i wypisze w konsoli tekst nagłówka elementu (tag <h2>)
i liczbę elementów w danej kategorii (wszystkich w jej obrębie <li>).*/

const itemCounter = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemCounter.length} `);

/*3.Wykonuje iteracje każdego elementu pseudotablicy.
  4. W konsoli odczytuje element h2 i długość pseudotablicy elementów li*/

itemCounter.forEach((element) => {
  const itemCategory = element.querySelector("h2");
  const itemElements = element.querySelectorAll("li");
  console.log(`Category: ${itemCategory.innerHTML}`);
  console.log(`Elements: ${itemElements.length}`);
});
