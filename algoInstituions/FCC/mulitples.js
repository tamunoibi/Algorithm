function multiples(num, stop) {
  const arr = [];
  for (let i = num; i <= stop; i += num) {
    arr.push(i);
  }
  return arr;
}
multiples(3, 12);
