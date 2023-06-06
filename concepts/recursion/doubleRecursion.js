// Reference: March 2022
// The beginner for this is Single recursion. Single recursion operates like regular loops. There iscode for this called Single Recursion
// Double recursion: operates like a tree  that goes depth first.
// Double recursion: This vides uses thrippple recursion but expains it wonderfully: https://www.youtube.com/watch?v=0nKIr3kAt-k
function doubleRecursionArray(arr) {
  //sample Input: [1, 2, 3, 4]
   const recursion = (nums, index = 0) => {
      console.log({index, item: arr[index]});
      if(index >= nums.length -1) {
          return false;
      }
    recursion(nums, index + 1) || recursion(nums, index + 1);
  } 
 return recursion(arr);
}
function doubleRecursionNum(num) {
  const recursion = (num) => {
    // pre-order traversal: the console statemennt is before the recursive part and the base case
      console.log({index});
      if(num <= 0) {
          return;
      }
        return  recursion(num - 1) || recursion(num - 1);
      // Alternative way
      //    if(num > 0) {
      //     recursion(num - 1) || recursion(num - 1);
      // }

  } 
 return doubleRecursionNum(num);
}
function doubleRecursionArrayComment(arr) {
    // We start index at 0. If no value is passed. 
  const recursion = (nums, index = 0) => {
      console.log({index, item: arr[index]})
       /** A double recursion is like a binary tree. it first goes from begininng to end like a regular loop. but for each loop it saves the other recursive call. When it has gone to the end of the loop. It goes to the last saved value. then runns to the end of that loop
       * doubleRecursionArrayComment([1,2,3,4]) calls recursion(nums, index + 1) || recursion(nums, index+1);
       * console.log({index, item: arr[index]})
       * 
       * 
        { index: 0, item: 1 }
        { index: 1, item: 2 }
        { index: 2, item: 3 }
        { index: 3, item: 4 } ------->here the initial loop stops 
        { index: 3, item: 4 } 
        { index: 2, item: 3 }
        { index: 3, item: 4 }
        { index: 3, item: 4 }
        { index: 1, item: 2 }
        { index: 2, item: 3 }
        { index: 3, item: 4 }
        { index: 3, item: 4 }
        { index: 2, item: 3 }
        { index: 3, item: 4 }
        { index: 3, item: 4 } 
       */
      // the base case stop when we are at the last item in the array
      if(index >= nums.length -1) {
          return false;
      }
      // Keep incrementing the index by doing index+1 so we can eventually get to the base case and prevent an infinite loop 
      // First we start index at 0. then keep adding 1 and we stop at the very last element
        recursion(nums, index + 1) || recursion(nums, index + 1);
  } 
 return recursion(arr);
}
function doubleRecursionNumComment(num) {
    // We start index at the number passed and  stop at 0. Eg. if 5 is passed we go 5,4,3,2,1,0
  const recursion = (num) => {
       /**
        *  A double recursion is like a binary tree. it first goes from begininng to end like a regular 
        * loop. but for each loop it saves the other recursive call. When it has gone to the end of the loop. 
        * It goes to the last saved value. then runns to the end of that loop
        * recursion(num -  1) || recursion(num - 1);
       */
        /** A double recursion is like a binary tree. it first goes from begininng to end like a regular loop. but for each loop it saves the other recursive call. When it has gone to the end of the loop. It goes to the last saved value. then runns to the end of that loop
       *recursion(num - 1) || recursion(nums - 1);
       * console.log({index)
        { index: 5 }
        { index: 4 }
        { index: 3 }
        { index: 2 }
        { index: 1 } ------>here the funnction stops going deeper and goes up
        { index: 2 }
        { index: 1 }
        { index: 3 }
        { index: 2 }
        { index: 1 }
        { index: 4 }
        { index: 3 }
        { index: 2 }
        { index: 1 }
        { index: 5 }
        { index: 4 }
        { index: 3 }
        { index: 2 }
        { index: 1 }
       */
      // the base case: stop when num is less than 0 or equal to zero. 
      // it asks the question is 5 less than 0? no. conntinue the loop
      // it asks the question is 4 less than 0? no.
      // it asks the question is 3 less than 0? no.
      // it asks the question is 2 less than 0? no.
      // it asks the question is 1 less than 0? no.
      // it asks the question is 0 less than 0? no. Is 0 equal to zero? yes. so the  recursion stops.
      if(num <= 0) {
          return;
      }
      // Keep incrementing the index by doing index+1 so we can eventually get to the base case and prevent an infinite loop 
      // First we start index at 0. then keep adding 1 and we stop at the very last element
        recursion(nums - 1) || recursion(num - 1);
        /**
         * You can have the two types 
         * 1.  Preorder traversal  When we print before we test out our if statement that is before we recurse.  That is traversal on the way down  as we push onto the call stack 
         * 2.  Post order traversaL  When we print after  we test our if statement that is after we recurse     recurse. That is traversal as we pop off the call stack. 
         *  You don't need to thinnk much 'pre' is before. So before the loop  
         */
  } 
 return doubleRecursionNumComment(num);
}