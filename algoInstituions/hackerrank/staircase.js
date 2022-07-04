// https://www.hackerrank.com/challenges/staircase/problem
function staircase(n) {
  // Write your code here
  let arr = "";
  // Write your code here
  for (let i = 1; i <= n; i++) {
    arr += `${" ".repeat(n - i)}${"#".repeat(i)}`;
    if (i < n) {
      arr += "\n";
    }
  }
  console.log(arr);
  return arr;
}
/**
 It returns:
#
##
###
####
#####
######
*/
/**The need for : `${' '.repeat(n - i)}${'#'.repeat(i)}` why did I not just write `${"#".repeat(i)}`
#
##
###
####
#####
######
But this is not want I want I want spaces before the harsh symbols,
so I must add ' 'spaced strings before the symbols 
     #
    ##
   ###
  ####
 #####
######

* 
 * 
 * 
 * 
 * The need to add if (i < 6), why did I not just add the newline str += `${"#".repeat(i)}\n`
 * This is because on the last ###### I do not want a space after it as this would
 * not pass the Hackerank test. I do not want space on under the last item, that is on the first one
 * add a space under it, continue up to the 6th one and do not add a space under it
 * 
 */
