/**checking that a loop loops correctly:
 * this checks that a loop loops the correct number of times in three steps
 * 1. create an empty object
 * 2. for each outerLoop add it as an array property of the object
 * 3. each inner loop add it as a value value to the aforementioned array
 *  we would construct something like: {0: [0, 1, 2,], 1: [0, 1, 2,], 2: [0, 1, 2,]}
expected output: 
const obj = {};
 for(let(i =0; i<3; i++)) {
   obj[i] = [];
   for(let(j =0; i<3; j++)) {
     obj[i].push(j)
   }
 }
*/
