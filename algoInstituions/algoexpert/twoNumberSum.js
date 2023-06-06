

// function twoNumberSum(array, targetSum) {
//   // Write your code here.

//   for (let index = 0; index < array.length; index++) {
//     for (let j = 0; j < array.length; j++) {
//       //successful: return array of the two two numbers
//       const firstNum = array[index];
//       const secondNum = array[j];
//       if ((index !== j && firstNum + secondNum) === targetSum) {
//         console.log([array[index], array[j]]);
//         return [firstNum, secondNum];
//       }
//     }
//   }
//   /** 
//    * For us to get to here in the forLoop it means that the code has gone through
//    * the whole loop and was unable to find a match
//    */
//   //unsuccessful: return empty array []
//   return [];
// }

twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10);
/**I wrote this to help me figure out how I want the loop to loop. I noticed I do not 
 * want the particular number I am on. So I added a condition: index !== j 
 */
// 0:  1, 2, 3, 4, 5, 6, 7
// 1:  0, 2, 3, 4, 5, 6, 7
// 2:  0, 1, 3, 4, 5, 6, 7
