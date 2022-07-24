// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

//применяю патерн объект ссылок
const refs = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};
//Вешаю слушателя событий 'input' на инпут
refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  if (event.target.value === "") {
    refs.output.textContent = "Anonymous";
  } else {
    refs.output.textContent = event.target.value;
  }
}
