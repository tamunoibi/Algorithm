const binaryTree = {
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

function levelOrder(root) {
  const res = [];
  if (!root) {
    return res;
  }
  const queue = [root];
  while (queue.length) {
    const content = [];
    const queueLength = queue.length;
    for (let i = 0; i < queueLength; i++) {
      const curr = queue.shift();
      content.push(curr.val);
      curr.left && queue.push(curr.left);
      curr.right && queue.push(curr.right);
    }
    res.push(content);
  }
  return res;
}
