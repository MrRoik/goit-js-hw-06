//Завдання 5

//Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input),
//підставляє його поточне значення в span#name - output.Якщо інпут порожній,
//у спані повинен відображатися рядок "Anonymous".

//  <input type="text" id="name-input" placeholder="Please enter your name" />
//  <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const inputName = document.getElementById("name-input");
const outputName = document.getElementById("name-output");

const handleClickName = (eve) => {
    if (eve.currentTarget.value !== "") {
    outputName.innerHTML = eve.currentTarget.value;
    return;
  }
    outputName.innerHTML = "Anonymous";
}

inputName.addEventListener("input", handleClickName);
