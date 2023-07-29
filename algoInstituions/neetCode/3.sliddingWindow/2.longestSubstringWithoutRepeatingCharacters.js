function maxUniqueNumbersComment(s) {
  let left = 0;
  const characterSet = new Set();
  let maxUniqueNumbers = 0;

  for (let right = 0; right < s.length; right++) {
    while (characterSet.has(s[right])) {
      characterSet.delete(s[left]);
      left++;
    }
    characterSet.add(s[right]);
    maxUniqueNumbers = Math.max(right - left + 1, maxUniqueNumbers);
  }
  return maxUniqueNumbers;
}
function maxUniqueNumbersComment(string) {
  let left = 0; // left is the begininng of the window. The start.
  //   const right = 0; // right is the end of the window. We start it out at the first item.
  const characterSet = new Set();
  let maxUniqueNumbers = 0;

  for (let i = 0; i < string.length; i++) {
    while (characterSet.has(string[i])) {
      /**
       *Question:
        we remove the leftmost character in the window. Why?
        are we even sure this is the leftmost character.

        The way I thought it runs is
                 a b c d e f g g 
                               ^
                               |right = 7
        since we have a single repeated character then we remove the leftmost character. 
        This didn't make any sense to me. and rightly so as it is rubbish
        That means I felt we would change lookup from {a b c d e f g g}
                                  to {b c d e f g g}
              

        The way it actually runs                     
        we keep removing the leftmost character until we don't have any occurrence of that repeated character
                    change lookup from [a b c d e f g g ]
                                    to [b c d e f g]
                                    to [c d e f g]
                                    to [d e f g]
                                    to [e f g]
                                    to [f g]
                                    to [g]
                                    to []
        then we add that character. 
                                    to [g]
       
       Ans:
      we are trying to make sure that current chacrater is not 
      already in the lookup. We keep deleting the last character in
       the lookup and moving the left pointer forward
       example 1: abcdefgggg
         iteration 8: that is right is at 7. that is the g in bracket abcdefg[g]gg
          while loop 1:
                        |left = 0
                        |
                        a b c d e f g g g g
                                      ^
                                      |right = 7
         right = 7
         left = 0
         lookup = [a b c d e f g]
         the check is if g found in the lookup? returns true
         so we delete a from the lookup and increase left to 1

          while loop 2:
                          |left = 1
                          |
                        a b c d e f g g g g
                                      ^
                                      |right = 7
         right = 7
         left = 1
         lookup = [b c d e f g]
         the check is if g found in the lookup? yes it is found
         so we delete b from the lookup and increase left to 2

          while loop 3:
                            |left = 2
                            |
                        a b c d e f g g g
                                      ^
                                      |right = 7
         right = 7
         left = 2
         lookup = [c d e f g]
         the check is if g found in the lookup? yes it is found
         so we delete c from the lookup and increase left to 3

          while loop 4:
                              |left = 3
                              |
                        a b c d e f g g g
                                      ^
                                      |right = 7
         right = 7
         left = 3
         lookup = [d e f g]
         the check is if g found in the lookup? yes it is found
         so we delete c from the lookup and increase left to 4

          while loop 5:
                                |left = 4
                                |
                        a b c d e f g g g
                                      ^
                                      |right = 7
         right = 7
         left = 4
         lookup = [e f g]
         the check is if g found in the lookup? yes it is found
         so we delete c from the lookup and increase left to 5

          while loop 6:
                                  |left = 5
                                  |
                        a b c d e f g g g
                                      ^
                                      |right = 7
         right = 7
         left = 7
         lookup = [f g]
         the check is if g found in the lookup? yes it is found
         so we delete c from the lookup and increase left to 6

          while loop 7:
                                    |left = 6
                                    |
                        a b c d e f g g g
                                      ^
                                      |right = 7
         right = 7
         left = 6
         lookup = [g]
         the check is if g found in the lookup? yes it is found
         so we delete g from the lookup and increase left to 4


          NOTE: 
          NO while loop 8: the check is if g found in the lookup? NO it is NOT found so the while loop does not run rather
         right = 7
         left = 7
         lookup = []
                                      |left = 7
                                      |
                        a b c d e f g g g
                                      ^
                                      |right = 7
        we run characterSet.add(s[i]) and add g to the lookup, and increase right to 8
         right = 8
         left = 7
         lookup = [g]
         

          iteration 9:
                                      |left = 7
                                      |
                        a b c d e f g g g
                                        ^
                                        |right = 8
         right = 8
         left = 7
         lookup = [g]
         the check is if g found in the lookup? yes it is found. we run the while loop which
        deletes g from the lookup and increase left to 9
        After while:
         right = 8
         left = 8
         lookup = [] 
        After iteration 9:
         right = 10
         left = 9
         lookup = [g]    
         
       */
      characterSet.delete(string[left]);
      // we increase the left point by one.
      // and we keep doing this while that duplicate exits
      left++;
    }
    characterSet.add(string[right]);
    /**  HOW TO GET THE WINDOW LENGTH
     * 
     * FORMULA
     * windowLength = right - left + 1
     * 
     * Different ways to write the formula
     *  right - left + 1
     *  right + 1 - left
     * 
     * The formula could be written in different ways.
     * as long as we are subtracting right - left. 
     * and adding 1 (account for the fact that we were dealing with zero based index and now we want to convert it to One based lengths)
     * 
     * 
     *  A the first point of seeing this right - left + 1 it felt like we were just making up calculations as we go.
     *  But now I understand why and you too can 

     * EXPLANATION:
     * We are calculating the length of the unique characters , that is the length of the window
     * that is how many items are in the lookup (which is the same number of items in window)
     * left is at the start of the unique charaters while right is at the end of the unique characters 
     * Example 1:
     *  length of window
     * 
     *  right + 1 - left
     *    0  +  1 -  0   = 1
     * Note we add 1 because the calculation is inclusive
     * so it is the range of 0 to 0. including 0
     * If you count it you can see that there is one item. But if you subtract it
     * it would give you zero items. since the range of 0 to 0 has no items
     *                   |left = 0
     *                   |
     *                   a b c d e f g g g
     *                   ^
     *                   |right = 0
     *                   Ans: 1 (There is 1 character in the window. 0 - 0 + 1 = 1)
     *                              
     * Example 2:
     *  length of window
     *  right + 1 - left
     *    6  +  1 -  0   = 7
     * Note we add 1 because the calculation is inclusive
     * so it is the range of 0 to 6 including 6.                 |left = 0
     *                   |left = 0
     *                    a b c d e f g g g
     *                                ^
     *                                |right = 6
     *                   Ans: 5 (There are 5 characters in the window. 6 - 0 + 1 = 5)
    */
    maxUniqueNumbers = Math.max(right - left + 1, maxUniqueNumbers);
  }
  return maxUniqueNumbers;
}
