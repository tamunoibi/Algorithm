/**
 * Question: https://leetcode.com/problems/climbing-stairs/
 * Tutorial: https://www.youtube.com/watch?v=Y0lT9Fck7qI
 */
// the way I think of it I have not tested it out
function climbingStairsMySolution(n) {
  let [one, two] = [1, 1];
  for (let index = 2; index < n; index++) {
    const temp = two;
    two = one + two;
    one = temp;
  }
  return two;
}
// the way it was thought
function climbingStairs(n) {
  let [one, two] = [1, 1];
  for (let index = 2; index < n; index++) {
    const temp = one;
    one = one + two;
    two = temp;
  }
  return one;
}
function climbingStairsComment(n) {
  // Declare two variable one and two and intitalize both of them to one
  // alternative way to decalre two variables:
  // let one = 1; 
  // let two = 2;
  let [one, two] = [1, 1];
  /**
   * There are two ways to create two variables:
   * 1. declare them once with object destructuring: [one, two] = [1, 1];
   let two = 1;
   * 2. declare them individually as usual:   let one = 1; 
 
   We start index at 2 because we have already accounted for the zeroth step and first step. They are both 1. Why are they both 1? 

   step 0: the variable one is hardcoded as 1 and represents the zeroth step. 
   When we have a staircase with 0 steps it the number of possible variations of jumps we cant take to get to the top of the step is 1(I disagree with this proposition, but I digress. I would go into that later).

   step 1: the variable two is hardcoded as 1 and represents the first step. When we have a staircase with 1 step it means the number of possible ways we can climp the step (jumps) to get to the top of the step is 1. There is only one way to climb a staircase of height 1. You jump one step.
    
    step 2: step 2 and all subsequent steps can be calculated by the  number of possible jumps for the immidiate preceeding step + the  number of possible jumps for two steps preceeding it. That is The number of possible jumps you can make for a 2 step staircase is the total number of jumps you can make for a 1step staircase + the total number of jumps you can make for a 0 step staircase. that is 1 + 1 = 2 that is two sing jumps  or one  double jump
   
   Eg. if n is 5. which means the loop would go 4 times. index would be 2, 3, 4, 5 respectively. the total possible jumps is for a 
   2 step staricase = 1 + 1 = 2;
   3 step staricase = 1 + 2 = 3; 
   4 step staricase = 2 + 3 = 5; 
   5 step staricase = 3 + 5 = 8;

   The asnwer is 8.
   Each subsequent step is the sum of the two previous steps.


   Yes you might ask how did you know this? No it is not intuitive.
   I did not just know that each subsequent step is the sum of the two previous steps by observation. I know it because someone showed me the pattern. If you are trying to solve this. If you have not being thought you would are not likely to just come up with it on your own.
   I saw it visually before I could understand it. If you are strugglinng to get it draw it out too. 
   The way this works is we solve the smaller steps.
   Then build up to the bigger steps. since we need two last steps to get the bigger step
  
   There is two ways to get to the top of a stairs with two step. Which is either you jump: 
   1step and 1step or 
   you jump 2 steps at once 
      totalWaysToGetTo3StepStairCase = totalWaysToGetTo0StepStairCase + totalWaysToGetTo1StepStairCase

   There is three ways to get to the top of a stairs with three steps. That is n = 3. 
   either you jump: 
   1step and  1step and 1 step or 
   you jump 1 steps at 2step or  
   you jump 2 steps and 1step
   totalWaysToGetTo3StepStairCase = totalWaysToGetTo1StepStairCase + totalWaysToGetTo2StepStairCase

   In other for you to see the pattern (that each  subsequent step is total number of steps before it plus  total number of steps two steps before it) That is:
    that is totalNoOfWaysToClimbStep[i] = totalNoOfWaysToClimbStep[i-1] + totalNoOfWaysToClimbStep[i-2])
   then I would list the steps out
   0) staircaseHeight = 0; numberOfJumps = 1;
          single jump
   1) staircaseHeight = 1; numberOfJumps = 1; ---> single jump
   2) staircaseHeight = 2; numberOfJumps = 2; 
          single jump + single jump OR 
          double jump

          -----> observe how the number of possible jumps you can make for a 2 step staircase is the total number of jumps you can make for a 1step staircase and the total number of jumps you can make for a 0 step staircase (They are saying you can make 1 jump for a 0 step staircase, I disagree. The answer ought to be 0 there is no way to climb a 0 step staircase, but I think since they want to use it for this calclation and they want it to work for two as well they  for all numbers they are lying or the tutor was mistken)
   3) staircaseHeight = 3; numberOfJumps = 3;
          single jump + single jump +  single jump OR 
          double jump + single jump OR
          single jump + double jump Or
  
         --------> observe the number of ways to climb a 2stepStaicase is equal the total ways to climb 0stepStaicase +  the total ways to climb a 1 step staicase; that is 2stepStaicase = 1 + 2 = 3; The reason this works is there are two possible ways we can land at step 3. way 1, we come from one step before which is step 2.  or we option two we come from 2steps before it which is step 1. Now the question is in how many total ways can I be at step 3. The answer is the sum of the ways I can get to step 1 and the sum of the ways I can get to step 2.
   4) staircaseHeight = 4; numberOfJumps = 5;
          single jump + single jump + single jump + single jump OR 
          single jump + single jump + double jump OR
          single jump + double jump + single jump OR
          double jump + single jump + single jump OR
          double jump + double jump OR

          ------->observe how ans for step 4 is step 3 + step 1  step 4 is 2+3 = 5 In how many ways can I get to step 4. I could have come from either step 2 or step from step 3 so the answer is the sum of the ways to get to step 2 and the sum of the ways I can  get to step 3.  Note I can only jump a single step(from step 3 to step 4) or double steps(from step 2 to step 4) so the total way is the sum of both ways those ways.
   5)staircaseHeight = 5; numberOfJumps = 7; ie 3 + 4
   6) staircaseHeight = 6; numberOfJumps = 11; ie 4 + 4
   

   FORMULA
   staircase = i;
  numberOfJumps[i] = numberOfJumps[i-1] + numberOfJumps[i-2]
   If you observe this number series 1,2,3,5,7,11 they are the Fibonacci numbers as well because the Fibonacci numbers is the sum of the two preceeding numbers. Wow! so much cute puzzles and patterns in maths.
   I dare say who ever created the universe was adding the two previous items to form the next item.

   There are other patterns we may not yet see. What of adding the 3 previous items? what of continuing with the same numbers what of 
   If you look at the observable universe there is a lot of proportion.
   A lot of the things we see as random the more we learn sequence we can observe the order that they have.

   */

  // you might ask the question: Why does this  principle work.
  // Why do I sum the two previous steps and I get my current step
  // the reason is if I am on for example step 100.
  // I CAN jump ONE step, or jump TWO steps.
  // one jump would mean I came from step 99
  // two jumps would mean I came from step 98
  //  I CANNOT jump 3( which would mean I came from step 97) or more 
  // As such to know all possible ways I can get to step 100
  // if I add the diffrent ways I got to step 99 
  // plus the different ways I go to step 98.

  // To use a real life example.
  // the total number of children I have = the total number of boys 
  // plus the total number of girls
  // see the decision tree drawing it makes sense visually

  // Question: I understand the principle but not necessarily why it is so.
  // why is the number of ways to step 100 not just some random number
  // why is there this order. 
  for (let index = 2; index < n; index++) {
    /**
     * eg. n = 5;
     * On initialization. that is How the function is started
     * one = 1;
     * two = 1;
     *
     * iteration One, step/index 2:   
     *    two = one + two = 1 + 1 = 2; 
     *    Because:
     *    stepTwo = stepZero + stepOne
     * 
     *    // Update previous step from step two to step three
     *    // that is from [stepZero, stepOne] to  [stepOne, stepTwo]
     *    // so we can calculate stepThree =  stepOne + stepTwo
     *    one = oldValueOfTwp
     *    one = stepOne
     *    one = 1
     * 
     * iteration Two, step/index 3: 
     *    two = one + two = 1 + 2 = 3;
     *    Because:
     *    stepThree = stepZero + stepOne
     * 
     *    // Update previous step from step two to step three
     *    // that is from [stepOne, stepTwo] to  [stepTwo, stepThree]
     *    // so we can calculate stepFour =  stepTwo + stepFour
     *    one = oldValueOfTwp
     *    one = stepTwo
     *    one = 2
     * 
     * iteration Three, step/index 4: 
     *    stepFour = stepTwo + stepThree = 1 + 1 = 2; 
     *    two = one + two = 1 + 2 = 3;
     *    Because:
     *    stepThree = stepTwo + stepOne
     * 
     *    // Update previous step from step two to step three
     *    // that is from [stepTwo, stepThree] to  [stepThree, stepFour]
     *    // so we can calculate stepFive =  stepThree + stepFour
     *    one = oldValueOfTwp
     *    one = stepThree
     *    one = 3
     * 
     */
    // I am keeping this in case I find any error with my way of thinking
    // but the way I wrote it is more intuitive for me.
    // two is one step previous. It should be changed to the current value
    // but the way this is written two becomes the previous value
    // this is what I feel it should be [one, two] this is what is written  [two, one]
    // const temp = one;
    // one = one + two;
    // two = temp;

    // A better way to write this
    const temp = two;
    two = one + two;
    one = temp;
  }
  return two;
  climbingStairsComment(5);
}
