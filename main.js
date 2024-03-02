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

const numbers = [5, 43, 63, 23, 90];
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
