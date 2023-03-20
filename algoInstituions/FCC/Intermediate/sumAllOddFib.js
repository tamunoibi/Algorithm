function sumFibs(num) {
  let i = 1;
  console.log(i);
  let prevCount = 1;
  console.log(i);
  while (i <= num) {
    console.log(i, i < 10);
    i++;
  }
  console.log({me: 'ne----'});
  // return num;
}
sumFibs(4)

// sumFibs(4);
sumFibs(1000);
function sortComment(arr) {
  let stop = arr.length;
  // console.log(stop);
  const ans = [];

  while (stop >= 1) {
    console.log(stop);
    for (let i = 0; i < arr.length; i++) {
      //  return arr[i] < arr[i+1] ? arr[i] : arr[i + 1]
      // compare the first and second item and return the smaller of the two
      // arr[0] < arr[1]; arr
      if (arr[i] < arr[i + 1]) {
        ans.push(arr[i]);
      } else {
        ans.push(arr[i + 1]);
      }
      stop--;
    }
    return ans;
  }
}
// const ans = sort([6, 1, 2, 6]);
// console.log(ans);
