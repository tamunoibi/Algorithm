function destroyer(arr, ...rest) {
  // var valsToRemove = Array.from(arguments).slice(1);

  // console.log(valsToRemove);
  return arr.filter(function (val) {
    return !rest.includes(val);
  });
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
