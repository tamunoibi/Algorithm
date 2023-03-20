/**
 * Question: https://leetcode.com/problems/min-cost-climbing-stairs/
 * Solution: https://www.youtube.com/watch?v=ktmzAZWkEZ0
 */
/**
 *
 * @param {*} cost
 * @returns number
 */
function minCostClimbingStairs(cost) {
  cost.unshift(0);
  console.log(cost);
  for (let i = cost.length - 3; i >= 0; i--) {
    cost[i] += Math.min(cost[i + 1], cost[i + 2]);
  }
    return Math.min(cost[0], cost[1]);
}
minCostClimbingStairs([30, 4, 20, 60, 2]);
function minCostClimbingStairsComment(cost) {
  //We add 0 to the length of the cost. Because we are to get one step out of the array
  // eg: [30, 4, 20, 60, 2] becomes [0, 30, 4, 20, 60, 2] we add 0 to the beginning of the array
  cost.unshift(0);

  // we are looping backwards from the end to the beginning
  // we start two steps to the last eg: [0, 30, 4, 20*, 60, 2] we start at  20
  // the length = 6. The loop starts at 6-3=3. That is index 3. and runs 4 times. it goes index 3, index 2, index 1, 0.
  // so it accesses 20, 4, 30 and 0.
  for (let i = cost.length - 3; i >= 0; i--) {
    /**
     *  Wetin you say we dey calculate here
     I know we are not using a separate dp array we are just calculating it in place
     we are manipulating the cost array and changing it's values
     Eg. cost = [30, 4, 20, 60, 2]
     we add 0 to cost with cost.unshift(0) cost becomes. cost = [0, 30, 4, 20, 60, 2]
     we go through cost from the second to the last item. that is index 3. which is item 20. and for each item we say, give us the smaller between t
      item  20   --> we compare 60 v. 2. the smaller is 2. we add 2 to 20. cost becomes      cost = [0, 30 ,  4 , 22*, 60, 2]. remember before this cost was. cost = [0, 30, 4, 20, 60, 2]
      item  4    --> we compare  22 v. 60. the smaller is 22.  we add 22 to 4. cost becomes  cost = [0, 30 , 26*, 22 , 60, 2]
      item  30   --> we compare  26 v. 22. the smaller is 22. we add 22 to 30. cost becomes  cost = [0, 52*, 26 , 22 , 60, 2]
      tem   0    --> we compare  52 v. 26. the smaller is 26. we add 26 to 0. cost becomes   cost = [26, 52 , 26 , 22 , 60, 2]
        
     We want the minimum between the previous item of cost and the two items before cost
     */
    cost[i] += Math.min(cost[i + 1], cost[i + 2]);
  }

  //   the answer is the smaller of the two items of the cost array
  // eg. cost = [26, 52 , 26 , 22 , 60, 2]
  // the answer is between 26 v. 52
  // the answer is 26
  return Math.min(cost[0], cost[1]);
}
