
const splitArr=(arr, num)=>{
    //flow:
    //init result based on num input
    //convert arr into [[xxx],[xxx],[xxx]]
    // push value into result
    //flat
    let result = [];
    let chunks = [];
    let i = 0;
    for (let i = 0; i < num; i++) {
      result.push([]);
    }
    while (i < arr.length) {
      chunks.push(arr.slice(i, (i += num)));
    }
    for (let i = 0; i < chunks.length; i++) {
      for (let j = 0; j < chunks[i].length; j++) {
        result[j].push(chunks[i][j]);
      }
    }
    return result.flat();
  }
  let inputTest = [11, 2, 8, 10, 5, 99, 1, 8, 9];
  
  let output = splitArr(inputTest, 3);
  console.log(output);
  
  //online ide -->
//   https://repl.it/@NguynNhn2/UnawareWorriedOpenlook#index.js