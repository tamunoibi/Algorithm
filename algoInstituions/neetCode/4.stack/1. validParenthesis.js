// reference note Jan, 2022: book2 page 43
function isValid(s) {
  const stack = [];
  const closeToOpen = { ")": "(", "]": "[", "}": "{" };
  //we go through the string
  for (let char of s) {
    //if it is a closing bracket(look for its pair) or an opening bracket(add it to stack)
    if (closeToOpen[char]) {
      // we check if the last item in the stack and it's opening bracket pair are the same.
      if (stack.length && stack[stack.length - 1] === closeToOpen[char]) {
        //  If they are the same we remove remove that item from the stack
        // if the first and the last item are the same then we remove
        stack.pop();
      } else {
        // If there is no match between the closing bracket we encountered's pair and the last item in the stack we return false
        return false;
      }
    } else {
      // if it is an  opening bracket we add it to the stack
      stack.push(char);
    }
  }
  return stack.length === 0;
}
isValid("()");

// My attempt. It does not work.
function isValid(params) {
    const stack = [];
    // Loop through thhe array
    for(let i =0; i < params.length; i++) {
        // if it is an open paranthesis push to the back of array
        if (params[i] === '{') {
            stack.push(params[i]);
        // if it is a close paranthesis 
        // and there is no corresponding opening paranthesis
        // return false
        } else if (params[i] === '}' && !stack.length -1) {
            return false 
        // if it is a close paranthesis remove the last item from the array with pop
        // We add a check if the last item in the array to be an open paranthesis
        // You can remove params items that did not match ['0', '}']
        } else if (params[i] === '}' && stack[stack.length -1 ] === '{') {
            stack.pop(); 
        }
    }
    //If there is one item or more in the array it means it is NOT valid, return false
    //If there NO items in the array that is arra.lenght is -1 it means it is valid parenthesis
    return stack.length <= 0;
}
