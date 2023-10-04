
// reference note Jan, 2022: book2 page 8
//not working
function threeSum(nums) {
  const result = [];
  nums.sort();
  nums.forEach((element, i) => {
    // if the current item we are on is same as the item immidiately preceding it
    // example [2, 2, 4, 3, 8] on the second iteration we are on item 4. the immediate item before it is also 4.
    // note it is sorted so if there is a duplicate the item immidiately before it would be the duplicate
    if (i > 0 & element === nums[i - 1]) {
      return;
    }
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = element + num[left] + num[right];
      if (sum === target) {
        result.push([a, nums[left], nums[right]]);
        // left++;
        while (nums[left] === nums[left - 1] && left < right) {
          left++;
        }
      }
      sum < target ? left++ : right--;
    }
  });
}
threeSum([-3, 3, 4, -3, 3, 1, 2]);
