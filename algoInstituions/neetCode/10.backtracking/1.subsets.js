/**
 * Question
 * Given an integer array nums of unique elements, return all possible subsets
 * (the power set).
 * The solution set must not contain duplicate subsets. Return the solution in any order.
 * Input: nums = [1,2,3]
 * Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
 *
 * Explanation:
 * The solution set must not contain duplicate subsets.
 * [1,3] and [3, 1] contain the same elements the order is just swapped so it is considered duplicate subsets
 *     [1,2,3]
 *      0 1 2
 */
// O(2^N)
function subsets(nums) {
  const res = [];
  const subset = [];

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
    dfs(i + 1);
  };

  dfs(0);
  return res;
}
// O(2^N)
function subsetsComment(nums) {
  // res is an empty array where we would push the answers to
  const res = [];
  const subset = [];

  /**
   * The time complexity in the worst case of input is that we have a 1
   *  example nums = [1,2,3]
   *  When dealing with double recursion it is always two to the power of something
   *  2 ^ . That is Squared. 
   *  Since for each operation we are doing two recursive calls. annd 
   *  if the array length is 3. we would do 2 * 2 * 2
   *  First we do 2 calls. 
   *  Next  we do 4 calls. Because for each of those 2 calls we do 2 additional calls. call 1 (two calls) call 2 (two calls)
   *  Next  we do 8 calls. Because for each of those 4 calls we do 
   * 
   *  2^N that is 2SquaredN(Question what is this called?) should NOT be confused with:
   *  N^N that is Nsquared =  3 * 3 = 9;
   * 
   * 
   * Explanation
   * If your great grand mother has 2 kids. One of them is your grandmother
   * Those 2kids have two kids. One of them is your mother.
   * Those 2kids have two kids. One of them is you.
   * How many great grandkids does your great grand ma have
   * tree height:4
                 ^  Great GrandMa       greatGrandMa   
                 |                         /        \
                 |  GrandMa             grandMa  
   MAXIMUM HEIGHT|                       /    \  
        3        |  Mum                mum    aunt  
                 |                     / \     / \   
   *                Me               me  sis   X  X <--- my grandma has a total of 8 great grand kids. 4 great grand kids from my grandma and 4 great grand kids from my grand ma's sibling
   *
   *
   *
   * Example 2:
   * target: 5
     arr.length: 3
                 ^  subset = [1]            1   
                 |                         /   \
                 |  subset = [1, 2]       2   
   MAXIMUM HEIGHT|                       /   \  
        3        |  subset = [1, 2, 3]  3      1        
                 |                     /       <--- we return when n has gone through all the items
                      
   */

  const dfs = (i) => {
    // stop the loop if we are on the last item
    // eg. nums = [1, 2, 3]
    // nums.length = 3;
    // i would be 0, 1, 2,
    // is 2 >= 3? no.
    // is 3 >= 3? yes. so the loop stops and
    if (i >= nums.length) {
      /**
       * subset is
       * we would duplicate subset and push that duplicate copy to res it to res.
       *
       * when slice() is given no parameter.
       * it is used to create a copy of the array.
       * example:
       * const ans = [];
       * const me = ['a', 'b'];
       * ans.push(me.slice());
       * // console.log(ans); [['a', 'b']]
       *
       * if you did not create a different copy and just pushed directly
       * ans.push(me);
       * when ever changes are made to me it would also change the contents of ans
       */
      res.push(subset.slice());
      return;
    }

    // decision to include nums[i]
    /**
     * we are adding the current element
     * const nums = [2, 4]
     * const subset = []
     * arr.push(nums[0])
     * console.log(subset); // [[2]]
     */
    subset.push(nums[i]);
    dfs(i + 1);

    // decision to NOT include nums[i]
    /**
     * we are removing the element that we just pushed. By popping it out
     * const nums = [2, 4]
     * const subset = [[2]]
     * arr.pop()
     * console.log(subset); // []
     */
    subset.pop();
    dfs(i + 1);
  };

  dfs(0);
  return res;
}
