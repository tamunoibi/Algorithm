var invertTree = function (root) {
  dfs(root);
  return root;
};
function dfs(node) {
  if (!node) {
    return;
  }
  // this is a swap we swap the left with the right. and the right with the left
  // we create a temp since we would overwrite it
  let temp = node.left;
  node.left = node.right;
  node.right = temp;

  // we call the dfs of the left and right  dfs(node.left);
  dfs(node.right);
}
