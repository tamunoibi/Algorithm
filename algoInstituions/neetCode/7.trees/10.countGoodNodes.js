// Question: Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X. Return the number of good nodes in the binary tree.
// Leetcode: https://leetcode.com/problems/count-good-nodes-in-binary-tree/

  // does not work
function goodNodes(root) {
  const dfs = (node, maxVal) => {
    if (!node) {
      return 0;
    }
    let res = node.val >= maxVal ? 1 : 0;
    maxVal = Math.max(node.val, maxVal);

    res += dfs(root.left, maxVal);
    res += dfs(rootx.right, maxVal);
    return res;
  };
    return dfs(root, root.val);

}
