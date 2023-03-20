// Question: https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/
var minStartValue = function (nums) {
  // Get the absolute max
  let absMax = 0;
  for (let i = 0; i < nums.length; i++) {
    absMax = Math.max(absMax, Math.abs(nums[i]));
  }

  // go through the array and for each item add the max to it.
  const start = absMax + 1;
  let sum = start;
  let min = sum;
  // console.log({sum})

  for (let j = 0; j < nums.length; j++) {
    // console.log({sum})
    sum += nums[j];
    // console.log({sum, j: nums[j] })
    min = Math.min(min, sum);
    // console.log(min)
  }

  // Calculate the answer
  if (min === 1) {
    return start;
  } else if (min > 1) {
    const diff = min - 1;
    const ans = start - diff;
    return ans;
  } else if (min < 1) {
    const diff = 1 - 0;
    const ans = start + diff;
    console.log(ans);
    return ans;
  }
};