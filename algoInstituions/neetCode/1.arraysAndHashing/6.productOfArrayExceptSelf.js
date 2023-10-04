function productExceptSelfBruteForce(nums) {
  // Time: O(N^2)
  const ans = [];
  nums.map((element, i) => {
    let product = 1;
    for (let index = 0; index < nums.length; index++) {
      if (index != i) {
        const elementInner = nums[index];
        product *= elementInner;
        console.log({ elementInner, product });
      }
    }
    ans.push(product);
  });
}
function ProductOfArrayExceptSelfLeftRightArray(nums) {
  const leftArr = [];
  let leftSum = 1;
  for (let i = 0; i < nums.length; i++) {
    leftArr.push(leftSum);
    leftSum *= nums[i];
  }

  let rightSum = 1;
  const rightArr = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    rightArr.unshift(rightSum);
    rightSum *= nums[i];
  }

  let answer = [];
  for (let i = 0; i < nums.length; i++) {
    answer.push(leftArr[i] * rightArr[i]);
  }
  return answer;
}

function ProductOfArrayExceptSelf2Pointer(nums) {
  let output = new Array(nums.length).fill(nums[0]);
  let cacheVar = nums[nums.length - 1];

  for (let i = 1; i < nums.length; i++) {
    output[i] = output[i - 1] * nums[i];
  }

  output[nums.length - 1] = output[output.length - 2];

  for (let j = nums.length - 2; j > 0; j--) {
    output[j] = output[j - 1] * cacheVar;
    cacheVar = cacheVar * nums[j];
  }
  
  output[0] = cacheVar;
  return output;
}

function productExceptSelfBruteForceComment(nums) {
  const ans = [];
  nums.map((element, i) => {
    let product = 1;
    /**
     * This is the bruteforce approach each element we multiply it by all other elements. Til we get an answer
     * example: [3,2,4]
     * ans = []  Ans starts as an empty array. Subsequently we would  update the correct answer
     * ans = [8] when we are on 3, mutliply  2 by 4 we get 8 we add it to ans array 
     * ans = [8, 12] we move to 2, mutliply 3 and 4 we get 12
     * ans = [8, 12, 6] we move to at 4, mutliply 3 and 2 we get 6 
     */
    for (let index = 0; index < nums.length; index++) {
      if (index != i) {
        const elementInner = nums[index];
        product *= elementInner;
      }
    }
    ans.push(product);
  });
}

