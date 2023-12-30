// O(N)
const binaryTree = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: null,
    right: null,
  },
};
dfsRecursion(binaryTree);
function dfsRecursion(root) {
  if (!root) {
    return root;
  }
  let temp = root.left;
  root.left = root.right;
  root.right = temp;
  // are you sure this is correct? what of the root itself?
  dfsRecursion(root.left);
  dfsRecursion(root.right);
  return root;
}
const dfsRecursion2 = (root) => {
  // it is the same function as above (the dfs). But I separated the function into two a recursive function (dfs) and a shell function(invertTreeDfs).
  function dfs(root) {
    if (!root) {
      return root;
    }
    const temp = root.left;
    root.left = root.right;
    root.right = temp;
    dfs(root.right);
    dfs(root.left);
  }
  dfs(root);
  return root;
};
function dfsStack(root) {
  // test if it works
  const stack = [root];
  if (!root) {
    return root;
  }
  while (stack.length > 0) {
    const curr = stack.pop();
    // swap
      const temp = curr.left;
      curr.left = curr.right;
      curr.right = temp;
      
      // add a value if either the left or the right exits.

    if (curr.left !== null || curr.right !== null) {
      stack.push(curr.left);
      stack.push(curr.right);
    }
  }
  return root;
}
function dfsStack(root) {
  // does not work
  const stack = [root];
  if (!root) {
    return root;
  }
  while (stack.length > 0) {
    const curr = stack.pop();
    /**why are we checking if it has both left and right b4 d swap? 
     * even if it has only left or only right we should still swap.
     *if (curr.left && curr.right) {
     *  const temp = curr.left;
     *  curr.left = curr.right;
     *  curr.right = temp;
     *}
     * example:
     *              cat
     *                 \
     *                  \
     *                  rat
     * 
     * shoould become:
     *              cat
     *              /
     *             /
     *           rat
     * I think the correct way should be if either of them exits then do the swap
     *if (curr.left || curr.right) {
     *  const temp = curr.left;
     *  curr.left = curr.right;
     *  curr.right = temp;
     *}
     */
    if (curr.left && curr.right) {
      const temp = curr.left;
      curr.left = curr.right;
      curr.right = temp;
    }

    // I am thinking that to change this if condition instead of not pushing null values 
    // push left and right when either of them have a value
    // if (curr.right || curr.left)  { stack.push(curr.left); stack.push(curr.right);}
    if (curr.left !== null) {
      stack.push(curr.left);
    }
    if (curr.right !== null) {
      stack.push(curr.right);
    }
  }
  return root;
}
function bfs(root) {
  // does not work
  if (!root) {
    return root;
  }
  const queue = [root];
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
  return root;
}
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

  // we call dfs on the left  dfs(node.left);
  dfs(node.left);


}
const dfsRecursion2Comment = function (root) {
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
function bfsComment(node) {
  // this check is always added for binary trees and linked list because and empty object is a valid tree. 
  // But an empty object would break my code. 
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
   * the only thing to add for invert binary tree is is the swapping.
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

// why does the .length property of the for loop NOT change
// while the .length of the while loop changes to the updated array length
function play() {
  const arr = [ 'cow'];
  for (let i = 0; i < arr.length; i++) {
    console.log(i);
    arr.push('owl');
    arr.push('rat');
    arr.push('cat');
  }
}
play()
/**
 * write:
 * 1. implement dfs with stack: see invert tree
 * 2. dfs with recursion: see invert bt
 * 3. diagonal: note
 * 4. boundry: note
 */