//Question: https://www.hackerrank.com/challenges/pangrams/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=60-day-campaign
// Solution: https://levelup.gitconnected.com/javascript-algorithm-pangrams-3e6add10f38f
function pangrams(s) {
  // Write your code here
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let regex = /\s/g;
  let queryString = s.toLowerCase().replace(regex, "");
  for (let index = 0; index < alphabet.length; index++) {
    const alphabetElement = alphabet[index];

    if (queryString.indexOf(alphabetElement) < 0) {
        // example: string: 'john'
        //If a letter in the alphabet is not found 
      return "not pangram";
    }
  }
 
  // If we get to this point that means we have gone through all the alphabets and we found them in the word
  return "pangram";
}

console.log(
  pangrams("We promptly judged antique ivory buckles for the next prize")
);
