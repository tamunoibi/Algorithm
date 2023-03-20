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
