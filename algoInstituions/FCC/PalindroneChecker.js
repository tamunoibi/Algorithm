// Sample input: 'racecar' 
//       output: true
function palindromeTwoPointer(str) {
  const regEx = /[\W_]/g;
  // const regEx = /[^a-zA-Z0-9]/g;
  const newStr = str.toLowerCase().replace(regEx, "");

  const half = Math.round(newStr.length / 2);
  for (let i = 0; i < half; i++) {
    const rightItem = newStr[i];
    const leftItem = newStr[newStr.length - (i + 1)];

    if (leftItem !== rightItem) {
      return false;
    }
  }
  return true;
}
function palindromeReverse(str) {
  const regEx = /[\W_]/g;
  // const regEx = /[^a-zA-Z0-9]/g;
  const newStr = str.toLowerCase().replace(regEx, "");
  const reverseStr = newStr.split("").reverse().join("");
  return reverseStr === newStr;
}
function palindromeTwoPointerComment(str) {
  //Using two pointers. one at the front and one at the back
  // the approach is that we compare the very first and  the very last item if they are the same.
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

function palindromeReverseComment(str) {
  // the approach is that if you reverse a string and  compare that string with the reversed
  // example1:  'racecar' reversed is racecar which means it is a palindrone
  // example2: 'joy; reversed is 'yoj' which means it is not a palindrone
  //

  // remove all non alphabets
  const regEx = /[\W_]/g;

  // Find all characters that are NOT a-z nor A-z nor numbers and replace with an empty stirng
  // const regEx = /[^a-zA-Z0-9]/g;

  const newStr = str.toLowerCase().replace(regEx, "");
  // reverse the string
  const reverseStr = newStr.split("").reverse().join("");
  // compare if the reversed string is the same as the initial string
  return reverseStr === newStr;
}

/** Black algorithim class
 public boolean isPalindrome(String s) {
        String newS = s.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();
        var sb = new StringBuilder(newS); 
        return newS.equals(sb.reverse().toString());
    }



 public boolean isPalindrome(String s) {
        int left = 0, right = s.length() - 1;
        
        while (left < right) {
            while (left < right && !Character.isLetterOrDigit(s.charAt(left))) {
                ++left;
            }
            
            while (left < right && !Character.isLetterOrDigit(s.charAt(right))) {
                --right;
            }
            
            if (Character.toLowerCase(s.charAt(left)) != Character.toLowerCase(s.charAt(right))) {
                return false;    
            }
                   
            left += 1;
            right -= 1;
        }
        
        return true; 
    }
 */
