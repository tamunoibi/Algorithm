function binarySearch(searchList, value) {
  let arrayPath = [];
  let startIndex = 0;
  let stopIndex = searchList.length - 1;

  while (startIndex <= stopIndex) {
    const middleIndex = Math.floor((stopIndex + startIndex) / 2);
    let middleItem = searchList[middleIndex];
    arrayPath.push(middleItem);
    if (value === middleItem) {
      return arrayPath;
    }

    if (value < middleItem) {
      // go left
      //We go left by reducing the stop index to one step before the middle
      stopIndex = middleIndex - 1;
    }

    if (value > middleItem) {
      //go right
      //We go right by reducing the start index to one step after the middle
      startIndex = middleIndex + 1;
    }
  }
  // If we have gotten to the end of the array and we did not find the item we are looking for return the string 'not found'
  return "Value Not Found";
}
function binarySearchComment(searchList, value) {
  let arrayPath = [];
  let startIndex = 0;
  let stopIndex = searchList.length - 1;

  while (startIndex <= stopIndex) {
    const middleIndex = Math.floor((stopIndex + startIndex) / 2);
    let middleItem = searchList[middleIndex];
    arrayPath.push(middleItem);
    if (value === middleItem) {
      return arrayPath;
    }

    if (value < middleItem) {
      // go left
      stopIndex = middleIndex - 1;
    }

    if (value > middleItem) {
      //go right
      startIndex = middleIndex + 1;
    }
  }
  return "Value Not Found";
}
const testArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const ans = binarySearch(testArray, 0);
console.log({ ans });
