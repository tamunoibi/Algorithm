function uniteUnique(arr) {
  const newArr = [];
  arr.forEach((element) => {
    console.log({ element });
    if (!newArr.includes(element)) {
      newArr.push(element);
    }
  });
  return newArr;
}

console.log("ans", uniteUnique([1, 3, 2, 2]));
// console.log("ans", uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