function ProductOfArrayExceptSelfLeftRightArrayComment(nums) {
  // arr:      [ 1,  2,  3,  4,  1, 2];
  // left:     [ 1,  2,  6,  24, 24, 48 ]
  // right:    [ 48, 48, 24, 8,  2,  2  ]
  // answer:   [ 48, 24, 16, 12, 48, 24 ]

  //LEFT
  /**
     arr:       [1, 2, 3, 4, 1, 2];
     leftArr:   [1, 2, 6, 24, 24, 48 ]
    explanation:  for each element we multiply it by the sum.
    We start at The first element of the arr is 1. while sum is 1. since it is initialized as 1. so 1 times 1 = 1. the new value of sum is 1. we push sum to the leftArr. The leftArr is now [1]
    Then we go to  second element of of the arr 2. now sum is 1. since that was the last value 2 times 1 = 2. the new value of sum is 2. we push sum to the leftArr. the leftArr is now [1, 2] 
    so we push 1, 2, 6, 24, 24, 48 to the leftArr respectively to get  [1,  2,  6,  24, 24, 48 ]
   */
  const leftArr = [];
  let leftSum = 1;
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    leftSum *= element;
    leftArr.push(leftSum);
    console.log(`leftArr=`, leftArr);
  }
  /**
      EXAMPLE 1:
      ProductOfArrayExceptSelf([1,2,3,4,1,2]);
      arr:     [1,  2,  3,  4,  1,  2  ]
      leftArr: [1,  2,  6,  24, 24, 48 ]
      explanation:  for each element we multiply it by the sum.
       We start at The first element of the arr is 1. while sum is 1. since it is initialized as 1. so 1 times 1 = 1. the new value of sum is 1. we push sum to the leftArr. The leftArr is now [1]
       Then we go to  second element of of the arr 2. now sum is 1. since that was the last value 2 times 1 = 2. the new value of sum is 2. we push sum to the leftArr. the leftArr is now [1, 2] 
       so we push 1, 2, 6, 24, 24, 48 to the leftArr respectively to get  [1,  2,  6,  24, 24, 48 ]


      STEP BY STEP PROGRESSION:
      each element we calculate sum*element
      1. element = 1;  leftSum = 1; and 1*1 = 1
      leftArr= [ 1 ]
      2. element = 2;  leftSum = 1; and 2*1 = 2
      leftArr= [ 1, 2 ]
      3. element = 3;  leftSum = 2; and 3*2 = 6
      leftArr= [ 1, 2, 6 ]
      4. element = 4;  leftSum = 6; and 4*6 = 24
      leftArr= [ 1, 2, 6, 24 ]
      5. element = 1;  leftSum = 24; and 1*24 = 24
      leftArr= [ 1, 2, 6, 24, 24 ]
      6. element = 2;  leftSum = 24; and 2*24 = 48
      leftArr= [ 1, 2, 6, 24, 24, 48 ]
     */

  //RIGHT
  /**
     arr:       [ 1,  2,  3,  4, 1, 2 ];
     rightArr:  [ 48, 48, 24, 8, 2, 2 ]
    explanation: we star from the back of arr and  for each element we multiply it by the sum.
    We start at The last element of the arr which is 2. while sum is 1(since it is initialized as 1). we multiply 2 times 1 equals 2. the new value of sum is 2. we add 2 to the front of the the leftArr with unshift(). The leftArr is now [2]
    Then we go to  second to the last element of of the arr 2. sum is currently 1(since that was the last value of sum). we multiply 2(element) times 1(sum) which is equal to 1. the new value of sum is 2. we add 2 to the front of the the leftArr with unshift(). the leftArr is now [2, 2] 
    so we push 1, 2, 6, 24, 24, 48 to the leftArr respectively to get  [1,  2,  6,  24, 24, 48 ]
   */
  let rightSum = 1;
  const rightArr = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    const element = nums[i];
    rightSum *= element;
    console.log(
      `${
        nums.length - i
      }. element = ${element};  leftSum = ${rightSum}; and ${element}*${rightSum} = ${
        element * rightSum
      }`
    );
    rightArr.unshift(rightSum);
    console.log(`rightArr=`, rightArr);
  }

  /**
    STEP BY STEP PROGRESSION:
    each element we calculate sum*element
    
    1. element = 2;  leftSum = 2; and 2*2 = 4
    rightArr= [ 2 ]
    2. element = 1;  leftSum = 2; and 1*2 = 2
    rightArr= [ 2, 2 ]
    3. element = 4;  leftSum = 8; and 4*8 = 32
    rightArr= [ 8, 2, 2 ]
    4. element = 3;  leftSum = 24; and 3*24 = 72
    rightArr= [ 24, 8, 2, 2 ]
    5. element = 2;  leftSum = 48; and 2*48 = 96
    rightArr= [ 48, 24, 8, 2, 2 ]
    6. element = 1;  leftSum = 48; and 1*48 = 48
    rightArr= [ 48, 48, 24, 8, 2, 2 ]
   */

  let answer = [];
  answer.push(rightArr[0]);
  for (let i = 2; i < nums.length; i++) {
    console.log(i);
    answer.push(leftArr[i - 2] * rightArr[i]);
  }
  answer.push(leftArr[leftArr.length - 2]);
  return answer;
  /**
   EXPLANATION
   the first element of answer is the first element of the rightArr
   the middle elements are the element to the left of leftArr and to the right of rightArr
   the last element of answer is the second to the last element of the leftArr.

   Na wa for you o Ib as you write this kind complex logic who suppose gram am?

   left:     [ 1,  2,  6,  24, 24, 48 ]
                   *
   right:    [ 48, 48, 24, 8,  2,  2  ]
                           *
   answer:   [ 48, 24, 16, 12, 48, 24 ]
 */
}

