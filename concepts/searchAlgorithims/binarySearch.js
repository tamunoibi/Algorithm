// this is the naive approach to searching. We search one after the other
// The disadvantage of this is that if the array we are searching is really long it takes a long time
// the best case scenario is the array is on the first item O(1)
// the worst case scenario is looping through every item. O(N)
// Imagine an app like fb trying to check if a user exits to log them in going through all the billions of users
// and how slow and ineffficient that would be
const search = (val, arr) => {
  let start = 0;
  let stop = arr.length -1;
  while (start <= stop) {
    if (val === arr[start]) {
      return arr[start];
    }
    start++;
  }
  return -1;
};
const searchValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const ans = search(7, searchValues);
console.log({ ans });

// Binary search works when the values are already sorted
// Binary search: a) cut the full array in half, b) check to see if the value is in the right half or the left half c) adjust the next half accordingly
// Binary search is an O(log(n)) efficiency algorithm
const binarySearch = (val, arr) => {
  let startIndex = 0;
  let stopIndex = arr.length - 1;

  while (startIndex <= stopIndex) {
    const middle = startIndex + Math.floor((stopIndex - startIndex) / 2);
    if (val === arr[middle]) {
      return val;
    }
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
  // normally to loop from beginning to end you have two options:
  /** 1.
  * here we stop at arr.length - 1 and we loop if the item is <= the stop. So it is inclusive of the stop item
  function accessAllArr(arr) {
    let start = 0;
    const stop = arr.length - 1;
    while(start <= stop) {
      console.log(arr[start]);// output 1,2,3
      start++;
    }
  }
   accessAllArr([1,2,3]);
  /** 2.
   * here we stop at arr.length and we loop if the item is < the stop. So it is NOT inclusive of the stop item. But the stop item is 1 more than the last index in the array so all items are accounted for
  function accessAllArr(arr) {
    let start = 0;
    let stop = arr.length;
    while(start < stop) {
      console.log(arr[start]);// output 1,2,3
      start++;
    }
  }
   accessAllArr([1,2,3]);
  */
 //Common pitfalls: OFF BY ONE ERROR
//  There are two common off by one error(where you loop one more time or loop one less time) to say loop inclusive of the stop condition but the stop condition is more than the array items.
/** 1.
  * here we stop if we are <= arr.length. That is Inclusive of arr.length. Array.length is 1 more than the total array items
  *  arr  =     A   P   P   L   E _
  *                               ^
  *                               |
  *       stop when we are = the total array items + 1
  function accessAllArr(arr) {
    let start = 0;
    const stop = arr.length;
    while(start <= stop) { //----->You stop 1 more than the array items
      console.log(arr[start]);// output 1,2,3
      start++;
    }
  }
   accessAllArr([1,2,3]);
  /** 2.
  * here we stop if we are  < arr.length - 1. That is excluding of arr.length - 1. Array.length - 1 is exactly the total array items. So we stop 1 before the array item.
  *  arr  =     A   P   P   L   E
  *                         ^
  *                         |
  *       stop when we are < the total array items
  function accessAllArr(arr) {
    let start = 0;
    let stop = arr.length - 1;
    while(start < stop) { //----->You stop 1 more than the array items
      console.log(arr[start]);// output 1,2,3
      start++;
    }
  }
   accessAllArr([1,2,3]);
  */

 
   // In Summarry
  // To have a range inclusive of the number -> <=
  // To have a range that stops one before the number <
  // If you are using an length that means it is giving you the total number + 1. So you are to use a loop that goes excluding that number.

  // here we are saying while we are still less than the stopIndex
  // Why we are not using array.length but rather stopIndex is because the length of the array we are dealing with would change as we iterate.  At first it would be  array.length later it could be less than
  // for example if we start working on only the left part an array of 10 items would become just 5. so our ending point is the 5th index not the 10th index
  // example: [0, 1, 2, 3, 4,| 5, 6, 7, 8, 9, 10]
  //           ^           ^ | ^
  //           |           |   |
  //           |=start stop|  Mid
  //You see that if we had used array.length it would be inaccurate rather we want to continue
  //
  while (startIndex <= stopIndex) {
    // we are getting the index of the middle item:
    // this was the original solution for the middle point, but I found a shorter more logical alternative
    // I still kept this old solution in case I find any issue with the one I came up with, or if I undrestand it better later
    // const middle = startIndex + Math.floor((stopIndex - startIndex) / 2);

    const middle = Math.floor((startIndex + stopIndex) / 2);
    // the middle point normally is the array.length - 1 / 2 . That is if the array has 12  items. 12/2 which is 6.
    // Example array:
    //
    // example:        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    //                              ^           ^
    //                              |           |
    //                              |start=>stop|
    //HOW I got the calculation for the middle point,
    // 1. merely looking at the array above,I know the middle point in a situation where
    // start =  4;
    // stop  = 8;
    // therefore: middle is 6.
    //   I arrived at the middle by looking at the numbers visually.
    //   I began playing with the numbers. i tried to multiply stop by start.
    // Essentially, what is the way I would arrange 4, 8  and divide by two to give me 6. I know it is divided by 2, since I am trying to get half. Since
    //  (4 + 8)/ 2 = x  =====> correct 6. so the formula is for calculating  middle is  start+stop/2
    //  (4 * 8)/ 2 = x
    //  (8 - 4)/ 2 = x

    // example 2:
    // startIndex = 0;
    // stopIndex  = 9;
    // therefore middle  9 + 0 = 9; 9 / 2 = 4.5; Math.floor(4.5) = 4;
    // we use Math.floor() to round down to the nearest whole number. so if you have 9. 9/2 = 4.5; Math.floor(4.5) is 4.

    // we check if  middle number  is the value
    if (val === arr[middle]) {
      return val;
    }
    // if the item is less than the middle item we want to check to the left of the middle
    // for example the middle item is 5. and the item is 2, we know if the item exits it would be on the left side of the array
    // 1,2,3,5,6,9
    //       ^
    //        |Middle point is 5. While what we are looking for
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
      startIndex = middle + 1;
      // here we convert the startIndex(It was previously the first element) in the array to be one index after the middle.
      // this clearly means we are dealing with the right hand side.
      // we make the first element of the array to be the right hand side
      // and then the stopIndex(the end of the array) is not changed
      //           |===>start was here here before
      //           |
      //           *                |
      // example: [0, 1, 2, 3, 4, 5,| 6, 7, 8, 9, 10]
      //                          ^ | ^            ^
      //                          |   |            |
      //                          Mid |start===stop|
      //                              |===>start is moved here. It is has gone on the right hand side of MID
      //array has 11 items. startIndex = 0; stopIndex = 10; middle = 5; say we are looking for 7.
      // startIndex is changed to index 6; stopIndex is not changed and remains index 10; so this means the right half of the array is what we are walking with
      //
    }
  }
  //at the end of  return -1 if it is not found
  return -1;
};
const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(binarySearch(7, values));
/**
 * Steps to solve binary search
 * 1. Go through the array
 * 2. Find the middle value, if it is our target(what we are looking for) then return it, if our target is on the left side(go left) if what we are looking for is on the right go right
 *
 */
//The difference between binary
const searchDifference = (val, arr) => {
  let start = 0;
  let stop = arr.length;
  while (start < stop) {
    if (val === arr[start]) {
      return arr[start];
    }
    // instead of incrementing the start and going one after the other by doing start++;
    // with binary search we progressively reduce the array we are searching. From the middle we could go right(if val > middle) or left(if  val< middle)
  }
  return -1;
};
