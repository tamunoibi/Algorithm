function frankenSplice(arr1, arr2, n) {
  /**
   * const newArr = arr2.slice();
   * This is to duplicate the array
   *
   * I first attempted to duplicate it this way:
   * const newArr = arr2;
   * modifying newArr in will also affect the parent that is arr2.
   * because: the variable's type will determine whether it's a reference passed by value or not
   * objects are passed by reference (under the hood arrays are objects) while primitives (numbers, strings, boolean etc) are passed bby value
   * example
   * arr2 = ['a'];
   * const newArr = arr2;
   * newArr.push('b');
   *
   * console.log(arr2);
   * outputs: ['a', 'b'];
   * notice that I only modified newArr but its parent is also affected because
   *
   */
  const newArr = arr2.slice();
  const ans = newArr.splice(n, 0, ...arr1);
  console.log(ans, newArr);
  return newArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
