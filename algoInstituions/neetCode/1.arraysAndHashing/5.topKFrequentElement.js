/**
 * reference note Jan, 2022: book1 page 15
 * Question: https://leetcode.com/problems/top-k-frequent-elements/
 * Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
 *  Sample input: topKFrequent(, 2)
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
    bucket[lookup[key]].push(key);
  }
  let res = [];

  for (let index = bucket.length - 1; index >= 0; index--) {
    if (bucket[i].length > 0) {
      res = [...res, ...bucket[i]];
    }
    return res.slice(0, k);
  }
}

topKFrequent([2, 2, 3, 1, 1, 1]);

function topKFrequentComment(nums, k) {
  /**The logic:
   * We solve the problem in 3 steps:
   * 1.  We convert the array to a frequency table. A Frequency table where we map each key to the number of times it appears. That is {key: frequency}. eg {1: 3} means 1 appears 3 times
   * 2.  We convert the frequency table to bucket arranged in the order they appear. The bucket is an array of arrays [[], []]. Think of each bucket as being labeled with their index. 
   *     Bucket at index 5 contains all elements with a frequency of 5. So that at the end of the day the last bucket is the element that appears the most
   * 3.  We convert the bucket(array of arrays) to a single array. We start this conversion from the back so that the array is sorted in descending order. From the most frequently occuring item to the least occurinng item. 
   */

  /**
   *lookup is a frequency table the key is the item and the value is the number of times it appears
   * example 1:
   * nums = [1,1,1,2,2,3]
   * lookup = {1:3, 2:2, 3:}
   *
   * example 2:
   * nums =  ['a','a','d',''e','e']
   * therefore
   * lookup = {a:2, d:1, 'e':}
   * */
  const lookup = {};
  for (const key of nums) {
    lookup[key] ? lookup[key]++ : (lookup[key] = 1);
  }
  /**
  We create a bucket. 
  The bucket is an array of empty arrays. the number of empty arrays is the length of nums. 
  If there are 6 nums. then there would be 6 empty arrays.
  example:
    nums = [1,1,1,2,2,3]
    therefore
     bucket = [[],[],[],[],[],[]]
   */
  const bucket = [];
  for (let index = 0; index < nums.length; index++) {
    bucket.push([]);
  }

  /**
   * BUCKET SORT OR BIN SORT
   * Bucket sort, or bin sort, is a sorting algorithm that works by distributing the elements of an array into a number of buckets.
   * We create a bucket. In this scenerio think of the bucket as being labeled with their index. Bucket at index 5 contains all elements with a frequency of 5.
   * Bucket 6 contains all the elements that appear 6times
   *    0  | 1   | 2   | 3   | 4  | 5   -> label: the index represents the number of times the item has appeared.
   * [ [] | [3] | [2] | [1] | [] | [] ] -> bucket: the elements would be put into the buckets based on the number of times it appears
   *
   * example 1:
   * nums = [1,1,1,2,2,2, 3]
   * that means 1 appears 3 times. so bucket three would have 1
   * the element 2 also appears 3 times. so bucket three would also have 2
   * the element 3 also appears 1 time.
   *
   * bucket = [[],[3],[],[1, 2],[],[]]
   *
   *
   * example 2:
   * nums = ['eye','nose','eye',]
   *
   * bucket = [[],['nose'],['eye'],[1, 2],[],[]]
   */

  // The buckets represents the frequency of occurence. We populate each bucket with their respective count
  for (const key in lookup) {
    const count = lookup[key];
    bucket[count].push(key);
  }
  let res = [];

  /**
    notice we are looping from the back because the bucket is arranged like this 0, 1, 2. The items that appeared the most are in the last buckets.
    Question:
    if: bucket = [ [], [ '2' ], [ '1' ] ]
    explain how the loop for(let i = bucket.length -1; i >= 0; i--)  would happen.
    
    Solution:
    bucket.length = 3;
    i = bucket.length - 1 = 3 - 1 = 2
    the loop would run
    for (i = 1, i >= 0; i--) {
    console.log(i); this means i is: 2, 1, 0 respectively
    }
   */

  // we are looping from the last array item to the first array item.
  for (let index = bucket.length - 1; index >= 0; index--) {
    if (bucket[i].length > 0) {
      res = [...res, ...bucket[i]];
      /**
     [ ...res, ...bucket[i] ] 
     this pattern is a way of forming a single array item from two array values
     Example
      res       = [4, 5];
      bucket[i] = [3, 7]
      When you can spread both values into one like this
      res = [...res, ...bucket[i]] = [4, 5, 5,7]
      N/B the importance of also spreading res is so that you are adding to the array. if you only spread bucket[i] you would have lost the previous stored value of res
      
      
      res is first initialized to an empty array
      for each bucket item add it to res.
      iteration 1:
      res = [...[], ...[3, 4]] = [3, 4]
    */
    }
    // slice cuts a part of the array. we want to cut out k parts.
    // at this point res contains an array of the numbers in ascending order.
    return res.slice(0, k);
  }
}

topKFrequentComment([2, 2, 3, 1, 1, 1]);
