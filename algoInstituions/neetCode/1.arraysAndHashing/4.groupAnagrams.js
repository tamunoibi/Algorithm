/** groupAnagramA---------------------------------------------------------------------*/
function groupAnagramsA(params) {
  const cache = {};
  for (const str of strs) {
    let sortedKey = str.split("").sort().join("");
    cache[sortedKey] ? cache[sortedKey].push(str) : (cache[sortedKey] = [str]);
  }
  return Object.values(cache);
}
// groupAnagramAComment------------------------
function groupAnagramsAComment(params) {
  const cache = {};
  const primes = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97, 101,
  ];

  for (const str of strs) {
    /**Unique Key
     *  the idea here is for each word we character like 'abc' convert a unique key. by converting each charater to a number and multiply the numbers
     *  i) convert it to a number. example we have the word 'ab'; You covert each character 'a'.charCodeAt() = 97;  'b'.charCodeAt() = 98
     *  ii) multiply the numbers. ab = 97*98 =9409
     *
     *
     * Further Explanation
     *  How can we get this number?
     *  If we leverage multiplication and multiply the character( example a we convert it to ascii it is 97and multiply )
     *   abc'
     *    a= 97
     *    b=98
     *    c=99
     *    abc = 97*98*99 =9410945
     *
     *
     * HOW TO MAKE THE NUMBERS UNIQUE
     *  Problem: How can we make the Key Unique
     *  1. Different words may produce the same number
     *         example: 8 * 10 = 80; also does 2 * 2 * 20;
     *         a 2 * 2 * 20 there are three characters while 2*2 had two characters but they all produce the same key
     * SOLUTION: Prime numbers
     * Instead of using the ASCII numbers, why don't we use prime numbers. One of the key features of prime numbers is THERE IS NO TWO NUMBERS THAT CAN FORM THAT NUMBER. so it is unique.
     * N/B if you multiply two prime numbers together you get prime number.
     *
     *
     * HOW DO WE CONVERT EACH CHARACTER TO PRIME NUMBER
     * i) we create an array of prime numbers
     * [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101] = these are 26 prime numbers
     *
     * ii) We map each letter to a the prime numbers. so a becomes the item at index 0; b becomes the item index 2;
     *
     * If I convert it to ASCI. the first letter a is 97. If I subtract all letters by 97 I would get 0, 1, 2...25 respectively
     *   a = 97; 97 - 97 = 0
     *   b = 98; 98 - 97 = 1
     *   c = 99; 99 - 97 = 2
     *
     *
     * SUMMARY:
     * There was a unique pattern I am seeing for the first. Of converting words to a unique key
     *  time of using prime numbers to generate unique keys
     *
     */
    let key = strs
      .split("")
      .reduce((total, char) => total * primes[char.charCodeAt()] - 97, 1);
    // example the 'ab'
    // letter a
    // total = 1  (this is how it was initialized)
    // primes[0] = 2
    // total * primes[0] = 2 * 1 =
    // total = 1;

    //next b
    // total = 12 (this is from the previous calculation)
    // primes[1] = 3
    // total * primes[1] = 3 * 2 = 6
    // total = 6;
    /**QUESTION: I thought from the solution the man gave if you multiply two primes you would get another prime which is
     * is why we are multiplying by primes. But this my multiplicatin of (ab) i got 6(2 *3 = 6)
     * which is not a prime as it is divisible by 3 also. So How am I sure that this his suggestion is correct. Or did I misunderstand what he said?
     */

    cache[key] ? cache[key].push(str) : (cache[key] = [str]);
  }
  return Object.values(cache);
}
/** ---------------------------------------------------------------------*/

/** groupAnagramsB---------------------------------------------------------------------*/
function groupAnagramsB(params) {
  const cache = {};
  for (const str of strs) {
    const sortedKey = strs.split("").sort().join("");
    cache[sortedKey] ? cache[sortedKey].push(str) : (cache[sortedKey] = [str]);
  }
  console.log({ ans: Object.values(cache) });
  return Object.values(cache);
}

// groupAnagramBComment------------------------
function groupAnagramBComment(strs) {
  const cache = {};
  for (const str of strs) {
    // sort each item
    let sortedKey = str.split("").sort().join("");
    // if that key exits pus this value. if it does not create it
    !cache[sortedKey] ? (cache[sortedKey] = [str]) : cache[sortedKey].push(str);
  }
  return Object.values(cache);
}
groupAnagramBComment();
/** ---------------------------------------------------------------------*/
