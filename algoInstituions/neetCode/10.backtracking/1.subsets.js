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


/** Pep Talk
 * In other to understand the solution you have to have worked on a similar 
 * problem before, the questions are not intuitive. When you see someone working at the 
 * solution very casually and explaining them like childs play you tend to gloss over 
 * the years of hard work it took to get to that level of mastery. 
 * That is why when starting out especially if you lack a maths background you must write out the solutions.
 * Draw out the tree. 
 * I would say this again, draw out the tree. don't try to follow it in your head when starting out. 
 */

/** Prerequisite:
 * There are cetain pillars that are just assumed you understand before the solution of subset using backtracking and recursion
 * can be underrstood, it includes:
 * 1. double recursion. how it works
 * 2. 
 * 3. 
 * 4. 
 *
 *
 */
/**The total number of subsets possible is 2 ^ n; 
 * example:
 * array =   [1,2,3}.
 * 
 * From permutation combination theory, we can calculate the number of subsets. That is 2n, where n is number of items. Here n=3. So the number of subsets will be 23 = 8.
 * 
 * For 0, take it or throw it , possibilities = 2
 * For 1, take it or throw it , possibilities = 2
 * For 2, take it or throw it , possibilities = 2
 * 
 * So,total number of subsets is 2*2*2 = 8 (including Null Set).
 * If you discard the Null Set , so the total number of subsets will be 8-1 = 7.
 */

