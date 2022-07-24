function fearNotLetter(str) {
  // We convert the letters to ASCII code  `'str'.charCodeAt(1);` returns 115
  // For consecutive letter like abc their ASCII code is also consecutive.
  // a=97; b=98; and so on..
  // Note the charCodeAt(index) takes the index of the string, not the letter that we are trying to convert
  // NOT charCodeAt('s') but charCodeAt(0)

  const start = str.charCodeAt(0);
  const finish = str.charCodeAt(str.length - 1);
  // if str = 'abce'; 'abce'.charCodeAt = 97,98,99,101 respectively
  for (let i = start; i <= finish; i++) {
    //start = 97

    // i = 97,98,99,100, 101 respectively, that is a,b,c,d,e
    const element = String.fromCharCode(i);
    const strItem = str[i - start];

    /**
    // str[97-97=0]=a str[98-97=1]=b str[99-97=2]=c str[100-97=3]=d str[98-97=4]=undefined(the string only stops at index 3
console.log(str[i - start], element);
str[i - start]              String.fromCharCode(i)
            a               a
            b               b
            c               c
            e               d
            undefined       e
     */
    console.log(strItem, element, strItem !== element);

    if (strItem !== element) {
      return element;
    }
  }
  // the first iteration element should correspond to the first item in the string
}
console.log('ans', fearNotLetter("abce"));
