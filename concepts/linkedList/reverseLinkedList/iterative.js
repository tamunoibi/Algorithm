// The iterative approach (https://www.youtube.com/watch?v=OG-iaGQwVps)
/**
 * The things that are required to understand the iterative appraoch include:
 * 1. while loops
 * 2. traversing a linked list iteratively(/Users/tamunoibi/Documents/workspace/algorithim/concepts/linkedList/traverseLinkedList.js)
 * 3. how to perform a swaps using temp variables
 * 4. I think it is called `hoisting` see(concepts/linkedList/reverseLinkedList/2.hoisting.js)
 */
const linkedList = {
  val: 5,
  next: {
    val: 6,
    next: {
      val: 7,
      next: null,
    },
  },
};

function reverseLinkedListIterativelyOne(head) {
  let prevTemp = null;
  let nextTemp;
  while (head !== null) {
    nextTemp = head.next;
    head.next = prevTemp;
    prevTemp = head;
    head = nextTemp;
  }
  return prevTemp;
}
function reverseLinkedListIterativelyTwo(head) {
  // This splits it into helper function and the reversing function
  let prevTemp = null;
  let nextTemp;
  function swap(head, prev) {
    head.next = prev;
    prev = head;
  }
  while (head !== null) {
    nextTemp = head.next;
    swap(head, prevTemp);
    head = nextTemp;
  }
  return prevTemp;
}

function reverseLinkedListIterativelyOneComment(head) {
  let prevAddress = null;
  // why are we declaring the temp variable outside of the while loop scope? 
  //can't we declare it inside the while loop?
  // answer: we don't want when we change head.next let it change the value stored in temp
  let temp;
  // we are stopping at head being null because
  //first:   head =  { val: 6, next: { val: 7, next: null, }, },
  //second: head =  { val: 7, next: null, },
  //third   head =   next: null ---this means we should not run the while loop here
  while (head !== null) {
    // Store the value of the currentAddress we plan to overwrite 
    // This woould be used later. As the next iteration of the while loop would be this item.
    temp = head.next; //-->keep a copy of the node
    // overwrite the current value of next to  ( overwrite it to null on first iteration)
    // note if we did not store temp outside this scope when we change head.next it would also change the value of temp
    head.next = prevAddress; //--> overwrite the node
    /**
     * This two lines go hand in hand:
     *  `temp = head.next;
     *   head.next = prevAddress;`
     * The idea is I want to change the current elements next.
     * But before changing the value I must  save it in a value because I would have to use
     * the value at a subsequent time. If I don't save it the value would be lost
     */




    prevAddress = head;
    //Update the previousAddress(the one that was initialized as null ) to be head (that is the current node that I just constructed)
    // `prevTemp = head;`
    // This place some times I make mistake and say: `prevAddress = temp`
    // but that is wrong. as prev is not being used to move the loop forward 
    /**  `prevTemp = head;`
     * This line is setting the next iterations  .next pr operty. 
     * And I want the next iterations .next propety to be the full object I have constructed
     * example given a head = {val: 'cat', next: {val: 'kitten', next: null }}
     * 
     * initialzati: prev = null;  // this is how we initialize it
     * iteration 1: prev = {val: 'cat', next: null};  // on the next iteration the prevAddress I am setting here would be used as the address of that element.
     * iteration 2: prev = {val: 'kitten', next: {val: 'cat', next: null}};  // I would set next to the previous object I constructed
     */
    /** */
    /**  FIRST Iteration prev would be  {val: 'cat', next: null};
     *   because I reconstructed the first object and changed its next to be null
     *   The way the first object was:
        {
            val: 'cat',
            next: {
              val: 'kitten',
              next: null,
            },
        }
     * 
     * 
     * 
     *   The way the first object was changed to:
        {
            val: 'cat',
            next: null
        }
     * 
     * 
     * */

    /** SECOND iteration: the item was: { val: 'kitten', next: null,  }
     *   I reconstructed the second object and changed its next to be { val: 'cat', next: null }
     *   The way the second object was:
             {
              val: 'kitten',
              next: null
          }
      * 
      * 
      *   The way the second object was changed to:
          {
            val: 'kitten',
            next:  { val: 'cat', next: null } //-------->its next was updated to be the previous element. Note not just the previous elements next, but the whole previous element
          }
      */



    head = temp;
    //  How we keep moving forward is for each iteration we set the new head to be head.next
    // remember in this our case head.next is saved in temp
    // if this is unclear read how to looo through a linkedList
    // so the value of head  is progressively becoming the next till we get to null
    // this is the way to keep the loop moving to forward
    console.log({ prevAddress, head });
  }
  return prevTemp;
}
function reverseLinkedListIterativelyTwoComment(head) {
  // This splits it into helper function and the reversing function
  let prevTemp = null;
  let nextTemp;
  function swap(head, prev) {
    // make head.next to be prev
    head.next = prevTemp;
    //make prev to be head
    prev = head;
  }
  while (head !== null) {
    // Create a backup of head, so that you can move to that next element at the root. On the next line you modify its value
    nextTemp = head.next;
    // Swap the current element's next to be the whole of the previous element
    swap(head, prevTemp);
    // Set head to the next value so we can move to the next element
    head = nextTemp;
  }
  return prevTemp;
}

// The part that used to confuse me about reversal is 
// what the outer scoped variables have as their value
let head = {val: 'cat'};
function test(head) {
    let i = 0;
    let prev = null;
    let temp;

    while (i < 1) {
        console.log(prev); //outputs: null
        prev = head;
        head = 'rubbish';
        // head outputs: 'rubbish' as expected.
        console.log(head);


        // prev outputs: { val: 'cat' } which is the old value of head. NOT rubbish that is the updated value
        // because the assignment was done before the update.
        console.log(prev);  // { val: 'cat' }
        i++;
    }
}
test(head);

const head2 = {val: 'cat', next: null};
function test2(head) {
  let prev = 'john';
  let temp;
  let i = 0;
  while (i<1) {
    /**
     * initially head was:
     * head = {val: 'cat', next: null}
     * we assigned temp to the next value
     * temp = null;
     * 
     * 
     * 
     * we changed head .next to 'john'
     * head = {val: 'cat', next: john}
     * this does not update temps value
     * 
     * 
     * now head is:
     * head = {val: 'cat', next: 'john'}
     * it's .next is now 'john'
     * 
     * but temp remains null, the old value of head.next the update does not affect it 
     */
    temp = head.next;
    console.log(temp);

    head.next = prev;
    console.log(temp)
    i++;
  }
}