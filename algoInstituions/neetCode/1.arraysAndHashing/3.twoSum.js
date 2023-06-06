// reference note Jan, 2022: book1 page 1 and book2 page 5
// timeComplexity is:  0(N)
/**Tutorial Note
 * Intro explanation
 * Question explanation
 * Brute force solution
 * Complement solution
 * Two pointers
 * 
 * 
 * 
 * 
 * Intro explanation
 * Hi Guys. Welcome to my Tutorial on leetcodes Two sum. This is part of my seiries going through the neetcode algorithim questions.
 * Algorithms is  about patterns to solve problems.
 * This question is a very popular and rightly so since it can be solved using different algorithim patterns.
 * In this video I would go through three ways to solve this problem. I would use the 
 * 1. using the brute force approach. Which uses a loop within a loop
 * 2. using complements
 * 3. using two pointer
 * 
 * Links to the question and solution would be provided in the description.
 * 
 * 
 * 
 * 
 * 
 * Question
 * The question is
 * Given an array of integers nums and an integer target return integers of the the two numbers such that they add up to target.
 * In essence we are given a function called TwoSum the function would have two parameters nums and target
 * 
 * 
 * Constraints 
 * 
 * 
 * 
 * Brute force solution
 * Time Complexity
 * 
 * 
 * Complement solution
 * Time Complexity
 * 
 * 
 * 
 * Two pointers
 * Time Complexity
 * 
 * 
 * 
 * 
 * 
 * 
 */
// timeComplexity is:  0(N)
function twoSumBruteForce(nums, target) {

   for (let index = 0; index < nums.length - 1; index++) {

     for (let j = index + 1; j < nums.length; j++) {
       if (nums[index] + nums[j] === target) {
         return [index, j];
       }
     }

   }
}
// timeComplexity is:  0(N)
function twoSumComplement(nums, target) {
  const previousNums = {};
  for (let index = 0; index < nums.length; index++) {
    const indexOfNum = previousNums[target - nums[index]];
    if (indexOfNum != null) {
      return [indexOfNum, index];
    }
    previousNums[nums[index]] = index;
  }
}
function twoSumTwoPointers(arr, target) {
  //Note: this solution works only on sorted array items
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) {
      return [left + 1, right + 1];
    }
    sum < target ? left++ : right--;
  }
}
// timeComplexity is:  0(N^2)
function twoSumBruteForceComment(nums, target) {
  // Go through the whole array(don't include the last item). Because I am to compare it with all subsequent items and if you do j+1 it would be undefined
  for (let index = 0; index < nums.length - 1; index++) {
    // For each item, go through all subsequent items. For each subsequent item sub it with the item with it.
    // if the sum is the target return that index and the subsequent items index
    /**
     * example 1:
       nums = [ 3, 4, 1]; target = 5.
       you start at 3, sum 3 + 4 = 7, then sum 3 + 1 = 4
       you move to 4, sum 4 + 1 = 5. then you the index of 4 and the index of 1. since 5 is our target

       example 2:
       nums = [ 3, 4, 1]; target = 9
       you start at 3, sum 3 + 4 = 7, then sum 3 + 1 = 4
       you move to 4, sum 4 + 1 = 5. 
       //you end here you do not move to item 1. that is index 2. Because the inner loop is to start at an index after i. which would have being 2+1=3 and there is no index 3. 
       // secondly from the last item there is no number after it so there is no reason why you should go that number.
     *  */

    for (let j = index + 1; j < nums.length; j++) {
      if (nums[index] + nums[j] === target) {
        return [index, j];
      }
    }
  }
}
// timeComplexity is:  0(N)
function twoSumComplementExplanation(nums, target) {
  const previousNums = {};
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];

    /**
     * target - element = complement
     *   9    -    4    =     5
     * Approach: you can get the complement of a number by subtracting that number from the target.
     * 9  is the target number.
     * 4 is the current element we are at.
     * 5 is the complement required to have a match. So we check if we have seen the  complement (the number 5) previously if yes we have our answer.
     * if we have not seen the complement (the number 5). then we save the element (the number) in the harshmap
     *
     */
    const complement = target - element;

    /** index2 = previousNums[complement]
     *  nums = [5, 4, 2, -1, 3]
     * target =  8
     * iteration:
     * 1. previousNums = {};                        complement = 8 - 5  = 3; index2 = undefined;
     * 2. previousNums = {5: 0};                    complement = 8 - 4  = 4; index2 = undefined;
     * 3. previousNums = {5: 0, 4: 1};              complement = 8 - 2  = 6; index2 = undefined;
     * 4. previousNums = {5: 0, 4: 1, 2: 2};        complement = 8 - -1 = 9; index2 = undefined;
     * 5. previousNums = {5: 0, 4: 1, 2: 2, -1: 3}; complement = 8 - 3  = 5; index2 = 0;// we attempt to access key '5' value which is 0;
     */
    const index2 = previousNums[complement];
    if (previousNums[element] !== undefined) {
      // if the item is found. Return an array with the item found value and the index
      return [index2, index];
    }
    // using square bracket like this is assigning the value on the right side to the property element
    // eg. previousNums[5] = 0; would make previousNums = {5: 0}
    // we are storing the index of the element because it is the index we are to return as the answer when we find the complement
    previousNums[element] = index;
  }
}
// timeComplexity is:  0(N)
function twoSumTwoPointersExplanation(arr, target) {
  /** left_pointer + right_pointer > target ? right_pointer-- : left_pointer++
   * Approach: if the array is sorted you can have two pointers one at the end and another at the beginning of the array.
   * if the sum of the elements at pointer1 and element at pointer2 is greater than the target. then you move pointer2 backwards. This so to reduce the sum.
   * and if the sum is less than the target you move pointer1 forward to increase the sum.
   * We are trying to get to the target if our sum is more than the target then we need to reduce our sum
   * arr = [1,3,4,5,7,10,11]; target = 9;
   *        |             |
   *    left_pointer    right_pointer
   *  1 + 11 = 12// 12 > target therefore we reduce right_pointer--
   *
   */
  let left = 0;
  let right = arr.length - 1;
  // we stop the operation when left is greater than or equal to right
  // first left would be less than right.  for example left = 0; right = 1;
  // if left increases to 1. 1 is equal to 1 this would not run since left is required to be less than right and can not be equal
  // if right reduces to 0 the while loop would not run since it right is required to be greater than left
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) {
      return [left + 1, right + 1];
    }
    if (sum < target) {
      left++;
    }
    if (sum > target) {
      right--;
    }
  }
}
const ans = twoSum([11, 15, 2, 7], 9);
