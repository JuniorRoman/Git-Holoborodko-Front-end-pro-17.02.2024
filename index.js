// Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….)
let str = "";
for (let i = 20; i < 30; i = i + 0.5) {
  str += i + " ";
}
console.log(str);

// Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів
let dol = 27;
let rez;
for (let i = 10; i <= 100; i = i + 10) {
  rez = dol * i;
  console.log(`Співвіднощення $ ${i} до грн ${rez}`);
}

// Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N
let num = 36;
let i = 1;
let res;
while (i < num) {
  res = i * i;
  if (res <= num) {
    console.log(i);
  }
  i++;
}

// Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе)
function Numb(num) {
  if (num > 1) {
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        return "Составное число";
      }
    }
    return "Простое число";
  } else {
    return "Число должно быть больше 1";
  }
}

console.log(Numb(21));

// Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна)

// Не зрозумів завдання, буду думати. Зроблю пізніше.
