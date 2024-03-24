"use strict";

// Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву
let numbers = [10, 2, 3, "marge"];

const averageArray = (arr) => {
  let num = arr.filter((value) => typeof value === "number");

  return num.reduce((acc, value) => acc + value) / num.length;
};
console.log(averageArray(numbers));

// Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача

function doMath(x, znak, y) {
  switch (znak) {
    case "+":
      return x + y;
    case "-":
      return x - y;
    case "*":
      return x * y;
    case "/":
      return x / y;
    case "%":
      return x % y;
    case "^":
      return x ** y;
  }
}
console.log(doMath(10, "+", 3));

// Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.


// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

const removeSymb = ([...str], symbArr) => {
  let filterSymb = str.filter((char) => {
    return symbArr.indexOf(char) === -1;
  });
  return filterSymb.join("");
};

console.log(removeSymb("hello world privat", ["o", "d", "r"]));
