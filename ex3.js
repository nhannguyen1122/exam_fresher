let inputTest = [1, 5, 4, 7, 9, 0, -10, 13, 93, 14, 15];
//flow
//sort
// find min_dist
// push pair of min_dist
const checkMin = (arr) => {
  let result = [];
  arr.sort((a, b) => a - b);
  let min = Math.abs(arr[1] - arr[0]);
  for (let i = 1; i < arr.length; i++) {
    if (Math.abs(arr[i + 1] - arr[i]) < min) {
      min = Math.abs(arr[i + 1] - arr[i]);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] - arr[i] === min) {
      result.push([arr[i], arr[i + 1]]);
    }
  }
  return result;
};

checkMin(inputTest);
  //online ide -->
//   https://repl.it/@NguynNhn2/UnawareWorriedOpenlook#index.js