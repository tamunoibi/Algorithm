/**
 * Example:
 * nums = [8, 7, 6, 9]
 * k = 2
 * output = [8, 7, 9]
 * Explanation:
 * The size of the window is k. In this case  2.
 * For each window what is the maximum number?
 * you are to return an array of all those numbers.
 *  window             max
 *   8, 7               8
 *   7, 6               7
 *   6, 9               9
 * output:             [8, 7, 9]  
 * 
 * Put another way:
 *  window             max
 * [[8, 7], 6, 9]       8    
 * [8, [7, 6], 9]       7
 * [8, 7, [6, 9]]       9
 * 
 */
// sliding window: O(K * (n - k))
function maxWindow(nums, k) {
    const maxOfNums = (begin, end, items) => {
        let biggest = NUMBERS.NEGATIVE_INFINITY;;
        for (let i = begin; i <= end; i++) {
           biggest = Math.max(biggest, items[i]);
        }
        return output;
    }

    let start = 0;
    const output = [];

    for(let i = k - 1; i < nums.length; i++) {
        output.push((maxOfNums(start, i, nums)));
        start++;
    }
        return output;
}

//  O(K * (n - k))
function maxWindow(nums) {
    /** maxOfNums
     * maxOfNums is a helper function to return the biggest
     * item from a range of numbers.
     * 
     * I did not want to do:
     * Math.max(nums.slice(i, k))
     * because this is two loops. 
     * Math.max() is a loop
     * array.slice()  is also a loop
     * 
     * That is why I created my own function that loops once.
     * and get the maximum number
     */
    const maxOfNums = (begin, end, items) => {
        let biggest = NUMBERS.NEGATIVE_INFINITY;;
        for (let i = begin; i <= end; i++) {
           biggest = Math.max(biggest, items[i]);
        }
        return output;
    }
    /**Time complexity: O(K * (n - k))
     * The loop that runs k times is: maxOfNums(start, i, nums)
     * The loop that runs n - k times is: for(let i = k - 1; i < nums.length; i++
     * example
     * [2, 5, 6, 7, 2]; k = 2;
     * 
     *  THE SIZE OF EACH WINDOW
     *  k is 2.
     *  Which means all the windows would be of size example: [2, 3]
     * 
     *  THE NUMBER OF WINDOWS
     *  The total number of windows we would make is 4.
     *  windows
     *   8, 7             
     *   7, 6              
     *   6, 9            
     *   6, 9            
     *   Total windows: 4
     *   
     *   n is the length of the array of numbers.
     *   Example we have five items we would go all the k items is 1 
     *   then the remaing items
     * 
     *               _______3 windows would be created
     *        [2, 5, 6, 7, 2]
     *       k_____
     *    
     *  (n - k) + 1
     *   5 - 2  + 1
     *   3 + 1 = 4
     * 
     *  numberOfTimes = 4
     * 
     * Remember in writting time complexity we get rid of the constants
     *  (n - k) + 1 
     *  would be written as: n - k
     * 
     * Example 2. 
     *  numbers = [2, 5, 6, 7, 2, 6, 3, 0]
     *  k = 5
     *                            __________4 windows would be created Plus 1 more to account for the first window. 
     *               [2, 5, 6, 7, 2, 6, 3, 0]
     *    
     *  (n - k) + 1
     *   5 - 2  + 1
     *   3 + 1 = 4
     * 
     * 
     * HOW DOES THE LOOP GO K * (n - k):
     * Exammple  
     * nums = [2, 5, 6, 7, 20]
     * k    = 2
     * n    = 5
     * amount of windows = (n - k) + 1 = 4;
     * That is: loop 2 times for each of the four windows
     * iteraitons - is the number of windows. that is n - k
     * iteration 1:
     *    2
     *    5
     * iteration 2:
     *    5
     *    6
     * iteration 3:
     *    6
     *    7
     * iteration 4:
     *    7
     *    2
     *  
     */

    let start = 0;

    // let stop = k - 1;
    const output = [];
   /** The 
    * nums =  [2, 5, 6, 7, 2, 6, 3, 0]
    * k    =   4
    * This for loop starts at the kth element and runs to the end of the array
    *               ___k______          
    *    nums =    [2, 5, 6, 7, 2, 6, 3, 0]
    *                        ^  ^  ^  ^  ^
    *                        |  |  |  |  |
    * 
    * 
    * Iteration 1:
    *               ____k_____         
    *    nums =    [2, 5, 6, 7, 2, 6, 3, 0]
    *               ^        ^
    *          start|________|stop
    * 
    * 
    * Iteration 2:
    *                  _____k____        
    *    nums =    [2, 5, 6, 7, 2, 6, 3, 0]
    *                  ^        ^
    *             start|________|stop
    * 
    * 
    * Iteration 3:
    *                     _____k____        
    *    nums =    [2, 5, 6, 7, 2, 6, 3, 0]
    *                     ^        ^
    *                start|________|stop
    * 
    * 
    * Iteration 4:
    *                        _____k____         
    *    nums =    [2, 5, 6, 7, 2, 6, 3, 0]
    *                        ^        ^
    *                   start|________|stop
    * 
    * Iteration 5:
    *                           _____k____        
    *    nums =    [2, 5, 6, 7, 2, 6, 3, 0]
    *                           ^        ^
    *                      start|________|stop
    * 
    * 
    */
    for(let i = k - 1; i < nums.length; i++) {
        output.push((maxOfNums(start, i, nums)));
        start++;
    }
        return output;
}


// using monotonically decreasing Queue: O(N);
// This does not work and I have not taken the time to understand it well
function slidingWindowMaximum(nums) {
    const output = [];
    let left = 0;
    let right = 0;

    // this is a python method what is the js eqivalent
    const q = collections.deque();

    while (r < nums.length) {
        // while the q is not empty and smaller values exits in the queue
        while (q && nums[q[-1]] < nums[r]) {
            q.pop()
        }
        q.append(r);
        // if the left value is out of bounds then remove the left value from the window
        if(l> q[0]) {
            q.shift();
        }

        // we are updating output with the leftmost item. The leftmost item would be the bbiggest
        if (l + 1 >= k) {
            output.push(nums[q[0]]);
        // left is only incremented when our window is atleast size k
        l++;

        }
        
        // right is always incremented
        r++
    }
    return output;
}