// at the root of insertion sort it is used to perform swapping operations
function swap(arr) {
    const temp = arr[1];
    arr[1] = arr[0];
    arr[0] = temp;
}
 console.log(swap([20, 3]))
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    // We need to save the value of arr[i]
    // because we might overwrite it.so we can have a backup copy
    let j = i - 1;
    const key = arr[i];
    // the while stops if
    //    we are after the last index. Note I added >= 0 because we want to stop at index 0. If we used just >0 we would stop at index 1.
    //    or: the key we are on is bigger than the preceding key,  (this is the right order the key we are on should be bigger than the preceding order so there is no need to swap it out) 
    while (j >= 0 && key < arr[j]) {
      // it makes sense to check if we are on the last index(j >= 0) before checking
      // if the items are arranged in descending order, else you would attempt to access key < arr[-1]. 
      // arr[-1] is undefined. Though it would work it is just neater to not even allow the code get to that point
      arr[j + 1] = arr[j];
      //HERE is where is USUALLY get confused.
      /**
       * I am replacing the value where key is with the preceding key.
       * [20, 6<KEY>] becomes [20, 20]
       * arr[j + 1] = arr[j]
       *
       * What I usually do in error is:
       * [20, 6<KEY>] becomes [6, 6]
       * arr[j] = key
       * This is wrong because I have lost the value 20. Since I did not store it.
       * It is the one that I stored I should overwrite its value.
       *
       */
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}
console.log({solution: insertionSort([20, 6, 70, 19, 2])});
