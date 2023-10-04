/**
 * sample input twoSum([11, 15, 2, 7], 9); 
 * output [2, 3]
 */

// timeComplexity is:  0(N)
function twoSumBruteForce(nums, target) {

   for (let index = 0; index < nums.length - 1; index++) {

     for (let j = index + 1; j < nums.length; j++) {
       if (nums[index] + nums[j] === target) {
         return [index, j];
       }
     };
   }
}

// timeComplexity is:  0(N)
function twoSumComplement(nums, target) {
  const previousNums = {};
  for (let index = 0; index < nums.length; index++) {
    const indexOfNum = previousNums[target - nums[index]];
    if (indexOfNum != null) {
      return [indexOfNum, index];
    }
    previousNums[nums[index]] = index;
  }
}

// timeComplexity is:  0(N)
function twoSumComplementAlternative(nums, target) {
  const previousNums = {};
  for (let index = 0; index < nums.length; index++) {
    const complement = target - nums[index];
    if (previousNums[complement]) {
      return [previousNums[nums[index]], index];
    }
    previousNums[nums[index]] = index;
  }
}

// timeComplexity is:  0(N)
function twoSumTwoPointers(arr, target) {
  //Note: this solution works only on sorted array items
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) {
      return [left + 1, right + 1];
    }
    sum < target ? left++ : right--;
  }
}


// --------------------------------------------------------------------------------------------------------------------
//                               CODE  WTH EXPLANNATATION
// --------------------------------------------------------------------------------------------------------------------
// timeComplexity is:  0(N^2)
function twoSumBruteForceComment(nums, target) {
  // Go through the whole array(don't include the last item). Because I am to compare it with all subsequent items and if you do j+1 it would be undefined
  for (let index = 0; index < nums.length - 1; index++) {
    // For each item, go through all subsequent items. For each subsequent item sub it with the item with it.
    // if the sum is the target return that index and the subsequent items index
    /**
     * example 1:
       nums = [ 3, 4, 1]; target = 5.
       you start at 3, sum 3 + 4 = 7, then sum 3 + 1 = 4
       you move to 4, sum 4 + 1 = 5. then you the index of 4 and the index of 1. since 5 is our target

       example 2:
       nums = [ 3, 4, 1]; target = 9
       you start at 3, sum 3 + 4 = 7, then sum 3 + 1 = 4
       you move to 4, sum 4 + 1 = 5. 
       //you end here you do not move to item 1. that is index 2. Because the inner loop is to start at an index after i. which would have being 2+1=3 and there is no index 3. 
       // secondly from the last item there is no number after it so there is no reason why you should go that number.
     *  */

    for (let j = index + 1; j < nums.length; j++) {
      if (nums[index] + nums[j] === target) {
        return [index, j];
      }
    }
  }
}


// timeComplexity is:  0(N)
function twoSumComplementExplanation(nums, target) {
  const previousNums = {};
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];

    /**
     * target - element = complement
     *   9    -    4    =     5
     * Approach: you can get the complement of a number by subtracting that number from the target.
     * 9  is the target number.
     * 4 is the current element we are at.
     * 5 is the complement required to have a match. So we check if we have seen the  complement (the number 5) previously if yes we have our answer.
     * if we have not seen the complement (the number 5). then we save the element (the number) in the harshmap
     *
     */
    const complement = target - element;

    /** index2 = previousNums[complement]
     *  nums = [5, 4, 2, -1, 3]
     * target =  8
     * iteration:
     * 1. previousNums = {};                        complement = 8 - 5  = 3; index2 = undefined;
     * 2. previousNums = {5: 0};                    complement = 8 - 4  = 4; index2 = undefined;
     * 3. previousNums = {5: 0, 4: 1};              complement = 8 - 2  = 6; index2 = undefined;
     * 4. previousNums = {5: 0, 4: 1, 2: 2};        complement = 8 - -1 = 9; index2 = undefined;
     * 5. previousNums = {5: 0, 4: 1, 2: 2, -1: 3}; complement = 8 - 3  = 5; index2 = 0;// we attempt to access key '5' value which is 0;
     */
    const index2 = previousNums[complement];
    if (previousNums[element] !== undefined) {
      // if the item is found. Return an array with the item found value and the index
      return [index2, index];
    }
    // using square bracket like this is assigning the value on the right side to the property element
    // eg. previousNums[5] = 0; would make previousNums = {5: 0}
    // we are storing the index of the element because it is the index we are to return as the answer when we find the complement
    previousNums[element] = index;
  }
}


