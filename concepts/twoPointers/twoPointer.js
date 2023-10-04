// Sample input: twoPointers([4, 3, 2, 9]);
/**
 * Two poinnters have three main parts:
 * 1. Creating two variables. One whose value is the index of the first array item and the other is the index of the last array item.
 * 2. Having a while loop that stops when left < right. Since this makes sure we go once through the array
 * 3. Modifying left or right based on a condition
 */
// This is a form of boiler plate for two pointers. Based on specific implimentation thhis is modified. 
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
//  1. Creating two variables. One whose value is the index of the first array item and the other is the index of the last array item.
/**
 *              0   1   2   3   4 
  *  arr  =     A   P   P   L   E
  *             ^               ^
  *             |               |
  *       left= 0       right = 4
  * 
 */
    let left = 0;
    let right = arr.length -1;


// 2. Having a while loop that stops when left pointer < right pointer. Since this makes sure we go once through the array
/**
 *              0   1   2   3   4
  *  arr  =     A   P   P   L   E
  *                     ^   ^
  *                     |   |
  *               left= 2   3 = right
 */
    while (left < right) {
//  3. Modifying left or right based on a condition
      /** There are two possible ways to increment either left pointer or right pointer 
       * 1. You want to remain at the bigger item of the two: if left is less you increase the left.
       * 2. You want to remain at the smaller item of the two:  if left is bigger you reduce the right.
       * 
       * 
       * Tip I always visualise a bar graphs to try to uderstand how to move. 
       * This can be seen in my notes.
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


// Read more: https://towardsdatascience.com/two-pointer-approach-python-code-f3986b602640#:~:text=Two%20pointer%20algorithm%20is%20one,approach%20works%20in%20constant%20space.
// Reverse an array in place
// example: ['a', 'p', 'p', 'l', 'e'] becomes 'elppa' ['e', 'l', 'p', 'p', 'a']
// example: [ 10, 20, 30, 40, 50 ] becomes [ 50, 40, 30, 20, 10 ]
  function reverseArray(arr) {
    /**The Start of the loop
     *       0    1    2    3    4
     *    [ 'a', 'p', 'p', 'l', 'e']
     *       ^                   ^
     *       |                   |
     * left= 0            right =4
     * 
     * 
     * 
     *
     * Second Execution
     *    0    1    2    3    4
     * [ 'e', 'p', 'p', 'l', 'a' ]
     *         ^         ^
     *         |         |
     *   left= 1  right =3
     * 
     * 
     * 
     * 
     * The loop STOPS
     *    0    1    2    3    4
     * [ 'e', 'p', 'p', 'l', 'a' ]
     *              ^^
     *              ||
     *        left = 2
     *       right = 2
     * 
     */
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
      // this is a swap
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      // Increase left and right
      start++;
      end--;
    }
  }

  function twoSumTwoPointers(arr, target) {
     /**
     * A classic example of moving left or right based a condition is the two sum question. 
     * see for full details: algoInstituions/neetCode/1.arraysAndHashing/3.twoSum.js
     * Question: What two numbers in the array would sum up to give you 13. ans
     * Exampele: 
     * arr = [1, 4, 5, 8, 9] target = 11
     * output = 5, 8
     * 5 and 8 sums up to give us 13.
     * 
     * 
     * if the sum of the elements at left and right is greater than the target. 
     * Then you move left pointer forward. This so to increase the sum.
     * Whhile, if the sum is less than the target you move right pointer backward to reduce the sum.
     * We are trying to get to the target if our sum is more than the target then we need to reduce our sum
     * arr = [1,3,4,6,8,9]; target = 11;
     *    
     *                                    
     *         sum is 10 and it is LESS than our target of 11. We should increase our next sum, as such We move the left pointer forward
     *                                               __9___ 
     *                                      __8___   ||  ||  
     *                                      ||  ||   ||  ||
     *                             __6___   ||  ||   ||  ||
     *                             ||  ||   ||  ||   ||  ||
     *                    __4___   ||  ||   ||  ||   ||  ||
     *           __3___   ||  ||   ||  ||   ||  ||   ||  ||
     *           ||  ||   ||  ||   ||  ||   ||  ||   ||  ||
     *  __1___   ||  ||   ||  ||   ||  ||   ||  ||   ||  ||
     *  ||  ||   ||  ||   ||  ||   ||  ||   ||  ||   ||  ||
     * ----------------------------------------------------
     *    0         1        2       3        4         5
     *    ^                                             ^
     *    |                                             |
     *  left= 0                                       right = 5
     * 
     *  sun = 1 + 9 = 10
     *    
     *           
     * 
     *                          
     *         sum is 12 and it is MORE than our target of 11. We should reduce our next sum. as such We move the right pointer backward
     *                                               __9___ 
     *                                      __8___   ||  ||  
     *                                      ||  ||   ||  ||
     *                             __6___   ||  ||   ||  ||
     *                             ||  ||   ||  ||   ||  ||
     *                    __4___   ||  ||   ||  ||   ||  ||
     *           __3___   ||  ||   ||  ||   ||  ||   ||  ||
     *           ||  ||   ||  ||   ||  ||   ||  ||   ||  ||
     *  __1___   ||  ||   ||  ||   ||  ||   ||  ||   ||  ||
     *  ||  ||   ||  ||   ||  ||   ||  ||   ||  ||   ||  ||
     * ----------------------------------------------------
     *    0         1        2       3        4         5
     *              ^                                   ^
     *              |                                   |
     *            left= 0                             right = 5
     * 
     *  sun = 3 + 9 = 12
     * 
     * 
     * 
     * 
     * 
     *                          
     *         sum is 12 and it is MORE than our target of 11. We should reduce our next sum. as such We move the right pointer backward
     *                                               __9___ 
     *                                      __8___   ||  ||  
     *                                      ||  ||   ||  ||
     *                             __6___   ||  ||   ||  ||
     *                             ||  ||   ||  ||   ||  ||
     *                    __4___   ||  ||   ||  ||   ||  ||
     *           __3___   ||  ||   ||  ||   ||  ||   ||  ||
     *           ||  ||   ||  ||   ||  ||   ||  ||   ||  ||
     *  __1___   ||  ||   ||  ||   ||  ||   ||  ||   ||  ||
     *  ||  ||   ||  ||   ||  ||   ||  ||   ||  ||   ||  ||
     * ----------------------------------------------------
     *    0         1        2       3        4         5
     *              ^                         ^
     *              |                         |
     *            left= 0                   right = 5
     * 
     *  sun = 3 + 8 = 11
     * 
     * 
     * 
     * 
     * 
     *         sum is 10 and it is MORE than our target of 5. We wish to REDUCE our next target. We move the right pointer backward
     *                                    
     *                                               __9___ 
     *                                      __8___   ||  ||  
     *                                      ||  ||   ||  ||
     *                             __6___   ||  ||   ||  ||
     *                             ||  ||   ||  ||   ||  ||
     *                    __4___   ||  ||   ||  ||   ||  ||
     *           __3___   ||  ||   ||  ||   ||  ||   ||  ||
     *           ||  ||   ||  ||   ||  ||   ||  ||   ||  ||
     *  __1___   ||  ||   ||  ||   ||  ||   ||  ||   ||  ||
     *  ||  ||   ||  ||   ||  ||   ||  ||   ||  ||   ||  ||
     * ----------------------------------------------------
     *    0         1        2       3        4         5
     *    ^                                   ^
     *    |                                   |
     *  left = 1                           right = 4
     * 
     *  sun = 1 + 8 = 9
     * This is our Answer. 
     */
  //Note: this solution works only on sorted array items
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) {
      return [left + 1, right + 1];
    }
    sum < target ? left++ : right--;
  }
}
  

/**
 * 
 * There are different ways we can of modify the pointers based on the scenrios
 * 1. we could increase BOTH by one on each operation. 
 *  see reverseArray above
 * 
 * 2. We could EITHER increase left or reduce right based on some conditon
 *  see algoInstituions/algoexpert/sortedSquareArray.js
 *  see algoInstituions/neetCode/1.arraysAndHashing/3.twoSum.js
 * 
 * 3. We could ei
 */
