confirm(
  "Для розрахунку кількості секунд в годинах потрібно буде ввести будь-яку кількість годин "
);
let num = +prompt(
  "Для розрахунку кількості секунд в годинах потрібно буде ввести будь-яку кількість годин Введіть кількість годин: "
);
console.log(typeof num);
let sec = 3600 * num;
alert(sec);

document.getElementById("hour").innerHTML = num;
document.getElementById("test").innerHTML = sec;
