/**
 * Question:
 * Write a function `counntConstruct(target, wordBank)`
 * that accepts a targetString and an array of strings.
 * The function should return the number of ways  the `target` can be constructed by concatenating elements of the `wordBank` array.
 * 
 * Reference:
 *  Alvins course on recursion : https://www.youtube.com/watch?v=oBt53YbR9Kk&t=3620s
 *  leetcode: https://leetcode.com/problems/word-break/
 *
 * Examples:
 * console.log(counntConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // 1
 * Explanation: You could generate abcdef with abc + def; so there is one way to generate the word
 *
 * console.log(counntConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // 0 
 * Explanation: There is 0 ways to generate the word skateboard
 * You could not generate skateboard: here are a few attempts that fail  
 *     ska + t + ?
 *     sk + ate + boar + ?
 *     sk + ate + bo ?
 

Test Cases:
 console.log(counntConstruct("abcdef", ["ab"]));  // 1
 console.log(counntConstruct('enterapotentpot', ['a', 'p', 'ent', 't', 'enter', 'ot', 'o', 't']));  // 
 console.log(counntConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); //  0

 */

const counntConstruct = (target, wordBank) => {
  if (target === "") {
    return true;
  }
  for (const word of wordBank) {
    console.log({ word });
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      if (counntConstruct(suffix, wordBank)) {
        return true;
      }
    }
  }
  return false;
};

//  console.log(counntConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));

const canConstructComment = (target, wordBank) => {
  if (target === "") {
    return true;
  }
  for (const word of wordBank) {
    /**
     * indexOf returns the index of the first character
     * we use it here to check if a word is a prefix.
     * If it is then we can use that word
     * 'potato'.indexOf('pot')  === 0 ---> the index of the first charchter is 0
     * 'potato'.indexOf('tato')  === 2
     * 'potato'.indexOf('xato')  === -1
     *
     */
    if (target.indexOf(word) === 0) {
      /**
       *
       * 'potato'.slice('pot'.length); ---> output is 'ato'
       *  Explanation:
       * 'potato'.slice('pot'.length);  = 'potato'.slice(3);
       * that is start at index 3 and stop at the end
       *                   index   0 1 2 3 4 5
       * 'potato'.slice(3); --->   p o t a t o
       *
       */
      // give us all the letters after the prefix.
      // Example target = england. word = eng; The suffix should be land.
      const suffix = target.slice(word.length);
      if (counntConstruct(word, suffix) === true) {
        return true;
      }
    }
  }
  return false;
};
