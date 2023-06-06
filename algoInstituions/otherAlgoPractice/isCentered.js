function repeatStringNumTimes(arr) {
  if (arr.length % 2 === 0) {
    return 0;
  } else {
    const middle = (arr.length - 1) / 2;
    const left = isLessMiddle(0, middle - 1, arr, arr[middle]);
    const right = isLessMiddle(middle + 1, arr.length - 1, arr, arr[middle]);
    console.log(right);
    if (left && right) {
      return 1;
    } else {
      return 0;
    }
  }

  function isLessMiddle(start, finish, arr, middle) {
    let val = true;
    for (let i = start; i <= finish; i++) {
      if (arr[i] >= middle) {
        console.log(arr[i], middle);
        val = false;
        break;
      }
    }
    return val;
  }
}
console.log(repeatStringNumTimes([3, 5, 6, 1, 2, 9]));

// to be centered the number of elements must be odd
