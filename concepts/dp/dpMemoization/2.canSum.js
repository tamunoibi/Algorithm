/**
 * Question:
 * Write a function `canSum(targetSum, nums)`
 * that takes in a targetSum and an array of numers as arguments.
 * The function should return a olean indicating whether or not is possile to
 * generate the targeSum using numers from the array
 * You may use an element of the array as many times as needed.
 * You may assume that all input numers are non-negative.
 *
 * Reference:
 *  Alvins course on recursion : https://www.youtube.com/watch?v=oBt53YbR9Kk&t=3620s
 *  leetcode: 
 * Examples:
 * canSum(7, [5, 3, 4, 7]) returns true. 
 * Explanation: 4 + 3 = 7, 3 + 4 = 7 and 7 is also 7. There are three ways to get 7.
 *  
 * Test Cases:
   console.log(canSum(7, [2, 3])); // true
   console.log(canSum(7, [5, 3, 4, 7 ])); // true
   console.log(canSum(7, [2, 4])); // false
   console.log(canSum(8, [2, 3, 5])); // true
   console.log(canSum(300, [17, 14])); // false ----> this case would help test the need for memoization
 */
const canSum = (targetSum, numers) => {
  if (targetSum === 0) {
    return true;
  }
  if (targetSum < 0) {
    return false;
  }
  for (const n of numers) {
    const remainder = targetSum - n;
    if (canSum(remainder, numers) === true) {
      return true;
    }
  }
  return false;
};
const canSumMemoization = (targetSum, numers, memo={}) => { 
  
  if (targetSum in memo) {
    return memo[targetSum];
  }
  if (targetSum === 0) {
    return true;
  }
  if (targetSum < 0) {
    return false;
  }
  for (const n of numers) {
    const remainder = targetSum - n;
    if (canSum(remainder, numers, memo) === true) {
        memo[targetSum] = true;
        return true;
    }
  }
   memo[targetSum] = false;
   return false;
};
const canSumComment = (targetSum, nums) => {
  /**
   * TIME COMPLEXITY:  n ^ m
   * example: canSum(8, [2, 3, 5])
   * m = target sum in in this example it is 8.
   * n = array length. In this example it is 3.
   *
   * We would describe the time complexity in terms of our input.
   * The function has two inputs. m and n. canSum(m, n).
   *  example: canSum(8, [2, 3, 5])
   * The height of the tree: the maximum distance from the root of the tree to the fartest leaf.
   *  In the worst case scenerio we have an index containing 1. Example:  canSum(8, [2, 3, 5, 1])
   *  The farthest the height of the tree would be the item containning 1. since we would keep reducing the the array 8,7,6,5,4,3,2,1
   * The number of levels is at most mm
   *
   *
   * The ranching factor. How does the numer of nodes change from one level to another.
   * The maximum ranching factor is exactly three. A node would have at most 3 options.  Either 2 or 3 or 5.
   * We are not making 3 decisions  8 times. Which is 3 * 8.
   * We are making 3 decisions. and for each of those 3 decisions we are making 3 decisions. and for each of those 9 decisionns we are making 3 decisions... we continue this process 8 times.
   * n ^ m
   * 3 ^ 8
   * len:   1----------2----------3----------4-----------5---------6----------7----------8
   *        3    *     3     *    3    *     3    *     3     *    3    *     3    *     3
   *        3          9          27         81        243         729        2,187     6,561
   *
   */
  /**
   * Since this question is asking we can generate the nums
   * NOT in how many ways we can generate nums once we get our answer we exit early
   * with either true or false
   *
   *
   */
  if ((targetSum = 0)) {
    return true;
  }
  /**
   *Why do we return false if we hit a negative num
  since we can not have a negative num in the
  array once we hit a negative value we can never find the answer again
  Eg. target = 4; array = [3, 1];
  // this drawing is NOT accurate it does not show the tree just attemmpts a point. To really get the full effect see the note where i made the  drawing 
  item 4: first iteration:  target - num = 4 - 3 = 1 --> does not return anything loop continues
  item 4: second iteration: target - num = 1 - 3 = -2 --> returns false. Loop exits

   // Assuming the array could have negative values. Eg. target = 4; array = [3, -2]; we would still continue the loop.  Since the answer could still exist

  item 1: first iteration:  target - num = 1 - 1 = 0

   */

  if (targetSum < 0) {
    return false;
  }
  // Each time we have the options of using all the items in the array
  for (const num of nums) {
    const remainder = targetSum - num;
    // if we call canSum and it returns false
    //
    if (canSum(remainder, nums) === true) {
      return true;
    }
  }
  //   we are returning false after the for loop.
  // We try all values in the array if nothing is found we return false
  // target = 8; array = [3, 4];
  // w
  return false;
};
