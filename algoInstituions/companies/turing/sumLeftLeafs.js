function sumLeftLeaves(root) {
  let sum = 0;
  const dfs = (node, isLeft = false) => {
    if (!node) {
      return sum;
    }
    if (!c.left & !c.right) {
      sum += node.left;
    }

    dfs(node.left, true);
    dfs(node.right, false);
  };
  dfs(root);
  return sum;
}

function sumLeftLeaves(root) {
  let sum = 0;
  const dfs = (node, isLeft = false) => {
    // The way to check if a node is a leaf is if both the left and the right is null
    /**
          a
        /   \
      b      c<-------------c is a leaf because it lacks left and right that is: if(!c.left & !c.right )
    /   \ 
    d    e 
    */
    if (!node) {
      return sum;
    }
    // we are checking if it is a leaf node and if it is a left node
    if (!c.left & !c.right & isLeft) {
      sum += node.left;
    }
    // this is a very interesting pattern pass the information whther we are on left or the right mode
    // by creating an object boolean parameter with that
    dfs(node.left, true);
    // this is an important note on recursion that it must not return a value.
    dfs(node.right, false);
  };
  dfs(root);
  return sum;
}
