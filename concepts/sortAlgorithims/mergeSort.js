// Tutorial: https://www.youtube.com/watch?v=3j0SWDX4AtU
//Time complexity O(logN) <confirm this>
// Sample Input: mergeSort([9, 6, 5, 2, 0, 8]);
/**
 * The things that are required to understand this iis
 * 1. How to divide an array into two halfs
 * 2. How to combine two individually sorted arrays into one. The pattern involves creating a new array. This array would be empty at first. You compare the first elements of the two arrays passed in and add the smaller one to the newArray.
 * 3. How double recursion works. Specifically indirect recursion. mergeSortedArray(recurse(left), recurse(right))
 * 4. Explain how the function runs. Give several examples and progressively build the difficulty of the examples. The need for this detailed explanation of several examples is because of recursion. Recursion needs to be understood progressively. The example be structured like this: a. Start with the function being passed two array items. eg. arr = [9, 1]. This example would not call the recursive part of the function so it is easier to follow; b. Take the operation from having two array items to having three items. eg. arr = [9, 1, 6];  An example with 3 items would only have few recursive calls this would be a little more complex to follow but still doable. Then explain it with up to 9 items example: [5, 9, 3, 1, 3, 2, 6, 8, 4]. Two operations shows how the code runs without the recursion while 3 shows with recursion. Progressively. This recursive function calls is a complex so take it step by step don't just fly to examples with  8 array items.
 * 5.
 * 6.
 */
