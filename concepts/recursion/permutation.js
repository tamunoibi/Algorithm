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
     [ 
     [ 1, 2, 3 ],
     [ 1, 3, 2 ],
     [ 2, 1, 3 ],
     [ 2, 3, 1 ],
     [ 3, 1, 2 ],
     [ 3, 2, 1 ] 
    ]

    The number of permutations possible is n factorial
    Like i this example [1, 2, 3] n is 3. The possible permutations is 3 * 2 * 1
     
     n! = 3 * 2 * 1 = 6

     If n is 5
     5 * 4      * 3       * 2 = 150
     5 * 4 = 20
             20 * 3 = 60
                       20 * 2 = 180

     Factorial Formula is: Please crosscheck what you wrote below it is correct
     n! = (n - 1!) * (n) .... * 1

     */
}
getPermutation([1, 2, 3], []);
