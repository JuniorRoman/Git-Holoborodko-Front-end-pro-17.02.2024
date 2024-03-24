const arrayOfNumbers = [ 16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47 ];

// Знайти суму та кількість позитивних елементів.

const posNumber = arrayOfNumbers.filter(el => el > 0);

const posNum = posNumber.length;

const posSum = posNumber.reduce(function(acc, currentValue) {
  return acc + currentValue;
}, 0);

console.log(`
Сума позитивних елементів ${posSum} 
Кількість позитивних елементів ${posNum}
`);

// Знайти мінімальний елемент масиву та його порядковий номер.

const getMinFromArr = (arr, operat) => {
  const elem = Math[operat](...arr);
  const num = arr.indexOf(elem) + 1;
  return {elem, num}
}

console.log(getMinFromArr(arrayOfNumbers, 'min'));

// Знайти максимальний елемент масиву та його порядковий номер.
const maxNumber = getMinFromArr(arrayOfNumbers, "max");
console.log(maxNumber);

// Визначити кількість негативних елементів.
const negNum = arrayOfNumbers.filter(el => el < 0).length;

console.log(negNum);

// Знайти кількість непарних позитивних елементів.
const posOddNum = posNumber.filter(el => el % 2 !== 0);
const posOddNumCount = posOddNum.length;
console.log(posOddNumCount);

// Знайти кількість парних позитивних елементів.
const positiveNum = posNumber.filter(el => el % 2 === 0);
const positiveNumCount = positiveNum.length;
console.log(positiveNumCount);

// Знайти суму парних позитивних елементів.
const sumPositive = positiveNum.reduce((acc, currentValue) => {
  return acc + currentValue;
}, 0);
console.log(sumPositive);

// Знайти суму непарних позитивних елементів.
const sumOddPositive = posOddNum.reduce((acc, currentValue) => {
  return acc + currentValue;
}, 0);
console.log(sumOddPositive);

// Знайти добуток позитивних елементів.
const multiNum = posNumber.reduce((acc, num) => {
  return acc * num;
}, 1);
console.log(multiNum);

// Знайти найбільший серед елементів масиву, остальні обнулити.
const resetMaxNum = arrayOfNumbers.map((current) =>
  current !== maxNumber.elem ? 0 : current
);

console.log("Оригінал масиву\n", arrayOfNumbers);
console.log(
  "Найбільший зоставляємо\n",
  resetMaxNum
);