/** Dynamic resizing sliding window technique
 * here the window size can change and it is not fixed
 * 
 */
/** Subarray Sum Equals K
 * Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.
 * A subarray is a contiguous non-empty sequence of elements within an array.
 * link: https://leetcode.com/problems/subarray-sum-equals-k/
 * Example 1:
 * Input: nums = [1, 7, 4, 3, 1, 2, 1, 5, 1], k = 7
 * Output: 4
 * That means we are to find all the subArrays that sum to 7
 * 7, 4, 3, 1, 2, 1, 5, 1
 * 4, 3, 1, 2, 1, 5, 1
 * 3, 1, 2, 1, 5, 1
 * 1, 5, 1
 * There are  four subarrays that sum to 7,
 * 
 * Example 2:
 * Input: nums = [1,1,1], k = 2
 * Output: 2
 * 
 * Example 3:
 * Input: nums = [1,2,3], k = 3
 * Output: 2
 * 
 */

// it fails in this case: nums = [1] k=0; myoutput: 1;  expected: 0
function subarraySum(nums, k) {
    let subSetCount = 0;
    let currSum = 0;
    let windowLength = 0;
    const subsets = [];

    if (k > 0) {
    for (let i = 0; i < nums.length; i++) {
            currSum += nums[i];
        windowLength++;
    while (currSum >= k && windowLength > 0) {
       if (currSum === k) {
        subSetCount += 1;
         const startOfWindwow = i - (windowLength - 1);
        subsets.push(nums.slice(startOfWindwow, i+1));
        windowLength--;
        currSum =  currSum - nums[startOfWindwow]
       } else if (currSum > k) {
        currSum =  currSum - (nums[i - (windowLength -1)])
        windowLength -=1;
       }
    }
    }
    return subSetCount;
    }
}

function subarraySum() {
    let subSetCount = 0;
    let currSum = 0;
    let windowLength = 0;

    // sub
    //       ⬇️ 
    // 1, 7, 4, 3, 1, 2, 1, 5, 1], k = 7
    //
     while (currSum >= k) {
       for (let i = 0; i < nums.length; i++) {
        // add to the window
        currSum += nums[i];
        windowLength++;

        // if we have found a subArray that sums to k.
        // Then increase the count of answers and reduce our windowLength
       if (currSum === k) {
        subSetCount += 1;
        const startOfWindwow = i - (windowLength - 1);
        currSum =  currSum - nums[startOfWindwow]
        windowLength--;
       }
       // if we have exceeded the total we can get to. Reduce the window by reducing the total sum
       // also reduce thhe windowLenghth  as that would be used in the next iteration to calculate the new currentSum
       if (currSum > k) {
        currSum =  currSum - (nums[i - (windowLength -1)])
        windowLength--;
       }
        
       }
   }
    return subSetCount;
    /**What is the condition to shrink the window? shrink the window if the current sum is more than our target k.
     * if(currSum > k) {}
     * What does it mean that the window is shrunk? it is to reduce the current sum, by removing the first item in the window
     * currSum = currSum - (nums[startOfWindwow])
     * currSum = currSum - nums[i - (windowLength -1)]
     * currSum = currSum - nums[1 - (2 -1)]
     * currSum = currSum - nums[1 - (1)]
     * currSum = currSum - nums[0]
    *        ⬇️                                  k = 7
    *  [1,   7,   4,   3,   1,   2,   1,   5,   1]
    *   0,   1,   2,   3,   4,   5,   6,   7,   8
    *   ------window length
    *   ⬆   ⬆
    * 
    *        ⬇️                                  k = 7
    *  [1,   7,   4,   3,   1,   2,   1,   5,   1]
    *   0,   1,   2,   3,   4,   5,   6,   7,   8
    *   ⬆start of window should be shrunk
    * 
    *        ⬇️                                  k = 7
    *  [1,   7,   4,   3,   1,   2,   1,   5,   1]
    *   0,   1,   2,   3,   4,   5,   6,   7,   8
    *        --window length
    *        ⬆
    * 
    * 
    * What is the condition to increase the window? for each operation increase the window
     */
}

