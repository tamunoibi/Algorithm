// The brute force algorithm that is O(N^2) this is not efficient
function containsDuplicateBruteForce(array) {
  for (let index = 0; index < array.length; index++) {
    for (let j = 0; j < array.length; j++) {
      const element = array[index];
      const otherElement = array[j];
      if (j != index && element === otherElement) {
        console.log({ index, otherElement });
        return true;
      }
    }
  }
  return false;
}
// const ans = containsDuplicateBruteForce([2, 3, 1]);


//Using hashing: O(N)
function containsDuplicate(array) {
  const previousNums = {};
  for (let index = 0; index < array.length; index++) {
    if (previousNums[array[index]]) {
      return true;
    }
    previousNums[array[index]] = true;
  }
  return false;
}

const solution = containsDuplicate([1, 2, 3, 1]);

//
console.log({ solution });
