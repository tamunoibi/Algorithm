// fibanocci with loop
//How does this function return the fibanocci numbers? is it temp?
// ans: if I pass the argument 7, It means I want the 7th Fibonacci number.
// the fibanocci numbers are 1, 1, 2, 3, 5, 8, 13, 21... the first two numbers are 1,1 then subsequent numbers are gotten by summing up the two previous numbers
// I pushed them to the arr so that I can see the progression
function fibanocci(number) {
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
function fib(n) {
  if (n <= 2) {
    return 1;
  }
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
const ans = fibMemo(8);
console.log({ ans5: ans });
