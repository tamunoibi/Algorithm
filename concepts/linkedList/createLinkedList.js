/**
 * Creating linked list
 * 1. create a node constructor and store some values.
 * The values stored are the two properties of the linked list.  the value(val) and the child(next)
 *       a. val  --> assign it to the value being passed to the constructor
 *       b. next --> assign it to null it would later be joined properly to its proper ansestry
 * 2. creeate a node passing in the value.
 * 3. Join the nodes together by assigning the next properties.
 * 
 * 
 */
/**
 * Example to create a tree with the structre below
      a
      |
      b
      |
      c
you would link it as such:
   a.next is b while b.next is c 
*/
//  1. Create a constructor
class Node {
    //  create a constructor.
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
// creeate a node passing in the value.
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');


// 3. Join the node together by assigning the left and right properties.
a.next = b ;
b.next = c;