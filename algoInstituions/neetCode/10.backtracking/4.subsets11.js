/**
 * Question: 
 * Given an integer array nums that may contain duplicates, return all possible 
 * subsets (the power set).
 * The solution set must not contain duplicate subsets. Return the solution in any order.
 * Input: nums = [1,2,2]
 * Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
 */


// I have not tested this code
function subsets(nums) {
  const res = [];
  const subset = [];
  // there are just two things that are different from subset 1.
  // 1. is we sort the numbers array
  // 2. before we do the second part of the decision we move the index up to where the value is not repeated
  //    example: [1, 1, 1, 2, 2, 3, 4, 5]
  //              ipush    ipop
  // this is the first part that is different from subset 1
  // we sort the nums so that identical numbers would be placed side by side
  // example nums = [5, 1, 4, 5, 3, 4, ]
  // after sorting nums = [1, 3, 4, 4, 5, 5 ]
  // later in the loop we would skip repeated numbers that is why we want them beside each other
  nums.sort();

  const dfs = (i) => {
    if (i >= nums.length) {
      res.push(subset.slice());
      return;
    }
    // we add that item to the subset. Then run the
    subset.push(nums[i]);
    dfs(i + 1);

    // we remove that item from the subset
    subset.pop();
    /**
     * this is the second part that is different from subset 1
     * i+1 < nums.length, we have to check this: we don't run this if i+1>=nums.length;
     *  that is if the next index is if the next index is already above the array items
     * if we are not on the last item and the current i is less than the array items. Then increase i
     * example 1: nums = [1, 1]
     *                       i
     * i   = 1
     * i+1 = 2
     * nums.length = 2
     * i < nums.length: returns false and the increment does not happen
     *
     *
     *
     * example 2: nums = [1, 1]
     *                    i
     * i   = 0
     * i+1 = 1
     * nums.length = 2
     * i < nums.length: returns true and then we check if that current item is same as the next item. Then we increment the index
     */
    while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
      i++;
    }
    dfs(i + 1);
  };

  dfs(0);
  return res;
}
