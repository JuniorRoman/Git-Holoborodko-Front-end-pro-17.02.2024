// Рекурсивне зведення в ступінь

function pow(num, degree) {
  let result = 1;

  for (let i = 0; i < degree; i++) {
    result *= num;
  }

  return result;
}

console.log(pow(2, 4));