/**
 * Sorts an array in ascending order
 * @author Tamunoibi Aprekuma <tamunoibiAprekuma@gmail.com>
 * @param {array} array - The array of numbers to be sorted 
 * @return {array} - The sorted array
 */
function insertionSort(array) {
  let outerLoop = 0;
  let sum = 0;
    for(let i=1; i < array.length; i++) {
      let key = array[i];
      let j = i-1;
      
       while(j>=0 && array[j]>key) {
         array[j + 1] = array[j];
         j--;
         sum += i;
       }
      array[j+1] = key;
      outerLoop++
     }
     console.log(sum)
    //  console.log({outerLoop, innerLoop, totalTimes: outerLoop + innerLoop})
     return array;
  }
  insertionSort([31, 41, 59, 26, 41]);
 



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