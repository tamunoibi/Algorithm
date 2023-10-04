/**
 * Implement
 * 1. push()    - which is like inbuilt pushh that adds to the last item
 * 2. pop()     - which is like inbuilt pop that removes the last item
 * 3. top()     - This  returns the  last item
 * 4. getMin()  - This is to return the miminimum item in the array.
 *                The catch here is this should be done in constant time. It can easily be done in linear time (going through the array)
 * 
 * 
 * Example: 
 * Input:
 * ["MinStack","push","push","push","getMin","pop","top","getMin"]
 *   [[],[-2],[0],[-3],[],[],[],[]] 
 * 
 * Output
 * [null,null,null,null,-3,null,0,-2]
 * 
 * That is: you should have 3pushes, 1getMin, 1pop, 1top, 1getMin
 * You can test this way 
 * const blueBird = new MinStack();
 *   blueBird.push(-2); 
 *   blueBird.push(0);
 *   blueBird.push(-3); 
 *   blueBird.getMin();    //return: -3 
 *   blueBird.pop(); 
 *   blueBird.pop(); 
 *   blueBird.top();      // return:  0
 *   blueBird.getMin();   // returns:  -2
 * 
 * 
 *   console.log(blueBird.stack); // -> to see the stack
 *   console.log(blueBird.minStack);  // -> to see the minStack
 *   console.log(blueBird.getMin());  // -> to see the return value of getMim()
 *   console.log(blueBird.top());  // -> to see the return value of top()
 * 
 *  VISULLY: 
 *  push(-2) 
 *  push(0)  
 *  push(-3)   
 *  pop()    
 *  pop()
 *                STACK TOP
 * --------------------------------------------
 *                     | -2 |           
 *            | -2 |   |  0 |   | -2 |
 *  | -2  |   |  0 |   | -3 |   |  0 |   | -2 | 
 *  |_____|   |____|   |____|   |____|   |____|
 * --------------------------------------------
 *              STACK  BOTTOM
 *  
 */

/**
 * The main challenge of the question is getting the minimum of the array items in constant time.
 * It could easily be solved using linear time (that is going through the array). However we would use the 
 * main stack and auxillery stack approach to solve it. 
 * 
 * We would use two stacks. 
 * 1. stack
 * This is the main stack. It would store actual stack elements 
 * 
 * 2. Min Stack
 * This is the auxiliary stack, it would store minimum values
 * This would tell us the minimum item at every given point in the stack.
 * The last item in  minStack is the smallest item in the stack.
 * We archive this by every time we add to the stack we compare the current value in the min stack with the 
 * current value we are about to add whichever is smaller. That becomes the current value of min stack
 * 
 *  push(-2)  
 *  push(0)  
 *  push(-3)   
 *  pop()    
 *  pop()
 *  
 *  STACK TOP                 MINSTACK TOP    
 * ---------------------------------------
 *  |_____|                        |____|
 * ---------------------------------------
 *  STACK  BOTTOM          MINSTACK BOTTOM
 * 
 * 
 * 
 *  
 *  STACK TOP                 MINSTACK TOP: the operation is push(-2) 
 * ---------------------------------------
 *  | -2  |                        | -2 |
 *  |_____|                        |____|
 * ---------------------------------------
 *  STACK  BOTTOM          MINSTACK BOTTOM
 * 
 * 
 * 
 *  
 *  STACK TOP                 MINSTACK TOP:  the operation is push(0)    
 * ---------------------------------------
 *  | -2  |                        | -2 |
 *  |  0  |                        | -2 |      // notice that we compare the 0 vs. -2 whichever is smaller becomes the value of pushhed to minStack
 *  |_____|                        |____|
 * ---------------------------------------
 *  STACK  BOTTOM          MINSTACK BOTTOM
 *  
 *  
 * 
 *  
 *  STACK TOP                 MINSTACK TOP:  the operation is push(-3)   
 * ---------------------------------------
 *  | -2  |                        | -2 |
 *  |  0  |                        | -2 |
 *  | -3  |                        | -3 |
 *  |_____|                        |____|
 * ---------------------------------------
 *  STACK  BOTTOM          MINSTACK BOTTOM
 *  
 *  
 * 
 *  
 *  STACK TOP                 MINSTACK TOP:  the operation is pop()     
 * ---------------------------------------
 *  | -2  |                        | -2 |
 *  |  0  |                        | -2 |
 *  | -3  |                        | -3 |
 *  |_____|                        |____|
 * ---------------------------------------
 *  STACK  BOTTOM          MINSTACK BOTTOM
 *  
 *   
 * 
 *  
 *  STACK TOP                 MINSTACK TOP:  the operation is pop()     
 * ---------------------------------------
 *  | -2  |                        | -2 |
 *  |  0  |                        | -2 |
 *  |_____|                        |____|
 * ---------------------------------------
 *  STACK  BOTTOM          MINSTACK BOTTOM
 *  
 *   
 *   
 *  
 *  STACK TOP                 MINSTACK TOP:  the operation is pop()      
 * ---------------------------------------
 *  | -2  |                        | -2 |
 *  |_____|                        |____|
 * ---------------------------------------
 *  STACK  BOTTOM          MINSTACK BOTTOM
 *  
 *   
 * 
 */
function MinStack() {
    this.stack = [];
    this.minStack = [];
};


MinStack.prototype.push = function(val) {
    // we push the value to the stack
    this.stack.push(val);

    /**Push either the value  of Val OR the last item of the minStack whichever is smaller
     * I check that minStack has content or not
     *      If it minStack doesn't have content. I set pushVal to the value of val. That way I would compare val vs. val. The minimum would be always be val val
     *         Eg. stack = [] minStack = [];  The current item I am pushing is 2. 
     *         since minstack has no content. We take 2. As the value of push val. That is push val is set to val iteselv
     *         We then push to minStack whichever is smaller between val and val? that is which is smaller between 2 vs 2. Answer 2.
     * 
     * 
     *      If minStack has content then I set pushVal to the last item of the stack content. That way I would compare val vs. minstack's lastItem. 
     *         Eg. stack = [2] minStack = [2];  The current item I am pushing is 100. 
     *         since minstack has content. We assign pushVal to the last item of it's content which is 2. That is 2 is the value of push val
     *         We then push to minStack whichever is smaller between 2 and val? That is what is smaller between 2 and 100 answer is 2. We push 2 to minStack
     * 
     */
    const pushVal =   this.minStack.length ? this.minStack[this.minStack.length - 1] : val;
    this.minStack.push(Math.min(val, pushVal));

    // Alternative way of pushing either the val or the last item of minStack 
    this.minStack.length ? this.minStack.push(Math.min(val,  this.minStack[this.minStack.length - 1])) : this.minStack.push(val);
};

MinStack.prototype.pop = function() {
    this.stack.pop();
    this.minStack.pop();
};

MinStack.prototype.top = function() {
   return this.stack[this.stack.length -1];
};

MinStack.prototype.getMin = function() {
   return this.minStack[0];
};