// timeComplexity is:  0(N)
function twoSumTwoPointersExplanation(arr, target) {
   /**
     * Question: What are the index of the two numbers in the array would sum up to give you 11. ans
     * Exampele: 
     * arr = [1,3,4,6,8,9] target = 11
     * output = 1, 4
     * 4 and 8 sums up to give us 13.
     * 
     * 
     * if the sum of the elements at left and right is greater than the target. 
     * Then you move left pointer forward. This so to increase the sum.
     * While, if the sum is less than the target you move right pointer backward to reduce the sum.
     * We are trying to get to the target if our sum is more than the target then we need to reduce our sum
     * arr = [1,3,4,6,8,9]; target = 11;
     *    
     *                                    
     *         sum is 10 and it is LESS than our target of 11. We should increase our next sum, as such We move the left pointer forward
     *                                               __9___ 
     *                                      __8___   ||  ||  
     *                                      ||  ||   ||  ||
     *                             __6___   ||  ||   ||  ||
     *                             ||  ||   ||  ||   ||  ||
     *                    __4___   ||  ||   ||  ||   ||  ||
     *           __3___   ||  ||   ||  ||   ||  ||   ||  ||
     *           ||  ||   ||  ||   ||  ||   ||  ||   ||  ||
     *  __1___   ||  ||   ||  ||   ||  ||   ||  ||   ||  ||
     *  ||  ||   ||  ||   ||  ||   ||  ||   ||  ||   ||  ||
     * ----------------------------------------------------
     *    0         1        2       3        4         5
     *    ^                                             ^
     *    |                                             |
     *  left= 0                                       right = 5
     * 
     *  sum = 1 + 9 = 10
     *    
     *           
     * 
     *                          
     *         sum is 12 and it is MORE than our target of 11. We should reduce our next sum. as such We move the right pointer backward
     *                                               __9___ 
     *                                      __8___   ||  ||  
     *                                      ||  ||   ||  ||
     *                             __6___   ||  ||   ||  ||
     *                             ||  ||   ||  ||   ||  ||
     *                    __4___   ||  ||   ||  ||   ||  ||
     *           __3___   ||  ||   ||  ||   ||  ||   ||  ||
     *           ||  ||   ||  ||   ||  ||   ||  ||   ||  ||
     *  __1___   ||  ||   ||  ||   ||  ||   ||  ||   ||  ||
     *  ||  ||   ||  ||   ||  ||   ||  ||   ||  ||   ||  ||
     * ----------------------------------------------------
     *    0         1        2       3        4         5
     *              ^                                   ^
     *              |                                   |
     *            left= 0                             right = 5
     * 
     *  sum = 3 + 9 = 12
     * 
     * 
     * 
     * 
     * 
     *                          
     *         sum is 12 and it is MORE than our target of 11. We should reduce our next sum. as such We move the right pointer backward
     *                                               __9___ 
     *                                      __8___   ||  ||  
     *                                      ||  ||   ||  ||
     *                             __6___   ||  ||   ||  ||
     *                             ||  ||   ||  ||   ||  ||
     *                    __4___   ||  ||   ||  ||   ||  ||
     *           __3___   ||  ||   ||  ||   ||  ||   ||  ||
     *           ||  ||   ||  ||   ||  ||   ||  ||   ||  ||
     *  __1___   ||  ||   ||  ||   ||  ||   ||  ||   ||  ||
     *  ||  ||   ||  ||   ||  ||   ||  ||   ||  ||   ||  ||
     * ----------------------------------------------------
     *    0         1        2       3        4         5
     *              ^                         ^
     *              |                         |
     *            left= 0                   right = 5
     * 
     *  sum = 3 + 8 = 11
     * This is our Answer. 
     */
  let left = 0;
  let right = arr.length - 1;
  // we stop the operation when left is greater than or equal to right
  // first left would be less than right.  for example left = 0; right = 1;
  // if left increases to 1. 1 is equal to 1 this would not run since left is required to be less than right and can not be equal
  // if right reduces to 0 the while loop would not run since it right is required to be greater than left
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) {
      return [left + 1, right + 1];
    }
    if (sum < target) {
      left++;
    }
    if (sum > target) {
      right--;
    }
  }
}

