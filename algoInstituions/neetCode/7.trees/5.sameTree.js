//leetcode.com/problems/same-tree/
//sample input
const p = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null,
  },
  right: {
    val: 1,
    left: null,
    right: null,
  },
};

const q = {
  val: 1,
  left: {
    val: 1,
    left: null,
    right: null,
  },
  right: {
    val: 2,
    left: null,
    right: null,
  },
};

const sameTree = (p, q) => {
  /**
   * 1. add  node
   * 2. remove first element with shift
   * 3. add the left and right children
   * 4. repeat
   */

  const pQueue = [p];
  const qQueue = [q];

  while (pQueue.length || qQueue.length) {
    if (!pQueue.length || !qQueue.length) {
      return false;
    }
    const currP = pQueue.shift();
    const currQ = qQueue.shift();

    if (currP.val !== currQ.val) {
      return false;
    }
    if (pQueue.left) {
      pQueue.push(currP.left);
    }
    if (pQueue.right) {
      pQueue.push(currP.right);
    }
    if (qQueue.left) {
      qQueue.push(currP.left);
    }
    if (qQueue.right) {
      qQueue.push(currP.right);
    }
  }
  return true;
};
function sameTree(p, q) {
  // when both trees are empty
  // example: null = null

  // if one of them is empty but the other is not empty
  //  example: {val: a} != null
  if ((p && !q) || (!p && q)) {
    return false;
  }

  // here both the trees have values. But the values are not the same
  //  example: {val: a} != {val: b}
  if (p & q & (p.val != q.val)) {
    return false;
  }
  //   we want the both of them to return true then we return true
  // if the left is the same and the right is the same  then return true else return false
  // if either the left or the right is not true then return false
  return sameTree(p.left, q.left) & sameTree(p.right, q.right);
}

const sameTreeTwo = (p, q) => {
  //p
  //       a 
  //     /   \
  //    b -t   c
  //  /   \     \
  // d  -t  e     f

  //q
  //       a
  //     /   \
  //    b      c
  //  /   \     \
  // d -t   e     f
  const dfs = (nodeP, nodeQ) => {
    if (!nodeP & !nodeQ) {
      return true;
    }
    if (!nodeP & nodeQ || !nodeQ & nodeP || nodeP.val !== nodeQ.val) {
      return false;
    } else {
    } return dfs(nodeP.left, nodeQ.left) && dfs(nodeP.right, nodeQ.right);
  };
  return dfs(p, q);
};
const sameTreeTwoComment = (p, q) => {
  const dfs = (nodeP, nodeQ) => {
    // this means both values are empty.
    // we have either gotten to the last element or both values were initially empty
    // either ways this is a valid tree. If we have gotten to the last items onn both that means all other values were same
    // if both was passed an empty tree from the

    if (!nodeP & !nodeQ) {
      return true;
    }
    // if one of the nodes is empty, and the other is not empty return false
    // this means both values are not the same
    // or the actual contents are
    // eg: nodeP = null nodeQ = {val: 2, left: null, right: null}
    if (!nodeP & nodeQ || !nodeQ & nodeP || nodeP.val !== nodeQ.val) {
      return false;
    } else {
      /**
       * Wrong way
       * dfs(p.left, q.left);
       * dfs(p.right, q.right);

       * correct way way
       * dfs(p.left, q.left);
       * dfs(p.right, q.right);
       */
      return dfs(p.left, q.left) & dfs(p.right, q.right);
    }
  };
  /**Wrong way
   * dfs(p, q);
   * return true 
   * 
   * Correct way
   * return dfs(p, q);
  */
 
  return dfs(p, q);
};
