let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr);

function removeElement(arr, item) {
  arr.splice(item - 1, 1);
  return console.log(arr);
}

removeElement(arr, 2);
