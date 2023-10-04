/**
 * Question:
 *
 * Reference:
 *  Alvins course on recursion course :https://www.youtube.com/watch?v=fPz40W9mfCg
 *  Alvins course on dynamic programming : https://www.youtube.com/watch?v=oBt53YbR9Kk&t=3620s
 *  leetcode: https://leetcode.com/problems/fibonacci-number/
 *
 * Examples:
 * console.log(fib(6)); // 8
 * console.log(fib(7)); // 13
 * console.log(fib(8)); // 21
 * console.log(fib(50)); // 12586269025 ---> this would be really slow without memoization and shows the need for speed
 */


// fibanocci with loop
//How does this function return the fibanocci numbers? is it temp?
// ans: if I pass the argument 7, It means I want the 7th Fibonacci number.
// the fibanocci numbers are 1, 1, 2, 3, 5, 8, 13, 21... the first two numbers are 1,1 then subsequent numbers are gotten by summing up the two previous numbers
// I pushed them to the arr so that I can see the progression
function fibanocciDynamicProgramming(number) {
  let first = 0;
  let second = 1;
  let temp;
  const arr = [1];

  for (let i = 1; i < number; i++) {
    temp = first + second;
    arr.push(temp);
    first = second;
    second = temp;
  }
  console.log(arr);
  return number <= 1 ? 1 : temp;
}

// fibanocci with recursion
// Time: 2 ^ n
function fib(n) {
  // the zeroeth fibonacci number is 0. The first fibonacci number is  1 the second is 1 and the 3rd is 2
  //     item  number     0  1  2  3  4  5     6
  // fiboncaci numbers -> 0, 1, 1, 2, 3, 5 and 8.
  /// This condition says all fib numbers that are less than two or equal to two should return 1
  //                                  item  number     0 1  2
  // and this is in line with the fiboncaci numbers -> 0 1, 1 t he first fiobnacci number is one the second is also one
  // this function would not get to 0. It would either evaluate 1 or 2
  // say we start at 3.
  //  3 - 1 = 2;--->return 1; as the second fibbonacci number
  //  3 - 2 = 1;--->return 1; as the first fibbonacci number
  if (n <= 2) {
    // If you want to count from the zeroeth number it is 0, then the first fib numbber is 1
    return 1;
  }
  // ANOTHER BASE CASE
  // a second option for the stop condition is.
  // to stop when we are on the first fibbonacci or lesser.
  //  If we are on the first number then return 1.
  //  if we are on the zeroth number return 0
  //  These are the two possible values for n.
  //
  //
  // if (n <= 1) {
  //   return n;
  // }

  // ANOTHER BASE CASE
  // another stop condition is handling the 3 cases.
  //         item  number 0   1  2  3  4  5     6
  // fiboncaci numbers -> 0,  1, 1, 2, 3, 5 and 8.
  //  n < 0   (return n) --> n (you must not handle this case but I added it becuase that is how I think of the problems < = > than 0. to make it exhaustive);
  //  n === 0 (return 0);
  //  n == 1; (return 1);

  //  if (n < 0) {
  //    return n;
  //  }
  //  if (n === 0) {
  //    return 0;
  //  }
  //  if (n === 1) {
  //    return 1;
  //  }

  // WHAT IS NOT A BASE CASE
  //         item  number 0   1  2  3  4  5     6
  // fiboncaci numbers -> 0 , 1, 1, 2, 3, 5 and 8.
  // if(n < 0) {
  //   return 0;
  // }
  // if(n === 0) {
  //   return 1;//--------->the zeroeth fib number is 0 and NOT  1.
  // }
  // this does not work because the zeroeth fibonacci number is NOT 1 but 0

  // WHAT IS NOT A BASE CASE
  //         item  number 0   1  2  3  4  5     6
  // fiboncaci numbers -> 0 , 1, 1, 2, 3, 5 and 8.
  // if (n <= 1) {
  //   return 1;
  // }
  // this does not work because the zeroth fibonacci number would return 1 but it is to return 0

  const sum = fib(n - 1) + fib(n - 2);
  return sum;
}

// fibanocci with recursion and memoization
function fibMemo(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  console.log({ values: memo[n] });
  return memo[n];
}
// fibanocci with recursion and memoization
function fibMemoComment(n, memo = {}) {
  /**
   *  memo = {} is creating an object called memo and defaulting it to an empty object if no value is passed
   *  the reason we default it to an empty object is the very first call to fib would not have any object. It is subsequent calls to fib that would have values.
   * The standard way to memoize a recursive function is
   * 1. create the memo object passing a default call: memo = {}
   * 2. Before each execution check if there is a saved value for that call and return that instead. if(memo[n]) return memo[n]
   * 3. If it is not stored execute the function passing in the memo: fib( memo)
   * 4. After each execution save the value returned from the call in the memory for future use. memo[n] =
   * 5. return the value saved as memo for that functionn call:  return memo[n]
   *
   *
   *
   *  */
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  console.log({ values: memo[n] });
  return memo[n];
}
const ans = fibMemoComment(8);
console.log({ ans5: ans });
