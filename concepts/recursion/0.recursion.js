/**
 * 
 * Reference 
 * Note: March 2022  - I gave more drawings and illustrations
 * tutorial: https://www.youtube.com/watch?v=0nKIr3kAt-k}   ---this is the best tutorial yet on the subject
 *
 * Recursion is a simple topic to understand  
 * The only catch is it is a puzzle you must understand it step by step.
 * Any attempt to skip steps would make it complex.
 * the problem is most tutorials do not follow this logical step by step approach and as such complicates it.
 * That is why I break down this note into steps. If you are starting out read it in from note 0., 1. 2.... in that order don't skip notes
 * 
 * 
 * 1. The first is step to understand this is to understand Single recursion. 
 *     a. How recursion works. The need for a base case and a recursive case
 *     b. modifying the index to get to the base case: incrementing or decrementing parameters while calling the function
 *     c. Putting the console before (pre-order) or after(post-order) the recursive call. And the implications of this
 *     d. Breaking recursive functions into shell and main functions
 *     e. adding the recursive statement in the if block
 * 
 * 2. The second step is to understand. advanced single recursive operation like:
 *     a. modifying the index to go through array items 
 *     b. Re-using the value returned from previous recursive calls
 * 
 * 2. The third step is double recursion. 
 *     a. How double recursion operates like a tree  that goes depth first. 
 *     b. The difference between pre-order and post-order traversal
 *     b. Using double recursion to go through array values
 *     c. Re-using values returned previous recursive calls, going through array items with double recursion (these are things learned in single recursion) 
 *     d. Breaking recursive functions into shell and main functions
 * 
 * 3. The fourth step is advanced double recursion. 
 *     a. calling double recursive functions with or    recurse(n) || recurse(n - 2), 
 *     b. calling double recursive functions with and   recurse(n) && recurse(n - 2)
 *     c. calling double recursive functions with additions   recurse(n) + recurse(n - 1)
 *     c. calling double recursive functions with multiplications   recurse(n) * recurse(n - 1)
 */
