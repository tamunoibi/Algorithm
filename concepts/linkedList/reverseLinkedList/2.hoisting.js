let head = {val: 'cat',next: null};

function test(head) {
    let prev = null;
    let i = 0;

    while (i < 1) {
        prev = head;
        head = 'rubbish';
        console.log(head); //outputs: 'rubbish'
        console.log(prev);
         //outputs:  {val: 'cat',next: null}; and not 'rubbish'
         // prev was set to head which is now rubbish
         // however, I had already stored the value of head outside the scope  so the overwrite would not affect it.
        i++;
    }
}
test(head);


function reverseLinkedListIterativelyOne(head) {
  let prevTemp = null;
  let nextTemp;
  while (head !== null) {
    nextTemp = head.next;
    /**
     * It is because of hoisting that when we change the value of head.next to prevTemp
     * the value of nextTemp did not also change but remained the old value of head.next
     */
    head.next = prevTemp;
    prevTemp = head;
    /**
     * It is because of hoisting that when we change the value of head to nextTemp
     * the value of prevTemp did not also change but remained the old value of head
     */
    head = nextTemp;
  }
  return prevTemp;
}