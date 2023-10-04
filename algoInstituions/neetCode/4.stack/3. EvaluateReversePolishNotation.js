/**
 * Input: tokens = ["2","1","+","3","*"]
 * Output: 9
 * Explanation: ((2 + 1) * 8) = 24
 * 
 * 
 * 2 1 +  x
 * Thus, considering stacks allows for quick evaluation of this expression using reverse Polish notation. Stacks help manage data and can do push and pop functions.
 * To evaluate the RPN expression, we consider the following steps:
 * First, push the number ”2” into the stack to assess the expression. Now, push ”1”. There are only two numbers and nothing to do with them. Next, we push the operator “+” onto the stack. Therefore, we have an operator and two operands, we can pop them from the stack and perform the operation. Consequently, we add 1 to 2, resulting in the sum of 3.
 * Now, only three are in the stack. Now, push 8. Again, there are only two numbers. We can pop the stack when the operator “x” is pushed. Then, we multiply 3 by 8, resulting in the product of 24. Therefore, the only value in the stack is 24.
 *          STACK TOP
 * --------------------------------------------
 *            |  2  |      +         3      |  *  |   
 *  |  2  |   |  1  |   |  3  |   |  8  |   | 24  | 
 *  |_____|   |_____|   |_____|   |_____|   |_____|
 * --------------------------------------------
 *              STACK  BOTTOM
 *  
 */
// My attemept there is an error
function evalRPN(tokens) {
    const stack = [];
    for (const item of tokens) {
        if(stack.length == 1) {
    // This below line is unknown to javascript. You say na wetin you dey try do ehhh!! I can write it with multiple if statement but I didn't want to since it would not be clean 
            // const ans = stack[0] item  stack[1];
            stack.pop();
            stack.pop();
            stack.push(ans);
        } else {
            stack.push(item)
        }
    }
}
// My attemept this is not tested
function evalRPN(tokens) {
    const stack = [];
    for (const item of tokens) {
            let ans = item;
            if (item === '+') {
               ans = stack[stack.length -1] + stack[[stack.length -2]]
            } else if(item === '-') {
                ans = stack[stack.length -1] - stack[[stack.length -2]]
            } else if(item === '/') {
              const num = stack[stack.length -1] / stack[[stack.length -2]];
              ans =  num < 0 ? -Math.floor(-num) : Math.floor(num);
            } else if(item === '*') {
               ans = stack[stack.length -1] * stack[[stack.length -2]]
            }
            stack.push(Number(ans));
            console.log(stack)
        }
    return stack[0];
}

