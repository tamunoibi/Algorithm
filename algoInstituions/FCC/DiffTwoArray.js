function diffArray(arr1, arr2) {
  const newArr = [];
  const addToArray = (seekerArray, dbArray) => {
    seekerArray.forEach((item) => {
      if (dbArray.indexOf(item) < 0) {
        newArr.push(item);
      }
    });
  };

  addToArray(arr1, arr2);
    addToArray(arr2, arr1);
  console.log({ newArr });

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
