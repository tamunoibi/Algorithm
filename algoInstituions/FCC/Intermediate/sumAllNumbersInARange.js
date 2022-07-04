function sumAll(arr) {
  const smaller = Math.min(...arr);
  const bigger = Math.max(...arr);
  let sum = 0;
  for (let i = smaller; i <= bigger; i++) {
    sum += i;
  }
  return sum;
}

sumAll([1, 4]);
