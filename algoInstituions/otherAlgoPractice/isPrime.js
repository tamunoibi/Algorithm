function isPrime(num) {
    const s = Math.sqrt(num);
    for(var i = 2; i <= s; i++) {
        console.log('loop', i);
      if(num % i === 0) return false;
    }
    return num > 1;
  }
  console.log(isPrime(4));

  //isPrime(1). the for loop does not run cos 2 < 1 fails. moves to the return. 1 > 1? it is false. Note this is good since one is not a prime number
  //isPrime(2). the for loop does not run cos 2 < 2 fails. Moves to the return. 2 > 1? it is true. it return true.
  //isPrime(3). the for loop runs cos 2 < 3 succeeds. iteration1: 3 % 2 = 1. Checks condition  3 < 3 


//WHAT IS A PRIME NUMBER?
// A prime number is a number that can be divided by only two numbers without a remainder. Itself and one.
// E.g 4 is not a prime. because: 4 / 2 = 6. there is no remainder. That is 4 % 2 = 0
// E.g 2 is a prime because 3 / 2 = 1remainder 1. That is 3 is3%2 = 1;
// 1 is NOT a prime. I always felt it was since it is only divisible by 1 and itself(which is also one). but no licking of your own tail here this is not allowed 

// One is not a prime because it can only divided by itself. In our solution we start from numbers greater than two (i =2; i < 2) because we already know that 1 is not a prime and two is
// Two  is a prime because it can be divided by only itself and 1. We do not check because in our solution we start from numbers greater than two (i =2; i < num) because we already know that 1 is not a prime and two is. Remember two is the smallest prime. instead of starting (i =0; i < num) which starts at 0. we start at 2. (i = 2; i < num)

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
//...
//Given a very large number like 97. We there is no need to keep looking for the square root till 96.
// After a while we should know it would likely not have a square root
// I do not understand why the square root is the place we stop. If it was left to me I may have stopped at 9 but I know it would fail in some cases
// But it appears once you get to the square root of a number no number greater than it can divide the number without a remainder

