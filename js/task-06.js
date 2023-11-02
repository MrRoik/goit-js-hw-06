// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur),
// перевіряє його вміст щодо правильної кількості введених символів.

// <input
//      type="text"
//      id="validation-input"
//      data-length="6"
//      placeholder="Please enter 6 symbols"
// />

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим,
// якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid,
// які ми вже додали у вихідні файли завдання.


const textInput = document.querySelector("#validation-input");
textInput.addEventListener("blur", verification);  //  додаємо слухача

function verification(event) {  // створюєм функцію для перевірки
  const inputDataLength = Number(textInput.dataset.length);  // створили змінну, якій присвоюємо число з нашого інпуту
  const inputValueLength = Number(textInput.value.length);  // створили змінну, якій присвоюємо число, що утворюється з довжини введених символів користувачем

  if (inputValueLength === inputDataLength) {
    textInput.classList.add("valid"); 
    textInput.classList.remove("invalid");
  } else {
    textInput.classList.remove("valid");
    textInput.classList.add("invalid");
  }
}