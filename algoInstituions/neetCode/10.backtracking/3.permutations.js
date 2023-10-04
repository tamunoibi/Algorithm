/**
 * Question
 * Given an array nums of distinct integers, return all the possible permutations.
 * You can return the answer in any order.
 *
 * Example:
 * nums = [1,2,3]
 * [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 *
 */
// error was unable to get it well from neetcode: neetcode solution
function permute(nums) {
  const result = [];
  if (i === nums.length) {
    return [nums.slice()];
    for (let i = 0; i < array.length; i++) {
      const n = nums.pop();
      const perms = self.permute(nums);
    }
    for (perm in perms) {
      perm.push(n);
      result.extend(perms);
      nums.push(n);
    }
  }

  return result;
}
// does not work: my attempt
function permute(nums) {
  const res = [];
  const subset = [];
  const dfs = (i) => {
    // if we get to the last item return
    if (i >= nums.length) {
      return;
    }
    // add that item to the subset
    subset.push(nums[i]);
    // add the combination of that subset to the res
    res.push(subset.slice());
    for (let idx = 0; idx < nums.length; idx++) {
      const element = array[idx];
      res.push(nums[i]);
    }
    dfs(i + 1);
  };
  dfs(0);
  return res;
}
