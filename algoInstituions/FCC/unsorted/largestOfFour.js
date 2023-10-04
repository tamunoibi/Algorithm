function largestOfFour(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    let longest = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > longest) {
        longest = arr[i][j];
      }
    }
    result.push(longest);
  }

  return result;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);
/**
 * SOLUTION 2
 */
function largestOfFour(arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
 //   The spread operator "..." will make the elements
  // of arr[i] be the arguments of Math.max().
  // We are pushing each highest number to our answer array.
    answer.push(Math.max(...arr[i]));
  }
  return answer;
}