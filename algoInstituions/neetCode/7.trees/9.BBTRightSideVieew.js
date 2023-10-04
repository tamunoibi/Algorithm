
// this solution is my own attempt
// I have not tested if it is functional
function rightSideView(root) {
  const res = [];
  if (!root) {
    return res;
  }
  const queue = [root];
  const queueLen = queue.length;

  // I am making this is a global variable since I want to access it at a later scope
  let lastItem;

  while (queue.length) {
    // for loop is to ascertain the begining and and of a level
    for (let i = 0; i < queueLen; i++) {
      const curr = queue.shift();
      lastItem = curr.val;
      curr.left && queue.push(curr.left);
      curr.right && queue.push(curr.right);
    }
    //add the last item in the queue to res
    res.push(lastItem);
  }
  return res;
}
