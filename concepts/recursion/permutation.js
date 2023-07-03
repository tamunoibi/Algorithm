function getPermutation(arr) {
  let foundPermutation = [];
  function perms(subArr, currentPerm) {
    if (subArr.length == 0) {
      foundPermutation.push(currentPerm);
    }
    for (let i = 0; i < subArr.length; i++) {
      const newSubArr = subArr.slice(0, i).concat(subArr.slice(i + 1));
      const newCurrentPerm = currentPerm.concat(subArr[i]);
      perms(newSubArr, newCurrentPerm);
    }
  }
  perms(arr, []);
  /**
     Output:
     [ [ 1, 2, 3 ],
     [ 1, 3, 2 ],
     [ 2, 1, 3 ],
     [ 2, 3, 1 ],
     [ 3, 1, 2 ],
     [ 3, 2, 1 ] ]
     */
}
getPermutation([1, 2, 3], []);
