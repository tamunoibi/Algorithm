i// Tutorial reference: https://www.youtube.com/watch?v=qmcIoIGLTMc&t=405s
function fearNotLetter(str) {
  const start = str.charCodeAt(0);
  const finish = str.charCodeAt(str.length - 1);
  for (let i = start; i <= finish; i++) {
    const element = String.fromCharCode(i);
    const strItem = str[i - start];
    if (strItem !== element) {
      return element;
    }
  }
}
function fearNotLetter(str) {
  // We convert the letters to ASCII code  `'str'.charCodeAt(1);` returns 115
  // Note the charCodeAt(index) takes the index of the character, not the character that we are trying to convert
  // NOT charCodeAt('s') but charCodeAt(0)

  // What is the logic of the solution?
  // For consecutive letter like abc their ASCII code is also consecutive.
  // a=97; b=98; and so on..
  // so we would check if each letters ASCII code is consecutive. If it is not we would return that

  // we get the ASCI code of the first character. if str = 'abce';  character 0 is 'a' and the ASCII code for 'a' is 97
  const start = str.charCodeAt(0);

  // we get the ASCI code of the last character.if str = 'abce';  character 3 is 'e' and the ASCII code for 'e' is 101.
  // We had to minus one from the length since index start counting at 0 while length starts counting at 1. example the 'str'.length = 3; but the last index is 2. Here we want the last index
  const finish = str.charCodeAt(str.length - 1);
  // we are looping from the start of the str to the end of the str.
  // then we would check for the missing letter
  for (let i = start; i <= finish; i++) {
    /**
     * How does the for loop operate?
       the loop starts at 97; and stops at 101;
       the value of i = 97,98,99,100, 101 respectively,  a,b,c,d,e
     */

    // The String.fromCharCode() method converts Unicode values to characters. example String.fromCharCode(97) outputs 'a'
    // the value of element= 'a';  'b'; 'c'; 'd' respectively
    const element = String.fromCharCode(i);

    /**
     * str[i - start]:
    iteration 1: str[97-97]   = str[0]  = a
    iteration 2: str[98-97]   = str[1]  = b 
    iteration 3: str[99-97]   = str[2]  = c
    iteration 4: str[100-97]  = str[3]  = e

     */

    const strItem = str[i - start];

    /**
    str[i - start]              String.fromCharCode(i)
          a                          a
          b                          b
          c                          c
          e                          d--------------> if there is no match(like in this case) return that element. that is d

          //how this is working is 
    we get the first letter of the string and compare it with the expected first letter
     */

    if (strItem !== element) {
      return element;
    }
  }
  // the first iteration element should correspond to the first item in the string
}

function fearNotLetterTwo(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let previousStartIndex = alphabet.indexOf(str[0]) - 1;

  // for a letter to be a sequence the order has to be 1, 2, 3
  // that is the difference between a letter and the previous letter should be one
  // if the difference is more than or less than one then it is NOT following the sequence
  // for example the string = ae;
  // a = 0; // because alphabet.indexOf('a') = 0;
  // e = 4; // because alphabet.indexOf('e') = 4;
  // clearly we can see that a is not followed directly by e. because the difference between the letters is 3
  for (let i = 0; i < str.split("").length; i++) {
    const startIndex = alphabet.indexOf(str[i]);
    const difference = startIndex - previousStartIndex;
    if (difference !== 1) {
      return alphabet[startIndex - 1];
    }
    previousStartIndex = startIndex;
  }
}
console.log('ans', fearNotLetter("abce"));
