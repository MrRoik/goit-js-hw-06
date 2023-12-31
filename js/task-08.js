// Напиши скрипт управління формою логіна.
/*
1) Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
2) Під час відправлення форми сторінка не повинна перезавантажуватися.
3) Якщо у формі є незаповнені поля, виводь alert з попередженням про те,
що всі поля повинні бути заповнені.
4) Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт,
де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості.
Для доступу до елементів форми використовуй властивість elements.
5) Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.
*/

const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);

const profile = {};

function handleSubmit(event) {
    event.preventDefault();
    
    // console.dir(event.currentTarget)

    //const email = event.currentTarget.elements.email;
    //const password = event.currentTarget.elements.password;
    const { email, password } = event.currentTarget.elements;

    if (email.value === "" || password.value === "") {
        alert("Потрібні дані не введено! Будь ласка заповніть усі поля!");
   } else {
     profile.email = email.value;
     profile.password = password.value;

     console.log(profile);
   }
   event.currentTarget.reset();
}