/**
 * Question:
 * Write a function `howSum(targetSum, nums)`
 * that takes in a targetSum and an array of numbers as argument.
 * The function should return an array containing any cominantion of elements that add up to
 * exactly the targetSum. If there is no combiantion that adds up to the targetSum then return null
 * If there are multiple combinations possible you may return any single one
 *
 * Reference:
 *  Alvins course on recursion : https://www.youtube.com/watch?v=oBt53YbR9Kk&t=3620s
 *  leetcode:
 * Test Cases:
   console.log(howSum(7, [2, 3])); // 3, 2, 2
   console.log(howSum(7, [5, 3, 4, 7 ])); // 4, 3
   console.log(howSum(7, [2, 4])); // null
   console.log(howSum(8, [2, 3, 5])); // 2, 2,  2, 2
   console.log(howSum(300, [17, 14])); //  null ----> this case would help test the need for memoization
 */
const howSum = (targetSum, array) => {
  // base case: We have found a valid combinationn
  if (targetSum === 0) {
    return [];
  }
  // base case: it is no longer possible to generate the number
  if (targetSum < 0) {
    return null;
  }

  // recursive case:
  for (const number of array) {
    const remainder = targetSum - number;
    const remainderResult = howSum(remainder, array);
    // if an answer is found.
    if (remainderResult !== null) {
      // This is the part that is a bit confusing
      // how did we get back a valid result.
      return [...remainderResult, number];
    }
  }
  return null;
};
const howSumMemo = (targetSum, array, memo = {}) => {
  if (targetSum in memo) {
    return memo[targetSum];
  }
  if (targetSum === 0) {
    return [];
  }
  if (targetSum < 0) {
    return null;
  }

  for (const number of array) {
    const remainder = targetSum - number;
    const remainderResult = howSum(remainder, array, memo);
    if (remainderResult !== null) {
      memo[targetSum] = [...remainderResult, number];
      return memo[targetSum];
    }
  }
  memo[targetSum] = null; 
  return null;
};
