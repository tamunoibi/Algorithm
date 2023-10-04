/**
 * Question: https://leetcode.com/problems/partition-equal-subset-sum/
   Given a list of numbers return true if the numbers can be partitioned into half to get the other part of the array.
   eg:
   nums = [16, 9, 1, 8, ]
   output = true
   Explanation: if the array is partioned into [16, 1] and [9, 8] 
    

   Eg 2.
   Input: nums = [1,5,11,5]
   Output: true
   Explanation: The array can be partitioned as [1, 5, 5] and [11]
 * Tutorial: https://www.youtube.com/watch?v=3N47yKRDed0
 * Reference: Note: March 2022 page 

 */
// Time: 0(N^2)
function canPartition(nums) {
   const itPartitions = (nums, index, sum, total) => {
         if(sum * 2 === total) {
             return true
         }
        if(sum > total / 2 || index >= nums.length) {
             return false
         }

          return itPartitions(nums, index + 1, sum, total) || itPartitions(nums, index + 1, sum + nums[index], total);
   }
  let total = 0;
    for (const el of nums) {
        total += el;
    }
    //altervanative way to get the sum
    // let total = nums.reduce((acc, val) => acc+=val);
    return itPartitions(nums, 0, 0, total);
};

// Time: 0(N * M): this is what the tutor said. I don't know it to be true
function canPartitionMemoization(nums) {
   const itPartitions = (nums, index, sum, total, memo = {}) => {
    if (index in memo) return memo[index];
         if(sum * 2 === total) {
             return true
         }
        if(sum > total / 2 || index >= nums.length) {
             return false
         }
          memo[index] =  itPartitions(nums, index + 1, sum, total) || itPartitions(nums, index + 1, sum + nums[index], total);
        return memo[index]
   }
    let total = 0;
    let total = nums.reduce((acc, val) => acc+=val);
    return itPartitions(nums, 0, 0, total);
};
function canPartitionDynamicProgramming(nums) {
      const total = nums.reduce((acc, val) => acc+=val);
         if(total % 2 !== 0) {
           return false;
         }
   let dp = new Set();
   dp.add(0);
   // our target is half the total
   let target = total  / 2;

   for(let i = nums.length -1; i >= 0;   i--) {
    let nextDp = new Set();
    for(let t of dp) {
        // if we have already found the answer then we return that answer
        if(t + nums[i] === target) {
            return true;
        }
        nextDp.add(t + nums[i]);
        nextDp.add(t);
        dp = nextDp;
   }
 }
   return target in dp;
};


/**
 * I Break the shell function and the main function that performs the recursive task into two distinct funtions. 
 * this is the recursive function the main function is under. I did this to make the understanding easier.
 * Remember: a shell function is a function that calls a main function to perform the task
 *  */
function itPartitionsCommet(nums) {

    /** base case:
        1. sum = target th we have found the target.target is half of the total. is the total / 2.
        2. sum > target we can never find the target so since we have already exceeded it or we have gone through all the elements
       */
      if(sum * 2 === total) {
             return true
         }
        if(sum > total / 2 || index >= nums.length) {
             return false
         }
      /** recursion:
        1.recursion keep going to the next item. By incrementing index + 1
          Questions:
          1. why are we making two recursive calls itPartitions(nums, index + 1, sum, total) || itPartitions(nums, index + 1, sum + nums[index], total);
          2. How are we calculatig sum? I can see that it is  sum + nums[index]  that is sum + the current element. 
               Example 
               nums = [2, 2, 4] 
               iteration 1. sum starts at 0, we add 2 sum becomes 2 or we don't add 2 sum remains 0
               iteration 2. sum is now at 2, we add 2 sum becomes 4 or we don't add 2 sum remains 2.      I can see that there is call here that I did not account for, when we don't add 2 ad sum is still 0.   like when 
               iteration 3. sum is now 4 we have foud our answer.
       */
}
/**
 * I Break the shell function and the main function that performs the recursive task into two distinct funtions. 
 * this is the mainn function the recursive function is above. I did this to make the understanding easier.
 * Remember: a shell function is a function that calls a main function to perform the task
 *  */ 
function canPartionCommet(nums) {
    /**
     * 
     * Get the total of the elements.
     * Why do we need the total?
     * 1. if that subset is half of the total We have found a valid partition
     * 2. we also use the total to check if the total of the numbers is even or odd. If it the total of the numbers is odd it can not be divided into two equal parts.
     * yes you could have calculated the total at each operation but this is a lot more time efficient as we calculate it once.
     */
    let total = 0;
    for (const el of nums) {
        total += el;
    }

    // if the number is odd return false alread since it. can not be divided into 
    it (total % 2 !== 0) {
        return false;
    }

    //altervanative way to get the sum
    // let total = nums.reduce((acc, val) => acc+=val);

    // Call the recursive function. I agree the name itPartitionsCommet does not even make anny sense but I could not think of a better name.
    return itPartitionsCommet(nums, 0, 0, total);
}

function canPartitionMemoizationComment(nums) {
/**
 * Converting a recursive function to use memoization is the easiet thing. And it is done in 3 steps
 * 1. Create a memo object and default it to an empty objcet: memo = {}
 * 2. Before performing the recursive call check if there is a saved value, if there is return that value so no need to perform the operation if(index in momo) return memo[index]
 * 3. After performing a recursive call save that value so that for subsequent calls you can now have the values saved:  memo[index] =  recursiveCall(); 
 * 4. reurn the value you just saved in memo: return nmomo[index]
 * 
 */
   const itPartitions = (nums, index, sum, total, memo = {}) => {
    //   an alternative way to write this is: if
    //   if(memo[index]) return memo[index]
    if (index in memo) {
    /**
     * The in operator retruns true if the specified property is in the specified object
     * const obj = {hi: 'hello'}
     * console.log('hi' in obj); outputs true
     *  
     */
        return memo[index];
    } 
         if(sum * 2 === total) {
             return true
         }
        if(sum > total / 2 || index >= nums.length) {
             return false
         }
          memo[index] =  itPartitions(nums, index + 1, sum, total) || itPartitions(nums, index + 1, sum + nums[index], total);
        return memo[index]
   }
  let total = 0;
    let total = nums.reduce((acc, val) => acc+=val);
    return itPartitions(nums, 0, 0, total);
};