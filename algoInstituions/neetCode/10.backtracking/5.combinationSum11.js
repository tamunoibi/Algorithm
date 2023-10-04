/**
 * Question:
 * Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinationSum2 in candidates where the candidate numbers sum to target.
 * Each number in candidates may only be used once in the combination.
 * Note: The solution set must not contain duplicatecombinations.
 * Example:
 * Input: candidates = [10,1,2,7,6,1,5], target = 8
 *  Output: [ [1,1,6], [1,2,5], [1,7], [2,6] ]
 */

// I have not tested this code
function combinationSum2(candidates) {
  const res = [];
  const subset = [];
  // this is the first part that is different from subset 1
  // we sort the candidates so that identical numbers would be placed side by side
  // example candidates = [5, 1, 4, 5, 3, 4, ]
  // after sorting candidates = [1, 3, 4, 4, 5, 5 ]
  // later in the loop we would skip repeated numbers that is why we want them beside each other
  candidates.sort();

  const dfs = (position, target) => {
    if (target === 0) {
      res.push(subset.slice());
      // note this cute pattern we did not return here but
      // the next if block is where we would return
      // this reduce duplicity
    }
    if (target <= 0) {
      return;
    }
    prev = -1;

    // we are not looping from 0. But from the position
    // why is that? 
    for (let i = position; i < candidates.length; i++) {
      if (candidates === prev) {
        continue;
      }
      // we add that item to the subset. Then run the
      subset.push(candidates[i]);
      // we run the function reducing the target by the candidate
      // explain this
      dfs(i + 1, target - candidates[i]);
      // we remove that item from the subset
      subset.pop();
      prev = candidates[i];
    }
  };
  dfs(0, target);
  return res;
}
