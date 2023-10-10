
/**
 * sample input twoSum([11, 15, 2, 7], 9); 
 * output [2, 3]
 */


// --------------------------------------------------------------------------------------------------------------------
//                               BRUTE FORCE
// --------------------------------------------------------------------------------------------------------------------
// timeComplexity is:  0(N^2)
function twoSumBruteForce(nums, target) {

   for (let index = 0; index < nums.length - 1; index++) {

     for (let j = index + 1; j < nums.length; j++) {
       if (nums[index] + nums[j] === target) {
         return [index, j];
       }
     };
   }
}

// --------------------------------------------------------------------------------------------------------------------
//                               COMPLEMENT
// --------------------------------------------------------------------------------------------------------------------
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


// --------------------------------------------------------------------------------------------------------------------
//                               COMPLEMENT ALTERNNATIVE
// --------------------------------------------------------------------------------------------------------------------
// timeComplexity is:  0(N)
function twoSumComplementAlternative(nums, target) {
  const previousNums = {};
  for (let index = 0; index < nums.length; index++) {
    const complement = target - nums[index];
    if (previousNums[complement]) {
      return [previousNums[nums[index]], index];
    }
    previousNums[nums[index]] = index;
  }
}


// --------------------------------------------------------------------------------------------------------------------
//                               TWO POINTER
// --------------------------------------------------------------------------------------------------------------------
// timeComplexity is:  0(N)
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


// --------------------------------------------------------------------------------------------------------------------
//                               CODE  WTH EXPLANATATION
// --------------------------------------------------------------------------------------------------------------------
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
   /**
     * Question: What are the index of the two numbers in the array would sum up to give you 11. ans
     * Exampele: 
     * arr = [1,3,4,6,8,9] target = 11
     * output = 1, 4
     * 4 and 8 sums up to give us 13.
     * 
     * 
     * if the sum of the elements at left and right is greater than the target. 
     * Then you move left pointer forward. This so to increase the sum.
     * While, if the sum is less than the target you move right pointer backward to reduce the sum.
     * We are trying to get to the target if our sum is more than the target then we need to reduce our sum
     * arr = [1,3,4,6,8,9]; target = 11;
     *    
     *                                    
     *         sum is 10 and it is LESS than our target of 11. We should increase our next sum, as such We move the left pointer forward
     *                                               __9___ 
     *                                      __8___   ||  ||  
     *                                      ||  ||   ||  ||
     *                             __6___   ||  ||   ||  ||
     *                             ||  ||   ||  ||   ||  ||
     *                    __4___   ||  ||   ||  ||   ||  ||
     *           __3___   ||  ||   ||  ||   ||  ||   ||  ||
     *           ||  ||   ||  ||   ||  ||   ||  ||   ||  ||
     *  __1___   ||  ||   ||  ||   ||  ||   ||  ||   ||  ||
     *  ||  ||   ||  ||   ||  ||   ||  ||   ||  ||   ||  ||
     * ----------------------------------------------------
     *    0         1        2       3        4         5
     *    ^                                             ^
     *    |                                             |
     *  left= 0                                       right = 5
     * 
     *  sum = 1 + 9 = 10
     *    
     *           
     * 
     *                          
     *         sum is 12 and it is MORE than our target of 11. We should reduce our next sum. as such We move the right pointer backward
     *                                               __9___ 
     *                                      __8___   ||  ||  
     *                                      ||  ||   ||  ||
     *                             __6___   ||  ||   ||  ||
     *                             ||  ||   ||  ||   ||  ||
     *                    __4___   ||  ||   ||  ||   ||  ||
     *           __3___   ||  ||   ||  ||   ||  ||   ||  ||
     *           ||  ||   ||  ||   ||  ||   ||  ||   ||  ||
     *  __1___   ||  ||   ||  ||   ||  ||   ||  ||   ||  ||
     *  ||  ||   ||  ||   ||  ||   ||  ||   ||  ||   ||  ||
     * ----------------------------------------------------
     *    0         1        2       3        4         5
     *              ^                                   ^
     *              |                                   |
     *            left= 0                             right = 5
     * 
     *  sum = 3 + 9 = 12
     * 
     * 
     * 
     * 
     * 
     *                          
     *         sum is 12 and it is MORE than our target of 11. We should reduce our next sum. as such We move the right pointer backward
     *                                               __9___ 
     *                                      __8___   ||  ||  
     *                                      ||  ||   ||  ||
     *                             __6___   ||  ||   ||  ||
     *                             ||  ||   ||  ||   ||  ||
     *                    __4___   ||  ||   ||  ||   ||  ||
     *           __3___   ||  ||   ||  ||   ||  ||   ||  ||
     *           ||  ||   ||  ||   ||  ||   ||  ||   ||  ||
     *  __1___   ||  ||   ||  ||   ||  ||   ||  ||   ||  ||
     *  ||  ||   ||  ||   ||  ||   ||  ||   ||  ||   ||  ||
     * ----------------------------------------------------
     *    0         1        2       3        4         5
     *              ^                         ^
     *              |                         |
     *            left= 0                   right = 5
     * 
     *  sum = 3 + 8 = 11
     * This is our Answer. 
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

