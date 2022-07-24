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
// Используй массив объектов images для создания элементов <img> вложенных в <li>. Для создания разметки используй шаблонные строки и метод insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы.

// Получаем ссылку на ul из разметки
const listRef = document.querySelector(".gallery");
//С помощью метода мар() перебираем массив и на каждой итерации получаем шаблонную строку со значениями для src и alt

const image = images.map((elem) => `<img src= ${elem.url} alt= ${elem.alt}>`);

//С помощью метода insertAdjacentHTML() добавляем внутрь имеющегося ul полученные строки
listRef.insertAdjacentHTML("afterbegin", image);

//Осталось дело за малым , минимальное оформление с помощью CSS
