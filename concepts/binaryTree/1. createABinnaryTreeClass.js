// binary tree visualiser. To help create trees: https://binary-tree-builder.netlify.app/
// types of binary tree: full, perfect, complete, degenerate, balanced: https://www.prepbytes.com/blog/tree/array-representation-of-binary-tree/#:~:text=Explanation%20of%20Array%20Representation%20of,in%20a%20breadth%2Dfirst%20search.
// x
/**
 * What is a Binary Tree?
 * A binary tree  is simply an object with  at most 3 properties: val, left and right.
the part that gets confusing is that left can also have properties(val, left and right). And right can also have properties(val, left and right).
 
Each note has at most 2 children
 * Example this tree node a has two children b and c. B has two children while c has one child
      a
    /   \
   b      c
 /   \     \
d      e     f

 * Example this tree a has only one child. this is valid
      a
    /  
   b  
 * Example this tree a has no child. this is valid
      a
    /  
   b  
 */

   const root = {
     val: 3,
     left: {
       val: 9,
       left: null,
       right: null,
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
/**
 * Creating binary tree using object constructors
 * 1. create a constructor. Inside the nodes store some values. The binary tree has three properties pass in those three properties. 
 *       a. val   --> assign it to the value being passed 
 *       b. left  -->  assign it to null it would later be joined properly to its proper ansestry
 *       d. right -->  assign it to null it would later be joined properly to its proper ansestry
 * 2. create a node passing in the value
 * 3. Join the node together by assigning the left and right properties.
 */
/**
 * Example to create a tree with the structure below
      a
    /   \
   b      c
 /   \     \
d      e     f
 you would link it as such:
   a.left is b while a.right is c; 
*/

//  1. Create a constructor
class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


// 2.  create a node passing in the value
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

// 3. Join the node together by assigning the left and right properties.
a.left = b ;
b.left = c;
b.left = d;
d.right = e;
c.right = f; 