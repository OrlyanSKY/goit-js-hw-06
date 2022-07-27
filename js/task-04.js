// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const refs = {
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
  counter: document.querySelector("#value"),
};

let counterValue = 0;

function makeNegativeCounter() {
  counterValue -= 1;
  refs.counter.textContent = counterValue;
}

function makePositiveCounter() {
  counterValue += 1;
  refs.counter.textContent = counterValue;
}

refs.decrementBtn.addEventListener("click", makeNegativeCounter);
refs.incrementBtn.addEventListener("click", makePositiveCounter);
