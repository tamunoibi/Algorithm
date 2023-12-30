function recurse(n) {
  if (n <= 1) {

    return 1;
  }
  // the need to add n -1 is so that the algorithm actually ends
  // let it be reducing till it gets to 1
  // n is 5, 4, 3, 2, 1 in that order.
  // if there was no n-1 n would be 5, 5, 5...5 infinitely
  console.log({ n: n  });
  /**
   * each fiunction call spurns another function call
   * and we get the answer of this function call from the next function call
           5 + r(4)
               ⬇️
           4 + r(3)
               ⬇️
           3 + r(2)
               ⬇️
           2 + r(1)
               ⬇️
              1           
   */
  /**
   * When we resolve the answer for a
           5 + r(4)  = 15  (r(4) resolved to 10. we sum 5 + 10)
               ⬇️      ⬆️
           4 + r(3)  = 10  (r(3) resolved to 6. we sum 4 + 6)
               ⬇️      ⬆️
           3 + r(2)  = 6   (r(2) resolved to 3. we sum 3 + 3)
               ⬇️      ⬆️
           2 + r(1)  = 3   (r(1) resolved to 1. we sum 2 + 1)
               ⬇️      ⬆️
              1      = 1     
   */
  return n + recurse(n - 1);
}
const ans = recurse(5);
console.log({ ans: ans });
