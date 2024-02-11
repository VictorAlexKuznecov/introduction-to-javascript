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

// Task 4
// Сложите переменные так, чтобы в результате получилось выражение: 12 белых
// медведей и результат выведите в консоль.

let a = 1;
let b = 2;
let c = "белых медведей";
console.log(a + (b + c));

// Task 5
// Создайте переменные и поместите в них нижеприведенные слова. Затем
// создайте еще одну переменную lengthWords и посчитайте в ней длину всех слов
// из списка.

// version 1
let word1 = "доступ";
let word2 = "морпех";
let word3 = "наледь";
let word4 = "попрек";
let word5 = "рубило";
let lengthWords =
  word1.length + word2.length + word3.length + word4.length + word5.length;
console.log(lengthWords);

// alternative
function countsTheLengthWords() {
  const lengthWords = ["доступ", "морпех", "наледь", "попрек", "рубило"];
  return lengthWords.reduce((acc, item) => (acc += item.length), 0);
}
console.log(countsTheLengthWords());

// Task 6
// Создать 3 переменные разных тип// в и вывести в консоль для каждой из них
// строку следующего вида: `Variable: %variable name% have type: %type variable%`;

function returnsVariableType() {
  let number = 42;
  let string = "world";
  let bool = true;
  console.log(`Variable: ${number} have type: ${typeof number}`);
  console.log(`Variable: ${string} have type: ${typeof string}`);
  console.log(`Variable: ${bool} have type: ${typeof bool}`);
}
returnsVariableType();

// Task 7
// Запросить у пользователя имя и возраст и вывести их в консоль.

let loginName = prompt("Как Вас зовут?");
let userAge = prompt("Сколько Вам лет");
if (loginName !== null && userAge !== null) {
  console.log(`Имя: ${loginName}, возраст ${userAge}`);
} else {
  console.log(`Пользователь решил не указывать имя и возраст`);
}

// Advanced level #1
// Поменяйте значение переменных местами не создавая дополнительной
// переменной;
let number1 = 4;
let number2 = 3;
number2 = number1 + number2;
number1 = number2 - number1;
number2 -= number1;
console.log(`number1: ${number1}, number2: ${number2}`);
