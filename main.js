/* Задача 1.
Создать любой объект с двумя ключами и любыми значениями в них, а затем
удалить ключи из объекта. */
/* const user = {
  name: "Vlad",
  email: "qwerty@gmail.com",
};
delete user.name;
delete user.email;
 */
/* Задача 2.
Создать любой объект с двумя ключами и любыми значениями в них, а затем
проверить есть ли в объекте определенный ключ и если есть вывести в
консоль true  */

/* const countries = {
  country: "Latvia",
  capital: "Riga",
  isKeys: function (elem) {
    for (const item in this) {
      if (item === elem) {
        return true;
      }
    }
    return false;
  },
}; */
/* console.log(countries.isKeys("country")); */

/* Задача 3.
Дан объект:
C помощью цикла for..in вывести в консоль сначала все ключи, потом
значения ключей объект. */
/* 
const student = {
  name: "John",
  age: 19,
  isHappy: true,
};
for (key in student) {
  console.log(`ключ: ${key}, значение: ${student[key]}`);
} */

/* Задача 4.
Дан объект:
const colors = {
  'ru pum pu ru rum': {
  red: 'красный',
  green: 'зеленый',
  blue: 'синий'
  },
  }
Вывести в консоль слово красный и синий
 */
const colors = {
  "ru pum pu ru rum": {
    red: "красный",
    green: "зеленый",
    blue: "синий",
  },
};
console.log(colors["ru pum pu ru rum"].red);
console.log(colors["ru pum pu ru rum"]["blue"]);
