function dfsRecursion(node) {
  if (!node) {
    return;
  }
  let temp = node.left;
  node.left = node.right;
  node.right = temp;
  dfs(node.left);
  dfs(node.right);
}
const invertTreeDfsRecursion = (root) => {
  // it is the same function as above (the dfs). But I separated the function into two a recursive function (dfs) and a shell function(invertTreeDfs).
  function dfs(node) {
    if (!node) {
      return;
    }
    const temp = node.left;
    node.left = node.right;
    node.right = temp;
    dfs(node.right);
    dfs(node.left);
  }
  dfs(root);
  return root;
};
const invertTreeDfsRecursionComment = function (root) {
  dfs(root);
  return root;
  function dfs(node) {
    if (!node) {
      return;
    }
    /**
     * this is a swap. We swap the left with the right.
     * that is make the left the right.
     * and make the right the left.
     */
    // we create a temporary variable and store the left since we would overwrite its value. That way we do not loose it.
    let temp = node.left;
    // make the left the right.
    node.left = node.right;
    // make the right the old left. Which is stored in temp.
    node.right = temp;
    dfs(node.right);
    // we call dfs on the left  dfs(node.left);
    dfs(node.left);
  }
};
function dfsRecursionComment(node) {
  // this returns when we are on the last item. It also returns if null is passed.
  // Remember for trees and linked list you should handle null values.
  if (!node) {
    return;
  }
  /**
   * this is a swap. We swap the left with the right.
   * that is make the left the right.
   * and make the right the left.
   */
  // we create a temporary variable and store the left since we would overwrite its value. That way we do not loose it.
  let temp = node.left;
  // make the left the right.
  node.left = node.right;
  // make the right the old left. Which is stored in temp.
  node.right = temp;
  // we call dfs on the right  dfs(node.right);
  dfs(node.right);
}
function invertTreeBfs(node) {
  if (!node) {
    return;
  }
  const queue = [node];
  while (queue.length > 0) {
    const curr = queue.shift();
    if (curr.left && curr.right) {
      const temp = curr.left;
      curr.left = curr.right;
      curr.right = temp;
    }

    if (curr.left !== null) {
      queue.push(curr.left);
    }
    if (curr.right !== null) {
      queue.push(curr.right);
    }
  }
  return node;
}
function invertBinaryTreeDfsStack(node) {
  const stack = [node];
  if (!node) {
    return;
  }
  while (stack.length > 0) {
    const curr = stack.pop();
    console.log({ curr });
    if (curr.left && curr.right) {
      const temp = curr.left;
      curr.left = curr.right;
      curr.right = temp;
    }

    if (curr.left !== null) {
      stack.push(curr.left);
    }
    if (curr.right !== null) {
      stack.push(curr.right);
    }
  }
  return node;
}
function invertTreeBfsComment(node) {
  // this check is always added for binary trees and linked list because and empty object is a valid tree. But that would break my code.
  // When you don't add this check it would fail leetcodes test.
  if (!node) {
    return;
  }
  /**
   * The standard way of performing Breadth first traversal.
   * 1. add the root node to the queue
   * 2. start the while loop and remove the first node on the queue (this is the root for the first iteration). At this point is when the element is considered being visited. -----> any operation is performed here
   * 3. add the children(left and right) of that node if they exits. The method used here is push
   * 4. Repeat steps 2 and 3 while the queue is not empty
   *
   * the only thing to add is the swapping at the end of line 2. before starting line 3
   * aa
   */

  const queue = [node];

  while (queue.length > 0) {
    const curr = queue.shift();
    // Swap
    const temp = curr.left;
    curr.left = curr.right;
    curr.right = temp;

    if (curr.left !== null) {
      queue.push(curr.left);
    }
    if (curr.right !== null) {
      queue.push(curr.right);
    }
  }
  // We return the root
  return root;
}