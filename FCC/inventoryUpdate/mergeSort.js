// We would keep dividing the subList until we have one element only
function divideTillONe(params) {
  if (params.length === 1) {
    // example [2] has a length of 1
    return params;
  }
  // to get the middle is the array.length / 2
  // arr.length = 5
  // 5/ 2 = 2andhalf  that is 2.5
  // There is no and half index in js. So you round it down with to lowest integer.
  // it is note worthy that Math.floor rounds numbers to the lowest interger. so Math.floor(2.9) is 2.

  const middle = Math.floor(params.length / 2);

  // The thing about slice is that the first element is 0 based. So to target the first item you
  // select the index 0. then to select the first item of end you select index one.
  // [4, 89, 90, 80, 7].slice(0, 2) we are targeting from 4(this is index 0) to 89(this is length 2)
  const leftArr = params.slice(0, middle);
  // when slice() is not provided an end point it takes the array from beginning to end.
  // that means it is like [4, 89, 90, 80, 7].slice(2, array.length);
  // the answer is  [90, 80, 7]
  // therefore: leftArr = [4, 89]; rightArr =  [90, 80, 7];
  const rightArr = params.slice(middle);

  // This part is unclear. who is calling who? and in what order
  return merge(mergeSort(left), mergeSort(right));
}

// divideTillONe([4, 89, 90, 80, 7]);

function merge(left, right) {
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
    //left =[9, 89]; right=[1, 80, 7]
    //left[indexLeft] < right[indexRight]: 
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
    console.log({result, indexLeft, lefEl: left[indexLeft], indexRight, rightEl: right[indexRight]})

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
const ans = merge([9, 89], [1, 80, 7]);
// console.log(ans);


// Notes
