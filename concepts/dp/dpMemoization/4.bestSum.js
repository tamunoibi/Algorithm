/**
 * Question:
 * Write a function `bestSum(targetSum, nums)`
 * that takes in a targetSum and an array of numbers as argument.
 * The function should return an array containing the shortest combination of number that add up to exactly the targetSum.
 * If there is no combination that adds up to the targetSum then return null
 * If there are is a tie for the shortest combination you may return any one of them.
 *
 * Reference:
 *  Alvins course on recursion : https://www.youtube.com/watch?v=oBt53YbR9Kk&t=3620s
 *  leetcode:
 *
 * Examples:
 * console.log(bestSum(7, [5, 3, 4, 7])); // [7]
 * Explanation: You could generate 7 either with [3, 4] or just [7]. but the shortest option is [7]
 *
 * console.log(bestSum(8, [2, 3, 5])); // [3, 5]
 * Explanation: You could generate 8 either with [2, 2, 2, 2] or  [2, 2, 3] or  [3, 5]. but the shortest option is  [3, 5]
 *
 *
 *
 * Test Cases:
  console.log(bestSum(7, [5, 3, 4, 7 ])); // [7]
  console.log(bestSum(8,  [2, 3, 5])); // [3, 5]
  console.log(bestSum(8, [1, 4, 5])); // [4, 4]
  console.log(bestSum(100, [1, 2, 5, 25]])); // [25, 25, 25 ] ----> this case would help show the need for memoization as it would take a  long time to run
 */

const bestSum = (targetSum, array) => {
  if (targetSum === 0) {
    return [];
  }
  if (targetSum < 0) {
    return null;
  }
  let shortestCombination = null;

  for (const number of array) {
    const remainder = targetSum - number;
    const remainderCombination = bestSum(remainder, array);
    if (remainderCombination !== null) {
      const combination = [...remainderCombination, number];
      if (
        shortestCombination === null ||
        combination.length < shortestCombination.length
      ) {
        shortestCombination = combination;
      }
    }
  }
  return shortestCombination;
};

const bestSumMemo = (targetSum, array, memo = {}) => {
  if (targetSum in memo) {
    return memo[targetSum];
  }
  if (targetSum === 0) {
    return [];
  }
  if (targetSum < 0) {
    return null;
  }
  let shortestCombination = null;

  for (const number of array) {
    const remainder = targetSum - number;
    const remainderCombination = bestSum(remainder, array, memo);
    if (remainderCombination !== null) {
      const combination = [...remainderCombination, number];
      if (
        shortestCombination === null ||
        combination.length < shortestCombination.length
      ) {
        shortestCombination = combination;
      }
    }
  }
  memo[targetSum] = shortestCombination;
  return shortestCombination;
};
const bestSumComment = (targetSum, array) => {
  //  base case stop when we  find it or it is impossible to find it.
  if (targetSum === 0) {
    return [];
  }
  if (targetSum < 0) {
    return null;
  }
  let shortestCombination = null;

  for (const number of array) {
    const remainder = targetSum - number;
    const remainderCombination = bestSum(remainder, array);
    if (remainderCombination !== null) {
      const combination = [...remainderCombination, number];

      // if the combination is shorter than the current "shortest", update it
      //  shortestCombination === null is to check for the first instance
      if (
        shortestCombination === null ||
        combination.length < shortestCombination.length
      ) {
        shortestCombination = combination;
      }
    }
  }
  return shortestCombination;
};
