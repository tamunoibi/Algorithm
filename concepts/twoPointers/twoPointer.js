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


// https://towardsdatascience.com/two-pointer-approach-python-code-f3986b602640#:~:text=Two%20pointer%20algorithm%20is%20one,approach%20works%20in%20constant%20space.
// Reverse an array in place
function a() {
  function reverseArray(array) {
    let start = 0;
    let end = array.length - 1;
    while (start < end) {
      // an alternative way to perform the swap
      // let temp = array[start];
      // array[start] = array[end];
      // array[end] = temp;
      array[start], (array[end] = array[end]), array[start];
      start++;
      end--;
    }
  }
  let array = [10, 20, 30, 40, 50];
  // reverseArray(array);
  // console.log(array); // [ 10, 20, 30, 40, 50 ]
}

function b() {
    // Not tested
  function sortedSquares(nums) {
    let len = nums.length;
    let start = 0;
    let end = len - 1;
    let res = [0] * len;
    let idx = len - 1;
    while (end > -1 && idx > -1) {
      if (Math.abs(nums[start]) > Math.abs(nums[end])) {
         res[idx] = nums[start] * nums[start];
         start += 1;
      } else {
        res[idx] = nums[end] * nums[end];
        end--;
      }
      idx--;
    }
    return res;
  }
  let nums = [10, 20, 30, 40, 50];
  sortedSquares(nums);
  console.log(nums); // [ 10, 20, 30, 40, 50 ]
}

