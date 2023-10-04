/**
 * This is part of a series see ./ 0.recursion file for introduction on the series
 *
 * Things explained in this file
 *     a. How recursion works. The need for a base case and a recursive case
 *     b. modifying the index to get to the base case: incrementing or decrementing parameters while calling the function
 *     c. Putting the console before (pre-order) or after(post-order) the recursive call. And the implications of this
 *     d. Breaking recursive functions into shell and main functions
 *     e. adding the recursive statement in the if block
 */

function callMyNameForever(name) {
  callMyName();
  console.log(name);
}
callMyName("Ib");

function callMyNameProperly(name, i) {
  if (i == 5) {
    return;
  }
  i++;
  callMyName(name, i);
  console.log(name, i);
}

function recurse(n) {
  if (n < 0) {
    return;
  }
  recurse(n - 1);
  console.log("n");
}

/** a. -------------------How recursion works. The need for a base case and a recursive case---------------------------------------------------*/
/** A function can call itself. */
function callMyNameForever(name) {
  // This function runs infinitely and never stops.
  // You can run it and see for yourself. In other for it to stop it must have a stop condition. This is referred to as the base case
  callMyName();
  console.log(name);
}
callMyName("Ib");

/** A function can call itself. But must have a STOP condition so it does not run forever */
function callMyNameProperly(name, i) {
  /**
   * input: callMyName("Ib", 0);
   * output: 
      Ib 4
      Ib 3
      Ib 2
      Ib 1
      Ib 0
   *Explanation
   The Two Parts of Recursion
    Recursion has two parts:
    1. The base case. This is important so the loop comes to an end if not it goes on infinitely.
    2. The recursive part. This is required otherwise we do not have recursion, do we?

     * example:
     * sample Input: 0
                      0
                    /  
                  1    
                /    
               2    
              /      
             3
            / 
           4
          / 
         5  <----- we returned when n is 5
            console.log(4); *** note we did not console.log 5 as we did not execute the console part when the function when n  is 5. We simply returned to the parent call. Which is 4 and that is where the console.log was done
            console.log(3)
            console.log(2)
            console.log(1)
            console.log(0)
     */
  if (i == 5) {
    return;
  }
  console.log(name, i);
  i++;
  callMyName(name, i);
}

callMyName("Ib", 0);

/** 2. -------------------Modifying the index to get to the base case: incrementing or decrementing parameters while calling the function---------------------------------------------------*/
function recurse(n) {
  // we can have the modify the index directly and not
  if (n >= 5) {
    return false;
  }
  // this is a short form
  recurse(n + 1); //<-----we increased the index inside the function call.
  // Alternative way:
  // n++
  // recurse(n)
}
recurse(0);

/** 3. -------------------Putting the console before (pre-order) or after(post-order) the recursive call. And the implications of this---------------------------------------------------*/
function recurse(n) {
  if (n >= 5) {
    return false;
  }
  // pre-order traversal: the console statement is before the recursive part
  console.log(n);
  recurse(n + 1);
  /**
   * example:
     * sample Input: 0
                      0
                    /  
                  1    
                /    
               2    
              /      
             3
            / 
           4
          / 
         5  <----- return since n is 5.

            console.log(0); *** note we did the console.log before the recursive call
            console.log(1)
            console.log(2)
            console.log(3)
            console.log(4)
   */
}

//  post-order
function recurse(n) {
  if (n >= 5) {
    return false;
  }
  recurse(n + 1);
  // post-order traversal: the console statement is before the recursive part
  console.log(n);
  /**
   * example:
     * sample Input: 0
                      0
                    /  
                  1    
                /    
               2    
              /      
             3
            / 
           4
          / 
         5  <----- we returned when n is 5
            console.log(4); *** note we did not console 5. Because at that point we did not go to the recursive part. we simply went to the return part
            console.log(3)
            console.log(2)
            console.log(1)
            console.log(0)
   */
}
recurse(0);

/** e. -------------------adding the recursive statement in the if block---------------------------------------------------*/
function recurse(n) {
  // without modifyig the parent function
    if (n < 5) {
      recurse(n + 1);
      console.log("n");
    }
    // if we get here. 
    // we are at the end of the function and the function returns undefined automatically
}
recurse(0);
