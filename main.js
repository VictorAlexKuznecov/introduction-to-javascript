// Задача 1.
// Написать функцию getSum , которая будет высчитывать сумму чисел от нуля до
// переданного в нее параметра. Если передадим число 100 то, надо вычислить
// сумму чисел от 0 до 100 (должно получится 5050).
let userValue = Number(
  prompt("Вычислит сумму чисел от 0 до указанного параметра. Введите число")
);
// Option 1
/* function getSum(num) {
  let counter = 0;
  for (let i = 1; i <= num; i++) {
    counter += i;
  }
  alert(counter);
}
getSum(userValue);
 */
// alternative
function getSum(num) {
  if (num <= 1) {
    return num;
  }
  return num + getSum(num - 1);
}
console.log(getSum(userValue));
