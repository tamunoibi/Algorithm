//Question: https://leetcode.com/problems/longest-palindromic-substring/

var longestPalindrome = function (s) {
  let longestWord = "";

  for (let i = 0; i < s.length; i++) {
    s[0] = "a";
    for (let j = 0; j < s.length; j++) {
      if (s[i] == s[j]) {
        if (s.substring(i, j + 1) === reverseString(s.substring(i, j + 1))) {
          longestWord =
            longestWord.length >= s.substring(i, j + 1).length
              ? longestWord
              : s.substring(i, j + 1);
        }
      }
    }
  }
};
