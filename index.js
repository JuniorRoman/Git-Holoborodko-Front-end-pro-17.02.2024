let arr = [1, 2, 3, 4, 5, 6, 7];
let ar = ["Twin", 4, "Ok", 7, 2];

function removeElement(arr, item) {
  // arr.toString();
  for (let i = 0; i < arr.length; i++) {
    if (arr.at(item) !== -1) {
      
      return console.log(item);
      // if (arr[i] === item) {
      //   return i;
      // } 
    } else {
      console.log('no');
    }
  }
  return -1;
}

console.log(removeElement(arr, 10));
