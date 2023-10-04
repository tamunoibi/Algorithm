// See: concepts/searchAlgorithims/binarySearch.js

/**
 * Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. 
 * If target exists, then return its index. Otherwise, return -1.
 * You must write an algorithm with O(log n) runtime complexity.
 * 
 * Example 1:
 * Input: nums = [-1,0,3,5,9,12], target = 9
 * Output: 4
 * Explanation: 9 exists in nums and its index is 4
 * 
 * Example 2:
 * Input: nums = [-1,0,3,5,9,12], target = 2
 * Output: -1
 * Explanation: 2 does not exist in nums so return -1
 */
/**
 * 
 * Tip: 
 * Binary means two.
 * We divide the array into two.
 * Left and right
 * I always use an array containing two items to test my answer. Example: [1, 2]
 *  then I find 1, 2, and a non existent number.
 * 
 * For extra testing I can also test with one item in the array as this is an odd test. 
 * b. I  test with odd numbers [1] : then I find 1, 2, and a non existent number.
    
 */
search([1, 2, 3, 4, 5, 6, 7, 8, 9], 9);
