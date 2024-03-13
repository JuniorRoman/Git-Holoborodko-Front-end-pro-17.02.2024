// Рекурсивне зведення в ступінь

function pow(num, degree) {
  let res = 1;

  for (let i = 0; i < degree; i++) {
    res *= num;
  }

  return res;
}

console.log(pow(2, 4));