
// not functional

function subSet(arr) {
  const subArr = [];
  for (let index = 0; index < arr.length; index++) {
    for (let j = index; j < arr.length; j++) {
      subArr.push(arr.slice(index, j + 1));
    }
  }
  return subArr;
}
subSet([1,2,3,4]);
