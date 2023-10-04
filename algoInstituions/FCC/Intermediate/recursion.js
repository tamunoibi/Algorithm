function recurse(n) {
  if (n <= 1) {

    return 1;
  }
  // the need to add n -1 is so that the algorithm actually ends
  // let it be reduc    ing till it gets to 1
  // n is 5, 4, 3, 2, 1 in that order.
  // if there was no n-1 n would be 5, 5, 5...5 infinitely
  console.log({ n: n  });

  return n + recurse(n - 1);
}
const ans = recurse(5);
console.log({ ans: ans });
