// Larger numbers bubble to the top  one by one
//Time complexity O(n^2)
//Helpful video: https://www.youtube.com/watch?v=8-Yy1JWScsU
function bubbleSort(array) {
  const swap = (arr, left, right) =>
    ([arr[left], arr[right]] = [arr[right], arr[left]]);
    
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }
  return array;
}
function bubbleSortComment(array) {
  const swap = (arr, left, right) => {
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
  };
  //Same as swap above but using array destructuring and implicit return
  const swapEs6 = (arr, left, right) => (
    arr[left], (arr[right] = arr[right]), arr[left]
  );
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      // with j < array.length the inner loop goes to the last array item or you can stop it
      // at the already sorted point. explain that array.length i - 1
      // if we are on index 2 it means we want the inner loop not to run the last two items because we they are sorted
      //  example: [9, 2, 3]
      // the stop condition is j < array.length - 1 -  i
      // we are stopping at one  item before the end of the array(that is i minus  1) because we would compare the j to the item after j. if we continued up to the last item what item would we use to compare j with? the last index is arr[2] which is 3. if we continued up till arr[2] we would compare arr[2]  with arr[2+1] which is arr[3] and is undefined. we would also remove out the sorted part
      // the outer loop would run 3 times. i would be 0, 1 and 2 respectively
      // on the first iteration the inner loop would stop when j is less than 2. because array.length = 3; and 3 minus 1 equal 2; and 2 minus i (i  is 0) is still 2
      // on the second iteration the inner loop would stop when j is less than 1. because array.length = 3; and 3 minus 1 equal 2; and 2 minus i (i  is 1) is equal 1
      // on the third iteration the inner loop would stop when j is less than 0. because array.length = 3; and 3 minus 1 equal 2; and 2 minus i (i  is 1) is equal 1.  this would not run  at all since  j = 0;  so the condition 0 < 0 does not run s

      // explaining the need for removing the  sorted part
      // mentally think of the array as  having a sorted and unsorted part. hence
      // the sorted part is at the right side of the array while  the  unsorted part is at the left side.
      // we  loop not to the end of the array but to the end  of the unsorted part. array.length - 1 -  i
      // iteration 1:  [9, 2, 3]
      // iteration 2:  [2, 3          | 9]
      // iteration 3:  [2,            | 3, 9]

      // we compare the left number to the right number.
      //  example: [9, 2, 3]
      // we compare 9 vs. 2 is 9 greater than 2? yes. we swap it [2, 9, 3].
      // we compare 9 Vs.3 is 9 greater than 3? yes. we swap it [2, 3, 9]so the biggest item is now at the very end of  the array
      // that is why it is called bubble sort the big items bubble to the end
      // this is a cute video of bubbles https://www.youtube.com/shorts/_Ptnlp9QKgw
      if (arr[j] > arr[j + 1]) {
        // swap
        const temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        //swap can be done by calling a function
        // swap(arr, j, j + 1);
      }
    }
  }
}
bubbleSort([99, 2]);
