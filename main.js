/* Задача 1.
Дан массив:
const colors = ['red', 'green', 'blue']
Выведите в консоль его длину. */

/* const colors = ["red", "green", "blue"];
console.log(colors.length); */

/* Задача 2.
Дан массив:
const animals = ['monkey', 'dog', 'cat']
Выведите в консоль его последний элемент вне зависимости от его длинны. */

/* const animals = ["monkey", "dog", "cat"];
console.log(animals[animals.length - 1]); */

/* Задача 3.
Дан массив:
const numbers = [5, 43, 63, 23, 90]
Удалите все элементы в массиве и выведите в консоль полученный результат.
Реализуйте решение двумя способами. */

/* const numbers = [5, 43, 63, 23, 90];
// version 1
numbers.length = 0;
console.log(numbers);

// version 2
numbers.splice(0, numbers.length);
console.log(numbers);

// version 3 тоже и с shift()
arrLength = numbers.length;
for (let i = 0; i < arrLength; i++) {
  numbers.pop();
}
console.log(numbers);
 */
/* Задача 4.
Дан массив:
const students = ['Polina', 'Dasha', 'Masha']
Удалите последний элемент массива, затем вместо него добавьте в массив
студента Borya .
Удалите первый элемент массива, затем вместо него добавьте в массив
студента Andrey .
Полученный результат не забудьте вывести в консоль */
/* 
const students = ["Polina", "Dasha", "Masha"];
// version 1
students.pop();
students.push("Borya");
students.shift();
students.unshift("Andrey");
console.log(students);
// version 2
students.splice(students.length - 1, 1, "Borya");
students.splice(0, 1, "Andrey");
console.log(students);
 */
/* Задача 5.
Дан массив:
const cats = ['Gachito', 'Tom', 'Batman']
Выведите в консоль все элементы массива. Сначала через цикл for ,
затем for..of . */

/* const cats = ["Gachito", "Tom", "Batman"];
for (let i = 0; i < cats.length; i++) {
  console.log(cats[i]);
}
for (let value of cats) {
  console.log(value);
} */
/* Задача 6.
const evenNumbers = [2, 4, 6, 8, 10]
const oddNumbers = [1, 3, 5, 7, 9]
Соедините два массива чисел в один.
В полученном массиве попробуйте найти индекс числа 8 */
/* const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];
const arr = evenNumbers.concat(oddNumbers);
console.log(arr);
console.log(arr.indexOf(8)); */

/* Задача 7.
Дан массив:
const binary = [0, 0, 0, 0]
Наш бинарный массив неполный, в нем явно не хватает единиц.
Превратите данный массив в строку.
[0, 0, 0, 0] -> '0101010' */

/* const binary = [0, 0, 0, 0];
const arr = [];
for (let value of binary) {
  arr.push(value + "1");
}
console.log(arr.join("")); */

/* Продвинутый уровень
Для решения задач используйте циклы for или for..of
Задача 1.
Реализуйте функцию, которая будет проверять, является ли слово
палиндромом. */
// version 1
/* function isPalindrome(word) {
  word = word.toLowerCase();
  for (let i = 0; i < Math.floor(word.length / 2); i++) {
    if (word[i] !== word[word.length - 1 - i]) return false;
  }
  return true;
}
//  version 2
function isPalindrome(word) {
  word = word.toLowerCase();
  return word.split("").reverse().join("") === word;
}
console.log(isPalindrome("шалаш"));
console.log(isPalindrome("Шалаш"));
console.log(isPalindrome("радар"));
console.log(isPalindrome("слово")); */

/* Задача 2.
const matrix = [
[12, 98, 78, 65, 23],
[54, 76, 98, 43, 65],
[13, 324, 65, 312],
[9092, 22, 45, 90000],
]
Выведите в консоль среднее значение чисел в многомерном массиве. */
const matrix = [
  [12, 98, 78, 65, 23],
  [54, 76, 98, 43, 65],
  [13, 324, 65, 312],
  [9092, 22, 45, 90000],
];
let sum = 0;
let counter = 0;
for (let value of matrix) {
  for (let i = 0; i < value.length; i++) {
    sum += value[i];
    counter++;
  }
}
const averageOfNumbers = sum / counter;
console.log(averageOfNumbers);
