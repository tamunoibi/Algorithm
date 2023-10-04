/**
 * Question: houseRobbber: https://leetcode.com/problems/house-robber/
 *
 */
// this solution uses an array
function rob(arr) {
  if (arr.length <= 0) {
    return 0;
  }
  const dp = new Array(arr.length + 1);
  dp[0] = 0;
  dp[1] = arr[0];

  for (let index = 1; index < arr.length; index++) {
    const oldMax = dp[i];
    const currMax = dp[i - 1] + arr[i];
    dp[i + 1] = Math.max(oldMax, currMax);
  }
  return dp[arr.length];
}

// This solution uses two variables. No need maintaining an entire array since we only need two values
function rob2(arr) {
  let [prev, curr] = [0, 0];
  for (const house of arr) {
    temp = prev;
    prev = curr;
    curr = Math.max(temp + house, curr);
  }
  return curr;
}



function robComment(arr) {
  /** If the house array is empty then return 0. Since there is 0 amount you can make from an empty street.
   *  Don't run my code and ruin it. If you don't add this check an empty array item would return undefined. 
   * 
   * */
  if (arr.length <= 0) {
    return 0;
  }
  /**
   * We create an array. called dp. It has a length one more than the house array.
   * example if the house array is 2. Then the dp array would be 3.
   * eg. house = [90, 5]
   *     dp   =  [ _, _, _]
   *
   */
  const dp = new Array(arr.length + 1);
  //   We set the first and second items of the dp array.
  dp[0] = 0;
  dp[1] = arr[0];
  //   We set the first item of the dp array to 0.
  //   We set the second item of the the dp array the first item of the house array.
  // we are setting the second item of the dp array. Which is the maximum amount you can rob if you have just one house to be that house
  // dp[1] = arr[0]
  // eg. house   = [90, 2, 4]
  // house[0]    = 90
  //     dp      = [0,  _, _, _]
  // dp[1]       = 90
  // dp          = [0,  90, _, _]
  // It is note worthy that dp array has one item more than house array. If house has 2 items.The length of thhe dp array is length of n+1.
  // The answer at index 0 of house is found at dp 1. The answer at index 1 of house is found at dp 2. 

  // we loop through the house array. Starting from the second house
  for (let index = 1; index < arr.length; index++) {
    const oldMax = dp[index];
    const currentMax = dp[index - 1] + arr[index];
    // we set the second dp item to be the bigger of
    dp[index + 1] = Math.max(oldMax, currentMax);
  }
  // return the last item of the dp array.
  // Eg. houseArr is 5. that means dp array is 6 items. The very last item would be index 5.
  // You could have written this as return dp[dp.length - 1]
  return dp[arr.length];
  /**
   *  
   How do we calculate the max at each step(number of houses. eg. index 1. we have 1 house, ind ex 2 we have two houses)
   Ans: at each step (we start from the second house which is index 1. We have 1, house)we are calculating a current max and comparing it with our old max and the bigger of them and the biggest max.
   that is the bigger of:  currentMax V. oldMax


   Example: [1, 2, 3, 1]
   a. we set our max when we have no houses to be 0. dp[0] = 0;
    house =  >=====No single house added======< [1,  2,     3,    1  ]
    dp    =  [0*,   null, null, null, null]
    the maximumRobbableAmounnt is 0
    this is correct since the maximum you can gain from robbing no house is 0 naira.
   b. When we see one house the max is the current house dp[1] = nums[0]; which is 1.
    house =  [1,<=====only this 1 house======|      2,     3,    1]
    dp    =  [0,     1*,   null, null, null]
    maximumRobabble is 1 naira
    this is correct because the maximum you can gain from robbing a one that with one naira is one naira
   c. when we have 2 houses
    house =  [1,      2,<=====only this 2 houses======|     3,     1]
    dp    =  [0,      1,     2*,    null, null]
    maximumRobabble is 2 naira
    this is correct because we should only rob the bigger of the two houses(1, 2)
    and the only robable options are either 1 or 2. Since we can not do 1+2

    dp[2] = max(dp[1], (dp[0] + house[1])) = max(1, (0 + 2)) = max(1, 2) = 2
    the bigger of 1 vs (0 +2)
    Why are summing dp[0] + number?
     Because  dp[0]  was the maximum as at two steps back. 
     what was the maximum 1 step back? 1. We can't use the maximum 1step back to add to this item as it is adjacent. 
     We use the maximum two step back to add to this item


    we can not rob the two adjacent houses. that is 1+2 = 3. since adjacent robberies are prohibited.
    the question is answering which one is bigger to rob. 
    this current house +two robberies before it OR the immidiately preceding house.
    either I rob
         2+0
      or 1 
    So I should rob 2 + 0; So I set that as my maximum at that index.
    
    ALL POSSIBLE ROBBERIES
    0
    1
    2
    0 + 1
    0 + 2
    1 + 2 ----> prohibited

   d. when we have 3 houses
    house =  [1,      2,     3,<=====only this 3 houses======|      1]
    dp    =  [0,      1,     2,    4*, null]
    maximumRobabble is 4 naira
    this is correct because we should only rob the bigger of the three houses(1, 2, 3)
    the options we have are: 1, 2, 3, or, 1+3 = 4. 
    NOTE we can't do: 1+3 = 4, or 2+3 = 5 as they are adjacent houses. 1, 2 is adjacent same
    we can not rob the two  adjacent houses. that is 2+3 = 5. since adjacent robberies are prohibited.
    the question is answering which one is bigger to rob, this current house + two houses before it OR the middle house.
    like in this question either I rub 3+1 or 2. 
   e. when we have 4 houses
    house =  [1,      2,     3,      1]<=====all this 4 houses======|     
    dp    =  [0,      1,     2,      4,   5*]
    maximumRobabble is 5 naira
    this is correct because we should only rob the bigger of the two houses(1, 2, 3, 1)
    we can not rob the two  adjacent houses. that is 2+3 = 5. since adjacent robberies are prohibited.
    the question is answering which one is bigger to rob, this current house + two houses before it OR the middle house.
    like in this question either I rub 3+1 or 2. 

    dp[2] = max(dp[1], (dp[0] + house[1])) = max(1, (0 + 2)) = max(1, 2) = 2
    the max for the second house(dp[i + 1] that is dp[1 +1] that is dp[2]) is: 
         the  maximum of 0 house (which is 0 which is dp[i - 1])
         and the  maximum of 1 house (which is 1),  Plus the new house(which is 2). that is (dp[i] + house[i] = 1 + 2) (why are we adding the new house? ).
         That is  math.max of the two steps back vs. (one step back + currentIndex )
         
         The formula for calculating the maximum you can rob from any house is:
    
   itemsMaximum = MAX(oldMax, currMax);
   itemsMaximum -  is same as dp[i+1] - that is the current index. if the array has 5 items. i would be: 1, 2, 3, 4 respectively. The reason we do not access 5. the loop stops 1step before the length since we do i+1. if you stop i at 5. i+1 is 6. and is outside the calculation.
   oldMax - the old max is the dp that is one step away. That is 0
   currMax - the way to get the new maximum(the maximum amount you can derive from robbing a house)is the house to be robbed (house[i]), summed by the maximum of the house two steps back. Since you can't use the house immidiately preceding it since that is robbing adjacent houses which is prohibited. so it is house[i] + dp[i - 1] that is house[2] + dp[1] -(we us dp[i-1] simce dp array is 0 indexed and the index 1 of dp is index)
   */
  /**
   * Dynamic programming questions have the same patterns
   * 1. You create an array (as a convention it is called dp). The array is length of n+1. Example n is 5. You create 6 dpArray items.The array you are creating should start from index 0 to index 6(inclusive of index 6).
   * 2. You set the first initial 2 values of the array. The first value is index 0. It is  set to 0(there is 0 ways to rob 0 houses). Then you set index 1(there is one way to rob one house). Which is usually set to one
   * 3. We start the loop at index 1 and keeping looping as long as i < arr.length. The point is if the array is 5. you would loop 5 times. So as to go through all the items of the array. for(let i =1; i<= arr.length; i++)
   *
   */
}