function merge(left, right) {
  let sortedArr = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }
  return [...sortedArr, ...left, ...right];
}
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const half = Math.floor(arr.length / 2);
  const left = arr.splice(0, half);
  const right = arr;
  return mergeSortedArrays(divideTillOne(left), divideTillOne(right));
}
function mergeComment(left, right) {
  let sortedArr = []; // the sorted elements will go here

  // this runs when their is a property in both the arrays.
  // The two arrays passed are being modified. For each execution the first item is removed from either of the left or right. the item to be removed is the smaller of the two.
  /**Example:
   * Question:
    left  = [3, 5, 7]
    right = [2]
    
   * Solution:
    while(3 &&  1) {
      if(3 < 2) { //--->false this does not execute
        sortedArr.push(right.shift()); //--->right.shift() would be 3. but this does not run
      }else {//---->True executes
        sortedArr.push(left.shift()); //--->left.shift() is 2 and it removes that 2 from the array
      }
    }
    return [2, 3, 5, 7] //-> it spreads sortedArr,  left, right in that particular order  [...[2], ...[3, 5, 7], ...[]]
   * */
  // merge effectively sorts the array on the condition that both  the left and right are already sorted. if they are not already sorted. It would not work.
  // this is the trick of merge sort that it does not go through all the items but stop when both  items no longer has content and adds the remaining items
  /**
   *  Example:
   *  Question:
   *  left = [4,2,3]
   *  right = [1, 2]
   
   * Solution:
     sortedArr = [1] //  we compare 4 vs. 1. 1 is smaller. new values of left and right  are left = [4,2,3]; right = [ 2]
     sortedArr = [1, 2] //  we compare 4 vs. 2. 2 is smaller. new values of left and right  are left = [4,2,3]; right = []
     return  [1, 2, 4, 2, 3] // the answer is not sorted, since it spreads sortedArr,  left, right in that particular order  [...[1, 2], ...[4,2,3], ...[]]
   
   */
  while (left.length && right.length) {
    // insert the smallest of the two elements to the sortedArr
    if (left[0] < right[0]) {
      //.shift() removes the first element of the array and push adds it to the back of the sortedArr
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
    console.log({ sortedArr, left, right });
  }

  // use spread operator and create a new array,
  // combining the three arrays a. the sorted array, b. either left or right. Which ever still has a remainder. Only one of them would have a remainder because if they both have items the while loop would keep executing. The remainder would be spread behind the sorted array
  // example: sortedArray = [1,2,3]
  // left = []
  // right = [7, 8, 9]
  // we spread both left and right but only right had content and that would be added to form
  // [1,2,3,7,8,9]
  // this is the powerful thing about merge sort by the time we compare each array items and are left with only one array that has content we can just add it at the back since it is already sorted.
  // this needs further explanations

  return [...sortedArr, ...left, ...right];
}
function mergeSortComment(arr) {
  /**
   * The logic is we have two functions: one function to divide the array into two and the other to combine the two array
   * Tip: Mentally when trying to remember an algorithm use an example if you use an example it is easier to visualize it.
   * the example to visualize this is using an array with two items arr = [200, 1]
   * 1. Divide: the first function divides it into two parts part 1: [1] part 2:[200]
   * 2. combineInSortedForm: the second function combines the two arrays in a sorted form.  It creates a new empty array []. Then adds the smaller of the two items. which is 1 to the new array. therefore new array becomes [1] then it merges the newArray and the leftArray (that is 200) plus the right array  [...newArray, ...left, ..,right] output [1, 2]
   */
  // the base case is array length <=1
  // if there is only one item in the array then return the array
  if (arr.length <= 1) {
    return arr;
  }

  // Math.floor rounds down to the nearest whole number
  // It is useful for when the array has odd number of items
  //  example 9 items. if you divide it into half you get 4.5 so we round it down to 4.
  const half = Math.floor(arr.length / 2);

  const left = arr.splice(0, half); // the first half of the array. It  the array can't be divided evenly example [1,5,2] an array of length 3. would be divided into an array  containing 1 item and an array  containing 2 items. This half has the smaller smaller half
  const right = arr; // the second half of the array
  /**
   * Example: 
  const arr = [1, 2, 3, 4, 5 ,6, 7,8,9];

   * Solution: 
  const half = Math.floor(item.length/2);   // 4
  const left = item.splice(0, half); // [ 1, 2, 3, 4 ]   // that is [1, 2, 3, 4, 5 ,6, 7,8,9].splice(0, 4);start at index zero and remove four items from the  array. so it is removing i. 1, ii.2 iii. 3, iv. 4
  const right = arr; [5, 6, 7, 8, 9 ]


   * Further explanation: 
  // the original arr is [1, 2, 3, 4, 5 ,6, 7,8,9]
  //  [
        1, 2, 3, 4-->cut out four items from the array and stored as left
        5 ,6, 7,8,9-->the remainder in the array stored as right
      ]

   */
  /**
   The things that were unclear in merge sort was:
    1. the order of operation.
       There are three functions that are being called in the statement: merge(mergeSort(left), mergeSort(right))
       the three functions are: 
        a. mergeSortedArraysIntoOne()
        b. divideSingleArrayUntilOneIsLeft(left)
        c. divideSingleArrayUntilOneIsLeft(right)
      Functions run in the order they are called. Which means since mergeSortedArraysIntoOne() is called first it would run first.
      mergeSortedArraysIntoOne
        mergeSortedArrays into one is given two arrays that are already sorted and it merges them into one.
        example: [1, 4, 5] and [3] would become [1, 3, 4, 5]
        Note: this is why I used to get confused. I am not simply calling an array item.
        mergeSortedArraysIntoOne([1, 4, 5],  [3])

        I am rather calling two functions. 
        That is why you need to express it as a tree so that you can keep track of the movements. 
        Because I am making two calls. I would follow up on the left side and come back later for the right side. Readup on double recursion
         /**
   * Example: 
  const arr = [1, 2, 3, 4, 5 ,6, 7,8,9];

   * Solution: 
  const half = Math.floor(item.length/2);   // 4
  const left = item.splice(0, half); // [ 1, 2, 3, 4 ]   // that is [1, 2, 3, 4, 5 ,6, 7,8,9].splice(0, 4);start at index zero and remove four items from the  array. so it is removing i. 1, ii.2 iii. 3, iv. 4
  const right = arr; [5, 6, 7, 8, 9 ]


   * Further explanation: 
  // the original arr is [1, 2, 3, 4, 5 ,6, 7,8,9]
  //  [
        1, 2, 3, 4-->cut out four items from the array and stored as left
        5 ,6, 7,8,9-->the remainder in the array stored as right
      ]

   */
  /**
   The things that was unclear in mergeSort was:
    1. the order of operation.
       There are three functions that are being called in the statement: mergeSortedArraysIntoOne(divideArrayUntilOneItemIsLeft(left), divideArrayUntilOneItemIsLeft(right))
       the three functions are: 
        a. mergeSortedArraysIntoOne()
        b. divideArrayUntilOneItemIsLeft(left)
        c. divideArrayUntilOneItemIsLeft(right)

      Functions run in the order they are called. Which means since mergeSortedArraysIntoOne() is called first it would run first.
      mergeSortedArraysIntoOne
        mergeSortedArrays into one is given two arrays that are already sorted and it merges them into one.
        example: [1, 4, 5] and [3] would become [1, 3, 4, 5]
        Note: this is why I used to get confused. 
        I am not simply calling an array item
        mergeSortedArraysIntoOne([1, 4, 5],  [3])

        I am rather calling two functions. 
        That is why you need to express it as a tree so that you can keep track of the movements. of the internal functions.
        Because I am making two calls. I would follow up on the left side and come back later for the right side. Read up on double recursion. That is where this technique is explained in detail
        A double recursion is easier to follow when you draw it like like a binary tree.
        it first goes from beginning to end like a single recursion. or loop
        but for each loop it saves the other recursive call. When it has gone to the end of the loop and returned
        It goes to the right of the last tree value. then runs to the end of that loop
     * Example
     * input: [1, 2, 3, 4, 5 ,6, 7,8,9]
     * 
            [1, 2, 3, 4, 5 ,6, 7,8,9]
                    /   \
         [1, 2, 3, 4]  
                /   \  
           [1, 2]   
              /   \      
          [ 1 ]  <--- we return when arr length is less than or equal 1
           When we return from the left side.
             The function call to mergeSortedArraysIntoOne does NOT run. 
            NOTE: we only run mergeSortedArraysIntoOne()  when both functions have returned. divideArrayUntilOneItemIsLeft(left) and divideArrayUntilOneItemIsLeft(right) have returned.
            here only mergeSortedArraysIntoOne(left) just returned
            arr = [1, 2, 3, 4, 5 ,6, 7, 8, 9]
                  [ 1, 2, 3, 4 ]      [ 5, 6, 7, 8, 9 ]
              [ 1, 2 ]      [ 3, 4 ]
          [ 1 ]      [ 2 ]
          we call split left( [1, 2, 3, 4, 5 ,6, 7, 8, 9] )
          we call split left( [ 1, 2, 3, 4 ] )
          we call split left( [ 1, 2 ]  )
          we call split left( [ 1]  )
          Then we return with [1]

            we move on to the second function  mergeSortedArraysIntoOne(right)
                     [2]  <--- we return when arr length is less than or equal 1
          


          ------------------------------------merge([1], [2]) returns[1, 2]
            When we return from the right side.
             The function call to mergeSortedArraysIntoOne actually runs. 
            NOTE: we only run mergeSortedArraysIntoOne()  when both functions have returned. divideArrayUntilOneItemIsLeft(left) and divideArrayUntilOneItemIsLeft(right) have returned
          join([1], [[2]])   
***********************************************************************************
We move to  [ 3, 4 ]:
                  [3, 4]
                    /   \
                  [3]   <--- we return when arr length is less than or equal 1

We move to[4]:
                     [4]  <--- we return when arr length is less than or equal 1
                  
                

   Example 1.
   Question
   [9, 6, 5, 2]
   merge(mergeSort(left), mergeSort(right))

   Solution:
   Story
   Ma is my grand ma,
   ma has two children(Ina and Dianah)

   Ina
   has two children(Christain and Siki)

   Christain
   has one child(girl)

   Siki
   has one child(girl)

   Dianah
   has two children(Kesiana and Ejiro)

   Kesiana
   has 1 child(Azeriah)

   Ejiro
   has 1 child(Ian)
  
   Steps: [9, 6, 5, 2]
   merge(mergeSort(<left>[9, 6]), mergeSort(<right>[5, 2]))<--grand parent
   -----------------left parent
   merge(mergeSort(<left>[9]), mergeSort(<right>[6]))<-- left Parent
   9 <-left  of left parent
   6 <-right of right parent 
   mergeSort([9], [6]) = [6, 9] <-solves left parent
   -----------------Right parent
   merge(mergeSort(<left>[5]), mergeSort(<right>[2]))<-- right Parent
   5 <-left of right parent 
   2 <-right of right parent 
   mergeSort([2], [5])       = [2, 5] <-solves right parent
   mergeSort([6, 9], [2, 5]) = [2, 5, 6, 8] <-solves grand parent parent
  
   Example 2:
   Question
   [56, 2, 9, 80, 80, 4, 3, 3, 6]
   merge(mergeSort(left), mergeSort(right))

   Steps:
   Summary : 
   [56, 2, 9, 80                         80, 4, 3, 3, 6]
   [56, 2          9, 80]
   [56,      2]
   56-<resolution
   2-<resolution

   merge(mergeSort(<left>[56, 2, 9, 80 ]), mergeSort(<right>[ 80, 4, 3, 3, 6]))<--great grand parent
   -----------------START LEFT
   -----------------left
   merge(mergeSort(<left>[56, 2]), mergeSort(<right>[ 9, 80]))<-- left grand Parent
   merge(mergeSort(<left>[56]), mergeSort(<right>[2]))<-- left  Parent
   56 <-left  of left parent
   2 <-right of right parent 
   mergeSort([56], [2]) = [2, 56] <-solves left parent
   -----------------right
   merge(mergeSort(<left>[9]), mergeSort(<right>[80]))<-- right Parent
   9 <-left of right parent 
   80 <-right of right parent 
   mergeSort([9], [80])       = [9, 80] <-solves right parent
   mergeSort([2, 56], [9, 80]) = [2, 56, 9, 80] <-solves grand parent parent
   -----------------START RIGHT

   -----------------left
   merge(mergeSort(<left>[80, 4), mergeSort(<right>[ 3, 3, 6]))<-- right grand Parent
   merge(mergeSort(<left>[80]), mergeSort(<right>[4]))<-- right sid of right Parent
   80 <-answer returned left
   4 <-answer returned right
   mergeSort([80], [4]) = [4, 80] <-solves right parent
   -----------------right
   merge(mergeSort(<left>[3]), mergeSort(<right>[3, 6]))<-- right Parent
   3 <-left 
   merge(mergeSort(<left>[3]), mergeSort(<right>[6]))t
   3 <-left 
   6 <-right
   mergeSort([3], [6])       = [3, 6] <-solves right parent by calling merge sort
   mergeSort([3], [3, 6]) = [3, 3, 6] <-solves grand parent parent
   mergeSort([3], [3, 6]) = [3, 3, 6] <-solves grand parent parent
   mergeSort([2, 56, 9, 80], [3, 3, 6]) = [3, 3, 6] <-solves grand parent parent


   */
  return merge(mergeSort(left), mergeSort(right));
}
