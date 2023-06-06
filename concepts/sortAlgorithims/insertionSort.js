//swap is used to perform swapping operations
function swap(arr) {
    const temp = arr[1];
    arr[1] = arr[0];
    arr[0] = temp;
}
 function insertionSortB(array) {
   for (let i = 1; i < array.length; i++) {
     const temp = array[i];
     let j = i - 1;
     while (j >= 0 && array[j] > array[j + 1]) {
       array[j + 1] = array[j];
       array[j] = temp;
       j--;
     }
   }
   return array;
 }
 function insertionSortBComment(array) {
   for (let i = 1; i < array.length; i++) {
     const temp = array[i];
     let j = i - 1;
     // array[j] > array[j + 1]): 
     // I am comparing if the first item is greater than the seoncond. if yes: overwrite the second with the first. then replac the first with temp ['first', 'second']. if it is makë the firsst to position of the seoncond and bring
     while (j >= 0 && array[j] > array[j + 1]) {
       array[j + 1] = array[j];
       array[j] = temp;
       j--;
     }
   }
   return array;
 }

 insertionSort([4, 2, 1, 0, 3]);
function insertionSortAComment(arr) {
  /**Important Concepts to understand insertion Sort
   * 1. understand how swap works with computers, and Why we need to save a temp variable
   * 2. Understand how to loop from the second item to the last item. Extend to loop from the third item to second to the last item
   * 3. Understand how why the last swap is necessary
   * 4. Understand why in the last lin we still had to do 1arr[j + 1] = arr[j];` why are we adding j +1
   * 5. Understand the time complexity of the algo
   * 6. Common mistakes I make and why they are wrong
   * 7. How to switch the items to sort in descending order
   * 8. The while loop. Why we need to need multiple stop conditions, why we need a variable to decrement
   */
  for (let i = 1; i < arr.length; i++) {
    // We need to save the value of arr[i]
    // because we might overwrite it. So that we can have a backup copy
    let j = i - 1;
    const key = arr[i];
    // the while stops if
    //    we are after the last index. Note I added >= 0 because we want to stop at index 0. If we used just >0 we would stop at index 1.
    //    or: the key we are on is bigger than the preceding key,  (this is the right order the key we are on should be bigger than the preceding order so there is no need to swap it out)
    while (j >= 0 && key < arr[j]) {
      // it makes sense to check if we are on the last index(j >= 0) before checking
      // if the items are arranged in descending order, else you would attempt to access key < arr[-1].
      // arr[-1] is undefined. Though it would work it is just neater to not even allow the code get to that point
      /**AN  ERROR TO LOOK OUT FOR
       * the proper thing is:   key < arr[j]
       *  For example given the array: [3, 8, 2, 1<index 3>]
       *   by the time we are on index 3 the array would be look like this [2, 3, 8, 1]
       *     inside the while loop  we are comparing:
       *        1 V. 8
       *        1 V. 3
       *        1 V. 2
       * I always mix up this check and , I do: arr[j + 1] < arr[j]
       *
       *  this is wrong because the comparison is not between the index we are and the  subsequent item before it.
       *  but rather between the index we are inz(that is the saved item) and each  item that came before it
       *  For example given the array: [3, 8, 2, 1]
       *   by the time we are on index 3 the array would be [2, 3, 8, 1]
       *    when on the for loop is dealing with the letter 1, inside the while loop it means I am comparing
       *        1 V. 8
       *        8 V. 3
       *        3 V. 2
       *
       */
      arr[j + 1] = arr[j];
      //HERE is where is USUALLY get confused.
      /**
       * I am replacing the value where key is with the preceding key.
       * [20, 6<KEY>] becomes [20, 20]
       * arr[j + 1] = arr[j]
       *
       * What I usually do in error is: arr[j] = arr[j + 1]
       * [20, 6<KEY, note I have the key 6 stored as a temp value>]-------> becomes [6, 6]
       * arr[j] = key
       * This is wrong because I have lost the value arr[j] that is20.
       * Since I did not store it anywhere.
       * It is the one that I stored I should overwrite its value. In this case it is 6"
       *  [20, 6<KEY>]: arr[j + 1] = arr[j]
       *
       */
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}
console.log({solution: insertionSortAComment([20, 6, 70, 19, 2])});
