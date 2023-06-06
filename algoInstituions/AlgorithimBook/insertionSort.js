/**
 * Sorts an array in ascending order
 * @author Tamunoibi Aprekuma <tamunoibiAprekuma@gmail.com>
 * @param {array} array - The array of numbers to be sorted
 * @return {array} - The sorted array
 */
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = key;
  }
  return array;
}
console.log(insertionSort([31, 41, 59, 26, 41, 0]));

// /**
//  * Sorts an array in descending order
//  * @author Tamunoibi Aprekuma <tamunoibiAprekuma@gmail.com>
//  * @param {array} array - The array of numbers to be sorted
//  * @return {array} - The sorted array
//  */
//   function insertionSort(array) {
//     for(let i=1; array.length; i++) {
//       let key = array[i];
//       let j = i-1;

//        while(j>=0 && array[j]<key) { //This is the difference between ascending order and descending order of sort
//          array[i] = array[j];
//          j--
//        }
//       array[j+1] = key;
//      }
//      return array;
//   }
//   insertionSort([31, 41, 59, 26, 41, 58])
