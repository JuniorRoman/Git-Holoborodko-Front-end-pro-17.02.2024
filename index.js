/*--------------1-------------*/
let arr = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

document.getElementById("arr").innerHTML = arr;

/*Масив після сортування*/
let arr1 = [];
let arr2 = [];
for (let i = 0; i < arr.length; i++) {
  arr1 = arr[i] * arr[i];
  arr2.push(arr1);
}
document.getElementById("demo").innerHTML = arr2;

/*Множення на 7*/
let table = [];
for (let i = 7; i < 8; i += 1) {
  for (let j = 1; j <= 10; j += 1) {
    table += `${i} x ${j} = ${i * j}` + "<br>";
  }
}
document.getElementById("table").innerHTML = table;

/*Знайти суму всіх цілих чисел від 1 до 15*/
let sum = 0;
for (let i = 1; i <= 15; i++) {
  sum += i;
}
document.getElementById("sum").innerHTML = sum;

/*Знайти добуток усіх цілих чисел від 15 до 35*/
let mult = 1;
for (let i = 15; i <= 35; i++) {
  mult *= i;
}
document.getElementById("mn").innerHTML = mult;

/*Знайти середнє арифметичне всіх цілих чисел від 1 до 500*/
let rez = 0;
for (let i = 1; i <= 500; i++) {
  rez = (rez + i) / 500;
}
document.getElementById("rez").innerHTML = rez;

/*Вивести суму лише парних чисел в діапазоні від 30 до 80*/
let rad = 0;
for (let i = 30; i <= 80; i++) {
  if (i % 2 === 0) {
    rad += i;
  }
}
document.getElementById("rad").innerHTML = rad;

/*Вивести всі числа в діапазоні від 100 до 200 кратні 3*/
let a = [];
for (let i = 100; i <= 200; i++) {
  if (i % 3 === 0) {
    a.push(i);
  }
}
document.getElementById("krat").innerHTML = a;

/*Дано натуральне число. Знайти та вивести на сторінку всі його дільники*/
let n = 16;
let m = [];
for (let i = 1; i <= n; i++) {
  if (n % i === 0) {
    m.push(i);
  }
}
document.getElementById("nat").innerHTML = m;

/*Визначити кількість його парних дільників*/
let k = [];
let j;
for (let item of m) {
  if (item % 2 === 0) {
    k.push(item);
    j = k.length;
  }
}
document.getElementById("j").innerHTML = j;

/*Знайти суму його парних дільників*/
for (item of k) {
  item += item;
}
document.getElementById("k").innerHTML = item;

/*Таблиця множення*/
let tables = [];
for (let i = 1; i <= 10; i += 1) {
  for (let j = 1; j <= 10; j += 1) {
    tables += `${i} x ${j} = ${i * j}` + "<br>";
  }
  tables += "<br>";
}
document.getElementById("tables").innerHTML = tables;
