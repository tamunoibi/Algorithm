function chunkArrayInGroups(arr, size) {
  const newArr = [];
  while (arr.length > 0) {
    newArr.push(arr.splice(0, size));
  }
  return newArr;
}
function chunkArrayInGroupsComment(arr, size) {
    //create an empty array to put the new array groups into 
  const newArr = [];
  while (arr.length > 0) {
    newArr.push(arr.splice(0, size));
  }
  const ans = newArr;
  console.log(ans)
  return ans;
}
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);
//outputs [ [ 0, 1 ], [ 2, 3 ], [ 4, 5 ] ]