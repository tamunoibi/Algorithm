/**
 * A Magicaldrome String is a string of characters that reads the same forward and backward when characters are read in groups of two and the groups of two are always read from left to right.
 * For example, "abcdcdab" is a Magicaldrome String because the first two characters are the same as the last two characters in the string, namely "ab"; and the 3rd and 4th characters from the left are the same as the 4th and 3rd characters from the right, namely "cd".
 * Our task is to take an inputString consisting of lowercase letters and determine whether the string can be rearranged into a Magicaldrome String or not. Ifit can be rearranged into a Magicaldrome String return, "Yes"; if it cannot, return "No".
 * Example
 * Input: abbhbhab
 * Output: Yes 
 */
const isMagicaldrome = (inputString) => {
    // If the number is not divisible by 2. It can not be a magicaldrome
  if (inputString.length % 2 !== 0) {
    return "no";
  } else {
    let chStr = inputString;
    while (chStr.length > 0) {
      /**
       * 
       * 'abcdefg'.slice(0, 2)
       * outtput 'ab'
       * 
       * 'abcdefg'.slice(-2)
       * outtput 'fg'
       * 
       * If the first two characters 
       */
      if (chStr.slice(0, 2) !== chStr.slice(-2)) {
        return "no";
      }
      /** 
       * console.log('abcdefg'.slice(2, -2));
       * output: cde
       * 
       * We slice out the first part of the string and the last part of the string.
       * We update the sliced out version of the string
       * Remember slice does not change the string.
       */
      chStr = chStr.slice(2, -2);
    }
    return "yes";
  }
}