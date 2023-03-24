/*Napisz skrypt, który:

Policzy i wypisze w konsoli liczbę kategorii w ul#categories, czyli elementy li.item.
Dla każdego elementu li.item na liście ul#categories, znajdzie i wypisze w konsoli tekst nagłówka elementu (tag <h2>)
i liczbę elementów w danej kategorii (wszystkich w jej obrębie <li>).*/

// Metoda I

/*1. Muszę dostać się do elementu li z klasą .item 
  2. W konsoli policzyć i wypisać liczbę elementów z tą klasą. */
const itemLi = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemLi.length} `);

/*3.Wykonuję iteracje każdego elementu.
  4. W konsoli pokazuje dla Category pierwsze dziecko, dla Elements zliczam ilość potomków drugiego dziecka.*/

for (const element of itemLi) {
  console.log(`Category: ${element.children[0].innerHTML}`);
  console.log(`Elements: ${element.children[1].children.length}`);
}

// Metoda II

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
