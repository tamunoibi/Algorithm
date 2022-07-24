function myReplace(str, before, after) {
  // Create an array of the words. Seprate it at the space
  // example : str = 'hi Ib'; str = ['hi' 'Ib'];
  const stringCollection = str.split(" ");

  for (let i = 0; i < stringCollection.length; i++) {
    const word = stringCollection[i];
    // if we have found the word we are looking for. That is this particular word is same as the searchWord called before
    // Example
    //  str= str = ['hi' 'Ib']; before = 'Ib'; after = 'Mum';
    // when we are on inex 2 the word = Ib and befroe = Ib
    if (word === before) {
      // Check if the first letter of a word is capital and convert the word to small letter
      // The. word[0] is the first letter if it is same as the uppercase version of the first letter . word[0].toUpperCase()
      if (word[0] === word[0].toUpperCase()) {
        // we uppercase the first letter: word[0].toUpperCase()//example hell becomes: H
        //  get the remaining letter:  'hell'.slice(1)// becomes: ell
        //  concatenate it with the first letter : H + ell = Hell
        //  asign the after to be a capital version of the word: after = after[0].toUpperCase() + after.slice(1); that is after = Hell
        // h                      e             l        l
        // h.uppercase()          ----------sliced---------
        after = after[0].toUpperCase() + after.slice(1);
      } else {
        // Check if word is small Letter then convert the replacer that is after to a capital letter meanwhile the word is a small letter
        // this is to handle situations like
        //  str= str = ("hi ib", "ib", "Mum"); before = 'Ib'; after = 'Mum';
        //  if we don't add that check we would get ('hi Mum') instead of ('hi Mum')
        // after = after[0].toLowerCase() + after.slice(1);
      }
      stringCollection[i] = after;
    }
  }
  console.log(stringCollection.join(" "));
  return stringCollection.join(" ");
}

// myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
// myReplace("I think we should look up there", "up", "Down");
myReplace("hi ib", "ib", "Mum");
