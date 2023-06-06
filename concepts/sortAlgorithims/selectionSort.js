//Time complexity O(n^2)
//Helpful video: https://www.youtube.com/results?search_query=selection+sort+js
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexOfLowestNum = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfLowestNum]) {
        indexOfLowestNum = j;
      }
    }
    if (indexOfLowestNum !== i) {
      const temp = arr[indexOfLowestNum];
      arr[indexOfLowestNum] = arr[i];
      arr[i] = temp;
    }
  }
}
function selectionSortComment(arr) {
  for (let leftNumberIndex = 0; leftNumberIndex < arr.length; leftNumberIndex++) {
    //first we assume the current  item we are on is the lowest index
    let indexOfLowestNum = leftNumberIndex;

    // at the end of this loop we want to get the indexOfLowestNum to be stored in the variable indexOfLowestNum
    // we compare every subsequent item, and find the lowest item and save it as the indexOfLowestNum
    for (let rightNumberIndex = leftNumberIndex + 1; rightNumberIndex < arr.length; rightNumberIndex++) {
      // the proper order is leftNumberIndex(which is also indexOfLowestNum) < rightNumber
      // that is 1, 2. is the leftNumberIndex and  2 is the rightNumber
      // if it is not in that order indexOfLowestNum >  , then swap it out
      if (arr[indexOfLowestNum] > arr[rightNumberIndex]) {
        indexOfLowestNum = rightNumberIndex;
      }
    }
    // we perform the swap if the lowest index is not the one we assumed it to be(we first assumed it to be the current index) it was
    // we are swapping the current item we are with the lowest item
    if (indexOfLowestNum !== leftNumberIndex) {
      const temp = arr[indexOfLowestNum];
      arr[indexOfLowestNum] = arr[leftNumberIndex];
      arr[leftNumberIndex] = temp;
    }
  }
  /**
   Example 1.
     arr = [6, 5, 7, 1]
     1. to sort [6, 5, 7, 1] we start at the first item 6 then check if 5 is smaller than 6. we swap places(the array becomes [5,6,7,1]). then we compare 5 and 7. it is in the right order the leftItem < rightItem (so the array remains [5,6,7,1] ). Next we compare  5 and 1. the left is bigger than the right(left > right) which is not the right order so we swap the values (the array becomes [5,6,7,1])
     2. the array is now [5,6,7,1] we move to the second item 6 

   */
}

console.log({ ans: selectionSort([6, 5, 4, 1]) });
