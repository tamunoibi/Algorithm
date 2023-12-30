// Question: Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.
// Leetcode: https://leetcode.com/problems/kth-smallest-element-in-a-bst/
// Solution from: https://www.youtube.com/watch?v=5LUXSvjmGCw
// Does not work
function kthSmallest(root) {
  /**
   * n is the number of elements we have visited
   * once n = k then we know we are on the kth element
   * example k = 5.
   * if n = 5; then we are on the 5th element and we can return that value
   */
  let n = 0;
  const stack = [];
  let curr = root;

  while (curr != null && stack.length) {
    while (curr != null) {
      stack.push(curr);

      curr = curr.left;
    }
    curr = stack.pop();
    n += 1;
    if (n === k) {
      return curr.val;
    }
    curr = curr.right;
  }
}
