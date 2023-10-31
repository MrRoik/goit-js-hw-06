// Завдання 4

// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати
// його значення на одиницю.

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника
// та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.


let counterValue = 0;
const valueLink = document.getElementById("value");

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const handleClickDecrement = (event) => {
  counterValue -= 1;
  valueLink.textContent = counterValue;
};
decrementBtn.addEventListener("click", handleClickDecrement);

const incrementBtn = document.querySelector('button[data-action="increment"]');
const handleClickIncrement = (event) => {
  counterValue += 1;
  valueLink.textContent = counterValue;
};
incrementBtn.addEventListener("click", handleClickIncrement);


