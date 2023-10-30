// Напиши скрипт, який:
// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст
// заголовку елемента(тегу < h2 >) і кількість елементів в категорії(усіх < li >, вкладених в нього).

const numbCategories = document.querySelector("#categories");
console.log("Number of categories: ", numbCategories.children.length);

const item = document.querySelectorAll(".item");
[...item].forEach((elem) => {
    console.log("Category: ", elem.firstElementChild.textContent);
    console.log("Elements: ", elem.lastElementChild.childElementCount);
});