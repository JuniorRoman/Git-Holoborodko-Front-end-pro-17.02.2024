let arr = [1, 2, 3, 4, 5, 6, 7];


function removeElement(arr, item) {
  arr.splice(item - 1, 1);
  return arr;
}

removeElement(arr, 1);
console.log(arr);
