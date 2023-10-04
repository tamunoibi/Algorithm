function solution(cards) {
  const newArr = [];
  for (let i = 0; i < cards.length; i++) {
    newArr.push(...cards[i]);
  }
  const sortArr = newArr.sort((a, b) => {
    return b - a;
  });

  const x = (a, b) => {
    let count = 0;
    for (let i = 0; i < a.length; i++) {
      if (a[i] === b) {
        count++;
      }
    }
    return count;
  };
  for (let i = 0; i < sortArr.length; i++) {
    console.log(x(sortArr, sortArr[i]) === 1, sortArr[i]);
    if (x(sortArr, sortArr[i]) === 1) {
      return newArr[i];
    }
  }
  return -1;
}

console.log(
  solution([
    [1, 2, 1, 3],
    [5, 6, 7],
  ])
);
