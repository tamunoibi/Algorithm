/**
 * Explaining subarray: https://www.youtube.com/watch?v=qoI26oy8MeI
 * Sample input subArrays([4, 5, 6]);
 * I have a very detailed note on this
 * Subarrays are chunks of an array.
 * example: [4,5,6]
 * a sub array can be [4,5] or [5,6].
 * even the whole array is also a sub array of itself [4,5,6]
 * It is noteworthy that substrings are also  similar to chunks of strings. And it is exactly the same way to check for a substring as to check for a subarray 'abeaded'
 * 
 * you can't skip numbers. eg.
 * [4,7] is not a valid sub array of [4,5,7]
 * To get all sub arrays. You go from each element and check every subsequent element
 *
 *
 * element 4
 * 4,
 * 45,
 * 456,
 * element 5
 * 5,
 * 5,6
 * element 6
 * 6
 * 
 * Some Questions to practice substrings include:
 * 1. Longest Palindromic Substring:
 * 2. Palindromic Substrings: https://leetcode.com/problems/palindromic-substrings/
 * 3.
 * 4. 
 */
// 
function subArraysComment(arr) {
  const subArr = [];
  for (let index = 0; index < arr.length; index++) {
    for (let j = index; j < arr.length; j++) {
      subArr.push(arr.slice(index, j + 1));
    }
  }
  return subArr;
}



// Go through the array. For each item give me all the possible
// sub-arrays starting at that item
function subArraysComment(arr) {
  const subArr = [];

  for (let index = 0; index < arr.length; index++) {
    for (let j = index; j < arr.length; j++) {
      // Use slice to give me a part of the array
      // How did I know what to pass to slice.
      // I was just guessing and trying. I knew what I wanted to see.
      // example if the array is: [1, 2, 3, 4, 5, 7, 8, 9].
      // when I am at item 4. I want to get
      // item -> 4,               from the array  [1, 2, 3, 4, 5, 7, 8, 9].slice(3, 4);
      // item -> 4, 5             from the array  [1, 2, 3, 4, 5, 7, 8, 9].slice(3, 5);
      // item -> 4, 5, 6          from the array  [1, 2, 3, 4, 5, 7, 8, 9].slice(3, 6);
      // item -> 4, 5,6 7,
      // item -> 4, 5,6 7, 8
      // item -> 4, 5,6 7, 9
      // push that part of the array to the subarray
      subArr.push(arr.slice(index, j + 1));
    }
  }
  return subArraysComment;
}
