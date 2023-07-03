/**
 * The things that are required to understand this iis
 * 1. while loops
 * 2. traversing a linked list iteratively(/Users/tamunoibi/Documents/workspace/algorithim/concepts/linkedList/traverseLinkedList.js)
 * 3. how to perform a swap using temp variables
 * 4.
 * 5.
 */

/**
 * The things that are required to understand the recursive approach
 * 1. while loops
 * 2. traversing a linked list recursively
 * 3. Value vs. Reference assignement. When you create a duplicate by saying objectA = objectB you are merely creating a reference and any changes to objectA is also a change to objectB. That is why when we change the head we change the newHead
 * 4. how to create a duplicate newHead so that when we reasign the values head the newHead would not get reasignned
 * 5. Recursion and how it operates that the returned values can be stored in a varialbe then you can reasign newHead and it would affect it. 
 * 6. That the  recursion stop one step before the last element and the if block runs then returns that last item to the recursion. Is there another functionn where the thing that is returned is not immidiately acted on? se 
 */

// their are two ways to reverse a linked list
// a.  the iterative approach (https://www.youtube.com/watch?v=OG-iaGQwVps)
// b.  the recursive approach (https://www.youtube.com/watch?v=S92RuTtt9EE&t=2s)

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

function reverseRecursivelyTwo(head) {
  if (head === null || head.next === null) {
    return head;
  }
  let newHead = reverseList(head.next);
  // The previous elements next is set to head
  head.next.next = head;
  // the current elements next is set to null. If you do not do this the first element would not be set to null.
  head.next = null;
  return newHead;
}

