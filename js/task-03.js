const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

/*Napisz skrypt do tworzenia galerii obrazów według tablicy danych. W HTML znajduje się lista ul.gallery.

1.Użyj tablicy obiektów images w celu utworzenia elementów <img> umieszczonych w <li>. 
Aby utworzyć znacznik użyj template strings i metody insertAdjacentHTML().
2.Wszystkie elementy galerii powinny być dodawane do DOM podczas jednej operacji.
3. Ulepsz galerię używając flexboxów lub gridów poprzez klasy CSS. */

const gallery = document.querySelector(".gallery");

const markup = images.map(
  (image) =>
    `<li><img width="400" height="300" src="${image.url}" alt="${image.alt}"/></li>`
);

gallery.insertAdjacentHTML("beforeend", markup);
