/* Задача 1.
Выведи все элементы массива в консоль с помощью метода forEach .
const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
Реализуйте решение двумя способами, используя function declaration & arrow
function */
const fibonacci = [
  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987,
];
function getFibonacci(arr) {
  arr.forEach((item) => console.log(item));
}
getFibonacci(fibonacci);
const getFibonacci = (arr) => arr.forEach((item) => console.log(item));
getFibonacci(fibonacci);
