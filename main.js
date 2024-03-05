/* Задача 1.
Выведи все элементы массива в консоль с помощью метода forEach .
const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
Реализуйте решение двумя способами, используя function declaration & arrow
function */
/* const fibonacci = [
  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987,
];
function getFibonacci(arr) {
  arr.forEach((item) => console.log(item));
}
// arrow function
getFibonacci(fibonacci);
const getFibonacci = (arr) => arr.forEach((item) => console.log(item));
getFibonacci(fibonacci);
 */

/* Задача 2.
Используя метод map создайте новый массив, на основе массива users , в
котором каждый элемент массива будет содержать строку вида:
['member 1: Darya', 'member 2: Masha', ... etc] .
const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']
Реализуйте решение двумя способами, используя function declaration & arrow
function. */
/* const users = ["Darya", "Masha", "Denis", "Vitaliy", "Polina", "Anton"];

function formatMembers(arr) {
  return arr.map((item, index) => `member ${index + 1}: ${item}`);
}
console.log(formatMembers(users));
// arrow function
const formatMembers = (arr) =>
  arr.map((item, index) => `member ${index + 1}: ${item}`);
console.log(formatMembers(users)); */

/* Задача 3.
С помощью метода filter создайте новый массив в котором не будет
отрицательных чисел.
const numbers = [7, -4, 32, -90, 54, 32, -21]
Реализуйте решение двумя способами, используя function declaration & arrow
function */
/* const numbers = [7, -4, 32, -90, 54, 32, -21];
function getPositive(arr) {
  return arr.filter((item) => item > 0);
}
console.log(getPositive(numbers));

// arrow function
const getPositive = (arr) => arr.filter((item) => item > 0);
console.log(getPositive(numbers)); */

/* Задача 4.
Используя метод reduce получите сумму всех чисел массива.
const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
Реализуйте решение двумя способами, используя function declaration & arrow
function. */
/* const fibonacci = [
  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987,
];
function getSumNumbers(arr) {
  return arr.reduce((acc, item) => acc + item, 0);
}
console.log(getSumNumbers(fibonacci));
// arrow function
const getSumNumbers = (arr) => arr.reduce((acc, item) => acc + item, 0);
console.log(getSumNumbers(fibonacci)); */

/* Задача 5.
Используя метод find найдите в массиве первое четное число.
const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]
Реализуйте решение двумя способами, используя function declaration & arrow
function. */
/* const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
function getFirstEvenNumber(arr) {
  return arr.find((item) => item % 2 === 0);
}
console.log(getFirstEvenNumber(numbers));
// arrow function
const getFirstEvenNumber = (arr) => arr.find((item) => item % 2 === 0);
console.log(getFirstEvenNumber(numbers)); */

// Advanced level
/* Задача 2.
Тролли атакуют наш раздел с комментариями!!!
Единственный способ справиться с этой ситуацией - удалить все гласные из
комментариев троллей, нейтрализуя угрозу.
Ваша задача - написать функцию, которая принимает строку и возвращает
новую строку с удаленными гласными.
Например, строка «This website is for losers LOL!» станет «Ths wbst s fr lsrs LL!».
Примечание: для этой задачи y не считается гласной */

const vowelsArray = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];
function removeVowelsString(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    let symbol = false;
    for (let j = 0; j < vowelsArray.length; j++) {
      if (str[i] === vowelsArray[j]) {
        symbol = true;
        break;
      }
    }
    if (!symbol) newStr += str[i];
  }
  return newStr;
}
console.log(removeVowelsString("This website is for losers LOL!"));

// Alternative option
const removeVowelsString = (str) => str.replace(/[aeiou]/gi, "");
console.log(removeVowelsString("This website is for losers LOL!")); // => Ths wbst s fr lsrs LL!
