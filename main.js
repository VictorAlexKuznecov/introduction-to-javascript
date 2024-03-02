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
/* const colors = {
  "ru pum pu ru rum": {
    red: "красный",
    green: "зеленый",
    blue: "синий",
  },
};
console.log(colors["ru pum pu ru rum"].red);
console.log(colors["ru pum pu ru rum"]["blue"]); */

/* Задача 5.
Дан объект:
let salaries = {
andrey: 500,
sveta: 413,
anton: 987,
igor: 664,
alexandra: 199
}
Вычислите среднюю зарплату сотрудников и результат поместите в
соответствующую переменную */

/* let salaries = {
  andrey: 500,
  sveta: 413,
  anton: 987,
  igor: 664,
  alexandra: 199,
};

let wholeSalary = 0;
let counter = 0;
for (let key in salaries) {
  wholeSalary += salaries[key];
  counter++;
}
let averageEmployeeSalary = wholeSalary / counter;
console.log(averageEmployeeSalary);

// alternative
const averageEmployeeSalary =
  Object.values(salaries).reduce((acc, item) => acc + item, 0) /
  Object.values(salaries).length;
console.log(averageEmployeeSalary); */

/* Задача 6.
Создать валидатор, запросить у пользователя логин и пароль для регистрации.
Затем данные записать в объект.
Потом попросить пользователя подтвердить данные. Если верно введен логин
и пароль, вывести сообщение Добро пожаловать */

/* let userLogin = prompt("Введите логин для регистрации");
let userPassword = prompt("Введите пароль");

const userCredentials = {};
const checkLoginAndPassword = function (login, password) {
  if (!(!login || !password)) {
    userCredentials.login = userLogin;
    userCredentials.password = userPassword;
    validateCredentials(userCredentials);
  } else {
    alert("Некоректно введены данные, попробуйте ещё раз");
  }
};
checkLoginAndPassword(userLogin, userPassword);

function validateCredentials(loginAndPassword) {
  let confirmLogin = prompt("Введите логин для подтверждения");
  let confirmPassword = prompt("Введите пароль для подтверждения");
  if (
    loginAndPassword.login === confirmLogin &&
    loginAndPassword.password === confirmPassword
  ) {
    alert("Добро пожаловать");
  } else {
    alert("Логин или пароль введен не верно");
  }
} */
/* Продвинутый уровень
Задача 1.
Мы на футбольном матче, счет забитых голов одной команды не может
превышать 9 мячей. Жаль что нам присылают результат матча в формате
«2:5», ведь нам надо это вывести в консоль словами. Давайте напишем
программу, которая будет за нас переводить формат и выводить результат в
консоль */
let score = "8:1";
const goalCount = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
};
console.log(`${goalCount[score[0]]} : ${goalCount[score[2]]}`);
