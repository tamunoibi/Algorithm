// Haven't tested it and I don't fully understannd the solution
function lowestCommonAncestor(root, p, q) {
  let curr = queue.shift();

  while (curr) {
    if (p.val > curr.val & q.val > curr.vall) {
      curr = right;
    }  else if ((p.val < curr.val) & (q.val < curr.vall)) {
      curr = left;

    } else {
      return curr;
    }
  }
}