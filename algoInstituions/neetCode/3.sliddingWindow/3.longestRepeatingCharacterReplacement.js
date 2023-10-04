// O(26N) which is O(N)
function longestRepeatingCharacter(str) {
  const count = {};
  let result = 0;

  for (let right = 0; right < str.length; right++) {
    const countsValue = count[string[right]] || 0;
    count[string[right]] = 1 + countsValue;

    const windowLength = right - left + 1;

    while (windowLength - Math.max(...Object.values(count)) > k) {
      count[string[left]] -= 1;
      left++;
    }
    result = Math.max(result, windowLength);
  }
}
function longestRepeatingCharacterTwo(str) {
  const count = {};
  let result = 0;
  //   we create a value maxFrequecy
  //Question: how are we even using this
  let maxFrequency = 0;

  for (let right = 0; right < str.length; right++) {
    const countsValue = count[string[right]] || 0;
    count[string[right]] = 1 + countsValue;
    // update the maxFrequency
    maxFrequency = Math.max(maxFrequency, count[s[r]]);

    const windowLength = right - left + 1;


    // use the maxFrequency value instead of calcualting it afresh everytime
    while (windowLength - maxFrequency > k) {
      count[string[left]] -= 1;
      left++;
    }
    result = Math.max(result, windowLength);
  }
  return result;
}
// O(26N) which is O(N)
function longestRepeatingCharacterExplanation(str) {
  /** TIME COMPLEXITY In DETAIL EXPLAINING CONTANT TIMES 
   * Time Complexity:  O(26N)
   * O(26N) read as Big O of 26 times N
   * 26N = 26 * N
   * This is a principle you learnt in mathmatics
   * 5P is 5*P. 6Q is 6 times Q
   *
   *
   * What is N
   * N is the length of the string. Example string is 'Apple'
   * N = 5
   *
   * Why the time complexity involves 26
   * Because there are 26 characters in the Enlgish alphabet. a-z
   *
   * 26 * N
   *  how it  becomes 26*N
   * It is this line that is involved: object.values(count)
   * object.values(count) is like going through all the character from a to z
   * this is done for each iteration
   * if we have 5 character for each character it would go ATMOST 26 times
   * str = 'apples'
   * str  has 5 unique characters
   * {a: 1, p: 2, l: 2, e: 1}
   * When we are on the last item s we would have to go through count which has 4 characters currently.
   * then we determine that s is not found and we add s.
   * {a: 1, p: 2, l: 2, e: 1, s: 1}
   * so we on this iteration we looped 4 times
   * Rember time complexity deals with the maximum we can go.
   * The maximum we can go is 26 times. Let me show this
   * 
   * 
   * In a word that has all the characters of the alphapet:
   * eg. 'abcdefghijklmnopqrstuvwxyzz'
   * str has 26 unique characters
   * When we are on the last item z we would have to go through count which has 26 characters currently.
   * then we determine that z is not found.
   * {a: 1, p: 2, l: 2, e: 1, s: 1}
   * so we on this iteration we looped 26 times
   *
   * while (windowLength - Math.max(...Object.values(count)) > k)
   * is it the while that is running 26 times? NO
   * or is it the part of finding the maximum count(...Object.values(count)). YES
   * object.value() is a loop just like forEach() and map
   * it goes through all the objects count values.
   * The objects values are ATMOST 26
   * a
   * b
   * c
   * d
   * .
   * .
   * .
   * y
   * z
   * This is a recurrent pattern when dealing with numbers
   * I disagree with it. I feel that we should do O(count.length * N)
   * what of when we deal with words?
   * are they not somehow already known? they can be billions
   * What of when we deal with number permutaions
   *
   *
   *
   *
   * How does O(26 * N ) become (N)
   * It is because when calculating time complexities we ignore constants.
   * constants are fixed numbers like 1, 2 3.
   * This is how programmers say it but I don't see how that is expalnatory.
   *
   * we ignore additions, subtractions, multiplications, exponents that are constant N.
   *
   * This is better understood with examples.
   *
   * Example One:
   * 2N is rounded to N
   * for(let i = 0;  < arr.length; i++) {}
   * for(let i = 0;  < arr.length; i++) {}
   * Here the we loop through the array two times. But it can rounded to N
   *
   *
   *
   * Example Two:
   * N - 1 is rounded to N
   * Here the loop does not actually get to the end of the array.
   * Rather it stops at one less than the array.
   * for(let i = 0;  < arr.length - 1; i++) {}
   *
   *
   *
   * Example Three:
   * N + 1 is rounded to N
   * Here the loop runs one more than the array but it is rounded to N.
   * Rather it stops at one less than the array.
   * for(let i = 0;  < arr.length + 1; i++) {}
   *
   *
   *
   * Example FOUR:
   * N - 1 is rounded to N
   * Here the loop does not actually get to the end of the array.
   * Rather it stops at one less than the array.
   * for(let i = 0;  < arr.length - 1; i++) {}
   *
   * Example FIVE:
   * N ^ 2 CAN NOT be rounded to neither N nor M
   * A loop within a loop,
   *      for(let i = 0;  i < arr.length - 1; i++) {
   *            for(let i = 0; i 5; i++)
   *       }
   *
   *
   *
   * Example SIX:
   * 2N is rounded to N even if we use a while loop
   * function runSizeTimes(arr) {
   * const size = 100;
   *   // since we are looping a constant number of times.
   *   while(size >= 0) {
   *      for(let i = 0;  < arr.length - 1; i++) {}
   *   }
   * This is still O(N) and NOT O(26N) because size is fixed to 100.
   * that is it is a constant. It is not changing.
   * the user can not enter a new value
   *
   *
   *
   * Changing values can not be rounded
   *
   * Example One:
   * M * N CAN NOT be rounded to neither N nor M
   * Here the loop runs the length of the array,  m times
   *
   * // O(N*M)
   * function runSizeTimes(arr, size) {
   *   // since size is a variable(not a constant) we must account for it
   *   while(size >= 0) {
   *      for(let i = 0;  < arr.length - 1; i++) {}
   *   }
   * }
   * runSizeTimes([2, 3, 4], 2)
   * note:
   * N = arr.length;
   * m = size;
   *
   *
   * Example Two:
   * N ^ N CAN NOT be rounded to neither N nor M
   * A loop within a loop,
   *      for(let i = 0;  < arr.length - 1; i++) {
   *            for(let i = 0;  < arr.length - 1; i++)
   *       }
   *
   *
   *
   * Example One:
   * N ^ M CAN NOT be rounded to either N nor m
   * Here the loop does not actually get to the end of the array.
   * Rather it stops at one less than the array.
   * for(let i = 0;  < arr.length - 1; i++) {}
   *
   *
   */

  /**
   * This is would be used as a harsh map to count the occurrence of each character.
   * Example 'APPLE'
   * count: {A: 1, P: 2, L:1, E: 1}
   */
  const count = {};

  /**the left pointer is going to start at zero
   * that is the starting point of the window is the first item
   *
   *   str =   'A P P L E'
   *            ^
   *            |left = 0;
   */
  let result = 0;

  // the right is going to go through every character in our string
  for (let right = 0; right < str.length; right++) {
    /** Give me the number of times the character has appeared in the count  or 0 if that character has not appeared
     * str =  'AA'
     *
     * Example One:
     *   str =   'A A'
     *            ^
     *            |right = 0;
     *  countsValue =  0
     * Explanation:
     * count starts out as an empty object {}.
     * That means count['A'] is undefined.
     * Therefore we set it to 0.
     * The formular is either the value of count['A'] if it exits or 0 if it does not exit
     *
     *
     * Iteration Two:
     *   count = {A: 1}
     *     str =   A A
     *               ^
     *               |right = 1;
     *  countsValue = 1
     *
     */
    const countsValue = count[string[right]] || 0;

    /** We are increasing the occurance of each chracter we see by one
     * Example
     * str =  'APPLE'
     *
     * Iteration One:
     *   str =   'A P P L E'
     *            ^
     *            |right = 0;
     *  count: {A: 1}
     * Explanation:
     * count starts at {}.
     * That means count['A'] is undefined
     * The formular is either the value of count['A'] if it exits or 0 if it does not exit
     * The reason to change it to 0 is we are trying to create a hash table
     * if we see a repeat character we increase it by 1. if we see a new character we make it 1.
     *
     * count['A'] = 1 + 0;
     * count['A'] = 1;
     *
     *
     * Iteration Two:
     *   str =   A P P L E
     *             ^
     *             |right = 1;
     * count: {A: 1, P: 1}
     *
     * Iteration Three:
     *   str =   A P P L E
     *               ^
     *               |right = 2;
     * count: {A: 1, P: 2}
     *
     * Iteration Four:
     *   str =   A P P L E
     *                 ^
     *                 |right = 3;
     * count: {A: 1, P: 2, L: 1}
     *
     * Iteration Five:
     *   str =   A P P L E
     *                   ^
     *                   |right = 4;
     * count: {A: 1, P: 2, L: 1: E: 1}
     */
    count[string[right]] = 1 + countsValue;

    /**
     * Example:
     * window length = right - left + 1;
     * Note we add 1 because the length is 1based whereas index are zero based.
     *                   |left = 0
     *                    a b c d e f g g g
     *                                ^
     *                                |right = 6
     *                   Ans: 5 (There are 5 characters in the window. 6 - 0 + 1 = 5)
     *
     *
     * This is explained in detail in .../Users/tamunoibi/Documents/workspace/Algorithm/algoInstituions/neetCode/3.sliddingWindow/2.longestSubstringWithoutRepeatingCharacters.js
     */
    const windowLength = right - left + 1;

    /**The check: while (windowLength - Math.max(...Object.values(count)) > k)
     * we reduce the window if WE HAVE EXCEEDED THE ALLOWED CHANGES
     *
     *
     *
     * Example:
     * str   = 'APPLE'
     * k     = 2
     *
     * Iteration One:
     * left  = 0
     * right = 0
     * count = {A: 1}
     *
     *  str  =     A   P   P   L   E
     *             ^^
     *             ||left & right = 0
     * ShortenWindow                    = numberOfStringsToChangeInWindow > k
     * ShortenWindow                    =        1                        > 2
     * ShortenWindow                    =       NO
     * k is 2.  numberOfStringsToChangeInWindow is 1. 1 is less k.
     * Do NOT shorten the window
     *
     *
     *
     *
     * Iteration Two:
     * left  = 0
     * right = 1
     * count = {A: 1, P: 1}
     *
     *  str  =     A   P   P   L   E
     *             ^   ^
     *             |   |right = 1
     *       left= 0
     * numberOfStringsToChangeInWindow  =  windowLength - characterWithHighestCount
     * numberOfStringsToChangeInWindow  =        2      -            1              = 1
     *
     * ShortenWindow                    = numberOfStringsToChangeInWindow > k
     * ShortenWindow                    =        1                        > 2
     * ShortenWindow                    =       NO
     * k is 2.  2 is equal to k.
     * So we don NOT shorten the window
     *
     *
     *
     * Iteration Three:
     * left  = 0
     * right = 2
     * count = {A: 1, P: 2}
     *
     *  str  =     A   P   P   L   E
     *             ^       ^
     *             |       |right = 2
     *         left= 0
     * numberOfStringsToChangeInWindow  =  windowLength - characterWithHighestCount
     * numberOfStringsToChangeInWindow  =        3      -            2              = 1
     *
     * ShortenWindow                    = numberOfStringsToChangeInWindow > k
     * ShortenWindow                    =        1                        > 2
     * ShortenWindow                    =       No
     * k is 2.  2 is equal to k. so we don NOT shorten the window
     *
     *
     * Iteration Four:
     * left  = 0
     * right = 3
     * count = {A: 1, P: 2, L: 1}
     *
     *  str  =     A   P   P   L   E
     *             ^           ^
     *             |           |right = 3
     *         left= 0
     * numberOfStringsToChangeInWindow  =  windowLength - characterWithHighestCount
     * numberOfStringsToChangeInWindow  =        3      -            2              = 1
     *
     * ShortenWindow                    = numberOfStringsToChangeInWindow > k
     * ShortenWindow                    =        1                        > 2
     * ShortenWindow                    =       NO
     * k is 2.  2 is equal to k. so we don NOT shorten the window
     *
     *
     *
     *
     * Iteration Five:
     * left  = 0
     * right = 4
     * count = {A: 1, P: 2}
     *
     *  str  =     A   P   P   L   E
     *             ^               ^
     *             |               |right = 4
     *         left= 0
     * numberOfStringsToChangeInWindow  =  windowLength - characterWithHighestCount
     * numberOfStringsToChangeInWindow  =        4      -            1              = 3
     *
     * ShortenWindow                    = numberOfStringsToChangeInWindow > k
     * ShortenWindow                    =        3                        > 2
     * ShortenWindow                    =       YES
     * k is 2.  3 is greater than k. so shorten the window
     */

    // before we update the result we want to make sure the window is valid if the window is not valid shorten the window
    // QUESTION: are you sure having a variable windowLength would not be give you old saved values?
    // we changed the values of left. You should calculate it on the fly
    while (windowLength - Math.max(...Object.values(count)) > k) {
      // Reduce the count of that the character to the left
      count[string[left]] -= 1;
      // increment the left pointer. To reduce the window
      left++;
      /**To shorten the window length
       * str   = 'APPLE'
       * k     = 2
       *
       * Note iteration 1 to 4 is above. I am showing only 5 here as it relates to this part
       * Iteration Five:
       * left  = 0
       * right = 4
       * count = {A: 1, P: 2, L: 1: E: 1}
       *
       *  str  =     A   P   P   L   E
       *             ^               ^
       *             |               |right = 4
       *         left= 0
       *
       * numberOfStringsToChangeInWindow  =  windowLength - characterWithHighestCount
       * numberOfStringsToChangeInWindow  =        4      -            1              = 3
       *
       * ShortenWindow                    = numberOfStringsToChangeInWindow > k
       * ShortenWindow                    =        3                        > 2
       * ShortenWindow                    =       YES
       * k is 2.  3 is greater than k. so shorten the window
       *
       * How to shorten the window
       * To shorten the widow
       * 1. move the left one step forward
       * 2. Remember to reduce the count of that character.
       *
       *
       * 1. move the left one step forward
       *  str  =     A  P  P  L  E
       *                ^
       *              |/
       *             left= 1
       *          we moved left from 0 to one
       *
       *
       * 2. Reduce the count of that character.
       * OLD Count
       * count
       *  A : 1
       *  P : 2
       *  L : 1
       *  E : 1
       *
       * NEW Count
       * count
       *  A : 0    ---->we change it from 0 to 1
       *  P : 2
       *  L : 1
       *  E : 1
       *
       */
    }
    /**
     * We are updating the result with either the result or the size of the current window whichever is bigger
     */
    result = Math.max(result, windowLength);
  }
}
