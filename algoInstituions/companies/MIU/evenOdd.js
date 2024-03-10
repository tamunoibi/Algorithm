/**
 * Write a function that takes an array of integers as an argument and returns a value based 
 * on the sums of the even and odd numbers in the array. Let X = the sum of the odd numbers in the array and let Y = the sum of the even numbers. 
 * The function should return X - Y
 * Examples;
 * sumEven([1, 2]); // -1
 * sumEven([1, 2, 3]);  // 2
 * sumEven([1, 2, 3, 4]);  // -2
 * sumEven([1, 2, 3]);// -2
 * sumEven([3, 3, 4, 4]); // -2
 * sumEven([3, 2, 3, 4]); // 0
 * sumEven([4, 1, 2, 3]); // -2
 * sumEven(1, 1); // 2
 * sumEven([]); // 0
 * 
 * const ans = sumEven([3, 3, 4, 4]);
 * console.log(ans) 
 */
function sumEven(arr) {
    let oddSum = 0;
    let evenSum = 0;
    for (let i = 0; i < arr.length; i++) {
        const curr = arr[i];
       if (curr % 2) {
        oddSum += curr;
       } else {
        evenSum += curr;
       }
    }
    return oddSum - evenSum;
}
