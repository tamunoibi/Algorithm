/**
 * Question:
 *   A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them.
 *   A node can only appear in the sequence at most once.
 *   Note that the path does not need to pass through the root.
 *   The path sum of a path is the sum of the node's values in the path.
 *   Given the root of a binary tree, return the maximum path sum of any non-empty path.
 * Leetcode: https://leetcode.com/problems/binary-tree-maximum-path-sum/
 *
 */

// Does not work
function maximumPath(root) {
  res = [root.val];

  const dfs = (root) => {
    if (!root) {
      return 0;
    }
    let leftMax = dfs(root.left);
    let rightMax = dfs(root.right);
    leftMax = Math.max(leftMax, 0);
    rightMax = Math.max(rightMax, 0);

    res[0] = Math.max(res[0] + root.val + leftMax + rightMax);
    return root.val + Math.max(leftMax, rightMax);
  };
  dfs(root);
  return res[0];
}
