// Question: https://leetcode.com/problems/serialize-and-deserialize-binary-tree/
// This question requires two functions: seriazlize to convert a bbinary tree to a stirngit to a string
// Tutorial: https://www.youtube.com/watch?v=u4JAi2JJhI8
// deserialize to convert a string back to a binary tree.
/**
 * Example:
           1
        /   \
      2      3
    /   \   / \
    4    5  N  6
  /  \  /  \  /  \  
  N   N N   N N   N
output: 
Their are several valid outputs including
1. [1, 2, 3, 4, 5, null, 6] --> this is breadthFirst search, that line by line
2. [1, 2, 4, null, null, 5,  null, null, 3, null, 6] --> this is depthFirst search, that line by line
 */
function serialize(root) {
  const res = [];
  const dfs = (node) => {
    if (!node) {
      res.push("N");
      return;
    }
    res.push(toString(node.val));
    dfs(node.left);
    dfs(node.right);
  };
  dfs(root);
  return ",".concat(res);
}
function deserialize(root) {
  const vals = data.split(",");
  this.i = 0;
  const dfs = () => {
    if (vals[this.i] === "N") {
      this.i += 1;
      return null;
    }
    // const  node = TreeNode(parseInt(vals[this.i]));
    this.i += 1;
    node.left = dfs();
    node.right = dfs();
    return node;
  };
  return dfs();
}
