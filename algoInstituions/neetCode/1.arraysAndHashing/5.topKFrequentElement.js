/**
 * Question: https://leetcode.com/problems/top-k-frequent-elements/
 * Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
 *  Sample input: https://www.youtube.com/watch?v=4r3MZNCGzVY&list=RDEQfaN3ZYxqo&index=2
 * */
function topKFrequent(nums, k) {
  const lookup = {};
  for (const key of nums) {
    lookup[key] ? lookup[key]++ : (lookup[key] = 1);
  }

  const bucket = [];
  for (let index = 0; index < nums.length; index++) {
    bucket.push([]);
  }
  // An alternative way of writing this.
  // const bucket = new Array(nums.length).fill([]);

  for (const key in lookup) {
    const count = lookup[key];
    bucket[count].push(key);
  }

  let res = [];
  for (let index = bucket.length - 1; index >= 0; index--) {
    if (bucket[i].length === 0) {
      res = [...res, ...bucket[i]];
    }
    return res.slice(0, k);
  }
}

topKFrequent([2, 2, 3, 1, 1, 1]);

function topKFrequentComment(nums, k) {
  const lookup = {};
  for (const key of nums) {
    lookup[key] ? lookup[key]++ : (lookup[key] = 1);

    /**The logic:
     *
     */
  }

  // We create a bucket. which is an array of empty arrays [] up to the length of the array
  /**  1  2  3  4  5  6  -> index: represents the number of times the item has appeared
   * [[],[],[],[],[],[]] -> arrayContent: the numbers that have
   */
  const bucket = [];
  for (let index = 0; index < nums.length; index++) {
    bucket.push([]);
  }

  // We populate the bucket.
  /**example
   * nums:   [2, 2, 3, 1, 1, 1]
   * lookup: { '1': 3, '2': 2, '3': 1 }
   *  the key of the lookup object is the nums item.
   *  the value of the lookup object is the count.
   *
   *
   * index:   [[ 0  | 1   | 2   | 3   | 4  | 5  | 6 ]]
   * content: [[ [] | [3] | [2] | [1] | [] | [] | [] ]]
   * The number of times the items appeared:
   *               once is 3
   *               twice is 2
   *               three times is 1
   * index: the index of the array represents the number of times an item has appeared. For example
   *  the array in index 5 has all the items that appeared 5 times.
   *
   * The content of each array:
   * the content of each array is a list of numbers  example 4,6.
   *
   * EXample:
   * bucket = [[], [1,4], [5]]
   * this the items that appeared 1 time are: 1, 4 while the items that appeared two times is 5.
   *
   *
   */
  for (const key in lookup) {
    const count = lookup[key];
    // for example lookup: { '1': 3, '2': 2, '3': 1 }
    // first key is 1 that appears 3 times,
    //                  in index 1 of bucket
    //                  push the value 3
    // bucket = [[], [3], [], [], [], []]
    //
    // next is 2 that appears two times
    //            in index 2 of bucket
    //            push the value 2 to the array
    //
    // next is 3 that appears once
    //            in index 1 of bucket
    //            push the value 3 to the array
    //
    bucket[count].push(key);
  }
  let res = [];

  // notice we are looping from the back because the bucket is arranged like this
  // if nums = [1, 2, 1];
  // lookup = { '1': 2, '2': 1 };
  // bucket = [ [], [ '2' ], [ '1' ], [] ];
  // this means items that appeared 0times, 1times, 2times,, 3times: it is arranged in ascending order from small to big
  // But we want them to be arranged in descending order like this 3times, 2times, onetime so we start from the back
  // Question:
  // if: bucket = [ [], [ '2' ], [ '1' ], [] ]
  // explain how the loop for(let i = bucket.length -1; i >= 0; i--)  would happen.
  //
  // Solution:
  // bucket.length = 4;
  // i = bucket.length - 1 = 3
  //the loop would run
  // for (i = 3, i >= 0; i--) {
  // console.log(i); this means i is: 3, 2, 1, 0 respectively
  // }

  // we are looping from the last array item to the first array item
  for (let index = bucket.length - 1; index >= 0; index--) {
    if (bucket[i].length > 0) {
      /**
       For every bucket item that is empty. don't do anything. JUst continue.
          Example: const bucket = [[], [3], [2], [1], [], [], []];
          This means:
            index:   [[ 0  | 1   | 2   | 3   | 4  | 5  | 6 ]]
          content:   [[ [] | [3] | [2] | [1] | [] | [] | [] ]]
          when we are at index 0, 4, 5, 6 it would pass this test (bucket[i].length === 0) and get to this loop to do nothing
      */
      /**
     [...res, ...bucket[i]] this pattern is a way of forming a single array item from two array values
      for example
          res       = [4, 5];
          bucket[i] = [3, 7]
      When you can spread both values into one like this
      res = [...res, ...bucket[i]] = [4, 5, 5,7]
      N/B the importance of also spreading res is so that you are adding to the array.if you only spread bucket[i] you would have lost the previous stored value of res
      

      
      res is first initialized to an empty array
      for each bucket item spread it out
      iteration 1:
      res = [...[], ...[3, 4]] = [3, 4]
      */
      res = [...res, ...bucket[i]];
    }
    // slice cuts a part of the array. we want to cut out k parts.
    // at this point res contains an array of the numbers in ascending order.
    return res.slice(0, k);
  }
}

topKFrequentComment([2, 2, 3, 1, 1, 1]);
