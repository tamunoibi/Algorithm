/**
 *  I am a very visual learner as such I am creating this tutorial for people
 *  like me that understand things with images.
 *
 *  This is based off the neetcode list which is a very detailed compilation of 150 problems which covers virtually all aspects of algorithm probblems
 * it is a very well thought out work and I complement the creator on the wonderful job done.
 */

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

function containsDup(array) {
  // create a loop
  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    // create an inner loop
    for (let j = 0; j < array.length; j++) {
      const element = array[j];

      // check that we are not on the current element
      if (array[i] === array[j] && i !== J) {
        return true;
      }
    }
  }
  return false;
}

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
