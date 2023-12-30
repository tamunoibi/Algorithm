// Question: https://leetcode.com/problems/subtree-of-another-tree/

// tree is: val, left, right
const tree = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null,
  },
  right: {
    val: 3,
    left: null,
    right: null,
  },
};

function isSubtree(root, subRoot) {
  const sameTree = (root, subRoot) => {
    if (!root & !subRoot) {
      return true;
    }
    if (root & subRoot & (root.val === subRoot.val)) {
      return (
        sameTree(root.left, subRoot.left) & sameTree(root.right, subRoot.right)
      );
    }
    return false;
  };
  if (!subRoot) {
    return true;
  }
  if (!root) {
    return false;
  }
  if (sameTree(root, subRoot)) {
    return true;
  }
  return sameTree(root.left, subRoot) || sameTree(root.right, subRoot);
}
function isSubtreeComment(root, subRoot) {
  const sameTree = (root, subRoot) => {
    if (!root & !subRoot) {
      return true;
    }
    if (root & subRoot & (root.val === subRoot.val)) {
      return (
        sameTree(root.left, subRoot.left) & sameTree(root.right, subRoot.right)
      );
    }
    return false;
  };
  // an empty subtree is always a valid subtree, whetheer the main has a content or does not have a content
  if (!subRoot) {
    return true;
  }
  // an empty tree with a NON empty  is always invalid
  if (!root) {
    return false;
  }

  // if the root and the subroot are the exact same tree return true
  if (sameTree(root, subRoot)) {
    return true;
  }
  // if the root and the sub-root are NOT the exact same tree then check if
  // the left or the right of the main is same as the subroot
  return sameTree(root.left, subRoot) || sameTree(root.right, subRoot);
  /**
   * The above line of code is just too neat. The pattern dey bust my brain
   * so we are not just returning the result from a function call return  sameTree(root.left, subRoot)
   * but we are returning Any value that returns True.
   * I am seeing this pattern It simplifies a very complicated logic.
   * The logic is if either of the items return true return true. else return false
   * This is how  I would have approached it normally
   * if(sameTree(a) || sameTree(b)) {return true} else {false}
   *
   * But this neat way is
   * return sameTree(a) || sameTree(b)
   * too neat!
   * if the fiirst part returns true it would return true
   * if it is false it would move to thhe second sameTree call and return true if it 
   * returns true or false otherwise
   *
   */
}
