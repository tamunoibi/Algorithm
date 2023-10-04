function merge(arr) {
  if (arr.length === 1) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, middle);
  const rightArr = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}
function mergeSort(left, right) {
  let result = [];
  let indexRight = 0;
  let indexLeft = 0;

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft]);
      indexLeft++;
    } else {
      result.push(right[indexRight]);
      indexRight++;
    }
  }
  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}

// The need to rename functions:
// the function  names are not actually descriptive of what the function is doing as such I would rename them
// merge: merge is not actually performing a mergeOperation per se it is actually performing a recursive division.  Consequntley I would name it divide()
// mergeSort: mergeSort is better called mergeSortedArray since it is given two sorted arrays and it merges them into one array. 

// Keep dividing the subList until we have one element only or no element
function divide(arr) {
  if (arr.length === 1) {
    // example [2] has a length of 1
    return arr;
  }
  // to get the middle index is the array.length / 2
  // arr.length = 5
  // 5 ÷ 2      = 2andhalf  that is 2.5
  //
  // There is no and half index in js. we have whole number index like 1, 2. Nothing like 2.5 index.
  // So you round it down to lowest integer. In this case 2
  // it is note worthy that Math.floor() rounds numbers to the lowest integer. so Math.floor(2.9) is 2.
  // math.celi() rounds up. Does Math.celi(4.1) round to 4 or 5
  // the normal rounding I was thought in secondary school. 4.5 would be rounded up to 5. While 4.1 would be rounded down to 4
  const middle = Math.floor(arr.length / 2);

  // slice is passed a range of numbers. Example: slice(0, 4); Means give me from index 0 - 4 not including index 4. That is index 0, 1, 2, 3
  // [4, 89, 90, 80, 7].slice(0, 2) we are targeting from the element 4(this is index 0) to 89(this is index 1)
  // left = [4, 89];
  const left = arr.slice(0, middle);
  // if you call slice with only one parameter the second parameter defaults to arr.length
  // example:  [4, 89, 90, 80, 7].slice(2);
  // the answer is  [90, 80, 7]
  // Because it is like saying start at index 2 and stop at the last index
  // rightArr =  [90, 80, 7];
  const right = arr.slice(middle);

  // Question: Who is calling who? and in what order?
  //    Ans: Simple use an example and trace it with a binary tree to be able to follow the flow.
  //  merge(divide([4, 89]), divide([90, 80, 7]))
  return merge(divide(left), divide(right));
}

function mergeComment(left, right) {
  let result = [];
  let indexRight = 0;
  let indexLeft = 0;

  // why are we checking this?
  // it has something to do with getting to the end of the array. right.length refers to the arrays length
  // we are doing this to keep looping till we get to the end of the array

  // indexLeft is 0;
  // left.length == 2. because left is  [4, 89]
  // is 0 < 2. yes

  //for the right
  // indexRight is 0;
  // right.length == 3. because left is [90, 80, 7]
  //  is 0 < 3. Yes

  //(yes && yes) so th algorithm executes

  while (indexLeft < left.length && indexRight < right.length) {
    // left = [9, 89]; right=[1, 80, 7]
    // left[indexLeft] < right[indexRight]:
    // iteration 1:
    // { result: [], indexLeft: 0, indexRight: 0, leftEl: 9, rightEl: 1,  }
    // 9 < 1: false. so push 1. Note we are always pushing the smaller item. increment indexRight
    // so, result = [1]; indexRight=1 indexLeft=0;

    // iteration 2:
    // { result: [ 1 ], indexLeft: 0, indexRight: 1,  leftEl: 9, rightEl: 80 }
    // 9 < 80 yes. so push 9. increment indexLeft
    // so, result = [1, 9]; indexRight=1; indexLeft=1;

    // iteration 3:
    // { result: [ 1, 9 ], indexLeft: 1, indexRight: 1,  leftEl: 89, rightEl: 80 }
    // 89 < 80 false. increment indexRight
    //so, result = [1, 9, 80]; indexRight=2; indexLeft=1;
    // iteration 4
    // { result: [ 1, 9, 80 ], indexLeft: 1, indexRight: 2, leftEl: 89, rightEl: 7 }
    // 89 < 7 false. increment indexRight
    // so, result = [1, 9, 80, 7]; indexRight=3; indexLeft=1;

    //The loop stops because:  indexLeft < left.length && indexRight < right.length
    //1 < 2; && 3 < 3;  3 < 3 is false.
    console.log({
      result,
      indexLeft,
      lefEl: left[indexLeft],
      indexRight,
      rightEl: right[indexRight],
    });

    if (left[indexLeft] < right[indexRight]) {
      //left[indexLeft] = [4, 89] index 0 = 4
      //right[indexRight] = [90, 80, 7] index 0 = 90
      // so push 4 to the result.
      // result becomes [4]

      result.push(left[indexLeft]);
      indexLeft++;
    } else {
      result.push(right[indexRight]);
      indexRight++;
    }
  }
  // indexLeft = 1; because it was initialized at 0 and I have incremented it by one.
  // left.slice(indexLeft) = [9, 89].slice(1); = [89]

  // indexRight = 3; because it was initialized at 0 and I have incremented it by three times.
  // right.slice(indexRight) = [1, 80, 7].slice(3) = []

  // left.slice(indexLeft)).concat(right.slice(indexRight) = [89].concat([]) = [89]
  // result.concat(left.slice(indexLeft)).concat(right.slice(indexRight)) = [ 1, 9, 80, 7 ].concat( [89]) = [x, 89]
  // final answer = [ 1, 9, 80, 7, 89 ]
  //   console.log(result)
  //   console.log({ right: result.concat(left.slice(indexLeft)).concat(right.slice(indexRight)) });

  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}
const ans = mergeComment([9, 89], [1, 80, 7]);
