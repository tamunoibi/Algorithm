function sym(arrOne, arrTwo) {
  const ans = [];
  const lookupOne = {};
  const lookupTwo = {};

  const createHarsh = (arr, lookup) => {
    arr.forEach((item) => {
      if (!lookup[item]) {
        lookup[item] = true;
      }
    });
  };
  
  const isFound = (arr, lookup) => {
    arr.forEach((item) => {
     if (!lookup[item]) {
        ans.push(item);
      }
    })

  };
  createHarsh(arrOne, lookupOne);
  createHarsh(arrTwo, lookupTwo);
  isFound(arrOne, lookupOne);
  isFound(arrTwo, lookupTwo);

  console.log(ans);
  return ans;
}

sym([1, 2, 3], [5, 2, 1, 4]);
