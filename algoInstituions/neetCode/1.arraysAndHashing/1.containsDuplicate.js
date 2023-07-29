/**
 * Question:
 * Given an integer array nums,
 * return true if any value appears at least twice in the array, and return false if every element is distin
 *
 * Example One:
 * Input: nums = [1,2,3,1]
 * Output: true
 *
 * Example Two:
 * Input: nums = [1,2,3,4]
 * Output: false
 */
// Brute force: O(N^2) this is not efficient
function containsDuplicateBruteForce(nums) {
  for (let index = 0; index < nums.length; index++) {
    for (let j = 0; j < nums.length; j++) {
      const element = nums[index];
      const otherElement = nums[j];
      if (j != index && element === otherElement) {
        return true;
      }
    }
  }
  return false;
}
// hashing: O(N)
function containsDuplicateHashingOne(nums) {
  const previousNums = {};
  for (let index = 0; index < nums.length; index++) {
    if (previousNums[nums[index]]) {
      return true;
    }
    previousNums[nums[index]] = true;
  }
  return false;
}

// hashing: O(N)
function containsDuplicateHashingTwo(nums) {
  const elements = new Set(nums);
  // return elements.size === nums.length ? false : true;
  return elements.size < nums.length;
}

// Brute force: O(N^2) this is not efficient
function containsDuplicateExplanation(nums) {
  /**
   * Approach:
   * Go through each item in the array
   * and for each item go through every other item.
   * If a repeat is found immediately terminate and return false
   * if we get to the end of the array return true.
   * TODO: make this visualization better
   *
   *
   *      nums =     1          2          3          1
   *                 ^          ^          ^          ^
   *                 |1,2,3,1   |1,2,3,1   |1,2,31    |1,2,3,1
   *
   *
   *
   * Another Way to loop is:
   * instead of looping from beginning end you make the inner loop go through the remaining elements
   * for(let j = i+1; j < arr.length; i++)
   *
   *      nums =     1          2          3          1
   *                 ^          ^          ^          ^
   *                 |2,3,1     |3,1       |1         |
   * we are comparing the current element with all subsequent elements
   */

  // create a loop
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];

    // create an inner loop
    // alternative way of creating an inner loop
    // for (let j = i+1; j < nums.length; j++) {
    for (let j = 0; j < nums.length; j++) {
      const element = nums[j];

      // check that we are not on the current element
      if (nums[i] === nums[j] && i !== J) {
        return true;
      }
    }
  }
  return false;
}
// hashing: O(N)
function containsDuplicateHashingOneExplanation(nums) {
  /**
   * Approach:
   * Iterate through each element in the array and try to insert it
   * into the HashSet. If the element already exists
   * in the HashSet, return true to indicate a duplicate was found.
   */
  const previousNums = {};
  for (let index = 0; index < nums.length; index++) {
    if (previousNums[nums[index]]) {
      return true;
    }
    previousNums[nums[index]] = true;
  }
  return false;
}

// hashing: O(N)
function containsDuplicateTwoExplanation(nums) {
  /**
   * Approach:
   * Insert all elements from the array into the HashSet without
   * checking for duplicates during this process. After all insertions,
   * compare the size of the HashSet with the size of the array. If
   * the HashSet size is smaller, return true to indicate a duplicate
   * exists.
   * 
   * A HashSet does not allow duplicate values. So you
   * could add all elements to the HashSet and then compare its size to the
   * size of the array. If the sizes are different, then there must have been a
   * duplicate in the array.
   */
  // Create a set. Sets can only have unique values
  // example: [1, 1, 1] would be {1} in the set
  const elements = new Set();
  // check the length of the hash
  // An object's length can be obtained by calling the Object.keys() method and accessing the length property of the returned array: Object.keys(obj).length
  // You can get a sets size(that is length) with set.size
  const hashSize = elements.size;

  // If the length of the hash is same as the length of the numbers array return true
  // The logic is that since sets can only have unique values
  // example: [1, 1, 1] would be {1} in the set
  // we compare the length of the set with the length of the array.
  // If there was repeated values the length of the nums array would be more than the set
  return hashSize === nums.length;
  if (hashSize === nums.length) {
    return true;
  } else {
    return false;
  }

  //  You could also write it like this:
  // if (hashSize > nums.length) {
  //   return true;
  // } else {
  //   return false;
  // }
}
