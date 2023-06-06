// This can is used for finding if an item can be found in an array similar to includes
function inArray(needle, haystack) {
  for (var i = 0; i < haystack.length; i++) {
    if (haystack[i] == needle) return true;
  }
  return false;
}

console.log(inArray(4, [8, 4, 2, 4]));