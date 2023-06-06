const binaryTree = {
  val: 3,
  left: {
    val: 9,
    // left: null,
    // right: null,
    left: {
      val: 2,
      left: null,
      right: null,
    },
    right: {
      val: 4,
      left: null,
      right: null,
    },
  },
  right: {
    val: 20,
    left: {
      val: 15,
      left: null,
      right: null,
    },
    right: {
      val: 7,
      left: null,
      right: null,
    },
  },
};

function maximumDepthBinaryTreeRecursion(root) {
  if (!root) {
    return 0;
  }
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}
function maximumDepthBinaryTreeRecursionComment(root) {
  // if the root has no item then there is 0 maximum depth
  if (!root) {
    return 0;
  }
  const left = maxDepth(root.left);
  const right = maxDepth(root.right);
  //the maximum depth 1 + either the left or the right maximum.
  return 1 + Math.max(left, right);
}
function maximumDepthBinaryTreeRecursion2comment(root) {
  // if the root has no item then there is 0 maximum depth
  if (!root) {
    return 0;
  }
  let max = 0;

  const left = 1 + maxDepth(root.left);
  const right = 1 + maxDepth(root.right);

  //the maximum depth 1 + either the left or the right maximum.
  max = Math.max(left, right);
  // return the maximum depth
  return max;
}
function maxDepthQueueBfs(root) {
  /**
   * Breadth first search
   * 1. add the first item to the queue
   * 2. remove the first item using shift
   * 3. add its children if they exits.
   */
  let level = 0;
  if (!root) {
    return level;
  }
  const queue = [root];
  while (queue.length > 0) {
    for (let index = 0; index < queue.length; index++) {
      const curr = queue.shift();
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
    level++;
  }
  return level;
}
function maxDepthStackDfs(root) {
  /**
   * Depth first search
   * 1. add the first item to the stack
   * 2. remove the last item using pop
   * 3. add its children if they exits.
   */
  if (!root) {
    return 0;
  }
  const stack = [[root, 1]];
  let level = 1;

  while (stack.length > 0) {
    // const [curr, depth] = stack.pop();
    const ele = stack.pop();
    let [curr, depth] = ele;

    // since we did not have a check if the element is null before adding it to our stack
    // we check to makes sure that to it is not an empty element then we  push the element
    if (curr !== null) {
      level = Math.max(level, depth);
      // we do not have a check if the element is null before adding it to our stack
      stack.push([curr.left, depth++]);
      stack.push([curr.right, depth++]);
    }
  }
  return level;
}
// Check if this works now: I made a change
function maxDepthStackDfsExperiment(root) {
  if (!root) {
    return 0;
  }
  const stack = [[root, 1]];
  let level = 1;

  while (stack.length > 0) {
    const ele = stack.pop();
    let [curr, depth] = ele;

    if (curr.left || curr.right) {
      depth++;
      level = Math.max(level, depth);
    }

    if (curr.right) {
      stack.push([curr.left, depth]);
    }
    if (curr.left) {
      stack.push([curr.left, depth]);
    }
    /** Question:  why does this fail [3,9,20,null,null,15,7]
     * expected: 3
     * output: 5
            3
          /   \
         9     20
              /   \
             15    7

             [[3: depth:1]];   level = 1;
             loop:
             3:
               [20:depth:2, 9:depth2]; depth = 2;
             9:
              [20:depth:2];  level = 2; (9 has neither left nor right): (I would like to console the values that run the if, whether it runs for 9)
             20:
              [7:depth:3, 15:depth:3]; level = 3;
             15:
              [7:depth:3]; level = 3; depth = 3;
             7:
              []; level = 3; depth = 3;
     */
  }
  return level;
}
