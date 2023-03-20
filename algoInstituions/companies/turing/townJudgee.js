// Question: https://leetcode.com/problems/find-the-town-judge/
/**
 *
 * @param {*} trust - Array of arrays
 */
function townJudge(n, trust) {
  let count = new Array(n + 1).fill(0);
  for (const [a, b] of trust) {
    count[a]--;
    count[b]++;
  }
  for (let i = 1; i < n + 1; i++) {
    if (count[i] === n - 1) {
      return i;
    }
  }
  return -1;
}
function townJudgeComment(n, trust) {
  /**
   * Example:
   * townJudge(4, [[1, 3], [1, 4], [2, 3], [2, 4], [4, 3]])
   * n = 4
   * trust = [[1, 3], [1, 4], [2, 3], [2, 4], [4, 3]]
   *
   * count: -> count represents the array pairs. each
   * count = [ 0, 0, 0, 0, 0 ]
   * count is 1 more than  n. Here n is 4 so count is 5. n represents the number of unique values. or put another way the number of people in the town.
   * Note count is one more than n (the n passed as an argument)
   * count is not 1 more than the length of the array. In this case the length of the array is 5. while n is 4. So count is 5.
   *
   *
   */
  //count is an array of zeros. eg: [ 0, 0, 0, 0, 0 ]
  let count = new Array(n + 1).fill(0);

  // We go through trust the trust array and update the count with the matching item.
  // if it is the first item we subtract it from the count.
  // if it is the second item we add it to the count.
  for (const [a, b] of trust) {
    /**
     * This syntax is destructuring assignment. It is used to unpack items from an array and it is cleaner to read
     * const [a, b] of trust
     * const [a, b] = [1, 3]
     * that is a = 1; b = 3.
     * Items in must be in an array in order to destructure it.  example: trust=[40,20] for(const [a, b] of trust){}
     * would produce error:
      TypeError: Invalid attempt to destructure non-iterable instance.
     In order to be iterable, non-array objects must have a [Symbol.iterator]() method.
     *because it is like const [a, b] = 20; this can not work.
     

     * If we had used just used a single variable and it would have being
        for (const item of trust) {
        count[item[0]]--
        count[item[1]]++
     * 
     * Reduces the first item by one and increases the second item by one.
     * Eg.trust =  [[1, 3], [1, 4], [2, 3], [2, 4], [4, 3]]
     *
     * this goes through the trusts array.
     * iteration 1:
     *   trust =  [1, 3]; ->>the first array item
     *   count =  [0, 0, 0, 0, 0];  ->>count was initialized to 5 arrays and filled with zeroes
     *
     *   a = 1;
     *   count[a]--
     *   count[1] = count[1] - 1
     *   count[1] = 0 - 1 =
     *   count[1] = -1
     *
     *   b = 3;
     *   count[b]++
     *   count[3] = count[1] + 1
     *   count[3] = 0 + 1 =
     *   count[3] = 1
     *
     *  // this is the new value of count
     *   count =  [0, -1, 0, 1, 0];  ->>count was initialized to 5 arrays and filled with zeroes. but we reduced item 1 by 1 and increased item 3 by 1.
     *
     * iteration 1: trust [1, 3] = count = [0, -1,  0, 1, 0]
     * iteration 2: trust [1, 4] = count = [0, -2,  0, 1, 1]
     * iteration 3: trust [2, 3] = count = [0, -2,  1, 1, 0]
     * iteration 4: trust [2, 4] = count = [0, -1, -1, 1, 0]
     * iteration 5: trust [4, 3] = count = [0, -1,  0, 3, 0]
     *
     */
    // Reduces the first item of the trust array by one and increases the second item by one.
    count[a]--;
    count[b]++;
  }

  // Go through all the count items. Starting from the second one (index 1)
  // if the item is
  for (let i = 1; i < n + 1; i++) {
    /**
     * Why n - 1
     * We are checking if that particular item has one less follower than n.
     * If the number of people in the town are 4. Including the town judge. To be the town judge
     * you are to have 3 followers. That is the whole town should follow you. Except you
     *
     * Why count[i] === n - 1
     * count cont[i] contains the number of followers for each person
     * if the number of followers is 1 less than the total members of the town. Then we have our town judge.
     */
    if (count[i] === n - 1) {
      /** return the count that is one less than  */
      return i;
    }
  }

  // if no town judge exits then return negative one.
  return -1;
}
townJudgeComment(4, [
  [1, 3],
  [1, 4],
  [2, 3],
  [2, 4],
  [4, 3],
]);
