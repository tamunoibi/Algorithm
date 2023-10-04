function longestCommonPrefix(strs) {
    let ans = '';
    let item = '';

    for(let i = 0; i < strs[0].length; i++) {
      for(let j = 0; j < strs.length; j++) {
        if(j === 0) {
         item = strs[j][i]
        }
        if(strs[j][i] !== item) {
          return ans;
        }
      }
      ans += item;
    }
    return ans;
};