function reverseLinkedListIteratively(head) {
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
function reverseLinkedListRecursivelyOne(head) {
  if (head === null) {
    return null;
  }
  let newHead = head;
  if (head.next) {
    newHead = reverseList(head.next);
    head.next.next = head;
  }
  head.next = null;
  return newHead;
}
function reverseLinkedListIterativelyHelperFunction(head) {
  let prevTemp = null;
  let nextTemp;
  function swap(head, prev) {
    head.next = prevTemp;
    prev = head;
  }
  while (head !== null) {
    nextTemp = head.next;
    swap(head, prevTemp);
    head = nextTemp;
  }
  return prevTemp;
}
function reverseLinkedListIterativelyComment(head) {
  let prevAddress = null;
  let temp;
  // we are stopping at head being null because
  //first:  head =  { val: 6, next: { val: 7, next: null, }, },
  //second: head =  { val: 7, next: null, },
  //third   head =   next: null ---this means we should stop
  while (head !== null) {
    arr.push(head.next);
    // Save the value of the currentAddress we plan to overwrite
    temp = head.next; //-->keep a copy of the node
    // overwrite the current value of next to  ( overwrite it to null on first iteration)
    head.next = prevAddress; //--> overwrite the node
    /**
     * This two lines go hand in hand:
     *  `temp = head.next;
     *   head.next = prevAddress;`
     * The idea is I want to change the current elements next.
     * But before changing the value I must  save it in a value because I would have to use
     * the value at a subsequent time
     */

    //Update the previousAddress(the one that was initialized as null ) to be head (that is the current node before  it was before it was changed)
    // This place some times I make mistake and say prevAddress = temp
    // but that is wrong.
    /**
     * This line is setting the next items next. And I want the next items next to be the full object I have constructed
     * that full object on the first iteration is {val: next: null}
     * on the second iteration is {val: next: null}
     * on the next iteration the prevAddress I am setting here would be used as the address of that element. so it is the object I have constructed thus far
     */
    /** */
    /**  FIRST Iteration prev would be  { val: 5, next: null }
     *   because I reconstructed the first object and changed its next to be null
     *   The way the first object was:
              {
            val: 5,
            next: {
              val: 6,
              next: {
                val: 7,
                next: null,
              },
            },
          }
     * 
       *   The way the first object was changed to:
              {
            val: 5,
            next: null
              }
     * 
     * 
     * */

    /** SECOND iteration: the item was: { val: 5, next: null,  }
     *   I reconstructed the second object and changed its next to be { val: 5, next: null }
     *   The way the second object was:
             {
              val: 6,
              next: {
                val: 7,
                next: null,
            },
          }
      * 
      *   The way the second object was changed to:
          {
            val: 6,
            next:  { val: 5, next: null } //-------->its next was updated to be the previous element. Note not just the previous elements next.
          }
      */
    console.log({ prevAddress, head, temp });
    prevAddress = head;

    // on each iteration we set the head to be the object in head.next
    // so the value of head  is progressively reducing
    // this is the way to keep the loop moving to next
    head = temp;
    console.log({ prevAddress, head });
  }
  return prevTemp;
}
function reverseLinkedListRecursivelyOneComment(head) {
  /**
   * This reverse() method returns a node.
   * Our goal is to go all the way to the end
   * we return the last element and we keep on returning that through all call stack iteration
   * and that represent the new head so that we can return the new head at the end.
   *
   * eg.
  //the starting list
      const linkedList = {
            val: 500,
            next: {
              val: 1,
              next: null,
            },
          }


  // we change the head.next.next to be current head
// this is because we are trying to reconstruct the heads.next.next as it would eventually be the returned value.
    const linkedList = {
    val: 500,
    next: {
      val: 1,
      next: { // --> I am linkedList.next.next and I was set to linkedList.
        val: 500,
        next: { // --> I would now be set to null
          val: 1,
          next: null,
        },
      },
    },
  };'

  1. create a duplicate of linkedList next: replace temp with the value of linkedList.next
  2. change the linked list next to the value in prev(on first iteration it would be null)
  3. change prev to the linked list just constructed
  4. move the linked list to the new value by copying temp -->repeat from step one

  prev =  {
        val: 11,
        next: {
        val: 8,
        next: {
          val: 5,
          next: null
        }
      },
      }

  temp = null

  const linkedList = { 
          val: 14,
          next: {
        val: 11,
        next: {
        val: 8,
        next: {
          val: 5,
          next: null
        }
      },
      },
        },

  // You create a duplicate of heads.next (that is the nested element). This is the element to be returned
  // When you change the  parent element(linkedList.next property ) it would change this property.
   const newHead = {
      val: 1,
      next: { // ---> this was created by saying I am linkedList. (linkedList.next.next = linkedList) so It is merely a refrence if linkedList is changed this value would also change
        val: 500, 
        next: { // ---> this value is changed to null from linkedList and as expected this changes too
          val: 1,
          next: null,
        },
      },
    },

    // and overwrite head's next to null. This effectively overwrites the nested componenet being constructed to null.
      const linkedList = {
    val: 500,
    next: {
      val: 1,
      next: { // --> I am linkedList.next.next and I was set to linkedList. from null
        val: 500,
        next: null   // --> I was set to null from {val:1, next: null} would now be set to null
    },
  };


    Walkthrough:
    //First it goes through the 
     reverseRecursivelyTwo({val:5, next: {val:6, next: {val: 7, next: null}}});
     reverseRecursivelyTwo({val:6, next: {val: 7, next: null}});
     reverseRecursivelyTwo(next: {val: 7, next: null});
     returns {val: 7, next: null}

     WalkUp:
     reverseRecursivelyTwo({val:5, next: {val:6, next: {val: 7, next: null}}});
     reverseRecursivelyTwo({val:6, next: {val: 7, next: null}}); ______ head is 
     reverseRecursivelyTwo(next: {val: 7, next: null});____sends {val: 7, next: null} up
   */
  // The recursion progressively gets to the last element. example: reverse({val 1: next: null})
  // first:   head =  {val 1: next: null}.
  // second:  head =  null.

  if (head === null) {
    // It checks if the sneaky user tries to pass in null and break our code. The don't even run anything.
    /**Note
     1.  This is not a base case becauseIt is not used to stop the recursion
   The condition that first stops the loop is if head.next has content. because the loop only runs if the heads next even has a content. The test for if the heads child is empty must fail before the test for if the head itself has conntent. head.next !== null as such that case would be reached even before we reach the case of head === null.
    2. This is very important. You can comment out this if block and pass a null value reverse(null) it and when you run the code you get error: TypeError: Cannot read properties of null (reading 'next')
  return newHead;
}
   */
    return null;
  }
  // we create a value newHead that is a duplicate of head.
  // Why do we need to duplicate it? It is because we would overwrite it. Just like creating a temp varirable.
  // It is noteworthy that multiple recursive calls create various stacks so we have multiple newHead variables and they all have different values
  //  eg. reverse({val: 1, next: {val: 2, next: null }})
  // this would run 3 times. and head would have three different values.
  // stack1 head = {val: 1, next: {val: 2, next: null }})
  // stack2 head = {next: {val: 2, next: null }}
  // stack1 head = {next: null}

  // on each of the iterations we set the value of newHead to be the value of Head as such newHead would have three values
  // stack1 newHead = {val: 1, next: {val: 2, next: null }})
  // stack2 newHead = {next: {val: 2, next: null }}
  // stack1 newHead = {next: null}
  let newHead = head;
  // This if block is only run if the head.next !== null, So the very last element in the linked list would not run this block
  if (head.next) {
    //  eg. reverse({val: 1, next: {val: 2, next: null }})
    // we reasign newHead to be the return value of reverse().
    // Remember this is recursion. We keep calling the recursion till we return an object. When we get to the element whose next is null we don't go to the recursive part but the return newHead. This our function returns an object at the last call {val :2 'null'}. When we return we evaluate upwards passing the returned value
    /**
     * First let us write the recursive calls
     * newHead = recurse( {next: {val: 2, next: null }})  &&  head = {val: 1, next: {val: 2, next: null }}
     * newHead = recurse( {next: null})  && head = {val: 2, next: null }
     * return newHead.
     *
     *
     * Question what is newHead that was returned?
     * ans: {val: 2, next:null}
     * Because the element we currently are at is called head and it is {val: 2, next:null}. When we get to this element the if()block isn't run since the test if head.next has a value. And as you can see it doesn't. if(head.next) fails. So the if() block does not run but rather the execution goes to head.next = null &&  return newHead; N/b newHead was previously set to head. and head is the element we are at.
     */

    /**
     * Next let us see the evaluation of the recursive calls. Start from the bottom and walk up. DO NOT start from the top
       eg. reverse({val: 1, next: {val: 2, next: null }})
     *                 newHead = recurse( {val: 2, next: null })*** we set newHead to return value of the recursive call that is newHead = {val: 2, next:null} .Then we continue with the function and run head.next.next = head; Remember head is head = {val:1, next: {val: 2, next: null }}. That is we set this elements({val:1, next: {val: 2, next: null }}) next next which was null to head. that is  head = {val:1, next: {val: 2, next: {val:1, next: {val: 2, next: null }} }}. Then we run head.next = null that is head = {val: 1, next: null}
     * Start here---->>return newHead .What does this mean? It means  return {val: 2, next:null}. this did not run the if() block but the down part
     */

    newHead = reverseLinkedListRecursivelyComment(head.next);
    // we are assigning something to the current element.
    // The thing being reassigned is the current elements next next, which is like saying the last recursive elements next, should become the current element
    /**
     * That is:
        { // ---> this is the current element. That is head.
          val: 6,
          next: {
            val: 7,
            next: null,// --> this property (that is null) should be swapped with head(that is ). so we swap null with  { val:6, next: { val: 7: next: null}}
        },
     */
    /**
     * So after the swap the object becomes
        {
          val: 6,
          next: {
            val: 7,
            next: { val:6, next: { val: 7: next: null}}
        },
     */
    head.next.next = head;
  }
  /** 
   *currently the element is:
   /**
        {
          val: 6,
          next: {
            val: 7,
            next: { val:6, next: { val: 7: next: null}}
        },
     */

  /** 
   * 
   /**
        {
          val: 6,
          next: null, { val:6, next: { val: 7: next: null}}
        },
     */
  head.next = null;

  return newHead;
}
function reverseLinkedListIterativelyHelperFunctionComment(head) {
  let prevTemp = null;
  let nextTemp;
  function swap(head, prev) {
    // make head.next to be prev
    head.next = prevTemp;
    //make prev to be head
    prev = head;
  }
  while (head !== null) {
    // Create a backup of head, so that you can move to that next element at the roof. On the next line you modify its value
    nextTemp = head.next;
    // Swap the current element's next to be the whole of the previous element
    swap(head, prevTemp);
    // Set head to the next value so we can move to the next element
    head = nextTemp;
  }
  return prevTemp;
}
