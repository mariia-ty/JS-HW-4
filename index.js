//Завдання 1: Приведення типів Напиши програму, яка запитує у користувача його вік, а потім перетворює введене значення
//на число та додає 5 років. Виведи результат у консоль.

let age = parseInt(prompt("Enter your age: "));
age += 5; 
console.log(age);


//Завдання 2: Логічні оператори(Логічне «І», «АБО», «НЕ») Напиши програму, яка перевіряє, чи є число парним та більшим за 10.
//Використай логічні оператори «І» (&&), «АБО» (||) та «НЕ» (!).

let num = parseInt(prompt("Enter a number: "));
let check = num % 2; 

if (check == 0 && num > 10) {
  console.log("Your number, ", num, " is even and bigger than 10");
}
else if (check != 0 && num > 10) {
  console.log("Your number, ", num, " is odd and bigger than 10");
}
else if (check == 0 && num <= 10) {
  console.log("Your number, ", num, " is even and smaller than or equal to 10");
}
else {
  console.log("Your number, ", num, " is odd and smaller than of equal to 10");
}

//Завдання 3: Оператори розгалуження(Інструкція if) Створи програму, яка запитує у користувача число.Якщо число більше за 50,
//виведи "Число більше 50", інакше виведи "Число менше або дорівнює 50".

let userNum = parseInt(prompt("Please enter a number: "));

if (num > 50) {
  console.log("Число більше 50");
}
else {
  console.log("Число менше або дорівнює 50");
}

//Завдання 4: Інструкція if...else та else...if Напиши програму, яка запитує у користувача оцінку(від 1 до 5).
//Використай інструкції if, else...if та else для виводу повідомлення:
//- "Дуже погано" для оцінки 1, - "Погано" для 2, - "Задовільно" для 3, - "Добре" для 4, - "Відмінно" для 5.

let grade = parseInt(prompt("Please enter your grade: "));

if (grade == 1) {
  alert("Дуже погано");  
}
else if (grade == 2) {
  alert("Погано");
}
else if (grade == 3) {
  alert("Задовільно");
}
else if (grade == 1) {
  alert("Добре");
}
else alert("Відмінно");


//Завдання 5: Тернарний оператор Напиши програму, яка запитує у користувача ім'я. Якщо ім'я дорівнює "Адмін",
//виведи "Вітаю, Адмін!".В іншому випадку, виведи "Привіт, [ім'я]!".Використай тернарний оператор.

let userName = prompt("Please enter your name: ");

if (userName == "Admin" || userName == "admin") {
  alert("Вітаю, Адмін");
}
else alert(`Привіт, ${userName} !`);