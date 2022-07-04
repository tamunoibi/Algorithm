function merge(left, right) {
  let sortedArr = []; // the sorted elements will go here

  // this runs when their is a prooperty in both the arrays. The array is being modified in place
  while (left.length && right.length) {
    // insert the smallest of the two elements to the sortedArr
    if (left[0] < right[0]) {
      //.shift() removes the first element of the array and push adds it to the back of the sorteddArr
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
    console.log({ sortedArr, left, right });
  }

  // use spread operator and create a new array, combining the three arrays
  return [...sortedArr, ...left, ...right];
}

function mergeSort(arr) {
  const half = arr.length / 2;

  // the base case is array length <=1
  if (arr.length <= 1) {
    return arr;
  }

  // console.log({half})
  const left = arr.splice(0, half); // the first half of the array
  const right = arr;
  return merge(mergeSort(left), mergeSort(right));
}
const ans = mergeSort([9, 6, 5, 2]);
// console.log(ans);
