function arrayNestedLevel(arr) {
  const sum = arr.reduce((acc, next) => {
    if (Array.isArray(next)) {
    } else {
      acc += 1;
    }
  }, 0);
  console.log(sum);
}
arrayNestedLevel(["hello"]);

function steamrollArrayOne(arr) {
  const ans = arr.reduce((acc, next) => {
    if (Array.isArray(next)) {
      return steamrollArrayOne(acc.concat(next));
    } else {
      return acc.concat(next);
    }
  }, []);
  return ans;
}
function steamrollArrayOneComment(arr) {
  console.log({ arr });
  // we use reduce to go through each array item and for each we join it to the array.the array starts as an empty array.
  // Example:
  //  const arr = ['hello', 'Joy', [50]]
  // we start the method with an empty array, then we take the first item 'hello' and join it to the array (the array becomes ['hello']), we move to the second item 'Joy' we join it to the array (the array becomes ['hello', 'Joy']) we move to the last item [50]
  // since [50] is itself an array we take it out individual piece and join it to the array(the array becomes ['hello', 'joy', 50]) then the function returns the array [ac]
  // Note each call to the recursive function simplifies the retuned array(the accumulator) by spreading out the current item array. It is similar to how recursive functions progressively reduce arguments by doing printI(i - 1); at some point we must stop
  const ans = arr.reduce((acc, next) => {
    if (Array.isArray(next)) {
      // this part of the recursion is easy but takes a
      // acc is all the joining I have done so far
      // next is the current array item.
      //
      // Here
      // I call the steamrollArrayOneComment function again passing in
      // the joining I have done so far + the current item I am on
      // I would show the effect of this in 3 examples
      //
      // example 1:
      // arr = ['hello', [5]]
      // on the first iteration accumulator would be [] and next would be 'hello'. we concatenate them together. this forms ['helllo']. this is now the value of accumulator.
      // By the second iteration accumulator is ['hello'] and next is [5]. we concatenate them together and it becomes [hello, 5], then we run the function again with this new value. The
      // to explain it again. for each item if it is an array we join it (that is use concatenate to join its items to the other array).
      // ['hello'].concat([5]) becomes ['hello', 5]
      return steamrollArrayOne(acc.concat(next));
    } else {
      //   console.log({ acc, next, ans: acc.concat(next) });
      return acc.concat(next);
    }
  }, []);
  return ans;
}

function steamrollArrayTwo(arr) {
  const newArr = [].concat(...arr);
  if (newArr.some(Array.isArray)) {
    return steamrollArrayTwoComment(newArr);
  } else {
    return newArr;
  }
}
function steamrollArrayTwoComment(arr) {
  /**
    You can use the concat method to chain several array items.
    Example:
    console.log([].concat(['i', 'u'], ["hi"]));
    outputs: [ 'hi', 'i', 'u' ]
    //Note you can chain as many array items as you want. Here we chained 2 items.


    You can use the spread operator to iterate an array one by one into concat
    Example:
    const arrR = [['i', 'u'], ["hi"]]];
    console.log([].concat(...arrR));
    outputs: [ 'i', 'u', 'hi',]
    // this is just like calling  [].concat(['i', 'u'],  ["hi"])
         

    // This example made me understand between when you concat a spread array or just concat the array whole 
    1. Spread the array out with the spread operator and then concat
      console.log([].concat(...[1, [2], [3, [[4]]]]) );
      output: [ 1, 2, 3, [ [ 4 ] ] ]

    2. Concat the array WITHOUT spreading it
       console.log([].concat([1, [2], [3, [[4]]]]) );
       output: [ 1, [ 2 ], [ 3, [ [4] ] ] ]
    
    
       [ 1, 2, 3, [ [ 4 ] ] ]
       [ 1, [ 2 ], [ 3, [ [4] ] ] ]
    
   When Iterating over an array with spread operator it only unpacks the item one level deep
    Example:
    const arrR = [
        ['i', 'u'],
        ["hi"],
        [ [ ['I am three levels deep']] ] ]
    ];
    console.log([].concat(...arrR));
    outputs: [ 'i', 'u', 'hi', [ ['I am three levels deep']] ]]
    Notice that spread is like doing a for loop for each item it is not going to keep going deeper into the array
    
   * You can use the spread operator to concat  ['hi'].concat(...[[1], [[2, 4]]) becomes ['hi', 1, [2, 3]] it spreads out each array items note it does not spread out passed the first level of nesting
   */
  // we chain the array items into one array
  // example, if arr is [1, [2],   [['hello']]] it becomes [1, 2,  ['hello']]
  const newArr = [].concat(...arr);
  /**
   // Check through the newly constructed(the array you spread out) array above, if any item is an array 
   // then spread out that item
   // note when we call the function again we are passing in the newly constructed array
   // not the initial array
   */
  if (newArr.some(Array.isArray)) {
    return steamrollArrayTwo(newArr);
  } else {
    return newArr;
  }
}
function steamrollArrayThreeComment(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (Array.isArray(element)) {
      /**
       How I originally thought of the array and why that solution does not work.
       The original solution I thought of:
       steamrollArray(newArr.concat(element)); 

       Why does this not work?
       this does not work  because what I returned is newArr and if you notice
       I did not modify its current value. It is still the result of the previous operation.
       for example [2, [5]] first I add 2 to the newArr (newArr is now [ 2]) then I call the function again passing in [2, 6] but I have not modified the value of newArr o it is still 

       The solutions that works
       1. newArr.push(...steamrollArrayThreeComment(element));
       2. newArr = newArr.concat(steamrollArray(element));
       3. newArr = steamrollArray(newArr.concat(element))
       
       1. Explaining solution 1: ewArr.push(...steamrollArrayThreeComment(element))
       Why do we need.
       We are calling push because what we are returning as the answer is newArr so every elment must be added to the array you are ready. If you fail the push to that operation then it would not be added to the array because we did not push it.
       example we did ...steamrollArrayThreeComment(element)
       Why did we need to spread out 

       2. 
       Explaining solution 1:
       Explaining solution 2:
       Explaining solution 3:

         */

      newArr.push(...steamrollArrayThreeComment(element));
    } else {
      newArr.push(element);
    }
  }
  return newArr;
  return newArr;
}
steamrollAIrrayOneComment(["hello", [5]]);
// steamrollArrayOneComment(["hello", "Joy", [[50]]]);
// steamrollArrayOne([1, [2], [3, [[4]]]]);
