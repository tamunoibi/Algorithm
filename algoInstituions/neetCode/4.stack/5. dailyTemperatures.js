/**
 * Question: 
 * Given an array of integers temperatures represents the daily temperatures, 
 * return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature.
 * If there is no future day for which this is possible, keep answer[i] == 0 instead.
 * 
 * Explanation: 
 * The challenge of this question is understanding what is being said. 
 * A warmer temperature means a higher number. For example 3 vs 10. 10 is the warmer temperature as it is the higher number
 * We are counting how many items before we have a higheer number. 
 * Example we have [10, 100]. 
 * From 10 we have 1 item before a higher number of 100. So our answer for that index is 1
 * When we are at 100 we are on the last item so a higher number can not be found. So our answer for that index is 0
 * final answer ans [1, 0]
 * To interprete the question:
 * The qustion: `such that     answer[i]                    is the number of days you have to wait after the     ith day                to get a     warmer temperature.`
 * read as      `such that     each item of the answer      is the number of days you have to wait after the     that item's index      to get a     higher number.
 * 
 * 
 * Example 1: 
 * input [100, 1, 2]
 * From 100 we have no higher number. The answer is 0
 * From 1 we count one item before we get to a higher number. The answer is 1
 * From 2 we have no higher number.Since we are on the last item The answer is 0
 * answer [0, 1, 0]
 * 
 * Visually:
 * [100, 1, 2]
 *    ^<---------Never found a higher number so return 0
 *    |  
 * 
*  [100,  1,   2]
 *        ^<--^Found a higher number one step away so return 1
 *        |  
  *  [100, 1, 2]
 *            ^<-------Never found a higher number so return 0
 *            | 
 *
 * 
 * Example 3:
 * Input: temperatures = [30,30]
 * Output: [0, 0]
 * 
 * Explanation: 
 * When we are on 30  the next higher number is none existent.
 * Notice that the next number is 30 and it is same as our current element which is 30 and NOT higher than our current element. So we put 0 at that index.
 * When we are on 30  the next higher number is none existent. Since We are on the last item there can never be a higher item . Soo we put 0
 * 
 * Example 3:
 * Input: temperatures = [73,74,75,71,69,72,76,73]
 * Output: [1,1,4,2,1,1,0,0]
 * 
 * 
 * Similar Pattern
 * This question is similar to 'next greater element' on leetcode.
 * It has the same pattern of using montonically decreasing arrays to solve it.
 */
// O(N ^ 2)
function dailyTemperaturesBrueteForce(temperatures) {
  const output = [];
  for(let i = 0; i < temperatures.length; i++) {
    let j = i + 1;
    while(temperatures[j] < temperatures[i] && j < temperatures.length) {
      j++;
    }
    j < temperatures.length ? output.push(j - i) :  output.push(0);
  }
}

// O(N)
function dailyTemperaturesStack(temperatures) {
  const stack = [];
  const answer = new Array(temperatures.length).fill(0);
  for(let i = 0; i < temperatures.length; i++) {
    while (stack.length && temperatures[i] > stack[stack.length - 1][0]) {
        const [temp, stackIndex] = stack.pop();
        answer[stackIndex] =  i - stackIndex;
    }
    stack.push([temperatures[i], i]);
  }
  return answer;
}

