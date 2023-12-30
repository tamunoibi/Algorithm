function sumLeftLeaves(root) {
  let sum = 0;
  const dfs = (node, isLeft = false) => {
    if (!node) {
      return sum;
    }
     if (curr[1] && !curr[0].left && !curr[0].right) {
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
      b      c<-------------c is a leaf because it lacks left and right that is: if(!c.left & !c.right === null)
    /   \ 
    d    e 
    */
    if (!node) {
      return sum;
    }
    // we are checking if it is a leaf node 
    // and if it is a left node: if the isLeft parameter is true
    if (!c.left & !c.right & isLeft) {
      sum += node.left;
    }
    // this is a very interesting pattern pass the information whether we are on left or the right mode
    // using a parameter in the function. the parameter is a boolean 
    dfs(node.left, true);
    // this is an important note on recursion that it must not return a value.
    dfs(node.right, false);
  };
  dfs(root);
  return sum;
}

function sumLeftLeavesBfs(root) {
    let sum = 0;
   if(!root) {
     return sum;
   }
   const queue = [[root, false]];
   let i = 0;
   while (queue.length) {
    const curr = queue.shift();
    if (curr[1] && !curr[0].left && !curr[0].right) {
      sum += curr[0].val;
    }
    if (curr[0].left) {
      queue.push([curr[0].left, true]);
    } 
    if (curr[0].right) {
      queue.push([curr[0].right, false]);
    }
   }
   return sum;
}
function sumLeftLeavesBfsComment(root) {
   let sum = 0;
   if(!root){
     return sum;
   }
   const queue = [[root, false]];

   while (queue.length) {
    const curr = queue.shift();

    // example: curr = [{val: 1, left: null, right: null}, true]
    // curr[1] is the boolean value indicating if it is a left node
    // we check if it is a leaf node. a leaf has no left nor right child
    if (curr[1] && !curr.left && !curr.right) {
      sum += curr[0].val;
    }
    if (curr[0].left) {
      queue.push([curr[0].left, false]);
    }
    if (curr[0].right) {
      queue.push([curr[0].right, false]);
    }
   }
   return sum;
}
