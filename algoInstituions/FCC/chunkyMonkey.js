/**
 * Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);
//outputs [ [ 0, 1 ], [ 2, 3 ], [ 4, 5 ] ]
 */

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
    /**
     * slice
     * a. modifies the old array
     * b. returns An array containing the removed items (if any).
     *
     * example
     * const fruit = ['garden egg', 'banana', 'orange'];
     * const removed = fruit.splice(2, 1);
     * console.log(removed); // [ 'orange' ]
     * console.log(fruit); // [ 'garden egg', 'banana' ]
     *
     *
     *  newArr.push(arr.splice(0, size));
     * we keep runninng the array cutting out a part and adding to the new array
     * Example
     * arr = ['a', 'b' 'c', 'd', 'e', 'f', 'g', 'h', 'i' 'j', 'k', 'l', 'm', 'n' ]
     * size = 4
     *
     * iteration 1:
     *   _______________
     * ['a', 'b' 'c', 'd', 'e', 'f', 'g', 'h', 'i' 'j', 'k', 'l', 'm', 'n' ]
     *   ^start       ^stop
     *   |            |
     *   |            |
     *
     *
     * iteration 2:
     *  __________________
     * [''e', 'f', 'g', 'h', 'i' 'j', 'k', 'l', 'm', 'n' ]
     *   ^start          ^stop
     *   |               |
     *   |               |
     * iteration 3:
     *  ________________
     * ['i' 'j', 'k', 'l', 'm', 'n' ]
     *   ^start       ^stop
     *   |            |
     *   |            |
     * iteration 2:
     * _______
     * ['m', 'n' ]
     *   ^start^stop
     *   |     |notice that the number of items is 4 and that is more than the available items.
     *   |     | but that does not break the code. the available items is just returned.
     */
    newArr.push(arr.splice(0, size));
  }
  const ans = newArr;
  console.log(ans);
  return ans;
}

function chunkArrayInGroups2(arr, size) {
  const newArr = [];
  let start = 0;
  const times = arr.length / size;

  for (let i = 0; i < times; i++) {
    const val = arr.slice(start, start + size);
    newArr.push(val);
    start += size;
  }
  return newArr;
}

function chunkArrayInGroups2Comment(arr, size) {
  const newArr = [];
  // we start at the first item.
  // we would use the start variable to say where to start cutting the array from.
  // we start at the very first item then we cut it up to the
  let start = 0;
  /**
 * 
 * 
 * NOTE: always watch out when doing divisions for fractions. the re
 * Times can become a fraction
  example arr = ['a', 'b' 'c', ]; size = 2
 * times would be 1.5.  so the loop is to stop at 1.5 times 
 * 
   we get the number of times we need to run the loop for
  This means we have 3 items and we need to divide them into groups of 2.
  there would be one with two items and one with just one item
  ['a', 'b']   ['c']
 * 
 * 
 * 
 */
  const times = arr.length / size;

  for (let i = 0; i < times; i++) {
    // slice does not modify the array.
    // Just cut from the first item up to the size
    /**
     * Example
     * arr = ['a', 'b' 'c', 'd', 'e', 'f', 'g', 'h', 'i' 'j', 'k', 'l', 'm', 'n' ]
     * size = 4
     *
     *   _______________    ________________
     * ['a', 'b' 'c', 'd', 'e', 'f', 'g', 'h', 'i' 'j', 'k', 'l', 'm', 'n' ]
     *   ^start       ^stop
     *   |            |
     *   |            |
     *   |
     */
    const val = arr.slice(start, start + size);
    newArr.push(val);
    // we start at the first item.
    // we start at the very first item then we cut it up to size. with slice
    // that means the next start would begin at the next item
    /**
     * Example
     * arr = ['a', 'b' 'c', 'd', 'e', 'f', 'g', 'h', 'i' 'j', 'k', 'l', 'm', 'n' ]
     * size = 4
     *
     *
     *
     * |
     * |
     *   _______________    ________________                      _______________
     * ['a', 'b' 'c', 'd', 'e', 'f', 'g', 'h',                   'i' 'j', 'k', 'l',                  'm', 'n' ]
     *   ^start = index 0   ^start = index 4                      ^ start = index 8                   ^start = index 12
     *   | 0                | oldStart +  sizeyoutookoff          |oldStart +  sizeyoutookoff         |oldStart +  sizeyoutookoff
     *   |                  |    0     +       4                  | 4     +       4                   |8     +       4
     *   |                  |                                     |
     */
    start += size;
  }
  return newArr;
}

function chunkArrayInGroups3Comment(arr, size) {
  if (arr.length < size) {
    return arr;
  }
  /**
   concat() joins two arrays together.  
   .concat() joins two array into one.
   array1 = [['a', 'b'], [2, 'e']];
   array2 = [['f', 'g']];
   console.log(array1.concat(array2)); 
   output: [[ 'a', 'b' ], [ 2, 'e' ], [ 'f', 'g' ]]
 */
  return [arr.slice(0, size)].concat(chunkArrayInGroups(arr.slice(size), size));
}
