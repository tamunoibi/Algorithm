/**
 * This is part of a series see ./ 0.recursion file for introduction on the series
 *
 * Things explained in this file
 *     a. How double recursion operates like a tree  that goes depth first. 
 *     b. The difference between pre-order and post-order traversal
 *     b. Using double recursion to go through array values
 *     c. Re-using values returned previous recursive calls, going through array items with double recursion (these are things learned in single recursion) 
 *     d. Breaking recursive functions into shell and main functions
 */
/** a. -------------------How double recursion operates like a tree  that goes depth first---------------------------------------------------*/
function doubleRecursionNumComment(num) {
  // We start index at the number passed and  stop at 0. Eg. if 5 is passed we go 5,4,3,2,1,0
  const recursion = (num) => {
    // the base case: stop when num is less than zero.
    if (num < 0) {
      return;
    }
    // Keep decrementing the index by doing index-1 so we can eventually get to the base case and prevent an infinite loop
    // First we start index at 5. then keep removing 1.  and we stop at 0.
    // example 5. we would go: 5, 4, 3, 2, 1, 0 -1(we stop at -1 since it passes the test num <= 0)
    recursion(nums - 1) || recursion(num - 2);
    console.log(n);
    /**
     A double recursion is easier to follow when you trace an example with a binary tree showing the different function calls.
     *  1. it  goes from beginning to end like a single recursion or loop. but for each loop it saves the other recursive call. 
     *  2. When it has gone to the end of the loop and returned.
     *  3. It goes to the right of the last tree value. Repeat From step 1
     * Example
     * nums = 5
                      5
                    /   \
                  4    
                /   \  
               3    
              /   \      
             2
            /   \
           1
          /   \
         0
        / 
      -1  <--- we return when n is -1
            When we get to n being -1. The function returns but DOES NOT run the console.log statement but begins the second function. 
            that is because the console.log() statement is after both functions
            recurse(n - 1)     <------ we have returned from this part 
            recurse(n - 2)
            console.log(n)
            we move on to the second function  recurse(n - 2)
                      5
                    /   \
                  4    
                /   \  
               3    
              /   \      
             2
            /   \
           1
          /   \
         0
        /   \
      -1    -2 <-----   we return when n is -2
            When we get to n being -2. The function returns. and then runs the console.log statement since we have finished the two functions 
            NOTE: we only console.log() when both functions have returned
            n = 0
            recurse(n - 1)     that is   recurse(0 - 1)      
            recurse(n - 2)     that is   recurse(0 - 2)   
            console.log(n)     that is   console.log(0)
            we have finished with when n is 0 we can now move to when n is 1
consoles 0----------------------------------------------------------



                     5
                    /   \
                  4    
                /  \  
               3    
              /  \      
             2
            /  \
           1 
          /  \
         0   -1  <-----  We return when n is -1
        /   \     
      -1    -2
            we return when n is -1
            n = -1
            if(n < 0) returns true immediately.


            We are to go to it's parent. Which is 0. 
            recurse(n - 1)     <------we have returned from this part previously 
            recurse(n - 2)     <------we have just returned from this part.
            console.log(n) that is console.log(1)
            we moved on to the function call  to 1 parent which is 2
consoles 1----------------------------------------------------------




                     5
                    /   \
                  4    
                /  \  
               3    
              /  \      
             2
            /  \
           1       0
          /  \    /  \  
         0   -1 -1 <---- We return when n is -1
        /   \     
      -1    -2
            When we get to n being 0.
            The function goes deeper. and makes n -1 
            When we get to n being -1
            The function returns but DOES NOT run the console.log statement but begins the second function. 
            that is because the console.log() statement is after both function calls
            recurse(n - 1)     <------ we have just returned from this part  recurse(0 - 1)   
            recurse(n - 2)
            console.log(n)

            we move on to the second function
                     5
                    /   \
                  4    
                /  \  
               3    
              /  \      
             2
            /  \
           1       0
          /  \    /  \  
         0   -1 -1    -2 <---- wWe return when n is -2
        /   \     
      -1    -2
            When we get to n being -2. The function returns. and then runs the console.log statement since we have finished the two functions 
            NOTE: we only console.log() when both functions have returned
            n = 0
            recurse(n - 1)     that is   recurse(0 - 1)      
            recurse(n - 2)     that is   recurse(0 - 2)   
            console.log(n)     that is   console.log(0)
            we have finished with when n is 0 we can now move to when n is 2


            n = 2
            recurse(n - 1)     that is   recurse(0 - 1)      
            recurse(n - 2)     that is   recurse(0 - 2)   
            console.log(n)     that is   console.log(2)
consoles 0, 2----------------------------------------------------------




                      5
                    /   \
                  4    
                /  \  
               3    
              /  \      
             2                1
            /  \             / \
           1       0        0
          / \     / \      / \
         0   -1  -1  -2  -1  <--- We return when n is -1
        /   \     
      -1    -2

      When we get to n being 1.
            The function goes deeper. and makes n 0
            The function goes deeper. and makes n -1
            When we get to n being -1
            The function returns but DOES NOT run the console.log statement but begins the second function. 
            This is because the console.log() statement is after both function calls
            recurse(n - 1)     <------ we returned from this part in this function  recurse(0 - 1)   
            recurse(n - 2)
            console.log(n)

            we move on to the second function
                      5
                    /   \
                  4    
                /  \  
               3    
              /  \      
             2                1
            /  \             / \
           1       0        0
          / \     / \      / \
         0   -1  -1  -2  -1  -2<--- We return when n is -2
        /   \     
      -1    -2

          When we get to n being -2. The function returns. and then runs the console.log statement since we have finished the two functions 
            NOTE: we only console.log() when both functions have returned
            n = 0
            recurse(n - 1)     that is   recurse(0 - 1)      
            recurse(n - 2)     that is   recurse(0 - 2)   
            console.log(n)     that is   console.log(0)
            // consoles 0
            we have finished with when n is 0 we can now move to when n is 0 second function call


                       5
                    /   \
                  4    
                /  \  
               3    
              /  \      
             2                1
            /  \             / \
           1       0        0  -1 <--- We return when n is -1
          / \     / \      / \
         0   -1  -1  -2  -1  -2
        /   \     
      -1    -2 
            we return when n is -1
            n = -1
            if(n < 0) returns true immediately.


            We are to go to it's parent. Which is n = 1. 
            recurse(n - 1)     <------we have returned from this part previously  recurse(1 - 1)
            recurse(n - 2)     <------we have just returned from this part.  recurse(1 - 2)
            console.log(n)     <------we can console.log this
            // consoles 1


            we moved on to the function call  to 1 parent which is 3 and also consoles it. This is because both function calls have executed
            // consoles 3
consoles 0, 1, 3----------------------------------------------------------

       */
  };
  return doubleRecursionNumComment(num);
}


