// Umtested
function minWindow(s, t) {
  if (t === "") {
    return "";
  }
  const countT = {};
  const window = {};

  for (const c in t) {
    const countsValue = countT[c] || 0;
    countT[c] = 1 + countsValue;
  }

  let have = 0;
  let need = Object.keys(countT).length;
  const res = [-1, -1];
  let resLen = Math.NEGATIVE_INFINITY;
  let l = 0;

  for (const r in s.length) {
    const c = s[r];
    const countsValue = window[c] || 0;
    window[c] = 1 + countsValue;
    if (countT[c] && window[c] === countT[c]) {
      have += 1;
    }
    while (have === need) {
      if (r - l + 1 < resLen) {
        res = [l, r];
        resLen = r - l + 1;
        window[s[l]] -= 1;
        if (countT[s[l]] && window[s[l]] < countT[s[l]]) {
          have -= 1;
        }
        l += 1;
      }
    }
  }
  const [start, stop] = res;
  return resLen === Math.NEGATIVE_INFINITY ? "" : s.slice(start, stop + 1);
}
function minWindowComment(s, t) {
  // if we have an empty substring return an empty string
  if (t === "") {
    return "";
  }
  // countT is a harshmap. countT map starts as an empty object. It is be a hashmap of the substring we trying to find in the main string.
  // eg: t = 'abc'; string 'scrarbreb'; countT = {a: 1, b: 1, c: 2}
  const countT = {};
  // This starts as an empty object. It would be the hashmap of the substring we trying to find
  const window = {};

  // This starts as an empty object. It would be the hashmap of the substring we trying to find.
  // eg: t = 'abcc'; string 'scrcrbreb'; countT = {a: 1, b: 1, c: 2}
  for (const c in t) {
    const countsValue = countT[c] || 0;
    countT[c] = 1 + countsValue;
  }

  let have = 0;
  // length of countT gives us the unique characters we have in the search string T
  // eg: t = 'abcc'; countT = {a: 1, b: 1, c: 2}; need = 3;
  let need = Object.keys(countT).length;
  // Result is an array with two items. The first item is the start index and the second is the stop index.
  // we would use result to store the start and stop index of our answer
  // eg: s = 'asbd' t= 'ab' result = [0, 2]; the window is asb
  // initially we set it to -1, -1. These are none existent start and stop values
  const res = [-1, -1];
  // eg: s = 'asbd' t= 'ab' result = [0, 2]; resultLen =  3;
  // we initially set it to the smallest possible number.
  // when we return our final answer we check if it has changed from the samllest possible number. If it has not changed that means no new answer was found and we return an empty string
  // Question: could we not have set it initially to zero instead of negative infinity
  let resLen = Math.NEGATIVE_INFINITY;
  //l is the left pointer. That is the left boundary of the window. It initially starts from 0 that is the first item in the string
  let l = 0;

  // we are going through s. R is the right boundary of our current window
  for (const r in s.length) {
    // we are splitting the object accessor since it is used in multiple places.  c is same as s[r]
    // instead of having to do window[s[r]] we  can just do window[c]
    // window is a harsh map. It represents the current window we are on
    // eg: t = 'abcc'; string 'scrarbreb';
    // ___________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    // r           | 0     | 1            | 2                  | 3                        | 4                      | 5                                    | 6                              | 7                                    | 8                                    |
    // c           | s     | c            | r                  | a                        | r                      | b                                    | r                              | e                                    | b                                    |
    // countsValue | 0     | 0            | 0                  | 0                        | 1                      | 1                                    | 3                              | 1                                    | 2                                    |
    // window[c]   | s: 1  | c: 1         | r: 1               | a:1                      | r:2                    | b:1                                  | r:3                            | e:1                                  | b:2                                  |
    // window      | {s: 1}| {s: 1, c: 1} | {s: 1, c: 1, r: 1} | {s: 1, c: 1, r: 1, a: 1} | {s: 1, c: 1, r: 2, a: 1| {s: 1, c: 1, r: 1, a: 1, r: 2, b: 1} | {s: 1, c: 1, r: 3, a: 2, b: 1} | {s: 1, c: 1, r: 3, a: 2, b: 1, e: 1} | {s: 1, c: 1, r: 3, a: 2, b: 2, e: 1} |
    /**
     *       string  =    s  c  r  a  r  b  r  e  b
     *         c     =    s  c  r  a  r  b  r  e  b
     *         r     =    0  1  2  3  4  5  6  7  8
     */
    const c = s[r];
    const countsValue = window[c] || 0;
    window[c] = 1 + countsValue;
    /**if the count of a particular character is same as required, then increase the have
     * Increase the item we have if the number of characters in our currennt window matches the number of charchters in the required string
     * eg 1:
     * s = 'scrarbreb'; t = 'qbbb'
     * window = {a: 1, b: 3}
     * countT = {q: 2, b: 3}
     * both window and count have 3 as the value of b so we increase have by 1
     * in the case the total we need is 2 character a and b. Wwe have 1 a.
     * have = 1
     * eg 2:
     * s = 'scrarbreb'; t = 'abcc'
     * window = {s: 1, c: 1, r: 1, a: 1}
     * countT = {a: 1, b: 1, c: 1}
     * both window and count have 1 as the value of a. both window and count have 1 as the value of c.
     * We increase have by 2
     * in the case the total we need is 3 character a, b and c. Wwe have 2 a and b
     * have = 2
     *
     * we only do the increase when they are equal if for example c in the window increases from 1 to 2 we do not have more of the characters we need(we need 3 charcters a, b and c. we have a and c if we have 1million c it doesn't mean we have met the requirement) so we do not increase have.
     */

    if (countT[c] && window[c] === countT[c]) {
      have += 1;
    }
    /** have === need
     * That is we have gotten a match we trying to see if we can reduce the window
     */
    while (have === need) {
        // if the size of the current window is less than the result length. Question why are we doing this check
      if (r - l + 1 < resLen) {
        res = [l, r];
        // set the result length to the window length
        resLen = r - l + 1;

        // we are trying to minimize the window length. we remove the left most character
        window[s[l]] -= 1;
        // since we removed a charcter we check if we no longer have  
        if (countT[s[l]] && window[s[l]] < countT[s[l]]) {
          have -= 1;
        }
        // we increase the left by one 
        l += 1;
      }
    }
  }
  const [start, stop] = res;
  return resLen === Math.NEGATIVE_INFINITY ? "" : s.slice(start, stop + 1);
}
function minWindowComment(s, t) {
  // if we have an empty substring return an empty string
  if (t === "") {
    return "";
  }
  // countT is a harshmap. countT map starts as an empty object. It is be a hashmap of the substring we trying to find in the main string.
  // eg: t = 'abc'; string 'scrarbreb'; countT = {a: 1, b: 1, c: 2}
  const countT = {};
  // This starts as an empty object. It would be the hashmap of the substring we trying to find
  const window = {};

  // This starts as an empty object. It would be the hashmap of the substring we trying to find.
  // eg: t = 'abcc'; string 'scrcrbreb'; countT = {a: 1, b: 1, c: 2}
  for (const c in t) {
    const countsValue = countT[c] || 0;
    countT[c] = 1 + countsValue;
  }

  let have = 0;
  // length of countT gives us the unique characters we have in the search string T
  // eg: t = 'abcc'; countT = {a: 1, b: 1, c: 2}; need = 3;
  let need = Object.keys(countT).length;
  // Result is an array with two items. The first item is the start index and the second is the stop index.
  // we would use result to store the start and stop index of our answer
  // eg: s = 'asbd' t= 'ab' result = [0, 2]; the window is asb
  // initially we set it to -1, -1. These are none existent start and stop values
  const res = [-1, -1];
  // eg: s = 'asbd' t= 'ab' result = [0, 2]; resultLen =  3;
  // we initially set it to the smallest possible number.
  // when we return our final answer we check if it has changed from the samllest possible number. If it has not changed that means no new answer was found and we return an empty string
  // Question: could we not have set it initially to zero instead of negative infinity
  let resLen = Math.NEGATIVE_INFINITY;
  //l is the left pointer. That is the left boundary of the window. It initially starts from 0 that is the first item in the string
  let l = 0;

  // we are going through s. R is the right boundary of our current window
  for (const r in s.length) {
    // we are splitting the object accessor since it is used in multiple places.  c is same as s[r]
    // instead of having to do window[s[r]] we  can just do window[c]
    // window is a harsh map. It represents the current window we are on
    // eg: t = 'abcc'; string 'scrarbreb';
    // ___________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    // r           | 0     | 1            | 2                  | 3                        | 4                      | 5                                    | 6                              | 7                                    | 8                                    |
    // c           | s     | c            | r                  | a                        | r                      | b                                    | r                              | e                                    | b                                    |
    // countsValue | 0     | 0            | 0                  | 0                        | 1                      | 1                                    | 3                              | 1                                    | 2                                    |
    // window[c]   | s: 1  | c: 1         | r: 1               | a:1                      | r:2                    | b:1                                  | r:3                            | e:1                                  | b:2                                  |
    // window      | {s: 1}| {s: 1, c: 1} | {s: 1, c: 1, r: 1} | {s: 1, c: 1, r: 1, a: 1} | {s: 1, c: 1, r: 2, a: 1| {s: 1, c: 1, r: 1, a: 1, r: 2, b: 1} | {s: 1, c: 1, r: 3, a: 2, b: 1} | {s: 1, c: 1, r: 3, a: 2, b: 1, e: 1} | {s: 1, c: 1, r: 3, a: 2, b: 2, e: 1} |
    /**
     *       string  =    s  c  r  a  r  b  r  e  b
     *         c     =    s  c  r  a  r  b  r  e  b
     *         r     =    0  1  2  3  4  5  6  7  8
     */
    const c = s[r];
    const countsValue = window[c] || 0;
    window[c] = 1 + countsValue;
    /**if the count of a particular character is same as required, then increase the have
     * Increase the item we have if the number of characters in our currennt window matches the number of charchters in the required string
     * eg 1:
     * s = 'scrarbreb'; t = 'qbbb'
     * window = {a: 1, b: 3}
     * countT = {q: 2, b: 3}
     * both window and count have 3 as the value of b so we increase have by 1
     * in the case the total we need is 2 character a and b. Wwe have 1 a.
     * have = 1
     * eg 2:
     * s = 'scrarbreb'; t = 'abcc'
     * window = {s: 1, c: 1, r: 1, a: 1}
     * countT = {a: 1, b: 1, c: 1}
     * both window and count have 1 as the value of a. both window and count have 1 as the value of c.
     * We increase have by 2
     * in the case the total we need is 3 character a, b and c. Wwe have 2 a and b
     * have = 2
     *
     * we only do the increase when they are equal if for example c in the window increases from 1 to 2 we do not have more of the characters we need(we need 3 charcters a, b and c. we have a and c if we have 1million c it doesn't mean we have met the requirement) so we do not increase have.
     */

    if (countT[c] && window[c] === countT[c]) {
      have += 1;
    }
    /** have === need
     * That is we have gotten a match we trying to see if we can reduce the window
     */
    while (have === need) {
        // if the size of the current window is less than the result length. Question why are we doing this check
      if (r - l + 1 < resLen) {
        res = [l, r];
        // set the result length to the window length
        resLen = r - l + 1;

        // we are trying to minimize the window length. we remove the left most character
        window[s[l]] -= 1;
        // since we removed a charcter we check if we no longer have  
        if (countT[s[l]] && window[s[l]] < countT[s[l]]) {
          have -= 1;
        }
        // we increase the left by one 
        l += 1;
      }
    }
  }
  const [start, stop] = res;
  return resLen === Math.NEGATIVE_INFINITY ? "" : s.slice(start, stop + 1);
}
