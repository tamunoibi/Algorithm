/** sortedSquareArrays---------------------------------------------------------------------*/

function sortedSquareArrays(nums) {
  const result = new Array(nums.length).fill(0);
  let left = 0;
  let right = nums.length - 1;
  let resultIdx = nums.length - 1;

  while (left <= right) {
    let leftVal = Math.pow(nums[left], 2);
    let rightVal = Math.pow(nums[right], 2);

    if (leftVal < rightVal) {
      result[resultIdx] = rightVal;
      right--;
    } else {
      result[resultIdx] = rightVal;
      left++;
    }
    resultIdx--;
  }
  return result;
}
sortedSquareArrays([1, 2, 3, 4, 5]);
function sortedSquareArraysComment(nums) {
  // const result = new Array(nums.length).fill(0);
  const result = [...Array]
  // result is => [0,0,0,0,0]
  let left = 0;
  let right = nums.length - 1;
  let resultIdx = nums.length - 1;

  while (left <= right) {
    let leftVal = Math.pow(nums[left], 2);
    let rightVal = Math.pow(nums[right], 2);

    if (leftVal < rightVal) {
      result[resultIdx] = rightVal;
      right--;
    } else {
      result[resultIdx] = leftVal;
      left++;
    }
    resultIdx--;
  }
  return result;
}

const ans = sortedSquareArraysComment([-10, 1, 2, 3, 4, 5]);
console.log({ ans });

/** ---------------------------------------------------------------------*/
