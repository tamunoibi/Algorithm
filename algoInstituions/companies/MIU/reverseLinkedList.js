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

function reverseLinkedList(head) {
  let prevTemp = null;
  let nextTemp;
  // we are stopping at head being null because
  //first: head =  { val: 6, next: { val: 7, next: null, }, },
  //second: head= { val: 7, next: null, },
  //third head = next: null ---this means we should stop
  while (head !== null) {
    nextTemp = head.next;
    head.next = prevTemp;
    //head.next
    //     null  - because we set it to prevTemp which was initialized to null
    // { val: 5, next: null }
    // { val: 6, next: { val: 5, next: null } }

    prevTemp = head;
    // prevTemp: is 
    //  { val: 5, next: null } --  `prevTemp = head` -- head = { val: 5, next: null }
    // { val: 6, next: { val: 5, next: null } }
    // { val: 7, next: { val: 6, next: { val: 5, next: null } } }
    console.log(prevTemp);
    head = nextTemp;
    // return
  }
  return prevTemp;
}
reverseLinkedList(linkedList);

// console.log(linkedList);
// console.log(reverseLinkedList(linkedList));
