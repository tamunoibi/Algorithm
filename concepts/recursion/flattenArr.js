function arrayNestedLevel(arr) {
  const sum = arr.reduce((acc, next) => {
    // console.log({acc, arr, next, isArr: Array.isArray(next)})
    // if (Array.isArray(next)) {
    // } else {
      console.log({ acc });
      return acc += 1;
    // }
  }, 0);
  console.log(sum);
  return sum;
}
const ans = arrayNestedLevel(["hello"]);
console.log({ ans });
