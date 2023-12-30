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


/**Question Explanation
 * containsDuplicate is a predicate function.
 * Predicate function are functions that return either TRUE or FALSE.
 * We use the containsDuplicate function to check if the input array has duplicated values
 * and return true if there are duplicated values.
 * 
 * example: [1, 1, 2] should return true as it contains duplicated value since one is a duplicate.
 * example: [1, 2, 4] should return false as it does not contain duplicated values.
 */
// hashing: O(N)
function containsDuplicateHashing(nums) {
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
function containsDuplicateSet(nums) {
  const elements = new Set(nums);
  // return elements.size === nums.length ? false : true;
  return elements.size < nums.length;
}

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
function containsDuplicateSetTwi(nums) {
    const unique = [...new Set(nums)];
    const ans = nums.length != unique.length;
}


// ---------------------------------------------------EXPLANATTION---------------------------------------------------
// hashing: O(N)
function containsDuplicateHashingExplanation(nums) {
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
function containsDuplicateSetExplanation(nums) {
  /**
   * Approach:
   * Insert all elements from the array into the HashSet. After all insertions,
   * compare the size of the HashSet with the size of the array.
   * If the HashSet size is smaller, return true to indicate a duplicates exists. 
   * else return fasl
   * 
   * 
   * A HashSet does not allow duplicate values. 
   *  example: [1, 1, 1] would be {1} in the set 
   * 
   * So when you add all elements to a HashSet 
   * elements that appear multiple times in the array would only appear once in the harshset
   * as such if ther were duplicate values the harshset length would be less than the array length.
   * if there are no duplicates the harshset length would be same as the array length
   * 
   * We compare the size of the harshset with the size of the array
   * If the sizes are different, that is the hasrshet is smaller
   *  then there were duplicated values that were removed from the array. so we return true, that indeed there were duplicates
   * if the harshset and the array are of same length we return false that there was no duplicated values
   */
  // Create a set. Sets can only have unique values
  // example: [1, 1, 1] would be {1} in the set
  const elements = new Set();
  // check the length of the hash
  // An object's length can be obtained by calling the Object.keys() method and accessing the length property of the returned array: Object.keys(obj).length
  // You can get a sets size(that is length) with set.size
  const hashSize = elements.size();

  // If the length of the hash is same as the length of the numbers array return true
  // The logic is that since sets can only have unique values
  // example: [1, 1, 1] would be {1} in the set
  // we compare the length of the set with the length of the array.
  // If there was repeated values the length of the nums array would be more than the set
  return hashSize < nums.length;

  //  alternative way to write the check
  /**
    if (hashSize < nums.length) {
    return true;
   } else {
    return false;
   }
  //  alternative way to write the check
  /** 
   return nums.length >  hashSize;  
  */
  //  alternative way to write the check
  /** 
   return hashSize !== nums.length;  
  */
}


function containsDuplicateBruteForceExplanation(nums) {
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

function containsDuplicateSetTwoExplanation(nums) {
 /**
  * We first create a set out of the array. new Set(nums) 
  * this would contain only the unique numbers and has no repeats
  * example 
  * console.log(new Set([1, 2, 1, 1, 1])) 
  * outputs: 
  * Set(2) {1, 2}
  * 
  * Finally all that is left is to convert the set to type of array.
  * We can use the spread operator to create an array from a set, the syntax is:
  * [...]
  * You have an array and spread out the individual values from the set
  * 
  * combining it together
  * const unique = [...new Set(nums)]
  * 
  * example: 
  * nums = [1, 3, 4, 3, 1]
  * const unique = [...new Set(nums)]
  * 
  * console.log(unique);
  * output:====> [1, 3, 4]
  * Unique now contains all the unique values of the nums array.
  * The reason for converting the set into an array is that we can access the .length property 
  * and there is no need for that since the set has .size() that gives us the length of a set.
  */
    const unique = [...new Set(nums)];
    /** Compare the length of nums array and  the unique values of the nums array
     * If the unique values of nums array is less than the nums array that means there were repeated values
     * If the unique values of nums array is sane size as  the nums array that means there were NO  repeated values
    if there are duplicates the original array and the set array  would be equal. 
    example: 
    nums   = [1, 1, 1, 1, 1]
    unique = [1]
    nums.length > unique.length
    2 > 1
    answer: TRUE
    This means yes it contains duplicates
    if the origninal array is has more items than the unique array it means their were duplicates that were removed



    if there are NO duplicates the two lengths would be equal example
    example: 
    nums   = [1]
    unique = [1]
    nums.length > unique.length
    1 > 1
    answer: FALSE
    This means it does NOT contains duplicates
    if the origninal array is the same as the unique array it means their were NO duplicates found, it should return
    false, that is indeed it does not contain any duplicate
    containsDuplicate is like does it contain duplicate? NO 
    In this case no it does not. since the original array and the array containing unique values are of same length
     */
    const ans = nums.length > unique.length;
}
