function lcm(num1, num2) {
  const smallest = Math.min(num1, num2);
  const biggest = Math.max(num1, num2);

  for (let index = biggest; index < smallest * biggest; index += biggest) {
    if (index % smallest === 0) {
      return index;
    }
  }
}

/**----------------------------------------------------------------------------- */

function lcmComment(num1, num2) {
  let smallest = Math.min(num1, num2);
  let biggest = Math.max(num2, num2);

  // Why do we start the loop at the biggest number?
  // we are trying to calculate the multiples of two numbers. example 9 and 2.
  // we know that the lowest multiple of two and 9 would be at least 9
  // We know that the lowest common multiple of any given number would at least be as high as the highest of the two numbers. So we start from the highest of the two numbers
  // example given 2 and 9. the lowest common multiple of the number can not be anything lower than 9. so we start counting at 9. Because no number lower than 9 can be a multiple of 9

  // why do we end the loop at smallest * biggest?
  // We are trying to calculate the smallest possible multiple of two numbers example 2 and 9.
  // we at least know that 2 * 9 = 18; 18 would be a multiple. You might not know that I did not before it is here I found out too.
  // The highest possible smallest common multiple  would be the two numbers multiplied together
  // for example 5, 9 At the very least 5*9 = 45 would be a common multiple. So we make this our stop condition. You might say why don't we just use an arbitrary number like 500, as our stop condition. The multiple in some cases might be even bigger than 500. Looking at both which one makes more sense to u?
  // START -> 9
  //         18
  //         27
  //         ...
  // STOP -> 45
  // note for each number we check if that number is a multiple of the smaller number. Of course it is a multiple of the bigger number since we are counting in muliples of the bigger number
  // to check that bigger is a multiple of smaller we check if bigger/smaller has 0 remainder
  // js has a modulus operator that does it easily (bigger % smaller) returns the remainder o the division. if their is no remainder it means that number is a multiple of the smaller number
  // What is the logic of the loop
  // example 1:To get the multiple of 2 and 9, we could start counting at 9, (is 9 a multiple of 2? no we continue) 18(is 18 a multiple of 2 Yes! we return it),
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
lcm(5, 25);
