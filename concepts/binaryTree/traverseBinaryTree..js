const binaryTree = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: {
        val: 8,
        left: null,
        right: null,
      },
      right: {
        val: 9,
        left: null,
        right: null,
      },
    },
  },
  right: {
    val: 5,
    left: {
      val: 10,
      left: null,
      right: null,
      right: {
        val: 11,
        left: null,
        right: null,
      },
    },
  },

  left: {
    val: 3,
    left: {
      val: 6,
      left: {
        val: 12,
        left: null,
        right: null,
      },
      right: {
        val: 13,
        left: null,
        right: null,
      },
    },
  },
  right: {
    val: 7,
    left: {
      val: 14,
      left: null,
      right: null,
      right: {
        val: 15,
        left: null,
        right: null,
      },
    },
  },
};
/**
 *  Their are two ways to reverse a binary tree
 *  1. Depth first. This is a recursive approach
 *  2. Breadth first. I have not studied it
 *  */
const arr = [];
// Not functional
function dfs(binaryTree) {
  //base case: stop when the left is null
  while (binaryTree.left !== null) {
    arr.push(binaryTree.val)
    dfs(binaryTree.left);
  }
}
