function uniteUnique(arr) {
  const newArr = [];
  // console.log(arguments);
  // arguments: { '0': [ 1, 3, 2 ], '1': [ 5, 2, 1, 4 ], '2': [ 2, 1 ] }
  // arguments is a js reserved key. It returns all the arguments passed to a function as an object
  // the key 0 of argument is the first argument, key 1 of argument is the second argument respectively

  // console.log(Object.values(arguments));
  // [ [ 1, 3, 2 ], [ 5, 2, 1, 4 ], [ 2, 1 ] ]
  // it is an array of arrays.
  // Object.values({a: 'hi', b: 'me'}); it takes an object and returns an array containing its values. ['hi','me']
  // in this case the values are arrays so it returns an array of arrays [ [ 1, 3, 2 ], [ 5, 2, 1, 4 ], [ 2, 1 ] ]

  const arrOfArrays = Object.values(arguments); // values: [ [ 1, 3, 2 ], [ 5, 2, 1, 4 ], [ 2, 1 ] ]
  arrOfArrays.forEach((arr) => {
    //arr = [ 1, , 2 ]; arr =  [ 5, 2, 1, 4 ]; arr = [ 2, 1 ]; respectively
    for (let j = 0; j < arr.length; j++) {
      const element = arr[j];
      if (newArr.indexOf(element) === -1) {
        newArr.push(element);
      }
    }
  });
  return newArr;
}
console.log("ans", uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