// --------------------------------------------------------------------------------------------------------------------
//                               STOP HERE
// --------------------------------------------------------------------------------------------------------------------
// reference note Jan, 2022: book1 page 1 and book2 page 5
/**TUTORIAL NOTES
 * 
 * Todo
 * 1. Medium ariticle on two sum
 * 2. special characters, combine shapes, 
 * 3. Time complexity drawing in brute force like alvins own
 * 4. Record the tutorial and add Voice over and video for your slide: https://www.youtube.com/watch?v=gU7ZS5ZEXsU&ab_channel=MacVideoMagic
 * 5. How to add character styles. Also you can copy styles with option + command + c to copy styles and option + command + v to paste styles
 * 6.  Map Animations for explanations:  https://www.youtube.com/watch?v=pY6MPvVYvzg&ab_channel=CanukSpyder
 * 7. How to add logo to your video: https://www.youtube.com/watch?v=OJrd8YkttAE&ab_channel=BradleyTeaches
 * 8. Dynamic sidebar: https://www.youtube.com/watch?v=MkCekGHUuRA&ab_channel=BradleyTeaches
 * 
 * 
 * Table of content
 * 1. Intro
 * 2. Question explanation
 * 3. Brute force solution
 * 4. Complement solution
 * 5. Two pointers
 * 
 * 
 * 
 * 
 * 1. Intro
 * TODO: Brief channel intro animation. Similar to alvin
 * Hi Guys. Welcome to my Tutorial on leetcodes Two sum. This is part of my seiries where I go through the neetcode algorithim questions.
 * Algorithms is  about differnnt patterns for solving problems. If you understand those patterns you can apply them in different problems.
 * If you find this tutorial helpful please let me know it really supports the channel a lot. This tutorial is free but it cost me a lot of time, resources and 
 * energy to make and it matters to me that people get value from it.
 * Links to the question, solution and the written tutorial can be found in the description.
 * 
 * 2. Question explanation
 * The question is
 * Given an array of integers nums and an integer target return indices of the the two numbers such that they add up to target.
 * In essence we are given a function called TwoSum the function would have two parameters nums and target
 * Let us give an example. nums is an array containing four elements: array = 11,  15, 2 and 7. Target is 9
 * What two numbers would we add together to get 9.
 * The answer is 2 and 7.
 * We return the index of those elements that is 2 and 3.
 * 
 * Question Constraints 
 * i. You can return the answer in any order.
 * example: 
 *        
 * array = 11,  15, 2 and 7. 
 * Target =  9
 * What two numbers we would add together to get 9 are
 *  2 and  7.
 * Note that we are returning the index and not the items themselves
 * You can return [2, 3] or [3, 2]
 * It does not matter which index comes first.
 * 
 * i. You may assume that each inupt would have exactly one solution.
 * This has two implications:
 * a. there is no need to account for a scenrio where no solution could be found 
 * example:
 * array  = [2,  4, 8]
 * target = 5
 * Here there is no two numbers that would sum up to the target.
 * If not for this constriaint we would need to state what should have being returned.if nothing was found but this is never going to be the case
 * There are several scenrios where nothing could be founnd:
 * 
 * b. Here the array is empty  and would not sum up to the target. What should we return then? There is no need to account for this scenrio.
 * example:
 * array  = []
 * target = 4
 * 
 * c. there is no need to account for a scenrio where more than one solution could be found.
 * example: 
 * array  = [7,  5, 11, 1]
 * target = 12
 * Here there is are two possible soulitons to get to the target.
 * One solution is 7 + 5, Another solution is 11 + 1
 * If not for this constriaint we would need to know what should be done when we have multiple answers. Should return all of them? 
 * 
 * Ways of solving the question
 Algorithms is  about different patterns for solving problems.If you understand those patterns you can apply them in different problems.This question if very popular because it can be solved using different ways. 
  In this video I would walk through three ways different patterns to solve this problem.
  This question is a very popular question because it can be solved using different ways.
  In this video I would go through three ways to solve this problem.
  I would use the 
  1. using the brute force approach.
  2. using complements
  3. using two pointer
  
  
 *  
 * 
 * Brute force solution
 The brute force appraoch is the way the intuitive way to solve this problem. 
 It is the way you would naturally attempt to solve the problem
 * a. Approach
  For example we are given an array with four elements 11,  15, 2, 7 and 1.

 For example we are given an array with four elements 11,  15, 2, 7 and 1.
We start from the first element and sum  it with all subsequent elements. That is
    We Start by summing 11 and 15 which gives us 26
    we go to the next element which is 2. We sum 11 plus 2 which gives us 13
    we go to the next element which is 7. We sum 11 plus 7 which gives us 18
    we go to the next element which is 1. We sum 11 plus 1 which gives us 12
 Since we are done with all the  elements we move to the next element which is 15.

We move to the next element 15 and sum it with all subsequent elements. That is
    We start by summing 15 and 2 which gives us 17
    we go to the next element which is 2. We sum 15 and 7 which gives us 24
    we go to the next element which is 1. We sum 15 and 1 which gives us 16
Since we are done with all the  elements we move to the next element which is 2.

  We start by summing 2 and 7 which gives us 9
  Now we have found our target
 
 * Now we have gotten our answer. 
 *  We return the index of the two elements that gave us the answer.
 * Note it is not the elements we are to return.
 * But the index of the elements. The elements are 2 and 7. But there indexx is 2, and 3.
 * we do this for each of the element 
 * 
 * b. Coding up the solution
 * i. First we have a loop that goes from beginig to end of the array
 *   for (let index = 0; index < nums.length - 1; index++) {}
 * 
 * ii. Then For each item we go through all subsequent items.So if we are on item one we go to item 2, 3 to the end 
 *   Note we are not going from the begining to end but from the next item
 *     for (let j = index + 1; j < nums.length; j++) {}
 *   
 * 
 * iii. We add a check to know if we have found the two numbers that sum to target.
 *    We know we have found the answer if the outter element plus the current element is equal to target.
 *      if (nums[index] + nums[j] === target) { }
 *       
 *    
 * iv. If we have found the answer then we return that answer
 *         return [index, j];
 * 
 * c. question walkthhrough
 * To use as an example: 2,3, 4 and our target is 7.
 * 
 * d. Time Complexity
 * The time complexity of the brute force approach is Quadratic. That is  O(N^2) Oh of N Squared
 * O is used to signify that we are dealing with time complexities more specifically worst case times just like we have kg to show we are dealing with weight. meters to show length.
 * N is the length of the array. 
 * Squared means if we have four array items for eacn of four items in the array we go through the array 4 times. That is 4^2 or 4 * 4. That is 16.
 * 
 * 
 * 
 * 4. Complement solution
 * While the brute force approach solved the problem. It solved it in O(N^2) that is with a loop within a loop.
 * The problem can be solved  even faster.
 * We can solve the problem in O(N) time that is with a single loop.
 * Using the complement approach.
 * This approach takes additional memory as we would be required tohavea lookup object.
 * 
 * a. Explaining Complement
 * b. Approach
 * c. Coding up the solution
 * d. Time Complexity
 * 
 * a. Explaining Complement
 * The trick is we go through each element in the list and 
 * 
 * 
 * b. Approach
 * The trick is we go through each element in the list and calculate the complement.
 * If the complement exits that means we have found our answer.
 * If the complement does not exits we add this item to the object. 
 * Use an example to further explain it
 * 
 * 
 * c. Coding up the solution
 * Walk through the solution line by line 
 * 
 * i. First we create an empty object that would store the values array items. This object is empty now but subsequenntly the key would ne the array item and thevalue would be the items index
 *   const lookup = {};
 * 
 * ii. Nex we have a loop that goes from beginig to end of the array
 *   for (let index = 0; index < nums.length; index++) {}
 * 
 * ii. Then we get what number is needed to complement this element to give use the target.
 *      const complement = target - nums[index];
 *   
 * 
 * iii. Then we check if that complement has being previously found. If yes.  We know we have found the answer. That is the current element plus complement is equal to target.
 *    We return the current index and the complementary index
 *     return [lookup[nums[index]], index];
 *       
 *    
 * iv. If we have found the answer then we return that answer
 *         return [index, j];
 * 
 * v. If we do not have the complement we add this element and its index to the lookup table
 *          lookup[nums[index]] = index;
 * 
 * 
 * d. question walkthhrough
 * 
 * e. Time Complexity
 * The time complexity of this algorithim is O(N).
 * In the worst case of this algorthim scenerio we would go throguh the array once.
 * You can learn more about time complexities in the aricle on time complexities as always the link is in the description.
 * 5. Two pointers
 * a. Explaining two poiners
 * a. Approach
 * b. Coding up the solution
 * c. Time Complexity
 * 
 * a. Explaining two poiners
 * There is a neat pattern in alogorithims called two pointers.
 * Essentially you can have two variables one at the beginnning of the array and one at the end.
 * The one at the begining of the array let us call it left
 * The one at the end of the array let us call it right.
 * Then you can compare add those two values and either move the left pointer forward.
 * To move the left pointer forward you increase the index
 * You can also move the right pointer backward to move the right pointer backward you reduce the index.
 * The ability to compare two values can be used in very interesting and powerful ways to solve problems faster I would show you one such way/
 * 
 * 
 * b. Approach
This solution only works for sorted arrays.
The trick is create a pointer at the start of the array and at the end of the array.
We sum the start and end items to get a value. 
If the sum we get is less than our target. 
We move the left pointer forward. It is important to note that by moving the left pointer forwad
the next sum would be more. 
It is important to note that by moving the left pointer forward
the next sum would be more as we are increasing the total. 
However If the sum we get is more than our target. We move the right pointer backward. 
 It is important to note that by moving the right pointer backward
the next sum would be less  as we are reducing the total. 

 * c. Coding up the solution
 * Walk through the solution part by part
 i. First we create a variable called left. left is initialised to zero because it is at the start of the array.
 Note that we created the variable with let as we can reassign its value subsequently
 We create another variable called right. right is initialised to the length of the array minus 1.  because Because right is to be at the end of the array
   let left = 0;
   let right = arr.length - 1;
 
 ii. Next we have a  while loop that keeps running while the left is less than the right
   for (let index = 0; index < nums.length; index++) {}
 
 ii. Then we get what number is needed to complement this element to give us the target.
     // could you throw more light on this
      while (left < right) {
   
 
 iii. We add the left element and the right element together. 
     const sum = arr[left] + arr[right];
       
    
 iv. we return the target because we have found our annswer
  if (sum === target) {
     return [left + 1, right + 1];
  }
    
 iv. If the sum of the left and right items is equal to the target we return the target because we have found our annswer
     return [left + 1, right + 1];
 
 v. If the sum is less than the target. It means we want a bigger sum subsequenntly so we have to increase the next sum by moving the left pointer forward
     sum < target ? left++ :
  
 
 v. If the sum is greater than the target. It means we want a smaller sum subsequenntly so we have to reduce the next sum by moving the right pointer backward
     sum > target ?   right--;
 
 d. question walkthhrough
 
 e. Time Complexity
The time complexity of this algorithim is linear. That is O(N).Because in the worst case of this algorthim we would go throguh the array once.
 */
