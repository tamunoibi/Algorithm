// video reference:
// reference: note 2 page 3.
// their are two ways to traverse a lined list
// a.  the iterative approach (https://www.youtube.com/watch?v=OG-iaGQwVps)
// b.  the recursive approach (https://www.youtube.com/watch?v=S92RuTtt9EE&t=2s this video explains reverse)

// Question: loop through a linked list and push its value to an array
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

// the iterative approach
function traverseLinkedListIteratively(head) {
  const arr = [];

  while (head !== null) {
    arr.push(head.val);
    // on each iteration we set the head to be the object in head.next so it it progressively reducing the value of head
    head = head.next;
  }
  return arr;
}

// the recursive approach
function traverseLinkedListRecursively(head, arr = []) {
  if (head.val === undefined) {
    return arr;
  }
  arr.push(head.val);
  if (head.next) {
    traverseLinkedListRecursively(head.next, arr);
  }
  return arr;
}

function traverseLinkedListRecursivelyComment(head, arr = []) {
  // if the linked list is empty
  if (head.val === undefined) {
    return arr;
  }
  // if the linkedlist has a value push that value to the array
  arr.push(head.val);
  // if there a next value rerun the function
  if (head.next) {
    traverseLinkedListRecursively(head.next, arr);
  }
  // return the array
  return arr;
}
