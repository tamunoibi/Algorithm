/**
 * Question: https://leetcode.com/problems/climbing-stairs/
 * Tutorial: https://www.youtube.com/watch?v=Y0lT9Fck7qI
 */

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
  let [one, two] = [1, 1];
  /**
   * 
   This is an alternative way of writing without object destructuring
   let one = 1;
   let two = 1;
   We start i at 2 because we have already accounted for the first two items
   the first item is when we have a staircase of one which number of possible jumps is 1, the second item is when we have a staircase of two which number of possible jump is 1.{wait how is this correct? if we have 2 steps then there are two was to jump. 2 single jumps, or 1double jump so why is the total } Eg. if n is 5. which means the loop needs to go 3 times. the 3rd item(index 2), 4th item(index 3), 5th item(index 4),
   Each subsequent step is the sum of the two previous steps.
   Yes you might ask how did you know this? No it is not intuitive.
   You can not just know it by observation. You can only know it if someone shows you then you can see it.
   that is the rule. we solve the smaller steps..
   I saw it visually  that there is only one way to climb a staircase of height 1. You jump one step.
   there is two ways to get to a step of stairs of two step. which is either you jump: 1step and 1step (1+1 = 2) or you jump 2 steps at once 
   there is three ways to get to a step of stairs. That is n = 3. 1+1+1, 1+2, 2+1.
   In other for you to see the pattern that each  subsequent step is one total number of steps before it  total number of steps two steps before it. That is: that is totalNoOfWaysToClimbStep[i] = totalNoOfWaysToClimbStep[i-1] + totalNoOfWaysToClimbStep[i-2])
   then I would list the steps out
   staircase = 1; numberOfJumps = 1; that is: single jump
   staircase = 2; numberOfJumps = 2; that is: a) single jump + single Jump, b) double jump
   staircase = 3; numberOfJumps = 3; that is: a) single jump + single Jump + single Jump, b) double jump + single jump ------->observe how ans for step 1(is 1) and answer for step 2(is 2). Therefore the answer for step 3 is 1+2--------> the reason this works is there are two possible ways we can land at step 3. way 1. we came from one step before which is step 2.  or we came from 2steps before it which is step 1. Now the question is in how many ways can I be at step 3. The answer is the sum of the ways I can get to step 1 and the sum of the ways I can get to step 2. 
   staircase = 4; numberOfJumps = 5; that is: a) single jump.....(I don not have strength to write all the long list. If you look at the decision tree you can formulate all the jumps possible. and count them. But have I have given you the formula. As e dey hot ).  ------->observe how ans for step 2(is 2) and answer for step 3(is 3). Therefore the answer for step 4 is 2+3 -----> In how many ways can I get to step 4. I could have come from either step 2 or step from step 3 so the answer is the sum of the ways to get to step 2 and the sum of the ways to get to step 3.  Note I can only jump a single step(from step 3 to step 4) or double steps(from step 2 to step 4) so the total way is the sum of both ways 
   staircase = 5; numberOfJumps = 7; ie 3 + 4
   staircase = 6; numberOfJumps = 11; ie 4 + 4
   ...
   staircase = i; numberOfJumps = numberOfJumps[i-1] + numberOfJumps[i-2]
   If you observe this number series 1,2,3,5,7,11 they are the Fibonacci numbers. 

   */

  // you might ask the question: Why does this  principle work. Why do I sum the ways two of two  previous guys and I get my answer
  // there is three five to get to a step of stairs 4. 1+1+1+1, 1+2+1, 2+1+1 (I am getting confused how to get the numbers but if you put it in a decision tree you would see it visually. Decision is like binary tree. See the drawing)
  for (let index = 2; index < n; index++) {
    /**
     * eg. n = 5;
     * before iteration
     * one = 1;
     * two = 1;
     *
     * iteration 2: one = one + two = 1 + 1 = 2; two = one; two = 1
     * iteration 3: one = one + two = 2 + 1 = 3; two = one; two = 2
     * iteration 4: one = one + two = 3 + 2 = 5; two = one; two = 3
     */
    const temp = one;
    one = one + two;
    two = temp;
  }
  return one;
  climbingStairsComment(5);
}
