function palindrome(str) {
  //Using two pointers. one at the front and one at the back
  // the approach is that we compare the very first and  the very last item if they are the same
  const regEx = /[\W_]/g;
  // remove all non alphabets
  const newStr = str.toLowerCase().replace(regEx, "");

  // when we have a string with an odd length of items. example 'racecar' has 7 items. the half of it is 3.5. We round it down to 3
  const half = Math.round(newStr.length / 2);
  for (let i = 0; i < half; i++) {
    const rightItem = newStr[i];
    const leftItem = newStr[newStr.length - (i + 1)];

    // if the left side and the right side are not the same it is not a palindrone
    if (leftItem !== rightItem) {
      return false;
    }
  }
  return true;
}

function palindromeSecond(str) {
  // the approach is that if you reverse a string and  compare that string with the reversed
  // example1:  'racecar' reversed is racecar which means it is a palindrone
  // example2: 'joy; reversed is 'yoj' which means it is not a palindrone 
  //

  // remove all non alphabets
  const regEx = /[\W_]/g;
  const newStr = str.toLowerCase().replace(regEx, "");
  // reverse the string
  const reverseStr = newStr.split("").reverse().join("");
  // compare if the reversed string is the same as the initial string
  return reverseStr === newStr;
}
const ans = palindromeSecond("racecar");
console.log({ ans });
