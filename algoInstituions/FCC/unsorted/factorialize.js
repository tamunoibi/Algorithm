https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/factorialize-a-number
//Using loops
// function factorialize(num) {
//   let sum = 1;
//   for (let i = 1; i <= num; i++) {
//     sum *= i;
//   }
 
//   return sum;
// }

// factorialize(5);

//Using Recursion
function factorializeRecursive(num) {
  if(num <= 1) {
    return 1;
  }
  return num * factorializeRecursive(num - 1);
}

// factorialize(5);
console.log(factorializeRecursive(5));