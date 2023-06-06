// Reference: March 2022
// Single recursion operates like regular loops
// The advanced of single recursion is Double recursion: This vides uses thrippple recursion but expains it wonderfully: https://www.youtube.com/watch?v=0nKIr3kAt-k
function singleRecursion(arr) {
  //sample Input: [1, 2, 3, 4]
  const recursion = (nums, index = 0) => {
      console.log({index, item: arr[index]});
      if(index >= nums.length -1) {
          return false;
      }
       recursion(nums, index+1);
  } 
 return recursion(arr);
}
function singleRecursionComment(arr) {
    // We start index at 0. If no value is passed. 
  const recursion = (nums, index = 0) => {
      console.log({index, item: arr[index]});
      /** A single recursion is like a loop it just goes from begining to end
       * recursion(nums, index + 1);
       * console.log({index, item: arr[index]})
       * 
      { index: 0, item: 1 }
        { index: 1, item: 2 }
        { index: 2, item: 3 }
        { index: 3, item: 4 }
       */


      // the base case stop when we are at the last item in the array
      // If we did not progressively get to the base case the funnction would never terminate
      if(index >= nums.length -1) {
          return false;
      }
      // Keep incrementing the index by doing index+1 so we can eventually get to the base case and prevent an infinite loop 
      // First we start at 0. then keep adding 1 and we stop at the very last element
      recursion(nums, index+1);
  } 
 return recursion(arr);
}
