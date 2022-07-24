// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

// Получаю ссылки на необходимые элементы
const refs = {
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
  counter: document.querySelector("#value"),
};
//Объявляю переменную с текущим значением счетчика
let counterValue = 0;
//Создаю функцию которая будет отнимать единицу от текущего значения счетчика и с помощью textContent динамически изменять значение счетчика
function makeNegativeCounter() {
  counterValue -= 1;
  refs.counter.textContent = counterValue;
}
//Такая же функция для добавления единицы к значению счетчика
function makePositiveCounter() {
  counterValue += 1;
  refs.counter.textContent = counterValue;
}
//Ну и собственно вещаю событие клик на кнопки , ссылки на которые были получены выше и колбэком передаю функции
refs.decrementBtn.addEventListener("click", makeNegativeCounter);
refs.incrementBtn.addEventListener("click", makePositiveCounter);

//Done!)

//P.S.
// проблемой этого кода является глобальная область видимости переменной counterValue.
//Более правильно тут реализовать замыкание.И я это сделаю после сдачи этой дз)
