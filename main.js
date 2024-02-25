/* // Задача 1.
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
 
// alternative
function getSum(num) {
  if (num <= 1) {
    return num;
  }
  return num + getSum(num - 1);
}
console.log(getSum(userValue));
 */
/* Задача 2.
Напишите функцию, она в качестве аргумента принимает в себя сумму кредита,
который хочет получить клиент и верните результат переплаты по кредиту:
процентная ставка в год — 17%,
количество лет — 5.
Мы пишем функцию для хорошего банка, поэтому сумма кредита не
увеличивается. */

/* let creditSum = Number(prompt("Введите сумму которая Вам необходима"));
const ANNUAL_INTEREST_RATE = 17;
const YEARS_COUNT = 5;
const overpayment = (sum) => ((sum * ANNUAL_INTEREST_RATE) / 100) * YEARS_COUNT;
alert(`Переплата по кредиту будет ${overpayment(creditSum)} рублей`);
 */
/* function names() {
  alert("Victor");
}
names();
 */
const namVictor = () => "Victor";
alert(namVictor());
