/**
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
 * Example 1:
 * Input: n = 3
 * Output: ["((()))","(()())","(())()","()(())","()()()"]
 * 
 * Example 2:
 * Input: n = 1
 * Output: ["()"]
 */
function generateParenthesis(n) {
    const res = [];
    const backtrack = (openCount, closedCount, str) => {
        if (openCount < n) {
              backtrack(openCount + 1, closedCount, str + '(');
              /**
               * Question: What is the implication of adding return here 
               */
             return;
        }
        if (closedCount < openCount) {
              backtrack(openCount, closedCount +1, str + ')' )
        }
        if (str.length === n * 2) {
            
         res.push(str);
        }
    }
    backtrack(0, 0, '');
    return res;
}
function generateParenthesisComment(n) {
    // This is to hold all valid strings
    const res = [];
    // 
    const backtrack = (openCount, closedCount, str) => {
        /**
         * Question:
         * How are we going to pass the value of the string
         * in the old state to the new state
         */
        // add open parannthesis if we have not gottenn to the constraint set by by n
        // if n = 3 then the constraint is 3 which is our stopping parameter
        if (openCount < n) {
            // concatenate the opened paranthesis to the string
              backtrack(openCount + 1, closedCount, str + '(')
             return;
        }
        // add close parannthesis if we have not gottenn to the constraint set by by n
        // the max close brackets is the same size as the open bracke
        // this is valid '()' as we have one open and one close bracket
        // this is INVALID '())' as we have one open and two closed brackets. The closed must be equal to the cloing
        if (closedCount < openCount) {
            // concatenate the closed paranthesis to the string
              backtrack(openCount, closedCount +1, str + '(' )
        }
        if (str.length === n * 2) {
         res.push(str);
         // woould the solution still work if thher was a returnn statement?
        }
        
    }
    backtrack(0, 0, '');
    return res;
}
/**
def generateParenthesisPython(n):
     stack = [];
     res = [];


    def backtrack = (openN, closedN) => {
        if openN == closedN === n:
        res.append(''.join((stack))
        return;
        if (openN < n) :
            stack.append('(')
            backtrack(openN + 1, closedN)
            stack.pop();
            
        if (closedN < openN) :
            stack.append(')')
            backtrack(openN, closedN + 1)
            stack.pop();

    }
    backtrack(0, 0)
    return res
 */