function sum(num) {
    let sum = 0;
  for(let i = 1; i <= num; i++){
    sum += i;
  }
  return sum;
}


function sumRecursion(num) {
  if (num <=1) {
      return 1;
  }
  return num + sumRecursion(num - 1);
}
const ans = sum(9);
console.log(ans)