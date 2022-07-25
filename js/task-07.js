// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

const refs = {
  fontControl: document.querySelector("#font-size-control"),
  textEl: document.querySelector("#text"),
};

refs.fontControl.addEventListener("input", (event) => {
  const currentFontSize = event.currentTarget.value;
  refs.textEl.style.fontSize = `${currentFontSize}px`;
});
