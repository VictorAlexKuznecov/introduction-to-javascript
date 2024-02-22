// Задача 1.
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
