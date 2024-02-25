/* // Задача 1.
// Написать функцию getSum , которая будет высчитывать сумму чисел от нуля до
// переданного в нее параметра. Если передадим число 100 то, надо вычислить
// сумму чисел от 0 до 100 (должно получится 5050).
let userValue = Number(
  prompt("Вычислит сумму чисел от 0 до указанного параметра. Введите число")
);
// Option 1
 function getSum(num) {
  let counter = 0;
  for (let i = 1; i <= num; i++) {
    counter += i;
  }
  alert(counter);
}
getSum(userValue);

// alternative
function getSum(num) {
  if (num <= 1) {
    return num;
  }
  return num + getSum(num - 1);
}
console.log(getSum(userValue));

/* Задача 2.
Напишите функцию, она в качестве аргумента принимает в себя сумму кредита,
который хочет получить клиент и верните результат переплаты по кредиту:
процентная ставка в год — 17%,
количество лет — 5.
Мы пишем функцию для хорошего банка, поэтому сумма кредита не
увеличивается. 

let creditSum = Number(prompt("Введите сумму которая Вам необходима"));
const ANNUAL_INTEREST_RATE = 17;
const YEARS_COUNT = 5;
const overpayment = (sum) => ((sum * ANNUAL_INTEREST_RATE) / 100) * YEARS_COUNT;
alert(`Переплата по кредиту будет ${overpayment(creditSum)} рублей`);
 */
/* Задача 3.
Написать функцию trimString , которая в качестве аргумента принимает три
параметра:
строку
значение «от»
значение «по»
После вызова функция должна вернуть переданную строку, обрезанную по
значениям «от» и «по».

const userStr = prompt("Введите слово и мы его укоротим)");
const startNumber = Number(prompt("Введите значение «от»"));
const endNumber = Number(prompt("Введите значение «по»"));
const trimString = (str, start, end) => {
  let newSnr = str.slice(start, end);
  if (start > str.length) {
    alert("Ваше число больше длины строки, введите другое число");
  } else {
    alert(`Ваша новая строка: ${newSnr}`);
  }
};
trimString(userStr, startNumber, endNumber);
 */
/* Задача 4.
Написать функцию getSumNumbers . Она будет принимать число и вычислять
сумму цифр, из которых состоит число. Для 2021 это будет 5. */

/* const getSumNumbers = (num) =>
  num
    .toString()
    .split("")
    .reduce((acc, item) => acc + Number(item), 0);
console.log(getSumNumbers(2023));

 */
/* Задача 5.
Написать функцию getSum , которая принимает два целых числа a и b, они могут
быть положительными или отрицательными, найти сумму всех чисел между
ними, включая их, и вернуть ее. Если два числа равны, верните a или b. */
// Option 1
/* function getSum(a, b) {
  let count = 0;
  if (a < b) {
    for (let i = a; i <= b; i++) {
      count += i;
    }
  } else {
    for (let i = b; i <= a; i++) {
      count += i;
    }
  }
  console.log(count);
}
// alternative
function getSum(a, b) {
  const calculateArithmeticSum = (value1, value2) =>
    new Array(value1 - value2 + 1)
      .fill(value2)
      .reduce((acc, item, index) => acc + item + index, 0);
  return a > b ? calculateArithmeticSum(a, b) : calculateArithmeticSum(b, a);
}
console.log(getSum(3, 1)); // 3 + 2 + 1 = 6

console.log(getSum(1, 0)); // == 1  1 + 0 = 1
console.log(getSum(1, 2)); // == 3  1 + 2 = 3
console.log(getSum(0, 1)); // == 1  0 + 1 = 1
console.log(getSum(1, 1)); // == 1  1 Since both are same
console.log(getSum(-1, 0)); // == -1  -1 + 0 = -1
console.log(getSum(-1, 2)); // = 2  -1 + 0 + 1 + 2 = 2
 */
/* Задача 6.
Напишите функцию fooBoo которая принимает в качестве аргумента три
параметра:
булевое значение
функцию foo которая выводит в консоль свое имя
функцию boo которая выводит в консоль свое имя
Если переданное булевое значение true , то запускаем функцию foo, иначе boo */

/* const foo = () => console.log("foo");
const boo = () => console.log("boo");
const fooBoo = (isBoolean, nameFoo, nameBoo) =>
  isBoolean ? nameFoo() : nameBoo();
fooBoo(true, foo, boo);
fooBoo(false, foo, boo);
 */
// Advanced level
/* Задача 1.
Реализуйте функцию, который принимает 3 целочисленных значения a, b, c.
Функция должна возвращать true , если треугольник можно построить со
сторонами заданной длины, и false в любом другом случае */
function isValidTriangle(a, b, c) {
  const arr = [a, b, c].sort((a, b) => a - b);
  if ((a > 0) & (b > 0) & (c > 0)) {
    return arr[0] + arr[1] > arr[2];
  } else {
    return false;
  }
}
console.log(isValidTriangle(3, 4, 5));
console.log(isValidTriangle(1, 1, 5));
