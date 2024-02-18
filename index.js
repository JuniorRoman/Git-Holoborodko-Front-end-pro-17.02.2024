confirm(
  'Для знайомства пропоную дати відповідь на три питання, якщо готові то натисніть "ok"'
);
let user = prompt("Ваше Ім\'я");
let surname = prompt("Ваше прізвище");
let age = prompt("Скільки вам років?");
alert(`
Мене звати: ${user}
Прізвище: ${surname}
Мені: ${age} р.
`);

// також зробив єще так бо в першому варіанті не використовеється конкатенація

let sln =  `Мене звати: ${user}` + ' | ' + `Прізвище: ${surname}` + ' | ' + `Мені: ${age} р.`;
document.getElementById('demo').innerHTML = sln;

let num = prompt("Введіть п'ять чисел");
 if (num.length < 5) {
  alert("Введене число меньше чим 5");
} else if (num.length > 5) {
  alert("Введене число більше чим 5");
} else {  
  let char = num.split('');
  let str = String(char);
  let charStr = str.replaceAll(',', ' ');
  alert(charStr);
  document.getElementById('number').innerHTML = charStr;
}
