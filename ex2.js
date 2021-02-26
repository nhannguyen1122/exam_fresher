


let input = [0, 100, -4, 8, 143, 5, 99, 100];

let checkInput = (arr) => {
  //flow:
  //max from arr   (1)
  // max from  arr -(1)
  //sum 2 max
  let max1 = Math.max(...arr);
  let MaxIndex = null;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === max1) {
      MaxIndex = i;
    }
  }
  arr.splice(MaxIndex, 1);
  let max2 = Math.max(...arr);

  return max1 + max2;
};
console.log(checkInput(input))
  //online ide -->
//   https://repl.it/@NguynNhn2/UnawareWorriedOpenlook#index.js