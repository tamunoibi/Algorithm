/**
 * Fixed sliding window technique
 * Find the maximum sum of size element
 * linK: https://www.youtube.com/watch?v=JWHjqjk9ZYc&ab_channel=TheCodeCreative
 * 
 * example:
 * maxSubArraySum([1, 2, 3, 4, 8, 6, 2], 3) 
 * this means find the maxSubArray of 
 * 
 * the sums are: 
 * 1, 2, 3 = 6
 * 2, 3, 4 = 9
 * 3, 4, 8 = 15
 * 4, 8, 6 = 18
 * 8, 6, 2 = 16
 */

/**
 * Using Brute force
 */
// Time complexity: O(N ^ 2)
function maxSubArraySumBruteForce(nums, size) {
    // We start maxSum at the smallest possible number
    let maxSum = -Infinity;

    // we loop through the array
    for (let i = 0; i < arr.length - (size - 1); i++) {
        /**
         * For each array item we do an inner loop from beginning to end to calculate the sum
         * iteration 1:
         *   ⬇️
         *  [1,  2,  3,  4,  8,  6,  2]
         *   ⬆ ⬆   ⬆ 
         * 
         * iteration 2:
         *       ⬇️
         *  [1,  2,  3,  4,  8,  6,  2]
         *       ⬆ ⬆   ⬆ 
         * 
         * iteration 3:
         *          ⬇️
         *  [1,  2,  3,  4,  8,  6,  2]
         *           ⬆ ⬆   ⬆
         * 
         * iteration 4:
         *               ⬇️
         *  [1,  2,  3,  4,  8,  6,  2]
         *               ⬆ ⬆   ⬆ 
         * 
         * iteration 5:
         *                  ⬇️
         *  [1,  2,  3,  4,  8,  6,  2]
         *                   ⬆ ⬆   ⬆ 
         * 
         * This is where the loop ought to stop
         * outer loop: 
         * arr.length - (size - 1)
         * because we are not to get to the very last element
         * if this is done then no need 
         *                      ⬇️
         *  [1,  2,  3,  4,  8,  6,  2]
         *                        ⬆ ⬆   ⬆ 
         * I am trying to avoid a scenerio like the above where I don't have up to three items to sum
         * I want to say we have up to three items left 
         */
       let sum = 0;
       for (let j = 0; j < size; j++) {
         sum += nums[j];
       }
       maxSum = Math.max(maxSum, sum)
    }
    maxSum;
}
function maxSubArraySum(nums, size) {
    if(size < 0 || size > arr.length) return null;

    let currSum = 0;
    let maxSumSeen = -Infinity;

        /**
         * 
         *For each array item we do an inner loop from beginning to end to calculate the sum
         * iteration 1:
         * currSum = 0
         * currSum = 0 + 1 = 1
         *   ⬇️
         *  [1,  2,  3,  4,  8,  6,  2]
         * 
         *  we check if i >= (size -1) 
         *  we check if i >= (3 -1) 
         *  we check if i >= (2) 
         *  we check if 0 >= (2) 
         *  False
         *   
         * iteration 2:
         * currSum = 1
         * currSum = 1 + 2 = 3
         *      ⬇️
         *  [1,  2,  3,  4,  8,  6,  2]
         * 
         *  we check if i >= (size - 1) 
         *  we check if i >= (3 - 1) 
         *  we check if i >= (2) 
         *  we check if 1 >= (2) 
         *  False
         * 
         * 
         * 
         * iteration 3:
         * currSum = 3
         * currSum = 3 + 3 = 6
         *          ⬇️
         *  [1,  2,  3,  4,  8,  6,  2]
         *   
         *  we are checking if the size of the window is up to 3. Note the need to rmove 1 since array are 0-indexed
         *  we check if i >= (size - 1) 
         *  we check if i >= (3 - 1) 
         *  we check if i >= (2) 
         *  we check if 2 >= (2) 
         *  True
         * We do two things:
         * 1. we update the maxSumSeen to either this if it is greater than what we have
         * Math.max(currSum, maxSumSeen) 
         * 
         * 2. we remove the last element from the currentSum.
         * this is to prepare for the next summation we w
         *          ⬇️
         *  [1,  2,  3,  4,  8,  6,  2]
         *   ---------
         * currSum initially comprised of: 1, 2, 3= 6
         * 
         * 
         * we remove the first item so we can
         *           ⬇️
         *  [1,  2,  3,  4,  8,  6,  2]
         *       -----
         * currSum becomes comprised of: 1, 2 = 3
         * 
         * This is so on the next iteration when we add the third item we would not be summing four items. but three
         *               ⬇️
         *  [1,  2,  3,  4,  8,  6,  2]
         *       ---------
         * 
         * if this was not done the next sum would be 
         *               ⬇️
         *  [1,  2,  3,  4,  8,  6,  2]
         *   -------------
         * 
         * iteration 4:
         * currSum = 3
         * currSum = 3 + 3 = 6
         *               ⬇️
         *  [1,  2,  3,  4,  8,  6,  2]
         *   
         */
    for (let i = 0; i < nums.length; i++) {
         currSum += nums[i];
        if (i >= size - i) {
            maxSumSeen = Math.max(currSum, maxSumSeen);
            /**
             * How are we able to target the last index in the window. 
             * In this case we want to shrink the window and remove index 2.
             *
             *                   ⬇️we want shrink the window
             *  [1,  2,  3,  4,  8,  6,  2]
             *   0   1   2   3   4   5   6
             *           ---------
             * 
             *                   ⬇️ if we go 3 steps backward we would be out of the bounds
             *  [1,  2,  3,  4,  8,  6,  2]
             *   0   1   2   3   4   5   6
             *       ⬆   -------i - size = 4 - 3= 1
             * 
             * we are out of bounds.
             * 
             * Because we want to go not the full size back, but one  step less than the ful size.
    *                            ⬇️ if we go 2 steps backward we would be in the current position
             *  [1,  2,  3,  4,  8,  6,  2]
             *   0   1   2   3   4   5   6
             *           ⬆------i - size = 4 - (3 - 1)= 2
             * 
             * 
             * If size was 14 we don't want to go 14 steps back but 13 steps back. 
             * 
             * i - size = 2 - (3 - 1)= 0
             * 
             * Example 2:
             * 
             *           ⬇️we want to go 2 steps back
             *  [1,  2,  3,  4,  8,  6,  2]
             *   0   1   2   3   4   5   6
             *   ---------
             * 
             *  [1,  2,  3,  4,  8,  6,  2]
             *   0   1   2   3   4   5   6
             *   ⬆subtract this item from the window
             *   nums[0];
             * 
             * 
             * Example 3:
             *                           ⬇️we want to go 2 steps back, to index 4
             *  [1,  2,  3,  4,  8,  6,  2]
             *   0   1   2   3   4   5   6
             *                   ---------
             * 
             * 
             *                           ⬇️
             *  [1,  2,  3,  4,  8,  6,  2]
             *   0   1   2   3   4   5   6
             *                   ---------
             *                   ⬆subtract this item from the window
             *                   nums[4];
             * 
             */
            currSum -= nums[i - (size - 1)]
        }
    }
    return maxSumSeen
}

const arr1 = [1, 2, 3, 4, 8, 6, 2];

console.log(maxSubArraySum(arr1, 3));
// output 18
