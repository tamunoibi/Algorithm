/**
 * Explaining subarray: https://www.youtube.com/watch?v=qoI26oy8MeI
 * I have a note on this
 * Subarrays are junks of an array.
 * example: [4,5,6]
 * a sub array can be [4,5] or [5,6].
 * even the whole array is also a sub array of itself [4,5,6]
 *
 * you can't skip numbers. eg.
 * [4,7] is not a valid sub array
 * To get all sub arrays. You go from each element and
 *
 *
 * element 4
 * 4,
 * 45,
 * 456,
 * element 5
 * 5,
 * 5,6
 * element 6
 * 6
 */
// Go through the array. For each item give me all the possible
// sub-arrays starting at that item
function subArrays(arr) {
  const subArr = [];

  for (let index = 0; index < arr.length; index++) {
    let sequence = [];
    for (let j = index; j < arr.length; j++) {
      // Use slice to give me a part of the array
      // How did I know what to pass to slice.
      // I was just guessing and trying
      // push that part of the array to the subarray
      subArr.push(arr.slice(index, j + 1));
    }
  }
  return subArr;
}
subArrays([4, 5, 6]);