// O(N ^ 2)
function dailyTemperaturesBrueteForceComment(temperatures) {
    
  const output = [];
  for(let i = 0; i < temperatures.length; i++) {
    let j = i + 1;
    /**
     * temperatures[j] < temperatures[i] 
     *  If the next item is less than the current item
     *  we keep increasing the count
     * Example:  [100, 3, 4, 6]
     * For the first item:
     * When we start  the outer loop from the first item and the inner loop from the second item
     * [100, 3, 4, 6]
     *   i   j
     * We keep increasing j until we either get to the last item OR we find a j that is bigger than our item. 
     * [100, 3, 4, 6]       Here we compare 100 vs 4
     *   i      j
     * We keep increasinng j until we either get to the last item OR we find a bigger item to j. 
     * [100, 3, 4, 6]      Here we compare 100 vs 6
     *   i         j
     * 
     * 
     * The next warmer temperature for a partcular index is the differnce between the current index and the next index with a higher number
     * That is the answer for each item is the difference between that index and the index of the next greatest element
     *                               3 - 0 = 3
     *                             |---------|
     *                     index:  0  1  2   3
     * For example temperature = [10, 4, 3, 19] 
     * 
     * The answer is 3                          
     * we default all the stack items as 0.
     * 
     * j < temperatures.length
     * We have to check if j has gotten to the last item so that we do not have a never ending loop
     * [100, 3, 4, 6]
     *   i              j
     * Note that j would end at index 4. 
     *  The last item in the array is index 3. 
     *  But if nothing is found it would increase up to one more.
     * What we are trying to avoid is trying to access more than the array items.
     * Please continue  if we still have items to visit in the array
     * continue if j < temperatures.length
     * 
     */
    while(temperatures[j] < temperatures[i] && j < temperatures.length) {
      j++;
    }
    /**
     * 
     * j < temperatures.length Then RETURN  0
     * If we exceeded the last item it means a higher number can no longer be founnd so return 0
     * example:
     * temperatures [100, 3, 4, 6]
     *                i            j
     * i = 0
     * j = 3
     * note j was 1, 2, 3, 4, 5 respecitvely
     * When j becomse 4 that means we have searched through the whole array and did not find a higher number as such an answer is not possible. 
     * We have searched: 3, 4, 6 
     * and now we had to even increase to j to outside of the array stil no answer
     * in that case we should return 0
     * 
     * 
     * Example:
     * temperatures [100, 3, 4, 6]
     *                    i  j
     * i = 1
     * j = 2
     * If  j is still within the array items. That means a higher temperature was found
     * In this particular case we found it at the very next item. 
     * We check where we found it minus where we are currently at to know how many steps it took us to find it.
     * That is the difference between  the index we found it at and our current index.
     * 
     */
    j < temperatures.length ? output.push(j - i) :  output.push(0);
  }
}


