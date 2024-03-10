let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr);
let array = arr;
function removeElement(array, item) {
  array.splice(item - 1, 1);
  return console.log(array);
}

removeElement(arr, 2);
// removeElement(arr, 5);
// removeElement(arr, 1);
