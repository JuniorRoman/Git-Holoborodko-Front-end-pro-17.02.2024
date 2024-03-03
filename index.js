let arr = [];
let value = prompt("Введіть Ваш масив через пробіл");

arr = value.split(" ");
document.getElementById("arr").innerHTML = arr;

arr.sort();
document.getElementById("demo").innerHTML = arr;

arr.splice(1, 3);
document.getElementById("test").innerHTML = arr;
