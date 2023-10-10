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
function generateParenthesisOne(n) {
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
function generateParenthesisOneComment(n) {
    // This is to hold all valid strings
    const res = [];
    // 
    const backtrack = (openCount, closedCount, str) => {
        /**
         * Question:
         * How are we going to pass the value of the string
         * in the old state to the new state
         * 
         * Answer:
         * We pass the string as a parameter in the recursive function call
         * backtrack(')')
         * this is a combination of the old state and new state.
         * Example 
         * old state of string                = '((('
         * new state we want to add of string = ')'
         * what we pass        = '((()'
         *           we combine the old state plus the new state and pass it to the string
         *
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
        // example n is 3. When we get to 6 chaaracters we add it
        // at this point there are three opening brackets and three closing brackets
        // that is 6. only the items with three opening brackets.
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