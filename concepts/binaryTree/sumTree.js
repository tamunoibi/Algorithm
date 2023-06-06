// sum tree using iteration
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
    right: {
      val: 9,
      left: null,
      right: null,
    },
  },
  right: {
    val: 5,
    left: {
      val: 10,
      left: null,
      right: {
        val: 11,
        left: null,
        right: null,
      },
    },
    right: null,
  },
};
function sumTree(root) {
     const stack = [ root ];
     while(stack.lenght > 0) {
      const curr = stack.pop();
      console.log(cur.val);
      if(curr.right !== null) {
        stack.push(curr.right);
      }
      if(curr.left !== null) {
        stack.push(curr.left);
      }
     }
}

// sum tree using recursion
// O(n) time.  O(n) space.
function sumTree(root) {
  if(root === null) {
    return 0;
  }
    console.log(root.val);
    return dfs(binaryTree.left) + root.val +  dfs(binaryTree.right);
}
