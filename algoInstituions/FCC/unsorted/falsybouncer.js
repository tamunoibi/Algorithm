function bouncer(arr) {
  const newArr = [];
  for (const item of arr) {
    if (item) {
      newArr.push(item);
    }
  }
  return newArr;
}

bouncer([7, "ate", "", false, 9]);
