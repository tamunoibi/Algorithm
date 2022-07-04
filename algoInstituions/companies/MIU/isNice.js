function isNice(arr) {
  if (arr.length === 1) {
    return true;
  } else {
    for (let i = 1; i < arr.length; i++) {
      if (!checkSum(arr, i)) {
        return false;
      }
    }
    return true;
  }

  function checkSum(arr, indexElement) {
    let sum = 0;
    for (let i = 0; i < indexElement; i++) {
      sum += arr[i];
    }
    if (sum < arr[indexElement]) {
      return true;
    } else {
      return false;
    }
  }
}
console.log(isNice([2, 4, 9, 10]));
