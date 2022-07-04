function isValidSubsequence(array, sequence) {
  let lastIndex = -1;

  for (let i = 0; i < sequence.length; i++) {
    let currentIndex = array.indexOf(sequence[i]);
    console.log(currentIndex);

    if (lastIndex < currentIndex) {
      lastIndex = currentIndex;
    } else {
      return false;
    }
  }
  //If we get here, it means all elements have being checked and they are all placed correctly 
  return true;
}

//It fails this test: ([1, 1, 1, 1, 1], [1, 1, 1])
// console.log(
//   isValidSubsequence([1, 1, 1, 1, 1], [1, 1, 1]),
//   "return value"
// );
console.log(isValidSubsequence([1, 2, 3, 1], [1, 2, 3, 1]), "return value");
