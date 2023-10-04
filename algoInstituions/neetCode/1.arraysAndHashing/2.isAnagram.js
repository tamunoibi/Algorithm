/** isAnagramSolutionA: -------------------------------------------------*/
// reference note Jan, 2022: book1 page 4
// Sample input isAnagram("rescue", "secure")); output true
// Sample  input isAnagram("rescue", "secure")); output false
// isAnagram2 time: O(N)
function isAnagram1(s, t) {
  const strings = {};
  const testStrings = {};
  if (s.length !== t.length) {
    return false;
  }

  for (let index = 0; index < s.length; index++) {
    if (!strings[s[index]]) {
      strings[s[index]] = 0;
    } else {
      strings[s[index]]++;
    }
    if (!testStrings[t[index]]) {
      testStrings[t[index]] = 0;
    } else {
      testStrings[t[index]]++;
    }
  }
  for (let key in strings) {
    if (strings[key] != testStrings[key]) {
      return false;
    }
  }
  return true;
}
// isAnagram2 time: Olog(N);
function isAnagram2(stringA, stringB) {
  const sortedStringA = stringA.split("").sort().join("");
  const sortedStringB = stringB.split("").sort().join("");
  return sortedStringA === sortedStringB;
}
function isAnagram1Explanation(s, t) {
  /**
   * An anagram has the same characters with the same quantity for those characters:
   * eg. cat        vs. tar
   *     rescue     vs. secure
   * c : 1qty; a 1qty;  t : 1qyt
   * The method is we put the strings in harsh maps where we can count there occurences  and check whether they are equal
   *
   */

  /**
   * STEPS:
   * 1. check that they are same length of strings
   * 2. Create two harsh maps
   * 3. Ensure the values of each harsh map are the same
   */
  const strings = {};
  const testStrings = {};
  // we check if they are same length because if they are not same length they can not be anagram
  if (s.length !== t.length) {
    return false;
  }

  // we are attempting to create a harsh map with the string
  // think of a hash map as an object
  // { c: 1, a: 1, t: 1},
  // { t: 1, a: 1, c: 1}

  for (let index = 0; index < s.length; index++) {
    // if that particular character is not already in the harsh map. Add it and initialize it to 0
    if (!strings[s[index]]) {
      strings[s[index]] = 0;
    } else {
      // if that particular character already in the harsh map. Add one more to the length
      strings[s[index]]++;
    }

    // if that particular character is not already in the harsh map. Add it and initialise it to 0
    if (!testStrings[t[index]]) {
      testStrings[t[index]] = 0;
    } else {
      //strings is the harshMap of the strings
      //s[index]; s = the string example cat; index = 0,1,2... depending s[index] therefore is each letter of the string
      // strings[s[index]]++; we are checking for each leeter of the string in the harsh map is it is not found we increment it.
      testStrings[t[index]]++;
    }
  }
  for (let key in strings) {
    // for in loops through the properties of an object.
    // Given strings = {c: 1, a:1, r:1}, key would be c, a, respectively.
    // you can access the individual values by doing strings[key] which would evaluate to strings[c], strings[a], and strings[r] respectively
    // we are checking that the value of each character in stringA is same as the value of each character in stringB
    /**
     * StringA             StringB
     *  c --- 1            r-----1
     *  a --- 1            a-----1
     *  r --- 1            c-----1
     *  */
    if (strings[key] != testStrings[key]) {
      return false;
    }
  }
  return true;
}
function isAnagram2Explanation(stringA, stringB) {
  /** if we make sure the characters show up in the exact same order every time. That is sort them.
   *  if they are the exact same character if we put them in sorted order they should become the exact same string
   *  then we can just do an equals operator and if they are anagrams they should be equal.
   * The bad case is what is the time complexity of the sorting algorithim: most sorting algorithms use O(logn) some bad sorting alogrithims like bubble sort uses O(n^2) which is not very efficient
   * this is more space efficient since we do not have to store things in a harsh map
   */
  const sortedStringA = stringA.split("").sort().join("");
  const sortedStringB = stringB.split("").sort().join("");
  return sortedStringA === sortedStringB;
}
