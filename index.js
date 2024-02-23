alert(
  'Для того щоб зробити якісь математичні операції Вам буде запропонованно ввести два числа. Для того щоб почати натисніть "ok"'
);

let num1 = +prompt("Введіть перше число:");
let num2 = +prompt("Введіть друге число:");

let sum = num1 + num2;
let sub = num1 - num2;
let mul = num1 * num2;
let dev = num1 / num2;
let newD = dev.toFixed(2);

alert(`
Додавання: ${num1} + ${num2} = ${sum}
Віднімання: ${num1} - ${num2} = ${sub}
Множення: ${num1} * ${num2} = ${mul}
Ділення: ${num1} / ${num2} = ${newD}
`);
