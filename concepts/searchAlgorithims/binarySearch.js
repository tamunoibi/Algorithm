
// this is the naive approach to searching. We search one after the other
// The disadvantage of this is that if the array we are searching is really long it takes a long time
// the best case scenario is the array is on the first item 
// the worst case scenario is looping through every item. ON(I think please confirm)
const search = (val, arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (val === arr[i]) {
            return i;
        }
    }
      return -1;
};
// Binary search works when the values are already sorted
// Binary search: a) cut the full array in half, b) check to see if the value is in the right half or the   
const binarySearch = (val, arr) => {
  let startIndex = 0;
  let stopIndex = arr.length - 1;

  while (startIndex <= stopIndex) {
    const middle = startIndex + Math.floor((stopIndex - startIndex) / 2);
    if (val === arr[middle]) {
      return val;
    };
    if (val < arr[middle]) {
      stopIndex = middle - 1;
    } else {
      startIndex = middle + 1;
    }
  }
  return -1;
};
const binarySearchComment = (val, arr) => {
  let startIndex = 0;
  let stopIndex = arr.length - 1;
  // normally to loop from beginning to end you
  // here we are saying while we are still less than the array.length
  // Why we are not using array.length is because the length of the array we are dealing with would change as we iterate
  // for example if we start working on only the left part an array of 10 items would become just 5. so our ending point is the 5
  // example: [0, 1, 2, 3, 4,| 5, 6, 7, 8, 9, 10]
  //           ^           ^ | ^
  //           |           |   |
  //           |=start stop|  Mid
  //You see that if we had used array.length it would be inaccurate rather we want to continy
  // 
  while (startIndex <= stopIndex) {
    // we are getting the index of the middle item:
    // this was the original solution for the middle point, but I found a shorter more logical alternative
    // I still kept this old solution in case I find any issue with the one I came up with
    // const middle = startIndex + Math.floor((stopIndex - startIndex) / 2);

    const middle = Math.floor((startIndex + stopIndex) / 2);
    // the middle point normally is the array.length - 1 / 0 . That is the stopIndex/0
    // in a situation were the array to be considerd is
    //
    // example:        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    //                              ^           ^
    //                              |           |
    //                              |start=>stop|
    //HOW I got the calculation for the middle point,
    // 1. merely looking at the array above,I know the middle point in a situation where
    // start =  4 stop = 8  middle is 6.
    //   I arrived at this by looking at the numbers visually.
    //   I began playing with the numbers. i tried to multiply stop by start.
    // Essentially, what is the way I would arrange 4, 8 to give me 6. I know it is over 2. Since
    //  (4 + 8)/ 2 = x  =====> correct 6
    //  (4 * 8)/ 2 = x
    //  (8 - 4)/ 2 = x

    // startIndex: 0, stopIndex 9, i.e 10 - 0 = 10; 10 / 2 = 5; Math.floor(5) = 5;
    // we use Math.floor() to round down. so if you have 9. 9/2 = 4.5; Math.floor(4.5) is 4.

    // we check if the value can be found at the middle point
    if (val === arr[middle]) {
      return val;
    }
    // if the item is less than the middle item we want to check to the left of the middle
    // for example the middle item is 5. and the item is 2, we know if the item exits it would be on the left side of the array
    if (val < arr[middle]) {
      stopIndex = middle - 1;
      // if the stopIndex(that is the end of the array) is made the item just before the middle
      // that means we are dealing with the left half
      //          |========== stopped here before=|
      //                                          |
      //                         |                *
      // example: [0, 1, 2, 3, 4,| 5, 6, 7, 8, 9, 10]
      //           ^           ^ | ^
      //           |           |   |
      //           |=start stop|  Mid
      //array has 11 items. startIndex = 0; stopIndex = 10; middle = 5; say we are looking for 2.
      // stopIndex is changed to index 4; start is not changed and remains index 0; so this means the left half of the array is now the array we are working with
      //

      // if the item is greater than arr[middle], this means we should check on the right hand side of the array.
    } else {
      console.log("old", startIndex, stopIndex);

      startIndex = middle + 1;
      console.log("try", startIndex, stopIndex);

      // here we convert the startIndex(the first element) in the array to be one index above the middle.
      // this clearly means we are dealing with the right hand side.
      // we make the first element of the array to be the right hand side
      // and then the stopIndex(the end of the array) is not changed
      //           |===started here before==========|
      //           |
      //           *                |
      // example: [0, 1, 2, 3, 4, 5,| 6, 7, 8, 9, 10]
      //                          ^ | ^            ^
      //                          |   |            |
      //                          Mid |start===stop|
      //array has 11 items. startIndex = 0; stopIndex = 10; middle = 5; say we are looking for 7.
      // startIndex is changed to index 6; stopIndex is not changed and remains index 10; so this means the right half of the array is what we are walking with
      //
    }
  }
  return -1;
};
const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(binarySearch(7, values));
/**
 * Steps to solve binary search
 * 1. find the middle point
 * 2. handle situations where the middle number is the right number; 
 *    
 */
