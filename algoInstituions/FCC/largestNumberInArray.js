function largestOfFour(arr) {
  const ans = [];

  for (let i = 0; i < arr.length; i++) {
    let maxValue = arr[i][0];
    arr[i].forEach((item) => {
      if (item > maxValue) {
        maxValue = item;
      }
    });
    ans.push(maxValue);
  }
    console.log({ ans });

  return ans;
}

largestOfFour([
  [17, 23, 25, 12],
  [25, 7, 34, 48],
  [4, -10, 18, 21],
  [-72, -3, -17, -10],
]);
