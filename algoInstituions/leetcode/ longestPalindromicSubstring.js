//Question: https://leetcode.com/problems/longest-palindromic-substring/

/**
 * The prerequisites: 
 * 1. Palindrome
 * 2. substrings
 * 5.
 */
function longestPalindrome (s) {
  /**
   * 
   *the approach is for each sequence we check if it is a palindrome. if it is
   If it is a palindrome we update the maxSubsequence to the that sequence length if it is bigger than the current existing maximum length    str 
   * 
   */
  // This is to check if a string is a palindrome.
  function isPalindrome(str) {
    const newString = str.split("").reverse("").join("");
    return newString === str;
  }
  // We set the maximum su
  let maxSubsequence = s[0];
  for (let index = 0; index < s.length; index++) {
    for (let j = index; j < s.length; j++) {
      // Use slice to give me a part of the array
      // How did I know what to pass to slice.
      // I was just guessing and trying. I knew what I wanted to see
      // push that part of the array to the subarray
      const sequence = s.slice(index, j + 1);

      if (isPalindrome(sequence) && sequence.length > maxSubsequence.length) {
        maxSubsequence = sequence;
      }
    }
  }
  return maxSubsequence;
};

var longestPalindrome = function (s) {
  // This returns true if the string is a palindrome. and false otherwise
  function isPalindrome(string) {
    const newString = string.split("").reverse("").join("");
    return newString === string;
  }
  let maxSubsequence = 0;
  for (let index = 0; index < s.length; index++) {
    for (let j = index; j < s.length; j++) {
      // Use slice to give me a part of the array
      // How did I know what to pass to slice.
      // I was just guessing and trying. I knew what I wanted to see
      // push that part of the array to the subarray
      const sequence = s.slice(index, j + 1);
      // for each sequence we check if it is a palindrome.
      //  If it is a palindrome we update the maxSubsequence to the that sequence length if it is bigger than the current existing maximum length
      if (isPalindrome(sequence)) {
        maxSubsequence = Math.max(sequence.length, maxSubsequence);
      }
    }
  }
  return maxSubsequence;
};