function ProductOfArrayExceptSelf2PointerComment(nums) {
  /**Approach
   */ 
  /**We  the fill output array initially with the first item of the nums array/
   * example if nums is [1, 2, 3, 4];
   * The initial value oof output is [1, 1, 1, 1]
   * 
   * At the end of the functions exection output would become [1, 2, 6, 24]. I would explain how we archieved this later.
   * 
   * The main reason for this is we want the first item of the output array (that is the answer) to the the 
   * first item of the nums array. Why is that the case?
   */ 
  let output = new Array(nums.length).fill(nums[0]);

  /**cacheVar is initialised to the last item of the array.
   * Example: 
   * nums    = [1, 2, 3, 4]
   * 
   * therefore: 
   *cacheVar = 4;  --> nums[4 - 1]; nums[3]; that is the last item of nums
   */

  let cacheVar = nums[nums.length - 1]; //--> we store the last item of the array. We would overwrite the last item in subsequent operation


  /**
   * We start the loop from the second item of the array to the last item.
   *        [1,   2,   3,   4]
   *              i     
   * If you start from the second item who would be the predecessor for comparison sake?
   *        [1, 2, 3, 4]
   *     ?   i
   * 
   * We Start from the second item because we want to compare the current item with its predecessor. 
   *        [1,   2,   3,   4]
   *         j V. i
   * 
   * 
   * This loop executes to make the particular index of output array the multiplication of all items on the left side. 
   *  Example:  when i is 3.
   *   nums =  [1,   2,   3,   4]
   *                           i // we should have 1 * 2 * 3
   *output =   [              24]// // we should have 1 * 2 * 3
   * 
   * How wo do it is:
   * 1. We initialize output[0] to nums[0] since that is correct value of 
   * 2. Fpr all subsequent values of output. The Current value of nums by all the preceeding values of ouput
   *  Example:  when i is 1.
   *   nums =  [1,   2,   3,   4]
   *                 i            // we have seen 1 previously. We have one currently.
   *output =   [     2          ] //  we should have 1 * 2
   *
   *    
   */
  for (let i = 1; i < nums.length; i++) {
    output[i] = output[i - 1] * nums[i];
    /**
    iteration 1:
     nums     = [1, 2, 3, 4]
                    *
     output   =    [1, 1, 1, 1]     --->
                _____________
     output   = [1,*2*,1, 1]        ---> 
               
     
    iteration 2:
     nums     = [1, 2, 3, 4]
                       *
     output   =    [1, 2, 1, 1]     --->
                _____________
     output   = [1, 2 ,6, 1]        ---> 
     

    iteration 3:
     nums     = [1, 2, 3, 4]
                          *
     output   =    [1, 2, 6, 1]     --->
                _____________
     output   = [1, 2 ,6, 24]       ---> 
               
     -------------
    Multiplication
     nums     = [1, 2, 3, 4]
                    *  *  *
     output   =    [1, 2, 6,  24]  ---> we multiply each number by ALL the calculation so far, which is stored as the previous value of output. so for the first iteration it is: nums[1] * output[0]
                _____________
     output   = [1, 2, 6, 24]  --->After the loop executes
                -------------
      we start on the second item and on each iteration we multiply the item on OUTPUT previous index by  NUMS current index


      QUESTION?
      Why are we multiplying OUTPUT[previous index] *  NUMS[current index]? 
      OUTPUT[previous index] *  NUMS[current index]
      we want to get an array containing all the products on the left side.
      we can do this by having a sum variable we update each time or when we multiply the last output array item as that is the last sum

      let output = []; --> we create an empty array  to hold the values
      let sum = 1;     --> we create a sum variable we would update each time we 

      for(let i = 0; i < nums.length; i++) {
        sum *= num[i];   ----> It is short for sum = sum * num[i]. Sum variables can be used to create totals over data sets. The new value is to be added to the existing total. The total starts at 1. And the first element we times it by 1. eg. [1, 2, 6, 6] becomes [1, 2, 12, 72]: 1 * 1 = 1; 2 * 1 = 2; 6 * 2 = 12; 6 * 12 = 72;
        output.push(sum) ----> this is the second step of this operation updating the output, because we want output to contain all the sums we have.
      }
      I do not see anything wrong with this pattern(using a sum variable to total). Actually it is even 
      mor time saving because fill has O(N) time and the loop has O(N) so there is O(2N). Whereas the sum patternn only uses a single O(N). But you are not a village person that only uses local patterns and should be open to exotic patterns.
      step 1: create an output that is filled. do not be pushing the items as you go
      step 2: multiply the previous output item with the current nums item. Since we are multiplying previous and current you should know the loop would start at 1 instead of starting at 0. else  what would the previous be? 

      let output = new Array(nums.length).fill(nums[0]);
      for(let i = 1; i< nums.length; i++) {
        output[i] = nums[i] * output[i - 1]
      }

     */
  }
 
  output[nums.length - 1] = output[output.length - 2];
  /**
   *output      =  [1, 2, 6, 24]  --->Before execution
   *output[3]   = 6 --> output[3] = output[4 - 2] = output[2] = 6
   *output      = [1, 2, 6, *6*] --> output value we overwrite the last item with the item imidiately before it. so index 3 overwritten by index 2.
   */
  for (let j = nums.length - 2; j > 0; j--) {
    /**nums    =  [1, 2, 3, 4]
     *output   =  [1, 2, 6, 6]   --->Before the loop starts
     *cacheVar = 4;
     * j      =  4 -2 = 2; j > 0; j--;  --> loop would have two iterations. first iteration j=2; next j = 1;
     
    example
    nums = [1, 2, 3, 4]
    output       = [1,  2,  6,  6]

           Multiplication
     output    =  [1, 2, 6, 6]
                   *  *  *
     cacheVar =   12  4               ---> we multiply each number by ALL the calculation so far, which is stored as the previous value of output. so for the first iteration it is: nums[1] * output[0]
                  _____________
     output     = [12, 8, 6, 6]      --->After the loop executes
      
     -------------
     */
    output[j] = output[j - 1] * cacheVar;
    cacheVar = cacheVar * nums[j];
    /**j=2:
     * output[2] =  output[2 - 1] * 4 = output[1] * 4 = 2 * 4 = 8;   -->that is output =  [1, 2, *8*, 6]
     *cacheVar   = 4 * nums[2] = 4 * 3 = 12
     *
     *j =1:
     * output[1] =  output[1 - 1] * 12 = output[0] * 12 = 1 * 12= 12;   -->that is output =  [1, *12*, 8, 6]
     *cacheVar   = 12 * nums[1] = 12 * 2 = 24

      QUESTION?
      1. Why are we multiplying OUTPUT[previous index] *  cacheVar? 
       Answer: OUTPUT[previous index] *  NUMS[current index]
      
      2. Why are we multiplying cacheVar by nums[j]? 
     */
  }
  /**
   * We are updating the first element of the the output array to be cache far.
   * Example: 
   * output    = [12, 8, 6, 6]
   * cacheVar = 24
   * 
   * What runs: 
   * output[0] = 24;
   * output    = [24, 8, 6, 6]
   * 
   * 
   * Question? 
   * a. why are we updating the first element of output to be cachVar?
   * Answer cacheVar is the correct right product. and we want the first item to be the right prodict
   */
  output[0] = cacheVar;

  return output;
}

// Write in js thhis is c from the algo class
// public int[] productExceptSelf(int[] nums) {
//         int n = nums.length;
//         int[] leftProducts = new int[n];
//         int[] rightProducts = new int[n];
//         int[] finalAnswer = new int[n];
        
//         leftProducts[0] = 1;
//         for (int i = 1; i < n; ++i) {
//             leftProducts[i] = nums[i-1] * leftProducts[i - 1];
//         }
        
//         rightProducts[n-1] = 1;
//         for (int i = n - 2; i >= 0; --i) {
//             rightProducts[i] = nums[i+1] * rightProducts[i+1];
//         }
        
//         for (int i = 0; i < n; ++i) {
//             finalAnswer[i] = leftProducts[i] * rightProducts[i];
//         }
        
//         return finalAnswer;
//     }