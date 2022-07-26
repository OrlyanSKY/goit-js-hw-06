function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  controls: document.querySelector("#controls"),
  inputField: document.querySelector("input"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};

refs.createBtn.addEventListener("click", createBoxes);
refs.destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  amount = refs.inputField.value;
  let divSize = 30;

  for (let i = 0; i < amount; i++) {
    const innerDiv = document.createElement("div");

    innerDiv.style.width = `${divSize}px`;
    innerDiv.style.height = `${divSize}px`;
    innerDiv.style.backgroundColor = getRandomHexColor();

    divSize += 10;

    boxes.append(innerDiv);
  }
}

function destroyBoxes() {
  refs.boxes.innerHTML = "";
}
