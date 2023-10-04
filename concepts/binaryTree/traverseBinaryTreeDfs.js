/**
 * Prerequisite:
 * 1. What a binnary trees. See createABinnaryTreeClass.js
 * Reference:
 * 1. Great tutorial by coderByte breadth first traversal : https://www.youtube.com/watch?v=dfaKCrJ2HAk&t=46s
 * 2. Personal note:
 *
 */

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
    right: null,
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
// Dfs using iteration
function dfs(binaryTree) {
  const stack = [root];
  while (stack.length > 0) {
    const curr = stack.pop();
    console.log(cur.val);
    if (curr.right !== null) {
      stack.push(curr.right);
    }
    if (curr.left !== null) {
      stack.push(curr.left);
    }
  }
}
// Dfs using recursion
function dfs(root) {
  if (root === null) {
    return;
  }
  console.log(root.val);
  dfs(binaryTree.left);
  dfs(binaryTree.right);
}
/**
 *  Their are two ways to traverse a binary tree
 *  1. Depth first. This is a could be implemented using a stack.
 *  2. Breadth first. This is a could be implemented using a queue. Get more info by checking traverseBinaryTreeBfs.js
 *
 * Depth First Traversal:
 * You travel as deep as you can to a leaf before you move laterally through the tree.
 * Dfs is implemented using a stack.
 *     stacks can be implemented with iteration or recursion
 *
 * Stacks:
 * We add items to the top of the stack and remove items from the top of the stack.
 * First in last out or last in first out.
 * A tip to remember this is the first SSSSSSSShall be the last.(S in shall is for stack) That is first in last out.
 *
 *
 *  STACK OPERATIONS:
 * 1. push() -- to add to the back
 * 2. pop()  -- to remove from the front
 * Tip both stack and queues add to the back the differnce is the removal either from front(for stacks) or back
 *  */

// Dfs using iteration
function dfs(root) {
  const stack = [root];
  while (stack.length > 0) {
    // We remove the top of the stack using the pop
    // you consider something visited when it leaves the stack
    // pop() removes the last element of an array.
    // const fruits = ["Banana", "Orange", "Apple", "Mango"];
    // fruits.pop();
    // console.log(fruits): Banana,Orange,Apple
    const curr = stack.pop();
    /**
     * The only difference between dfs and bfs is this line:
     *  while is stack we call .shift() to remove the first item
     *  in queue we call .pop() to remove the last item.
     * We can also target:
     *    the first item with .slice(0, arr.length) --> for queue
     *    the last item with .slice(0, arr.length)  ---> for stack
     */

    // it is at the point an item is being removed that it is considerd being visited not when it is added to the stack
    console.log(cur.val);
    // We add the current nodes children to the top of the stack if they exists
    if (curr.right !== null) {
      stack.push(curr.right);
    }
    if (curr.left !== null) {
      stack.push(curr.left);
    }

    /**
       * The order in which we push the childrend determins the order the items are traversed. 
       * if we push the left child and then the right child to the stack. That means the right child is 
       * guranteed to be at the top of the stack. The right child would always be above the left child.
       * which means the next time we pop we would pop the right child
       *   stack.push(curr.left);
       *   stack.push(curr.right);
       * 
       * the right child is guranteed to be addressed first before the left child sine 
       *   right
       *   left
         pop() removes the last element of an array.
         const stack = ["left", "right"];
         stack.pop(); ---> gives us right
      
      the item you want to deal with first should be added last. Since we are starting at the back
       * Example this tree node

                a
              /   \
            b      c
          /   \     \
          d      e    f

       *  stack.push(right) &&  stack.push(left)
         prints:  a, b, d, e, c, f
         it goes left till it encounnters a leaf then righ
         left to right

       *  stack.push(left) &&  stack.push(right)
         prints:  a, c, f, b, e, d
         it goes right  till it encountes a leaf then left
         right to left
       */
  }
}

// Dfs using recursion
/**
 *  Depth first Traversal
 *  A binary tree  is just an object with three properties. val, left and right.
 *  To traverse  a binary tree we can traverse the left, keep traversing it until it is finished
 *  Then traverse  the right of the binary tree , keep traversing it until it is finnished
 *  */
function dfs(root) {
  // the base case stop when the treee is empty
  if (root === null) {
    return;
  }
  /** pre-order we print out the parent before the children
     console.log(root.val);
      self, left, right
  */
  //keep runing when the left has value
  dfs(binaryTree.left);

  /** in-order we print out the parent after the children
          console.log(root.val);
          left, self, left, 
      */

  //keep runing when the right has value
  dfs(binaryTree.right);

  /**  post-order we print out the parent after the children
          console.log(root.val);
          left, right, self, 
      */
}

// Dfs using recursion
/**
 *  Depth first Traversal
 *  A binary tree  is just an object with three properties. val, left and right.
 *  To traverse  a binary tree we can traverse the left, keep traversing it until it is finished
 *  Then traverse  the right of the binary tree , keep traversing it until it is finnished
 *  */
const depthFirstRecursionComment = (binaryTree) => {
  // This function adds all the properties of the tree to the array called arr.
  const arr = [];
  function dfs(binaryTree) {
    // push the value
    arr.push(binaryTree.val);
    //keep runing when the left has value
    while (binaryTree.left !== null) {
      dfs(binaryTree.left);
    }
    //keep runing when the right has value
    while (binaryTree.right !== null) {
      dfs(binaryTree.right);
    }
  }
};

// Dfs using recursion explained further
/**
 *  Depth first Traversal.
 * I am going to explainn breadth first in another way
 *  Wrapping your mind around the breadth first traversal can take a while so I would separate the left and the right traversal
 *  A binary tree  is just an object with three properties. val, left and right.
 *  To traverse  a binary tree we can traverse the left then traverse the right.
 *  1. Traverse the left. Each time you call the funcion you go further down the nested object to the left: binaryTree.left
 *  2. Traverse the right. Each time you call the funcion you go further down the nested object to the rightbinaryTree.right
 *  */
const depthFirstRecursionExplainedFurther = (binaryTree) => {
  //This function shows how to traverse the full tree which is combinning the left and right traversal
  const arr = [];
  //This function is buggy
  function dfs(binaryTree) {
    // push the .val property into the arr
    arr.push(binaryTree.val);
    //keep re-running the function while the left has value
    if (binaryTree.left !== null) {
      // run the function passing the left property
      dfsLeft(binaryTree.left);
    }
    //keep re-running the function while the right has value
    if (binaryTree.right !== null) {
      // run the function passing the right property
      dfsRight(binaryTree.right);
    }
  }

  //This function shows how to traverse the left side of the tree
  function dfsLeft(leftTree) {
    // push the value
    arr.push(leftTree.val);
    //keep runing when the left has value
    while (leftTree.left !== null) {
      dfsLeft(leftTree.left);
    }
  }

  //This function shows how to traverse the right side of the tree
  function dfsRight(rightTree) {
    // push the value
    arr.push(rightTree.val);
    //keep runing when the left has value
    while (rightTree.right !== null) {
      dfsRight(rightTree.right);
    }
  }
};


