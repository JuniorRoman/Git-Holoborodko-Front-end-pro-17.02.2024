const array = [1, 2, 3, 4, 5, 6, 7];
const arr = [];

// function removeElement(array, item) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] !== item) {
//       arr.push(i);
//     }
//   }
// }


function removeElement(array, item) {
  for (let i = 0; i < array.length; i++){
    if (array[i] == item) {
      array.splice(item, 1);
      // console.log(array);
    }
  }
  return array;
}

removeElement(array, 1);
console.log(array);
removeElement(array, 5);
console.log(array);