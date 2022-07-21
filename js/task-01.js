// Напиши скрипт который:
// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).

const listEl = document.querySelectorAll("li.item");

console.log(`Number of categories: ${listEl.length}`);

const titleRef = document.querySelectorAll("h2");

const itemsRef = document.querySelectorAll("ul");

//For first category
console.log(`Category: ${titleRef[0].textContent}`);
console.log(`Elements: ${itemsRef[1].children.length}`);

//For second category
console.log(`Category: ${titleRef[1].textContent}`);
console.log(`Elements: ${itemsRef[2].children.length}`);

//For third category
console.log(`Category: ${titleRef[2].textContent}`);
console.log(`Elements: ${itemsRef[3].children.length}`);
