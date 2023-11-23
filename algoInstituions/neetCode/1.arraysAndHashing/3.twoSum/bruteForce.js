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
function twoSum(nums, target) {

   for (let index = 0; index < nums.length - 1; index++) {

     for (let j = index + 1; j < nums.length; j++) {
       if (nums[index] + nums[j] === target) {
         return [index, j];
       }
     };
   }
}



// --------------------------------------------------------------------------------------------------------------------
//                                BRUTE FORCE CODE  WTH EXPLANATATION
// --------------------------------------------------------------------------------------------------------------------
// timeComplexity is:  0(N^2)
function twoComment(nums, target) {
  /**
    Go through the array. (don't include the last item).
     example arr =    [2, 5, 9, 4]
    
     so we would go 2, 5, 9
     We do not go to 4.
     Because I have an inner loop that compares each element with all subsequent elements.
     I would compare 2 with 5, 9, 4 respectively
     I would compare 5 with 9, 4 respectively
     I would compare 9 with  4
     I do not need to add four as that it does not have subsequent elements
   */
  for (let index = 0; index < nums.length - 1; index++) {
    // For each item, go through all subsequent items. For each subsequent item sub it with the item with it.
    // if the sum is the target return that index and the subsequent items index
    /**
     * example 1:
       nums = [ 3, 4, 1]; target = 5.
       you start at 3, sum 3 + 4 = 7, then sum 3 + 1 = 4
       you move to 4, sum 4 + 1 = 5. We have foundd our answer since 5 is our target. You return the index of 4 and the index of 1.  That is 1, 2

       example 2:
       nums = [ 3, 4, 1]; target = 9
       you start at 3, sum 3 + 4 = 7, then sum 3 + 1 = 4
       you move to 4,  sum 4 + 1 = 5. 
       // you end here you do not move to element 1. that is index 2. 
       Because the inner loop is to start at an index after i. which would have being 2+1=3 and there is no index 3. 
       the last element is 1.
       This example is just put here for explanation because in the question it says there would not be a scenrio where no
       answer exits and in this cas no anwer exits. 
     *  */

    for (let j = index + 1; j < nums.length; j++) {
      if (nums[index] + nums[j] === target) {
        return [index, j];
      }
    }
  }
}
