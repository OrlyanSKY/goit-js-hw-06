function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  bodyRef: document.body,
  currentColorValue: document.querySelector(".color"),
  changeColorBtn: document.querySelector(".change-color"),
};

refs.changeColorBtn.addEventListener("click", onClickChangeColorBtn);

function onClickChangeColorBtn() {
  refs.bodyRef.style.backgroundColor = getRandomHexColor();
  refs.currentColorValue.textContent = getRandomHexColor();
}
