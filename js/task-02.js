//Напиши скрипт, который для каждого элемента массива ingredients:
// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

//Получил ссылку на пустой Ul в разметке
const listRef = document.querySelector("#ingredients");

//Применил метод Мар() к массиву и на каждой итерации создал элемент <li>, добавил ему класс item и присвоил текстовое значение
const itemsEl = ingredients.map((elem) => {
  const itemRef = document.createElement("li");
  itemRef.classList.add("item");
  itemRef.textContent = elem;
  return itemRef;
});
// Добавил в пустой ul в нашей разметке, использовал spread чтобы распылить полученный массив на независимые аргументы
listRef.append(...itemsEl);
