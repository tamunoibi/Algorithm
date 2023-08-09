/**
 * Example:
 * s1 = 'ab'
 * s2 = 'eidbaooo'
 * output = true
 * Explanation:
 * s2 contains one permutation of s1 'ba'
 * For permutation both 'ab' or 'ba' if found is valid
 * If they had asked for combination then you can not reverse the order
 * Put another way:
 * All the permutations of s1:
 * a, b
 * b, a
 *
 * All the substrings of s2:
 * e, ei, eid, eidb, eidba, eidbao, eidbaoo, eidbaooo
 * i, id, idb, idba, idbao, idbaoo, idbaooo.
 * d, db, dba, dbao, dbaoo, dbaooo
 * b, ba, bao, baoo, baooo,
 * a, ao, aoo, aooo
 * o, oo, ooo
 * o, oo,
 * o
 *
 *
 * You are to return true if one of s1's permutations is the substring of s2
 * ba is the same as
 */

// my yet to be tested attempt
// t = s2; s = s1
function perm1(s, t) {
  // This function compares two objects and returns true if they are the same
  // eg: strings = {a: 1, b: 0}; testStrings =  {a: 1, b: 1} returns false
  // eg: strings = {a: 1, b: 0}; testStrings =  {a: 1, b: 0} returns true
  const isSame = (strings, testStrings) => {
    for (let key in strings) {
      if (strings[key] != testStrings[key]) {
        return false;
      }
    }
    return true;
  };
  // create a hashmap from t
  tMap = {};
  for (let i = 0; i < t.length; i++) {
    // either make the item it 1 if it is not found or increase the count by 1
    tMap[t[i]] = 1 + (tMap[t[i]] ? tMap[t[i]] : 0);
  }
  // sHashmap
  sMap = {};
  let r = t.length - 1;
  let l = 0;

  for (let i = s.length - 1; i < s.length; i++) {
    // either make the item it 1 if it is not found or increase the count by 1
    // sMap[s[i]] = 1 + (sMap[s[i]] ? sMap[s[i]] : 0);

    // Create a HashMap  of the the substring
    // eg: s = 'eidbaooo' t = 'ab'
    // iteration 1: we slice 'ei' and create sMap = {e: 1, i: 1}
    const sMap = t.slice(i, r + 1).reduce((acc, next) => {
      return 1 + (acc[next] ? acc[next] : 0);
    }, {});

    // if we have an exact match. Between the substring of s and t
    // Then we have found our answer. Return true
    if (isSame(tMap, sMap)) {
      return true;
    }
    // if we did not find increase left so that we can go to the next
    // substring of s with a length of t. In this case 2.
    l++;
  }

  return false;
}
// my yet to be tested attempt
// t = s2; s = s1
function perm2(s, t) {
  // This function compares two objects and returns true if they are the same
  // eg: strings = {a: 1, b: 0}; testStrings =  {a: 1, b: 1} returns false
  // eg: strings = {a: 1, b: 0}; testStrings =  {a: 1, b: 0} returns true
  const isSame = (strings, testStrings) => {
    for (let key in strings) {
      if (strings[key] != testStrings[key]) {
        return false;
      }
    }
    return true;
  };

  // create a hashmap from t called tMap
  tMap = {};
  for (let i = 0; i < t.length; i++) {
    // either make the item it 1 if it is not found or increase the count by 1
    tMap[t[i]] = 1 + (tMap[t[i]] ? tMap[t[i]] : 0);
  }

  // create a hashmap from the first t.length letters of s. Call it  sMap
  // eg: t = 'ab' s = 'eidbaooo'; sMap = {e:1, i:1} sMap would have 2 characters since t has 2 characters
  sMap = {};
  for (let i = 0; i < t.length; i++) {
    // either make the item it 1 if it is not found or increase the count by 1
    sMap[s[i]] = 1 + (sMap[s[i]] ? sMap[s[i]] : 0);
  }

  // for each new letter we check if it is a match. If it is we return
  // it or we move on to the next window
  for (let i = t.length - 1; i < s.length; i++) {
    // Check if we have found a match
    if (isSame(tMap, sMap)) {
      return true;
    }
    // Shift our window to the right. add the left character and remove the right character from our window
    // add the right item on the right of s to the window by increasing the count of that item in the harshmap
    sMap[s[i]] = 1 + (sMap[s[i]] ? sMap[s[i]] : 0);
    // remove the left item from the window by reducing the count of that item in the harshmap
    sMap[s[l]]--;
  }

  return false;
}
// t = s2; s = s1
function perm2(s, t) {
  // This function compares two objects and returns true if they are the same
  // eg: strings = {a: 1, b: 0}; testStrings =  {a: 1, b: 1} returns false
  // eg: strings = {a: 1, b: 0}; testStrings =  {a: 1, b: 0} returns true
  const isSame = (strings, testStrings) => {
    for (let key in strings) {
      if (strings[key] != testStrings[key]) {
        return false;
      }
    }
    return true;
  };

  // create a hashmap from t called tMap
  tMap = {};
  for (let i = 0; i < t.length; i++) {
    // either make the item it 1 if it is not found or increase the count by 1
    tMap[t[i]] = 1 + (tMap[t[i]] ? tMap[t[i]] : 0);
  }

  // create a hashmap from the first t.length letters of s. Call it  sMap
  // eg: t = 'ab' s = 'eidbaooo'; sMap = {e:1, i:1} sMap would have 2 characters since t has 2 characters
  sMap = {};
  for (let i = 0; i < t.length; i++) {
    // either make the item it 1 if it is not found or increase the count by 1
    sMap[s[i]] = 1 + (sMap[s[i]] ? sMap[s[i]] : 0);
  }

  // for each new letter we check if it is a match. If it is we return it. If it is NOT
  // We move on to the next window
  for (let i = t.length - 1; i < s.length; i++) {
    // Check if we have found a match
    if (isSame(tMap, sMap)) {
      return true;
    }
    // Shift our window to the right. add the left character and remove the right character from our window
    // add the right item on the right of s to the window by increasing the count of that item in the harshmap
    sMap[s[i]] = 1 + (sMap[s[i]] ? sMap[s[i]] : 0);
    // remove the left item from the window by reducing the count of that item in the harshmap
    sMap[s[l]]--;
    /**Shift our window to the right. add the left character and remove the right character from our window
     *                                      _oo__
     *                                 _oo__
     *                             _ao__
     *                         _ba__
     *                     _db__
     *                 _id__
     *              _ei__
     *              e   i   d   b   a   o   o   o
     */
  }

  return false;
}
