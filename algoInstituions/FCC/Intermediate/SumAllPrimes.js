function isPrime(theNum) {
  // stop at a number before the number we are trying to check if it is a prime
  for (let innerNum = 2; innerNum < Math.sqrt(theNum); innerNum++) {
    // if we get a successful division we know it is definitely not a prime
    // that is we are checking if theNum % innerNum === 0
    // console.log({ theNum, ans: theNum % innerNum === 0 });
    if (theNum % innerNum === 0) return false;
  }
  return theNum > 1;
}
function sumPrimes(num) {
  let sum = 0;
  //I start at 2 because I know 1 can divide everything successfully, so it would pass the test
  for (let outerNum = 2; outerNum <= num; outerNum++) {
    //if the number is a prime increase the sum
    if (isPrime(outerNum)) sum += outerNum;
  }
  return sum;
}
const totalAns = sumPrimes(10);
console.log({ totalAns });