/**Tracing the call for arr = [0, 1, 2]
  search(0); 
  -> search(1); // with 0 in
  ->-> search(2); // with 0 in AND 1 in
  ->->-> search (3); // with 0 in AND 1 in AND 2 in. terminates with (0,1,2)
  ->->-> search (3); // with 0 in AND 1 in AND 2 not in. terminates with (0,1)
  ->-> search(2); // with 0 in AND 1 not in
  ->->-> search (3); // with 0 in AND 1 not in AND 2 in. terminates with  (0,2)
  ->->-> search (3); // with 0 in AND 1 not in AND 2 not in. terminates with  (0)
  -> search(1); // with 0 not in
  ->-> search(2); // with 0 not in AND 1 in
  ->->-> search (3); // with 0 not in AND 1 in AND 2 in. terminates with  (1,2)
  ->->-> search (3); // with 0 not in AND 1 in AND 2 not in. terminates with  (1)
  ->-> search(2); // with 0 not in AND 1 not in
  ->->-> search (3); // with 0 not in AND 1 not in AND 2 in. terminates with  (2)
  ->->-> search (3); // with 0 not in AND 1 not in AND 2 not in. terminates with  ()
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
   
    subset.push(nums[i]);
    dfs(i + 1);

    // we remove the last item from the subset
    subset.pop();
    dfs(i + 1);
  };

  dfs(0);
  return res;
}

// O(2^N) :pronounce as two of N squared
function subsetsComment(nums) {
  // res is an empty array where we would push the answers to. It would finally be an array of arrays eg: [[1], []]
  const res = [];
  const subset = [];

  /**The time complexity: of subset 2^N
   * LINEAR
   * Linear time or N complexity in recuresive functions
   * An example of an O of(N) time complexity. would be a linear time complexity
   * a single recursion where each call makes a single function call
   *                     f()
   *                      |
   *                      |
   *                     f()
   *                      |
   *                      |
   *                     f()
   *                      |
   *                      |
   *                     f()
   *                      |
   *                      |
   *                     f()
   * 
   * 
   * 
   * 
   * 
   * 
   * 2^N
   *  When dealing with double recursion the time compleity is always two to the power of something usually N
   * the reason is inseatead of a linear move we are moving in two direictions
   *                                    ()
   *                       _____________|___________
   *                      |                        |
   *                     f()                      f()
   * 
   *  each function call spurns two more function calls. 
   *   subset() {
   *        subset() 
   *        subset()
   *   }
   * 
   *  example nums = [1,2,3]
   *  if the array length is 3. we would do 2 * 2 * 2 = 8
   *  First we have a single call. 
   *  This makes 2 calls. Because for each call generate 2 additional calls.
   *  Next  we do 4 calls. Because for each of those 2 calls we do 2 additional calls. call 1 (two calls) call 2 (two calls). so we have four calls
   *  Next  we do 8 calls. Because for each of those 4 calls we do. call 1 (two calls) call 2 (two calls) call 3 (two calls) call 4 (two calls)
   * 
   *  2^N that is pronounce as 2 to the N
   * 
   * 
   * 
   * 
   * 
   * 
   * 3^N
   *  When dealing with thriple recursion it is always three to the power of n. Because for each function call we make three more calls.
   * 
   *                                   ()
   *                       ____________|____________
   *                      |            |           |
   *                      ()           ()         ()
   * 
  *  each function call spurns three more function calls. 
   *  example nums = [1,2,3]
   *  if the array length is 3. we would do 3 * 3 * 3 = 27
   * 
   *  First we have a single call. 
   *  This makes 3 calls. Because for each call generate 3 additional calls.
   *  Next  we do 9 calls. Because for each of those 3 calls we do 3 additional calls. call 1 (three calls) call 2 (three calls) call 3 (three calls). so we have nine calls
   *  Next  we do 27 calls. Because for each of those 9 calls we do generate three additonal calls. call 1 (three calls) call 2 (three calls) call 3 (three calls) call 4 (three calls) call 5 (three calls) call 6 (three calls) call 7 (three calls) call 8 (three calls) call 9 (three calls) so a total of 27 calls
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
 /** The base case: Stop when we are out of bounds. 
  * 
  *    stop the loop if we are one step over the last item. The array length is the first item when we are out of bounds and the first item that is out of 
    bounds is index[arr.length]
    so we always use it as the check to know if we have gone through all the array items
    eg. nums = [1, 2, 3]
    nums.length = 3;
    i would be 0, 1, 2,
    it would ask the question:
    is 0 >= 3? no.
    is 1 >= 3? no.
    is 2 >= 3? no.
    is 3 >= 3? yes. so the loop stops and push all the generated subset
  */
    if (i >= nums.length) {
      /** The  need for .slice()
       * subset is
       * we would duplicate subset and push that duplicate copy to res.
       *
       * when slice() is given no parameter.
       * it is used to create a copy of the array.
       * 
       * example:
       * const ans = [];
       * const me = ['a', 'b'];
       * ans.push(me.slice());
       * // console.log(ans); 
       * // output [['a', 'b']]
       *
       * if you did not create a different copy and just pushed directly
       * ans.push(me);
       * when ever changes are made to me it would also change the contents of ans
       * example:
       * const ans = [];
       * const me = ['a', 'b'];
       * ans.push(me);
       * output: [['a', 'b']]
       * //we modify me
       * me[0] = 'fake';
       * me[1] = 'fake';
       * //the modification of me modifies ans
       * console.log(ans)
       * output: [['fake', 'fake']]
       * // 
       */
      res.push(subset.slice());
      return;
    }

 // we add that item to the subset. Then run the 
    /**POP AFTER RECURSIVE CALL
     * It is an important point that the pop only happens AFTER
     * the recursive call. 
     * This means the call would keep right oooooooo untill when no more right moves
     * then it would pop and keep right ooooooo untill when no more right moves
     * This is the crust of what confuses me about this backtracking solution
     * it is NOT
     *         push
     *         pop
     *         repeat
     *   
     *   this means:
     *         add to top of pile
     *         remove from top of clothes pile by actually washing cloth
     *         repeat
     * 
     * the above is how I think of if and as expected there is no connection btw them
     * which is what I always felt. It felt like they are just fabricating the push and pop
     * from their asses as the function gooes. There is no order nor reason to it.
     * any one the spirit lead you to do you do. But this is wrong. Now I have finally understood the
     * order to it. Ah I should state the date when it became clear to me 04/oct/2023 at around 21:50
     * 
     * 
     * The correct way  iS
     *         push
     *         repeat + safe pop 
     *         pop
     *   
     *   to use a practical illustration means:
     *         there are two bags of clothes with other bags of clothes inside them.  
     *         
     *         We have two bags but we must start from somewhere 
     *         so we open the bag on our left side. 
     *         we open the first bag of cloth we 
     *         add all its clothes to the basket to  the top of the clothes basket of piled clothes to be washed, 
     * 
     *         Then we go back to the outer bag and check the right side of the clothes
     *                                           1
     *                                          /^
     *                                        openBag
     * 
     * 
     * 
     * 
     * 
     * 
     *            
     *                        next:
     *                                       1
     *                                    /     \
     *                                 opened   openBag
     *                     
     * 
     * // decision to include nums[i]
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
    /** pop removes the last item from an array
     * we are removing the element that we just pushed. By popping it out
     * const nums = [2, 4]
     * const subset = [2]
     * subset.pop()
     * console.log(subset); // []
     */
    // we remove the last item from the subset
    subset.pop();
    dfs(i + 1);
  };

  dfs(0);
  return res;
}
/**Questions
 * 1. I can write it from memory but why does this whole pushing and poping work? 
 * 2. The time complexity I know it is 2 since there are two function calls but is 2^N or N^2? and why one and not the other
 */
// Does not work why??
// O(2^N)

function subsetsQuery(nums) {
  const res = [];

  const dfs = (arr, i) => {
    if (i >= nums.length) {
      // Ans: you should create a copy of the array. The array would be mutated and 
      // res.push(arr.slice());
      res.push(arr);
      return;
    }
   
    arr.push(nums[i]);
    dfs(arr, i + 1);

    arr.pop();
    dfs(arr, i + 1);
  };

  dfs([], 0);
  return res;
}
