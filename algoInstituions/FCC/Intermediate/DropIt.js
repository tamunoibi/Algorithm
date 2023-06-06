function dropElementsOne(arr, func) {
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}
function dropElementsTwo(arr, func) {
  let isTrue = false;
  //   returns a new array with items that pass the test
  const ans = arr.reduce((acc, next) => {
    // if we have found a true item or this
    // item is true then add this item to the array
    if (isTrue || func(next)) {
      isTrue = func(next);
      acc.push(next);
      return acc;
    } else {
      // if we have not found a true item or this ite is not
      // true then return the array.
      // at first iteration the array is an empty array
      return acc;
    }
  }, []);

  console.log({ ans });
  return ans;
}

dropElementsOne([1, 2, 3, 4], function (n) {
  return n >= 3;
});