// O(N)
// You can solve this in linear time with a monotonic decreasing stack. That is a stack you arrange in descending order. example:  'biggest,bigger, big'
function dailyTemperaturesStackComment(temperatures) {
     /** Approch: 
     * We Use additional space to solve this in linear time
     * We make use of a stack that is arranged in  descending order. that is: [Biggest, big, small]
     * 
     * 
     * There are two important things to understand
     * 1. Why does a stack arranged in descenndig order work?
     * 2. How do we get a stack to be arranged in descending order?
     * 
     * WHY DOES A STACK ARRANGED I DESCENNDIG ORDER WORK?
     * It works because you must not search through all the array items.
     * You immidiately know that if I am looking for a number that 
     * is bigger tha 50. If the array is arranged in descending order
     * once I have checked the last item and it is smaller than 50 example it is 45
     * There is no need to check all other items. You can never see it.
     * The you check the last item and it is not.
     * 
     * [1, 1, 2, 2, 3] the items are arranged so to find if there is an item smaller than any item does not involve loopig from start to finish0 I take the first item. 
     * STARTIN                              ENDING
     * --------------------------------------------
     *  |   |
     *  |   |    |   |    |   |    
     *  | 3 |    | 2 |    | 2 |    | 1 |   | 1 | 
     * --------------------------------------------
     *              Sizes of items 
     * 
     * PLACE 0: If you want to place 0 You compare it with the last item in the array and you place it at the very last spot immidiately after 1.
     * PLACE 2: If you want to place 2 You compare it with the last two items in the array and you place it immidiately after 2. 
     * This is the beauty of arranged things.
     * 
     * 
     * 
     * 
     * 
     * HOW DO WE GET A STACK TO BE ARRANGED IN DESCENDING ORDER?
     * For every item in the temperatures array we add it to our stack. 
     * There is just ONE catch all items in the stack that are bigger than this current item must be removed before addinng it the item.
     * Exampe A: 
     * I give you smallerthanthesmallest. 
     * The stack is currently: [BIGGEST, big, smallest]
     * 
     * There is only one step to do we just add the item called smallerthanthesmallest to to the back of the array
     * 1. Add this item to the stack
     *       old stack: [BIGGEST, big, smallest]
     *       new stack: [BIGGEST, big, smallest, smallerthanthesmallest]
     *  // We want the smallest items at the back. The stack is being arranged in descending order
     * 
     * Example B: 
     *  I give you BiGGERTHANBIGGEST. 
     * The stack is currently [BIGGEST, big, smallest]
     * 
     * Their would be two steps to do since this is bigger than what we currently have. 
     * And we want the array sorted in descending order (that is: biggest, bigger, big)
     *  If we just add it at the back, stack becomes:
     *   [BIGGEST, Big, smallest, BiGGERTHANBIGGEST]
     * This is very very wrong. 
     * We first remove all the smaller items. before adding it.'
     * 
     * Can you guess the items we would remove? 
     * ans the items we would remove are: smallest, big, BIg
     * 
     * To summarise this approach:
     * The steps for when we have a bigger is:
     * 1. remove all smaller items in the stack
     * 2. add the bigger item to the stack
     * 
     * 
     *     how stack started  = [BIGGEST, Big, smallest, BiGGERTHANBIGGEST]
     *   1. Remove all smaller items before you add it 
     *        stack = []                       //  Our value for  stack becomes empty since everything is smaller than BiGGERTHANBIGGEST
     *   2. Add the item to the back  of the stack
     *     new stack = [BiGGERTHANBIGGEST]      // Add the item to the back  of the stack
     * 
     * 
     * 
     * example 1: 
     * temperatures: [5, 4, 3, 9,]
     * 
     *        stack: [5, 4, 3, ?,]
     * 
     * When we get to 9 we must remove all other stack elements that are smaller than 9. 
     * This is because 9 as the biggest must be at the last.
     * The stack is arranged in descending order: 
     *   0        1      2
     * [BIGGEST, big, smallest]
     * The bigger items are to be in the front of the array.
     * So any value that you are given you must first makes sure that it is in the right position.
     * 
     * const arr   = [];
     * const stack = [];
     * for(let i = 0; i < arr.length; i++) {
     *    while(stack.length && arr[i] > stack[stack.length -1]) {
     *       stack.pop()
     *    }
     *    stack.push(arr[i])
     * }
     * 
     * 
     * SOLVING THE PROBLEM
     * After you have understood why the we can use descending arrays and how to create them.
     * we then go to solve the problem. To solve the problem you must understand
     * 1. How to calculate the warmer temperature
     * 2. Why we default all the items to 0
     * HOW TO CALCULATE THE WARMER TEMPERATURE
     * The next warmer temperature for a partcular index is the differnce between the current index and the next index with a higher number
     * That is the answer for each item is the difference between that index and the index of the next greatest element
     *                               3 - 0 = 3
     *                             |---------|
     *                     index:  0  1  2   3
     * For example temperature = [10, 4, 3, 19] 
     * 
     * The answer is 3      for that index
     * 
     * 
     * 
     * WHY WE DEFAULT ALL THE ITEMS TO 0:                
     * We default all the stack items to 0 since that is the answer for items that are not found.
     * so we start everything at 0. 
     * example: temperatures = [10, 4, 3, 19] 
     * We start all the answers at 0 
     * answers = [0, 0, 0, 0]
     * 
     * when we get an answer for any index we then change that index.
     * example:
     * answers = [0, 0, 0, 1]
     * 
     * It is noteworthy that we are not getting the correct answers by going index 1, 2, 3
     * rather we would get the correct answers when we are coming backwards. 
     * The way this monotonically decreasing string works is that When we would get the answer for 
     * this first index is not now that we are on the first index but when we get to the future index
     * That is after increasing 1, 2, 3; We would now count backwards again 2, 1
     * This might not make sense now but it would be explained futher down. 
     * 
     * 
     * 
     * EXAMPLE:
     * temperatures = [10, 4, 3, 19]
     * Intialization 1:
     *  temperatures = [10, 4, 3, 19]
     *  stack        = []
     *  answers      = [0,  0,  0, 0]
     * 
     * iteration 1:
     *                    [10, 4, 3, 19]
     *                      ^
     *                      |
     *  stack        = [10]
     *  answers      = [0,  0,  0, 0]
     * // we imidiately add it to the stack. Since their is no higher item. We DON"t update the answer as the answer is only updated when we found higher items
     * 
     * iteration 2:
     *                    [10, 4, 3, 19]
     *                         ^
     *                         |
     *  stack        = [10, 4]
     *  answers      = [0,  0,  0, 0]
     * // we imidiately add 4  to the stack. Since their is no higher item. We DON"t update the answer as the answer is only updated when we found higher items
     * 
     * 
     * iteration 3:
     *                    [10, 4, 3, 19]
     *                            ^
     *                            |
     *  stack        = [10, 4, 3]
     *  answers      = [0,  0,  0, 0]
     * // we imidiately add 3  to the stack. Since their is no higher item. We DON"t update the answer as the answer is only updated when we found higher items
     * 
     * 
     * iteration 4:
     *                    [10, 4, 3, 19]
     *                                ^
     *                                |
     *  stack        = [10, 4, 3]
     *  answers      = [0,  0,  0, 0]
     * // Since this is bigger we would keep removing all smaller items
     *    innner itertion 1:
    *                         0   1  2   3
     *                       [10, 4, 3, 19]
     *                                   ^
     *                                   |
     *                         0  1  2
     *            stack    = [10, 4]
     *            answers  = [0,  0, ?, 0]
     *    // You remove the last item from the stack. that is 3 and calculate the correct answer for that index that is for index 2.
     *    // That is the currenntIndex  - the index of the stack item you removed
     *    // That is                3   -  2
     * 
     *            answers      = [0,  0, ?, 0]
     *            answers      = [0,  0, 1, 0]
     * 
     *    innner itertion 2:
     *                        0   1  2   3
     *                       [10, 4, 3, 19]
     *                                   ^
     *                                   |
     *            stack        = [10, *]
     *            answers      = [0,  0,  1, 0]
     *    // You remove the last item from the stack. that is 3 and calculate the correct answer for that index
     *    // Note the calculation to get the answer is: the currenntIndex  - the index of the stack item
     *   //That is 3 - 1
     *   // That is 
     *            answers      = [0,  ?, 1, 0]
     *            answers      = [0,  2, 1, 0]
     * 
     *    innner itertion 3:
     *                        0   1  2   3
     *                       [10, 4, 3, 19]
     *                                   ^
     *                                   |
     *            stack        = [10, *]
     *            answers      = [0,  2,  1, 0]
     *    // You remove the last item from the stack. that is 4 and calculate the correct answer in the output for  that index you removed
     *    // where 4 was in the answer is not correct and it needs to be updated
     *    // Note the calculation to get the update is 4's index - currentIndex. 
     *    // That is the currenntIndex  - the index of the stack item You popped
     *    // That is 2 - 1 
     *   // That is 
     *            answers      = [?,  2, 1, 0]
     *            answers      = [3,  2, 1, 0] 
     * 
     * 
     * 
     * Another explanation:
     * The problem can be solved in O(N) time by creating a seconnd  array.
     *  This array would be in decreasing order. that is 'biggest, bigger, big'
     * Example
     * temperature = [7, 3, 4, 8] 
     * 
     * iteration one:
     * item 7, index 0:
     * I start with 7 I am looking for a higher temperature in the stack. The stack is currently empty []
     * Since none is found I add 7 to the stack
     * The stack is now: [7]
     * 
     * iteration two:
     * item 3, index 1:
     * I am looking for a higher temperature in the stack than 3. The stack is currently [7]
     * Since 7 is I add 3
     * Why this works is subsequently if I need to know the biggest item, 
     * I know it is at the front of the stack. If I compare a value like 2. 
     * I don't need to go to the end of the stack. Once I compare it with 3 and no match I would just move onn
     * The stack is now: [7, 3]
     * 
     * iteration three:
     * item 4, index 2:
     * I am looking for a higher temperature in the stack than 4. The stack is currently [7, 3]
     * Since 4 is greater than 3. 
     * I remove 3 and add 4. Since I made a removal I would update my answer
     * The stack is now: [7, 4]
     */
    // initialise all the values of output to 0.
    // since this is the default value when no answer is found 
  const answer = new Array(temperatures.length).fill(0);
  // stack would be an array with two values. 
  // The first item would be the temperature the second item would be the index
  // pair: [temperatureValue, index]
  // example: temperatures = [8, 6]; stack would be [[8, 0], [6, 1]]
  const stack = [];
  for(let i = 0; i < temperatures.length; i++) {
    /**
     * 
     * We only want to pop from the stack if: 
     *   there  there are values in the stack 
     *  AND  and the current temperature is greater than the last value of our stack.
     * example: 
     *  curretTemperature = 15 
     *  stack = [20, 2, 5]
     *  we would pop out 2, and 5
     * stack would become stack = [20, 15]
     */
    while (stack.length && temperatures[i] > stack[stack.length - 1]) {
        // Get the value and the index value
        const [temp, stackIndex] = stack.pop();
       /**
         *  
         * The answer at this stacks index is the difference between 
         * this current index where we found a bigger item VS. the previous stack items that are smaller
         *
         * example     temperature = [9, 3, 5];
         * initially output starts at [0, 0, 0]; // We default the answer to 0 since when no answer is found make that one zero
         *  stack starts as an empty array []
         * 
         * iteration 1:
         *                 [9, 3, 5]
         *                  ^
         *                  |
         * we add the item  stack to the stack
         * stack          = [[9, 0]]
         * answer         = [0, 0, 0]
         * 
         * 
         * 
         * iteration 2:
         *                 [9, 3, 5]
         *                    ^
         *                    |
         * we add the item  stack to the stack 
         * stack         = [[9, 0],[3, 1]]
         * answer        = [0, 0, 0]
         * 
         * 
         * 
         * 
         * iteration 3:
        *                 [9, 3, 5]
         *                       ^
         *                       |
         * we DON'T add the item to the stack  yet. Instead we remove all previous stack items. While removing them we change the answer at those indexes:
         * stack         = [[9, 0],[3, 1]]
         * answer        = [0, 0, 0]
         * 
         *          inner iteratinon 1: 
         *          starting values
         *          currentIndex = 2
         *          stack         = [[9, 0],[3, 1]]
         *          answer        = [   0,     0,    0]
         * 
         *          ending values
         *          currentIndex = 2
         *          stack         = [[9, 0]]
         *          answer        = [   0,     1,    0]
         *           
         *          
         *         Explanantion:
         *         Operations to be run:
         *          a. we remove the last item on the stack. That is the stack goes from 
         *                   [[9, 0],[3, 1]] 
         *         to this:  [[9, 0]] 
         *    
         * 
         *          b. The removed item is [3, 1] 
         *             we change the value of answer at the removed stacks index 
         *             because it means there is a more correct answer. There is an item with a bigger temperature
         *             NOTE That is it is not the current inndex we are changing index 2 value we are changing but index 1
         *   
         *             distanceToHigherNumber = currentIndex - lastStackItemIndex
         *                                        2          -     1              = 1
         * 
         * 
       *                           0       1     2
         *          answer        = [2,     1,    0]
         * 
         *          inner iteratinon 2: 
         *          starting values
         *          currentIndex = 2
         *          stack         = [[9, 0]]
         *          answer        = [   0,     1,    0]
         * 
         *          ending values
         *          currentIndex = 2
         *          stack         = []
         *          answer        = [   2,     1,    0]
         *           
         *          
         *         Explanantion:
         *         Operations to be run:
         *          a. we remove the last item on the stack. That is the stack goes from 
         *                   [[9, 0]] 
         *         to this:  []] 
         *    
         * 
         *          b. The removed item is [9, 0] 
         *             we change the value of answer at the removed stacks index 
         *             because it means there is a more correct answer for that index. That is There is an item with a bigger temperature
         *             NOTE That the current index is 2 and it is not the  answer at the current index we are changing, but the answer at the removed index
         *   
         *            distanceToHigherNumber = currentIndex - lastStackItemIndex
         *                                             2          -     1        = 1
         * 
         * 
         *                           0       1     2
         *          answer        = [2,     1,    0]
         * 
         * 
        */
       /**
        * We subtract the i from stackIndex
        * distanceBetweenCurrentItemAndNextHighestItem = currentIndex - previousHighetNumberIndex
        *                  
        *                        0  1  2  3  4
        *      temperature =   [8, 7, 6, 5, 20]
        *      distace     =    ^___________^
        *                                   |we are at index 4
        * 
        * 
        *    The main question is how did I even get to 20 from where I am at 8?  
        *    Answer: I am nnot at 8. I am at 20. I keep going backwards to 8
        *
        *    STEP ONE:
        *                 0 1  2  3, 4
        *      answer = [0, 0, ?, 0, 0]   we change he value of index 2 from 0 to 1.Because:  4 - 3 = 1
        *                         ^
        *                         |
        *    STEP TWO:
        *                0  1  2  3  4
        *      answer = [0, ?, 1, 0, 0]   we change he value of index 1 from 0  to 2.Because:  4 - 2 = 2
        *                      ^
        *                      |
        *    STEP THREE:
        *                0  1  2  3  4
        *      answer = [0, ?, 1, 0, 0]   we change the value of index 0 from 0 to 3. Because 4 - 1 = 3
        *                   ^
        *                   |
        *    STEP FOUR:
        *                0  1  2  3  4
        *      answer = [0, ?, 1, 0, 1]   we change the value of index 0 from 0 to 4. Because 4 - 0 = 4
        *                ^
        *                |
        */

        output[i] = i - stackIndex;
    }
    // Add the temperature value and the index to the stack
    stack.push([temperatures[i], i]);
  }
  return answer;
}