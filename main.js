// Task 1
// description:
// Создайте переменные, затем сложите их и выведите результат в консоль
// разработчика.

let x = 20;
let y = 58;
let z = 42;
console.log(x + y + z);

// Task 3
// description:
// Создайте две переменные. Поместите в них переменную count и превратите в
// строку, а userName наоборот в число. Попробуйте реализовать задачу двумя
// разными способами.

let count = 42;
let userName = "42";
console.log(typeof String(count));
console.log(typeof count.toString());
console.log(typeof ("" + count));
console.log(typeof `${count}`);

console.log(typeof +userName);
console.log(typeof Number(userName));
console.log(typeof (userName * 1));
console.log(typeof (userName / 1));
console.log(typeof parseInt(userName, 10));
