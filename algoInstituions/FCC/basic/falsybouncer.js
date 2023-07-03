/**
 *
 * Remove all falsy values from an array. Return a new array; do not mutate the original array.
 * Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
 * Hint: Try converting each value to a Boolean
 */
function bouncer(arr) {
  const newArr = [];
  for (const item of arr) {
    if (item) {
      newArr.push(item);
    }
  }
  return newArr;
}

function bouncer2(arr) {
  // given [7, "ate", "", false, 9] i want to keep the items that are true example 5
  // filter keeps the items that return true

  /**  this is wrong
   * filter: !7  that is Not 7. or not true?  is 7 a falsy value? ans: true. yes 7 is not a falsy value. True would.
   * the !7 is not asking is it not true? but rather reversing the value not true. that is false. Or Opposite of true.
   */
  const ans = arr.filter((item) => {
    /**
     * With checks like this it helps to explain them with real examples. Their are two possible scenrios
     * a. true values. example 'a'.
     *  if an item is a true value we wish to keep it. Remember filter keeps it if it is true. We say !!true. that is !true = false. !false = true/
     * b. false values, example ''
     * We say !!false. That is !false = true. !true = false
     *
     */
    return !!item;
  });
  return ans;
}

bouncer([7, "ate", "", false, 9]);

bouncer([7, "ate", "", false, 9]);
