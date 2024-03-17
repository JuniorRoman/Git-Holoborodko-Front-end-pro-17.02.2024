// Реалізуйте функцію generateKey

const characters = "abcdefghijklmnopqrstuvwxyz0123456789";

let rez = '';
let n;
function generateKey(num, char) {
  for (let i = 0; i < num; i++) {
    n = Math.ceil(Math.random() * char.length);
    rez += char.charAt(n);
  }
  return rez;
}
const key = generateKey(16, characters);
console.log(key);
