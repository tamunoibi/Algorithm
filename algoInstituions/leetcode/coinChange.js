/**
 * Question: https://leetcode.com/problems/coin-change/
You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.
Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
You may assume that you have an infinite number of each kind of coin.
Example1:
Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1

Example2:
Input: coins = [2]
amount = 3
Output: -1

Example 3:
Input: coins = [1]
amount = 0
Output: 0
 */
/**
 * @param {array of numbers} coins
 * @param {number} amount
 * @returns
 */

const coinChange = (coins, amount) => {
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (index - coin >= 0) {
        dp[index] = Math.min(dp[index], dp[index - coin] + 1);
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};
const coinChangeComment = (coins, amount) => {
  function isCoinBigComment(index) {
    for (const coin of coins) {
      //  console.log(coins, coin);
      // coins: [ 1 ]
      // coin: 1
      //   Why am I checking if index - coin is greater or equal to 0.
      if (index - coin >= 0) {
        // dp[i] represents the least amount of coins that can make the value equals to the i. Huh?
        // Why am I changing dp[index]
        // why am I updating dp[index] and with what am I updating it. 
        dp[index] = Math.min(dp[index], dp[index - coin] + 1);
      }
    }
  }
  // dp is an array filled with infinity values Infinity. Infinity is the largest number
  // we add more than the amount because the array is 0 based.
  // if the amount is 0, then the answer is 0. since there is no coin to be added
  const dp = Array(amount + 1).fill(Infinity);
  // example: coinChangeComment([1], 1)
  // console.log(dp);
  //   [Infinity, Infinity];
  dp[0] = 0;
  // console.log(dp);
  // [ 0, Infinity ]

  for (let i = 1; i <= amount; i++) {
    //  console.log(i);
    // 1

    isCoinBigComment(i);
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};
console.log({ ans: coinChange([1], 11) });
