const array = [4, 2, 5, 1, 3];
const swap = (arr, left, right) => {
  //  Swap arr[right`]
  return ([arr[right], arr[left]] = [arr[left], arr[right]]);
};
for (let i = 0; i < array.length; i++) {
  let lowestIdx = i;
  for (let j = i + 1; j < array.length; j++) {
    if (array[lowestIdx] > array[j]) {
      lowestIdx = j;
    }
  }
  if (lowestIdx !== i) {
    swap(array, i, lowestIdx);
  }
}
