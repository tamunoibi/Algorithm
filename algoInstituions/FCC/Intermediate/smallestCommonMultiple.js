// Oxford Owl explains what multiples are: https://www.youtube.com/watch?v=NwpLG9qIwIs&t=34s
// Useful Programmer gives a beautiful solution and that is the solution I am using here: https://www.youtube.com/watch?v=KaxWPz7Rdv4&t=695s
// Stephen Mayeux explains the question: https://www.youtube.com/watch?v=itPtMtdEPis&t=810s
// Matt Lambart explains the solution: https://www.youtube.com/watch?v=SAMUCHLUJeU&t=386s
// this is a helper function that helps calculate the smallest common multiple of two numbers
/**
 * Tutorial steps
 * Reading the question
 * Explaining what a multiple is
 * Writing an algorthim to calculate multiples
 * Explaining the question what are common multiples
 * Explaining how to find the multiples of two numbers
 * Explaining the logic of the solution
 * Explaining how to find the multiple of more than two numbers
 * Writing out the solution step by step and explaining
 * Testing out the solution and explaining it with different scenrios
 *
 */
function computeSCM(num1, num2) {
  let smallest = Math.min(num1, num2);
  let biggest = Math.max(num2, num2);
  for (let index = biggest; index <= smallest * biggest; index += biggest) {
    if (index % smallest === 0) {
      return index;
    }
  }
}
function smallestCommons(arr) {
  let small = Math.min(...arr);
  let big = Math.max(...arr);
  let scm = 1;
  for (let i = small; i <= big; i++) {
    scm = computeSCM(scm, i);
  }
  console.log({ scm });
  return scm;
}
smallestCommons([1, 5]);

/**----------------------------------------------------------------------------- */
function computeSCMComment(num1, num2) {
  let smallest = Math.min(num1, num2);
  let biggest = Math.max(num2, num2);

  // Why do we start the loop at the biggest number?
  // we are trying to calculate the multiples of two numbers. example 9 and 2.
  // we know that the lowest multiple of two and 9 would be at least 9
  // We know that the lowest common multiple of any given number would at least be as high as the highest of the two numbers. So we start from the highest of the two numbers
  // example given 2 and 9. the lowest common multiple of the number can not be anything lower than 9. so we start counting at 9. Because no number lower than 9 can be a multiple of 9

  // why do we end the loop at smallest * biggest?
  // We are trying to calculate the smallest possible multiple of two numbers example 2 and 9.
  // we at least know that 2 * 9 = 18; 18 would be a multiple. You might not know that I did not before it is here I found out
  //The highest possible smallest common multiple  would be the two numbers multiplied together
  // for example 2, 9 At the very least 2*9 = 18 would be a common multiple. So we make this our stop condition

  // What is the logic of the loop
  // example 1:To get the multiple of 2 and 9, we could start counting as 9, (is 9 a multiple of 2? no we continue) 18(is 18 a multiple of 2 Yes! we return it),
  // example 2: given 5 and 6
  // we start counting the multiples of 6. which are 6, 12, 18, 24, 30
  // we start from the biggest number: 6.
  // we stop if we find a number that is a multiple of 5(since 5 is smaller number)
  // We stop at most at 30 since that is 5 * 6. We are sure that at the very least this number would be a multiple
  //
  //multiples of 6 = 6, 12, 18,24, 30
  // we would check is 6 a multiple of 5. By doing 6%5-->has a remainder
  // we would check if 12 is a multiple of 5. By doing 12%5-->has a remainder
  // we would check if 18 is a multiple 5. By doing 18%5-->has a remainder
  // we continue get to  30%5 =
  for (let index = biggest; index <= smallest * biggest; index += biggest) {
    // we already know index is divisible by biggest since it is a multiple of highNum
    // we want to check if it is also a multiple of smallest
    //In other for a number to be considered a multiple of another number. you can divide that number without a remainder
    // example is 5 a multiple of 15 because 15 / 5 = 3.there is no remainder
    //  2 is NOT a multiple of 15 because 15 / 2 = 1. there is a remainder
    // in this case I know index is a multiple of the big number.
    // I want to check if it is also a multiple of the small number. If it is we return it.
    // at most this check would pass when we get to the number big * small
    if (index % smallest === 0) {
      // this means that index is a multiple of both
      return index;
    }
  }
}
// console.log({ ans: computeSCM(12, 25) });
function smallestCommonsComment(arr) {
  let small = Math.min(...arr);
  let big = Math.max(...arr);
  let scm = 1;
  // here we are counting up in ascending order, example input smallestCommons([4, 1])
  // the items are not necessarily in numerical order that is from small to big that is [1,4]. So we can not just loop for(let i = arr[0]; i <= arr.length-1; i++);
  // the numbers passed could be [4,1] or [1,4] so we have to know the smallest and the biggest
  //we count 1, 2 3, 4, 5;

  // to find the LCM of 1, 2, 4, and 5, we could start by finding the LCM of 1 and 2 (which is 2), and then find the LCM of 2 and 3( is 24), then find the LCM of 24 and 5(which is 120)
  // computeSCM(1, 1) = 1
  // computeSCM(1, 2) = 2
  // computeSCM(2, 3) = 6
  // computeSCM(6, 4) = 24
  // computeSCM(24, 5) = 120
  for (let i = small; i <= big; i++) {
    scm = computeSCMComment(scm, i);
  }
  console.log({ scm });
  return scm;
}
// smallestCommonsComment([1, 5]);
