/**
// reference note Jan, 2022: book1 page 13
 * Question: https://leetcode.com/problems/group-anagrams/ 
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.
 * Sample input:  groupAnagrams(["eat","tea","tan","ate","nat","bat"]);
 */
function groupAnagrams(strs) {
  const cache = {};
  for (const str of strs) {
    let sortedKey = str.split("").sort().join("");
    cache[sortedKey] ? cache[sortedKey].push(str) : (cache[sortedKey] = [str]);
  }
  return Object.values(cache);
};

function groupAnagramsComment(strs) {
  const cache = {};
  for (const str of strs) {
    let sortedKey = str.split("").sort().join("");
    cache[sortedKey] ? cache[sortedKey].push(str) : (cache[sortedKey] = [str]);
  }
  return Object.values(cache);
};
