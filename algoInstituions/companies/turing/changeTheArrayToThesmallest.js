/**
 * 
 */

function solution(k) {
  let count = 0;
  let increment = true;
  while (increment === true) {
    increment = false;
    // we do not need to check the very last number as we are trying to match everything to be greater than the very first array item that is index 0.
    // for (let i = k.length - 1; i >= 0; i--) {
    // eg. arr [4, 5] we would compare arr[0] with arr[-1] which is bad. we should stop at  arr[1] vs.  arr[0]
    for (let i = k.length - 1; i >= 0; i--) {
      /**
       * Example: [3, 2, 4, 3]
       * This example is very good to really go through the questios
       */
      if (k[i] <= k[i - 1]) {
        k[i] += 1;
        count++;
        increment = true;
      }
    }
  }
  return count;
}

solution([3, 2, 4, 3]);