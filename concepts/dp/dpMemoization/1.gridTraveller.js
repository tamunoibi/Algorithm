/**
 * Question:
 * Say that you are a traveler on a 2D grid.
 * You begin in the top-left corner and your goal is to travel to the bottom-right corner. You may only move down or right
 * In how many ways can you travel to the goal on a gird with dimension m*n
 * 
 * 
 * Reference: Alvins course on recursion
 *  Alvins course on recursion : https://www.youtube.com/watch?v=oBt53YbR9Kk&t=3620s
 *  leetcode: https://leetcode.com/problems/unique-paths/
 * 
 * Test Cases: 
   gridTraveler(1,1) //  1
   gridTraveler(2,3) //  3
   gridTraveler(3,2) //  3
   gridTraveler(3,3) //  6
   gridTraveler(18,18) //  2333606220 ---> ---> this would be really slow without memoization and shows the need for speed 
 */
const gridTraveler = (m, n) => {
  if (m === 1 && n == 1) return 1;
  if (m === 0 || n == 0) return 0;

  return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
};
const uniquePathsMemo = (m, n, memo = {}) => {
  const key = m + "," + n;
  if (m === 1 && n == 1) return 1;
  if (m === 0 || n == 0) return 0;

  if (memo[key]) {
    return memo[key];
  }

  memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
  return memo[key];
};
const gridTravelerComment = (m, n, memo = {}) => {
  /**
   * The questions states: You may only move down or right
   * This means there are two options for the movement:
   * 1. Go right.
   * 2. Go down.
   */

  /**
   * TIME COMPLEXITY:  n ^ m
   *
   * We would describe the time complex in terms of our input.
   * The function has two inputs m and n. That is gridTraveler(m, n)
   * example: gridTraveler(2, 3)
   * m = number of rows in in this example it is 2.
   * n =  number of columns. In this example it is 3.
   *
   * The height of the tree: the maximum distance from the root of the tree to the fartest leaf.
   *  From one case we either decrease 1 from m or 1 decrease 1 from n.  We have a total of at most m + n moves
   * QUESTION:
   * I feel the time complexity should: (m * n) ^ 2: since their in this scenerio their are  gridTraveler(2, 3)
   * The time complexity the tutor gave is: (m + n) ^ 2
   *
   *
   * The branching factor. How does the number of nodes change from one level to another.
   * The maximum branching factor is exactly two. A node would have at most 2 options. From one position of the grid I Either up or down. Either reduce m or reduce n
   * gridTraveler(2, 3)
   * m ^ n
   * 2 ^ 3
   * len:   1----------2----------3
   *        2    *     2     *    2
   *        2          4         16
   *
   */
  const key = m + "," + n;
  if (m === 1 && n == 1) return 1;
  if (m === 0 || n == 0) return 0;

  if (memo[key]) {
    return memo[key];
  }

  memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
  // memo[m] gridTraveler(m - 1, n) + gridTraveler(m, n -1 );
  return memo[key];
};
