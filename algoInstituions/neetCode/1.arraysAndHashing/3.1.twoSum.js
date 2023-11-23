/**
 *  sample input: 
 *     twoSum([11, 15, 2, 7], 9);
 *
 *  output: 
 *     [2, 3]
 * The two numbers that sum to the target of 9 are 2 and 7.
 * It returns the index of those two numbers. 
 * that is index: 2 and 3
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

