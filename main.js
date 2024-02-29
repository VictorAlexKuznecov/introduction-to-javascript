/* Задача 1.
Создать любой объект с двумя ключами и любыми значениями в них, а затем
удалить ключи из объекта. */
const user = {
  name: "Vlad",
  email: "qwerty@gmail.com",
};
delete user.name;
delete user.email;
