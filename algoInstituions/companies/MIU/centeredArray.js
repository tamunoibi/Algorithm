// Sample question here: https://compro.miu.edu/sample-test/
function isCentered(arr) {
  // check if it is an odd number
  // odd number if you divide the length by 2 you have a remainder of 1
  // even number if you divide the length by two you do not have 0 remainder
  // I want return 0 if it is an even number
  if (arr.length % 2 === 0) {
    return 0;
  }
  // Get the middle item
  const mid = Math.floor(arr.length / 2);
  for (let index = 0; index < arr.length; index++) {
    if (index !== mid && arr[index] < mid) {
      return 0;
    }
  }
  return 1;
}
console.log({ ans: isCentered([3, 2, 1, 4, 5]) });
