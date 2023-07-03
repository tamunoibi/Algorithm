/**
// reference note Jan, 2022: book1 page 13
 * Question: https://leetcode.com/problems/group-anagrams/ 
 * Given an array of strings called strs, group the anagrams together. You can return the answer in any order.
 * Sample input:  groupAnagrams(['eat','tea','tan','ate','nat','bat']);
 * Sample output: [[eat, tea, ate], [tan, nat], [bat]]
 */
function groupAnagrams(strs) {
  const cache = {};
  for (const str of strs) {
    let sortedKey = str.split('').sort().join('');
    cache[sortedKey] ? cache[sortedKey].push(str) : (cache[sortedKey] = [str]);
  }
  return Object.values(cache);
}

function groupAnagramsComment(strs) {
  const cache = {};

  //loop through the array of strings. Example: ['eat','tea','tan','ate','nat','bat']
  for (const str of strs) {
    /** for each string, split the string, sort the string and join it back
     * example:  string = eat
     *  'eat'.split('') = ['e', 'a', 't'];          // we split it so that we can sort it. Sort is an array method and not a string method
     *  ['e', 'a', 't'].sort('') = ['a', 'e', 't']; // we sort it so that all matching items would look same example: eat, tea would both sort to aet
     *  ['a', 'e', 't'].join('') = 'aet';          // we convert it back to a string since the answer is to return an array of strings and not an array of arrays
     *  
     *
    example
     */
    let sortedKey = str.split("").sort().join("");
    /** We modify the lookup table, if the item is already in the table we push to the property else we create that property
     *  Example: ['eat','tea','tan','ate','nat','bat'];
     *  iteration 1, 'eat':
     *    cache = {};                                         //When iteration 1 starts the lookup table is empty
     *    let sortedKey = 'aet';                             // because str is 'eat' this is sorted to 'aet' when  str.split('').sort().join('') is run
     *    cache['aet'] ? ___ :  (cache[sortedKey] = [str]); // the left side of the expression runs and adds the property aet to the cache object and sets its value to 'ate'
     *    cache = {aet: ['eat']};                              // this is the current value of cache
     *
     *  iteration 2, 'tea':
     *    cache = {aet: ['eat']};                                        // When iteration 2 starts the lookup table is has a single value that was added from iteration 1
     *    let sortedKey = 'aet';                                    // because str is 'tea' this is sorted to 'aet' when  str.split('').sort().join('') is run
     *    cache['aet'] ? cache[sortedKey].push(str) : ____;        //  the right side of the expression runs and pushes the property 'tea' to the property 'aet'
     *    cache = {aet: ['eat', 'tea']};
     *
     *
     * To save time I would just summarize the values of cache for all other subsequent operations.
     *  iteration 3, 'tan': cache = {aet: ['eat', 'tea'], ant: ['tan']};
     *  iteration 4, 'ate': cache = {aet: ['eat', 'tea', ate], ant: ['tan']};
     *  iteration 5, 'nat': cache = {aet: ['eat', 'tea', ate], ant: ['tan', 'nat']};
     *  iteration 6, 'bat': cache = {aet: ['eat', 'tea', ate], ant: ['tan', 'nat'], abt: ['bat']};
     *
     */
    cache[sortedKey] ? cache[sortedKey].push(str) : (cache[sortedKey] = [str]);
  }
  /** We take the values of the the object and return it using the inbuilt object method Object.values()
   * cache = {aet: ['eat', 'tea', ate], ant: ['tan', 'nat'], abt: ['bat']};
   *
   * return [['eat', 'tea', ate], ['tan', 'nat'], ['bat'] ]
   */
  return Object.values(cache);
}
