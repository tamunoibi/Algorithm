/**
 * reference note Jan, 2022: book1 page 16
 * 
 * Sample input:  sortedSquareArraysComment([-10, 1, 2, 3, 4, 5])
*/

function sortedSquareArrays(nums) {
  const result = new Array(nums.length).fill(0);
  // an alternative way of creating an array filled with zeros
  //  const result = [];
  //  for (let index = 0; index < nums.length; index++) {
  //    result.push(0);
  //  }
  let left = 0;
  let right = nums.length - 1;
  let j = nums.length - 1;

  while (left <= right) {
    let leftVal = Math.pow(nums[left], 2);
    let rightVal = Math.pow(nums[right], 2);

    if (rightVal > leftVal) {
      result[j] = rightVal;
      right--;
    } else {
      result[j] = rightVal;
      left++;
    }
    j--;
  }
  return result;
}
sortedSquareArrays([1, 2, 3, 4, 5]);
function sortedSquareArraysComment(nums) {
  const result = new Array(nums.length).fill(0);
  /**
   * We use two pointers one at the beginning of the array
   * and the other at the end of the array.
   * We square both values and the BIGGER of the two is added to the ending in the new array.
   *
   */
  // result is => [0,0,0,0,0]
  let left = 0; // the left pointer starts at the first element in the array
  let right = nums.length - 1; // the right pointer starts at the last element in the array

  // the loop starts from the last item of the new array we fill the values as we go
  let j = nums.length - 1;

  // we do not want the left and the right values to cross.
  // For example if left starts at 0. right starts at 4.
  // If we  left becomes: 0, 1, 2, 3, 4.
  // Then left must stop at 4. The left and right must stop at the same point. 
  while (left <= right) {
    let leftVal = Math.pow(nums[left], 2);
    let rightVal = Math.pow(nums[right], 2);

    // The bigger of the values should be added to the end of the array.
    if (rightVal > leftVal) {
      result[j] = rightVal;
      right--;
    } else {
      result[j] = leftVal;
      left++;
    }
    j--;
  }
  return result;
}