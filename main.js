/* // Задача 1.
// Создайте переменные и присвойте им значения.
let str = "true";
let bool = false;
let numb = 17;
let notDefined = undefined;
let nullValue = null;
console.log(typeof str);
console.log(typeof bool);
console.log(typeof numb);
console.log(typeof notDefined);
console.log(typeof nullValue);

// Даны две переменные:
// let height = 15
// let width = 20
// С помощью условий выведите в консоль разработчика наибольшее число.
const findMax = (height, width) => (height > width ? height : width);
console.log(findMax(15, 20));

// Задача 3.
// Написать перебор от 1 до 20, где выведутся все числа кратные трём.
// Для вычисления кратности обратите внимание на оператор %;

for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) console.log(i);
}

// Задача 4.
// Нам надо идти на работу, но нужно проверить все ли мы взяли или нет? Нам точно нужны
// ключи документы и ручка, но из еды нам надо яблоко или апельсин. Для решения этой задачи
// нам помогут логические операторы || && .
let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;
let shouldGoToWork;
if (key && documents && pen && (apple || orange)) {
  shouldGoToWork = "Все взяли";
} else {
  shouldGoToWork = "Забыли";
}
console.log(shouldGoToWork);

// Задача 5.
// Запросить у пользователя число:
// 1. Если число делится без остатка на 5 выводим сообщение Fiz
// 2. Если число делится без остатка на 3 выводим сообшение Buz
// 3. Если число делится без остатка и на 3 и на 5 выводим сообшение FizBuz

let userValue = prompt("Введите число");
let newStr = "";

// option 1
if (+userValue % 3 === 0 && +userValue % 5 === 0) {
  console.log("FizBuz");
} else if (+userValue % 3 === 0) {
  console.log("Buz");
} else if (+userValue % 5 === 0) {
  console.log("Fiz");
}

// alternative
if (userValue % 5 === 0) {
  newStr += "Fiz";
}
if (userValue % 3 === 0) {
  newStr += "Buz";
}
console.log(newStr);
 */
// Задача 6.
// Написать программу, которая выполняет следующие операции:
// Запрашивает у пользователя возраст, если он больше 18, то выводит сообщение - Попей
// пивка .
// Если меньше, то выводит сообщение - Пей колу .
// Добавить условие, что если возраст от 16-18, выводим сообщение - Можешь выкурить
// сигаретку, только маме не говори

let userAge = prompt("Склолько Вам лет?");
if (userAge >= 16 && userAge < 18) {
  alert("Можешь выкурить сигаретку, только маме не говори");
}
if (userAge >= 18) {
  alert("Попей пивка");
}
if (userAge < 18) {
  alert("Пей колу");
}
