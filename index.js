// Рекурсивне зведення в ступінь

function pow(x, n) {
  let result = 1;

  // множимо result на x n разів в циклі
  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

console.log(pow(2, 4));