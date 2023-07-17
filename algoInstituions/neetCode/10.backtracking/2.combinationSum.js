/**
 * Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target.
 * You may return the combinations in any order.
 * The same number may be chosen from candidates an unlimited number of times.
 * Two combinations are unique if the frequency
 * of at least one of the chosen numbers is different.
 * The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.
 *
 * Example:
 *  candidates = [2,3,6,7]  target = 7
 *  output = [[2,2,3],[7]]
 *
 * Explanation:
 * 2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
 * 7 is a candidate, and 7 = 7.
 * These are  the only two combinations.
 */
function combinationSum(candidates, target) {
  const res = [];
  const current = [];

  const dfs = (i, current, total) => {
    if (total === target) {
      res.push(current.slice());
      return;
    }
    if (i >= candidates.length || total > target) {
      return;
    }
    current.push(candidates[i]);
    dfs(i, current, total + candidates[i]);

    current.pop();
    dfs(i + 1, current, total);
  };

  dfs(0, [], 0);
  return res;
}
function combinationSumComment(candidates, target) {
  // O(2^t)
  const res = [];

  /**
   * The time complexity in the worst case of input is that we have a 1
   *  example nums = [1, 2, 4]; target = 5
   *  When dealing with double recursion it is always two to the power of something
   *  2 ^ . Since for each operation we are doing two. Understanding why has not happened.
   *  But I have done several of this kind of operations that now know it. 
   *  
   * 
   *  The question is to the power of what? 
   *  The answer is what is the maximum height of the tree?
   *  in this case the maximum height is target
   * 
   * Example
      target: 5
              ^    curr  = [1];          total = 1;                 1   
              |                                                    /   \
              |    curr  = [1, 1];       total = 2;               1   
MAXIMUM HEIGHT|                                                  /   \  
     5        |    curr  = [1, 1, 1];    total = 3;             1        
              |                                                /   \      
              |    curr  = [1, 1, 1, 1];    total = 4;        1 
              |                                              /   \
              |    curr  = [1, 1, 1, 1, 1]; total = 5;      1           <--- we return when sum is target
              |    total = 5 so we stop
                    
                      
   */
  const dfs = (i, current, total) => {
    if (total === target) {
      /**
     * We are summing to get the targe.

     * Total is the total sum of array current.
     * Before we add any value to current we first add it total
     * curr starts with an empty array and we add values of the array
     * for each value we add we increase the value of total.
     *
     * const curr = [];
     * const arr = [2, 2, 3];
     * let total = 0;
     * for(let i =0; i<arr.length; i++) {
     *   curr.push(arr[i]);
     *   total += arr[i];
     * }
     *
     *
     * example 1:
     * current = [2, 2, 3]; target = 7
     * This therefore means that total = 7
     * that means we have found a combination of numbers that sum up to the target of 7
     * This array should be added to the result array
     * 
     * 
     * example 2:
     * current = [2, 2, 3, 1]; target = 8
     * that is: total = 8
     * the total sum of current is the same as the target number as such add that combination of numbers to the final array.
     */
      res.push(current.slice());
      return;
    }
    /**
     * This check handles two scenrios:
     * 1. We have exceeded the last item in the array of numbers. example array = [2, 3, 4] we are now at index 3. Note the last index of the array is 2
     * 2. We have exceeded the target. example current = [2, 3]; target = 4;  This means that we the number has passed the target and we have to stop
     * and in bothh of those scenrios it is imposible to find the answer any more
     */
    if (i >= candidates.length || total > target) {
      return;
    }
    /**
     * Question:
     * 1. Why are we not incrementing i?
     *    Ans: Because we can use the same item multiple times. If we increase the index it means we are moving on to the next item.
     *        Example:   nums =[ 2, 4, 6]; target = 8
     *
     *       When we start i at 2. if we increase to i+1 that means the next numbers being summed is 2 + 4
     *                 This is what we want to do:
     *                   nums =[ 2, 4, 6]; target = 8
     *                           i
     *                           i
     *                           i
     *                           i
     *
     *
     *
     * 2. Would that not lead to an infinite loop?
     *    Ans: no it would not because at some point total(which is the sum of the current array)
     *         would exceed the target and recursion would stop. Remeber we are increasinng total with each iteration
     *
     * 3. Why does this whole add one number and remove one number work to give us all possible combinations?
     *    I don't know. But I am sure there is a math theory behind it.
     *    I only found the solution and I know if you do it like this it would solve the problem but I don't know why.
     *
     */
    /**
     * add the item to the current array
     * example:
     * candidates = [1, 2, 3] target = 6
     * initially the current array is an empty array []
     *
     * we add the first item (that is 1) to current
     * cur = [1]
     * so when we call dfs
     * dfs(i, current, total + candidates[i]);
     * dfs(0,  [1],   0   + candidates[0]);
     * dfs(0,  [1],   0   +    1         );
     *
     *
     *
     * the second recursive function
     * cur = [1]   // since we add the first item to current at the first limb
     * we pop the first item
     * cur = [1]
     * we call dfs
     * dfs(i + 1, current, total + candidates[i]);
     * dfs(0 + 1,   [],   0   + candidates[0]);
     * dfs(0 + 1,   [],   0   +    1         );
     *
     */
    current.push(candidates[i]);
    dfs(i, current, total + candidates[i]);

    /**
     * the second limb of the equation
     * cur = [1]   // since we add the first item to current at the first limb
     *
     * we pop the first item with
     * current.pop();
     * cur = []
     *
     * we call dfs on the next item (index  ) in the candidates array,
     * we do not add the current item (index 0).
     *  as such we do not update the total
     * dfs(i + 1, current, total);
     * dfs(0 + 1,   [],   0);
     * dfs(0 + 1,   [],   0);
     *
     */
    current.pop();
    dfs(i + 1, current, total);
  };

  /**
   * i = 0; we start from the first item. which is index 0. Then subsequent calls would increase by one to go to the next index
   * current = [];  we start the array with an empty array and we keep adding values as needed
   * total = 0; the total is 0. we keep adding values to the total if we get the target we know we have our answer
   *
   * w
   * index,
   */
  dfs(0, [], 0);
  return res;
}

// my attempt. Does not work
function combinationSumAttempt(candidates, target) {
  const res = [];
  const subset = [];

  const dfs = (i) => {
    // if we are on the last item of of the array return
    if (i >= candidates.length) {
      return;
    }

    // we add each number to the subset
    subset.push(candidates[i]);
    // we move to the next item in the candidates
    dfs(i + 1);

    // we remove that item from the subset
    subset.pop(nums[i]);
    dfs(i + 1);

    // I want to calculate the total of the subset
    const sum = subset.reduce((acc, next) => acc + next, 0);
    if (sum === target) {
      // if we have found the target. I add that combination to the res
      res.push(subset.slice());
    }
    /**
     * I don't think this solution is accounting for utilizing
     * an array item multiple times
     * example:
     * candidates = [1, 2, 3] target = 4
     * we could use 1 four times to get the target.
     * You are only saying add 1 don't add 1.
     */
  };

  // I start from index 0. that is the first item
  dfs(0);
  return res;
}
