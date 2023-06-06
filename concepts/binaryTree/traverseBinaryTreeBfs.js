/**
 * Prerequisite: 
 * 1. What a binary trees. See createABinnaryTreeClass.js
 * 2. swapping
 * Reference: 
 * 1. Great tutorial by coderByte breadth first traversal : https://www.youtube.com/watch?v=dfaKCrJ2HAk&t=46s
 * 2. Personal note: 
 * 
 */

/**
 *  Their are two ways to traverse a binary tree:
 *  1. Depth first. This is a could be implemented using a stack. Get more info by checking traverseBinaryTreeDfs.js
 *  2. Breadth first. This is a could be implemented using a queue. The way a queue works is items are added to the back (you can use push) and removed from the front (you can use shift())
 * 
 * Queue:
 * We add items to the back or bottom of the queue (with push) and remove items from the top or front (with shift() ) of the queue.
 * First in first out or last in last out.
 * 
 * 
 * 
 * QUEUE OPERATIONS
 * 1. push
 * 2. shift()
 * Tip both stack and queues add to the back the differnce is the removal either from front(for stacks) or back
 *  */


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
function bfs(binaryTree) {
    const queue = [binaryTree];
  while (queue.length > 0) {
   const curr = queue.shift();
   console.log(curr);
   if(curr.left !== null) {
     queue.push(curr.left);
   }
   if(curr.right !== null) {
     queue.push(curr.right);
   }
  }
}


 /**Breath first.
  *  A binary tree  is just an object with 3 properties. val, left and right. the left and right is the propertis that carry the children
  *  To traverse  a binary tree using breadth first is to use a queue. In summary you add the parent to the queue remove the parent and add its children if it has.
  * Steps: 
  * 1. add the root node to the queue
  * 2. start the while loop and remove the first node on the queue (this is the root for the first iteration). At this point is when the element is considered being visited
  * 3. add the children(left and right) of that node if they exits. The method used here is push  
  * 4. Repeat steps 2 and 3 while the queue is not empty
  */

//This function prints the values of a binary tree using breadth first which is implemented with a queue
function bfsComment(binaryTree) {
    // push the root into the queue
    const queue = [binaryTree];


  //keep re-running the loop while the queue is not empty
  while (queue.length > 0) {
    // remove the first elemnent from the queue
    // on the first iteration it would be the root
    // subsequently it would be the left child (if it exits)
    // subsequently it would be the right child (if it exits)
    // after that it would be the lefts childs left child: honestly I have stopped following the flow. But I understand it well enourgh to implement it.
    const curr = queue.shift(); // ------> this is the only difference between stacks and queue
    /**
     * The only difference between dfs and bfs is this line:
     *  while is stack we call .shift() to remove the first item
     *  in queue we call .pop() to remove the last item.
     * We can also target:
     *    the first item with .slice(0, arr.length) --> for queue
     *    the last item with .slice(0, arr.length)  ---> for stack
     *
     */
    //When implementing a breadth first traversal whenn something leaves the queue. like with queue.shift() above
    // what you just removed is now being explored
    // an element is considered to be visited when it leaves the queue not when it is added to the queue.
    //  since cur just left the queue it is being explored we can print it out and also add its children elements to the queue.
    console.log(curr);

    //Add the left and right properties to the back queue if they exits.
    if (curr.left !== null) {
      queue.push(curr.left);
    }
    if (curr.right !== null) {
      queue.push(curr.right);
    }
  }
}