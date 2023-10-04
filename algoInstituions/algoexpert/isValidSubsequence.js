// Sample input: isValidSubsequence([1, 2, 3, 4], [1, 3, 4]);
/***
 * Question: https://www.algoexpert.io/questions/validate-subsequence
 * Given two non-empty arrays of integers
 *  write a function that determines whether the second array is a subsequence of the first one.
 *
 * Explanation
 *  a subsequence of a given sequence is a sequence that can be derived from the given sequence by deleting some or no elements without changing the order of the remaining elements.
 *  For example, the sequence (A, B, D) is a subsequence of (A, B, C, D, E, F) obtained by the removal of C, E and F.
 */
function isValidSubsequenceA(array, sequence) {
  let pointer = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === sequence[pointer]) {
      pointer++;
    }
  }
  return pointer === sequence.length;
}
function isValidSubsequenceB(array, sequence) {
  let arrIdx = 0;
  let seqIdx = 0;
  while (arrIdx < array.length && seqIdx < sequence.length) {
    if (array[arrIdx] === sequence[seqIdx]) seqIdx++;
    arrIdx++;
  }
  return seqIdx === sequence.length;
}
function isValidSubsequenceC(array, sequence) {
  let seqIdx = 0;
  for (const value of array) {
    if (seqIdx === sequence.length) break;
    if (sequence[seqIdx] === value) seqIdx++;
  }
  return seqIdx === sequence.length;
}
function isValidSubsequenceD(array, sequence) {
  // This solution is not efficient because it has quadratic time complexity (timeO(n^2))
  let lastIndex = -1;
  for (let i = 0; i < sequence.length; i++) {
    let currentIndex = array.indexOf(sequence[i]);
    if (lastIndex < currentIndex) {
      lastIndex = currentIndex;
    } else {
      return false;
    }
  }
  return true;
}
function isValidSubsequenceA(array, sequence) {
  // Solution: https://www.youtube.com/watch?v=zyopxDvtq3o&t=484s
  /**
   * You start the search at the first item of the sequence. That is index 0.
   * You go through the array and searching for that item. if the iem is found you move the pointer of the sequence to the next item'
   * at the end of the loop if the length of the pointer is the same with the sequence it means all items were checked,
   */
  let pointer = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === sequence[pointer]) {
      pointer++;
    }
  }
  return pointer === sequence.length;
}
function isValidSubsequenceBExplanation(array, sequence) {
  /**
   * array = ['rag', 'toy', 'leg', 'pig', 'girl'];
   * subsequence = ['leg', 'pig']
   *
   * We take the first item we are looking for 'leg' (index 0)
   * We loop through the array. For each item, if the item matches what we are looking for.
   * we change our search to the next item by incrementing the pointer. if it does not match we continue our search.
   * We stop the search if we are at the end of the array or we are at the end of the sequence.
   * we start searching for leg,
   *  we search: rag
   *  we search: toy
   *  we search: leg---------->found
   * we start searching for pig:
   *  we search: pig -----------> found
   * ----->we stop here because the subsequence is finished. that is why there is the need for seqIdx < sequence.length. Else we would have kept going till d end of the array even though it is not possible to fin a match again. the search would be unndefined as we would be searching a non existent index. subsequence[2]
   *
   *
   */
  // arrIdx is used by the while loop  to loop through the array.
  let arrIdx = 0;
  // this is the sequence we are searching for. We start our search at (the first item) index 0. When we find that item we move to the next item (index 1)
  let seqIdx = 0;

  // We have two stop conditions for our while loop. We stop if we are at the end of the array or we are at the end of the sequence array
  while (arrIdx < array.length && seqIdx < sequence.length) {
    // if we find a match between the current array item and the sequence item. move the sequence p
    if (array[arrIdx] === sequence[seqIdx]) seqIdx++;
    arrIdx++;
  }
  return seqIdx === sequence.length;
}
function isValidSubsequenceCExplanation(array, sequence) {
  let seqIdx = 0;
  // We start the sequence pointer at 0. that is the first item in the array.
  // any time we find a match we move to the next item in the sequence array.
  // a match means the sequence item and the array item are identical
  for (const value of array) {
    //if we are at the end of the sequence array stop the loop.
    if (seqIdx === sequence.length) {
      break;
    }
    // seqIdx === sequence.length: this means we are at the end of the sequence array. so we should stop
    // so we want to breakout of the loop entirely

    if (sequence[seqIdx] === value) {
      seqIdx++;
    }
    //If we found a match.  The item in the sequence array and the array match. We move the sequence pointer forward
  }
  //Ques: of what relevance is this line
  // seqIdx === sequence.length: this line attempts the very last item that was found(seqxID) was it the very last item in the sequence?
  // the relevance of this condition is if the very last item in the sequence matches the arrayLength. that means all the items are a match.
  // remember for everyItem found, we added one to the seqIdx. so if the array has 10 items and the seqIdx is 10 that means all items have being found.
  return seqIdx === sequence.length;
}
function isValidSubsequenceDExplanation(array, sequence) {
  // This solution is not efficient because it has quadratic time complexity (timeO(n^2))
  /**
 It fails this test: ([1, 1, 1, 1, 1], [1, 1, 1])
console.log(
  isValidSubsequence([1, 1, 1, 1, 1], [1, 1, 1]),
  "return value"
);
*/
  let lastIndex = -1;

  for (let i = 0; i < sequence.length; i++) {
    let currentIndex = array.indexOf(sequence[i]);
    if (lastIndex < currentIndex) {
      lastIndex = currentIndex;
    } else {
      return false;
    }
  }
  //If we get here, it means all elements have being checked and they are all placed correctly
  return true;
}

