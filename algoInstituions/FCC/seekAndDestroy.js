function destroyer(arr) {
  // we start the loop from the second argument since the
  // first argument is the full array to cleanup
  // this is a very COOL PATTERN instead of slicing the array
  // const items = Object.values(arguments).slice[1];
  for (let index = 1; index < arguments.length; index++) {
    // we are filtering the arguments object
    //Example: destroyer([1, 2, 3, 1, 2, 3], 2, 3) this means arr is [1, 2, 3, 1, 2, 3]
    //first iteration: we are removing all 2s array becomes [ 1, 3, 1, 3 ]
    //second iteration: we are removing all 2s array becomes [ 1, 1 ]
    //
    console.log(arguments[index] !== 1);
    arr = arr.filter((item) => arguments[index] !== item);
    console.log(arr);
  }
  // console.log(arr)
  return arr;
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
