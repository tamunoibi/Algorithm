function translatePigLatin(str) {
  let vowels = "aeiou".split("");
  for (let i = 0; i < str.length; i++) {
    let individualLetter = str[i];
    console.log(individualLetter);
    // If the first letter is a vowel and we add 'way' to the end. eg: eight: becomes eightway
    if (i == 0 && vowels.indexOf(individualLetter) != -1) {
      return str + "way";
    }
    // Go through the string to the point that is a vowel
    // Example: california, It runs the firs time
    // index 0: 'c' // -> does not run
    // index 1: 'a' // Is a vowel
    // str.slice(i) that is str.slice(1) cut out all remaining letters. alifornia
    // str.slice(0, i) that is str.slice(0, 1) that is 'c' then
    // +
    //
    if (vowels.indexOf(individualLetter) != -1) {
      return str.slice(i) + str.slice(0, i) + "ay";
    }
  }
  // This is for words that do not have any vowels. exmaple: rhythm
  return str + "ay";
}

// const ans = translatePigLatin("algorithm");
const ans = translatePigLatin("california");

console.log({ ans });
