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
const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];
const arr = evenNumbers.concat(oddNumbers);
console.log(arr);
console.log(arr.indexOf(8));
