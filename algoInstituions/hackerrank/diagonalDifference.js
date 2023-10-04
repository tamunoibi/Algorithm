
//https://www.hackerrank.com/challenges/diagonal-difference/problem?isFullScreen=true
function diagonalDifference(arr) {
  // Write your code here
  let sumDiagnoalOne = 0;
  let sumDiagnoalTwo = 0;
  for (let i = 0; i < arr.length; i++) {
    sumDiagnoalOne += arr[i][i];
    sumDiagnoalTwo += arr[i][arr.length - 1 - i];
  }
  return Math.abs(sumDiagnoalOne - sumDiagnoalTwo);
}
/**
 * Given a 2D matrix
 * [
 *   [2, 4, 5]
 *   [2, 4, 5]
 *   [2, 4, 5]
 * ]
 * to move diagonally  from top left downwards, you need to move :
 *    arr[0][0]
 *    arr[1][1]
 *    arr[2][2]
 * 
 *  * to move diagonally  from top right downwards, you need to move :
 *    arr[0][2]
 *    arr[1][1]
 *    arr[2][0]
 */