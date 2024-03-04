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
const users = ["Darya", "Masha", "Denis", "Vitaliy", "Polina", "Anton"];

/* function formatMembers(arr) {
  return arr.map((item, index) => `member ${index + 1}: ${item}`);
}
console.log(formatMembers(users)); */
// arrow function
const formatMembers = (arr) =>
  arr.map((item, index) => `member ${index + 1}: ${item}`);
console.log(formatMembers(users));
