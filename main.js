/* Задача 1.
Создать любой объект с двумя ключами и любыми значениями в них, а затем
удалить ключи из объекта. */
const user = {
  name: "Vlad",
  email: "qwerty@gmail.com",
};
delete user.name;
delete user.email;

/* Задача 2.
Создать любой объект с двумя ключами и любыми значениями в них, а затем
проверить есть ли в объекте определенный ключ и если есть вывести в
консоль true  */

const countries = {
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
};
console.log(countries.isKeys("country"));
