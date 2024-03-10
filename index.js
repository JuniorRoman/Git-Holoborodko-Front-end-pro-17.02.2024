let arr = [1, 2, 3, 4, 5, 6, 7];

function removeElement(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (item <= arr.length) {
      arr.splice(item - 1, 1);
      break;
    } else {
      return console.log(
        `Спробуйте ввести меньше число від 1 до ${arr.length}`
      );
    }
  }
  return console.log(arr);
}

removeElement(arr, 1);
