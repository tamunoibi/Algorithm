function isPrime(num) {
  //I feel there should be an additional check to stop at the squareRoot of the number or 13. Which ever is smaller
  // because for large numbers example 929. the square root is 30.4795013083. we should not need to go up to 30(the square root). By 13(any number that has not found a divisor by 13 would never find a divisor) we already know that it would not be a prime
  // const s = Math.min(Math.sqrt(num), 13);
  const s = Math.sqrt(num);
  for (var i = 2; i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}
console.log(isPrime(4));

//isPrime(1). the for loop does not run cos 2 <=1 fails. moves to the return. 1 >1? it is false. Note this is good since 1 is not a prime number
//isPrime(2). the for loop does not run cos 2 < 1.414 fails. Moves to the return. 2 > 1.414? it is true. it return true.
//isPrime(3). the for loop runs cos 2 < 1.732 succeeds. iteration1: 3 % 2 = 1. Checks condition  3 < 3

//WHAT IS A PRIME NUMBER?
// A prime number is a number that can be divided by only two numbers without a remainder. Itself and one.
// E.g 4 is not a prime. because: 4 / 2 = 6. there is no remainder. That is 4 % 2 = 0
// E.g 2 is a prime because 3 / 2 = 1remainder 1. That is 3 is3%2 = 1;
// 1 is NOT a prime. I always felt it was since it is only divisible by 1 and itself(which is also one). but no licking of your own tail here this is not allowed

// is 1 a prime? NO One is not a prime because it can only divided by itself.
// is 2 a prime? YES Two  is a prime because it can be divided by only itself and 1. Remember two is the smallest prime.
// is 3 a prime? YES only divisible by 1 and 3

// In our solution we start i from two (i =2; i < num)  instead of starting which we normally do (i =0; i < num).
// why not  start at 0? 0 divided by any number is undefined. And 0 is irrelevant to our check.
// why not start at 1? we can not start at 1 we know everything is divisible by 1 and itself. A prime is a number only divisible by 1 and itself. It is difinitely divisible by one. that does not have any relevance to being a prime. It is when it is divisible by other numbers.
// why not start at 2? Yes we can. We start at 2. (i = 2; i < num)

// Three is a prime because it can be divided by only itself and 1.
// 3 % 2 = 1.Remainder  You stop at 2 cos we do not calculate the number itself

// Four is not a prime because it can be divided by 2 without a remainder.
// 4 % 2 = 0,  We stop here because we have already found a divisor

// Five is a prime because it can not be divided by other numbers without a remainder.
// 5 % 2 = 1
// 5 % 3 = 2
// 5 % 4 = 1

// six is a prime it can be divided by 2 and 3
// 6 % 2 = 0, -----------> We stop here because we have already found a divisor

// Seven is a prime because it can be divided by no other number without a remainder
// 7 % 2 = 1
// 7 % 3 = 1
// 7 % 4 = 3
// 7 % 5 = 2
// 7 % 6 = 1

//WHY STOP AT THE SQUARE ROOT of the number?
// Given a large number like 97. There is no need to keep dividing till 96.
// After a certain point we should know there can be no number that would divide it without a remainder.
// I do not understand why the square root is the place we choose to stop. If it was left to me I may have stopped at 13, because I know that anything not divisible
// but maybe it would fail in some cases secondly there is no need to get up to 13 for most numbers since there square root is even smaller than that it is a faster place to stop
// But it appears once you get to the square root of a number no number greater than it can divide the number without a remainder

//  WHAT IS THE CHECK if(num % i === 0) return false;
// example num is 4 we are checking if (4 % 2 === 0) since 4 can be successfully divided by 2 without a remainder it isn't a  prime. we return false

//WHY RETURN num > 1 why not just return true
// If we get the this point of the loop it should mean the number is truly a prime
// this is true except is the number passed is 1. If it is 1 we do not even execute the loop we come down here if we did not have the check for num > 1?  it would have returned true. instead of false since 1 is not a prime number
