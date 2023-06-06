// Sample input: twoPointers([4, 3, 2, 9]);
/**
 * 1. creating a variable at the start of the array and the end of the array
 * 2. Having a while loop that stops when left < right. Since this makes sure we go once through the array
 * 3. incrementing either left or right based on a condition
 */
function twoPointers(arr) {
    let left = 0;
    let right = arr.length -1;

    while (left < right) {
         if (left < right) {
           left++;
         } else {
           right++;
         }
    }
}
function twoPointersComment(arr) {
//  1. creating a variable at the start of the array and the end of the array
    let left = 0;
    let right = arr.length -1;

// Having a while loop that stops when left < right. Since this makes sure we go once through the array
    while (left < right) {
      /** incrementing either left or right based on a condition.
       * There are two possible ways this can be:
       * 1. You want to remain at the bigger item of the two: if left is less you move left.
       * 2. You want to remain at the smaller item of the two:  if left is bigger you move left.
       * 
       * Tip I always visualise a vertical graph. to try to uderstand how to move. 
       * 
       */
      // We are trying to stay on the biggest element. So we move the smaller item.
      if (left < right) {
        left++;
      } else {
        right++;
      }

      // We are trying to stay on the smallest element. So we move the bigger item.
    //   if (left > right) {
    //     left++;
    //   } else {
    //     right++;
    //   }
    }
}
