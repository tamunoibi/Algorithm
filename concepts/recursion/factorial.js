https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/factorialize-a-number
//Using loops
function factorialize(num) {
  let sum = 1;
  for (let i = 1; i <= num; i++) {
    sum *= i;
  }
 
  return sum;
}

// factorialize(5);

//Using Recursion
function factorializeRecursive(num) {
  if (num <= 1) {
    return 1;
  }
  /**
   * factorializeRecursive(5);
   *  num + factorializeRecursive(num - 1)
   *  1 + 1  = 2
   *  2 + 2  = 4
   *  3 + 4  = 7
   *  4 + 7  = 11
   *  5 + 11 = 16
   */
  return num * factorializeRecursive(num - 1);
}
// factorialize(5);