confirm(
  "Для того щоб розрахувати середнє арифметичне від чисел, пропоную Вам ввести 3 різні числа"
);

let num1 = +prompt("Введіть перше число");
let num2 = +prompt("Введіть друге число");
let num3 = +prompt("Введіть третє число");

let res = (num1 + num2 + num3) / 3;
alert(res);

document.getElementById("num").innerHTML = res;
