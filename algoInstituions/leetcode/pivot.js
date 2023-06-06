// Time Complexity : O(n)
function pivotIndex(nums) {
  // Initialize total sum of the given array...
  let totalSum = 0;
  // Traverse the elements and add them to store the totalSum...
  for (let i = 0; i < nums.length; i++) {
    totalSum += nums[i];
  }
  // Initialize 'leftsum' as sum of first i numbers, not including nums[i]...
  let leftSum = 0;
  // Again traverse all the elements through the for loop and store the sum of i numbers from left to right...
  for (let i = 0; i < nums.length; i++) {
    // sum to the left == leftsum.
    // sum to the right === totalSum - leftsum - nums[i]..
    // check if leftsum == totalSum - leftsum - nums[i]...
    if (leftSum * 2 == totalSum - nums[i]) return i; // Return the pivot index...
    leftSum += nums[i];
  }
  return -1; // If there is no index that satisfies the conditions in the problem statement...
};

function name(params) {
       let total = nums.reduce((acc, total) => (acc += total));
       let leftSum = 0;
       let rightSum = total;
       for (let i = 0; i < nums.length; i++) {
         rightSum -= nums[i];
         if (leftSum === rightSum) {
           return i;
         }
         leftSum += nums[i];
       }
       return -1;  
}
