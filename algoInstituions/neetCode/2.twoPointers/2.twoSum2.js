/**
 * Reference:
 *  file: /Users/tamunoibi/Documents/workspace/algorithim/algoInstituions/neetCode/arraysAndHashing/3.twoSum.js
 *  specific solution:  twoSumTwoPointers
 *  approach: use two pointers one at the beginning one at the end of the array. Sum  both values.
 *      if the sum is less than the target, increase the next sum by moving the beginning pointer forward
 *      if the sum is equal to the target return it.
 *      if the sum is greater than the target reduce the value of the next sum by moving the ending pointer(right pointer) backward
 *  */