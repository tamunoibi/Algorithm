/**
 * This is part of a series see ./ 0.recursion file for introduction on the series
 *
 * Things explained in this file
 *     a. Modifying the index to go through array items
 *     b. Re-using the value returned from previous recursive calls
 *     c. passing in arrays as parameters to recursive calls. This is a common pattern example the subset
 *        problem but I want to explain it with single recursion
 *        I am considering explaining it with an empty array that we recurse([]) and anther array that we add all values > 2. e 
 *         example  array = [2, 3, 4]. we are to return [3, 4]. We start the array out as an empty array
 *     d. Keep track of a total sum variable. A very good example is combination sum. 
 *        I am considering explaining it with an array of values that we want to sum all of the values example [2, 3, 4]. we are to return 9
 */

/** a. -------------------Modifying the index to go through array items---------------------------------------------------*/
function recurse(arr, n) {
  if (n >= arr.length) {
    return false;
  }
  recurse(n + 1);
  console.log(arr[n]);
  /**
   * example:
   * sample Input: recurse(['a', 'b', 'c'], 0);
   * that means: arr = ['a', 'b', 'c']; n =  0; arr.length = 3
                      0
                    /  
                  1    
                /    
               2    
              /      
             3 <----- we returned when n is 3. since 3 is equal to 3
            console.log(arr[2]); c*** note we did not console arr[3]. Because at the point n is 3 we did not go to the recursive part since the if condition returned true. we simply went to the return part
            console.log(arr[1]); b
            console.log(arr[0]); a
   */
}

/** a. -------------------Re-using the value returned from previous recursive calls---------------------------------------------------*/
function recurse(arr, n) {
  if (n >= arr.length - 1) {
    return 0;
  }
  /**
   * recurse(["1", "6", "5"], 0);
   *  arr[2] + 0  = 5
   *  arr[1] + 5  = 11
   *  arr[0] + 11 = 12
   */
  return arr[n] + recurse(n + 1);

  console.log(arr[n]);
  /**
   * example:
   * sample Input: recurse(["1", "6", "5"], 0);
   * that means: arr = ["1", "6", "5"]; n =  0; arr.length - 1 = 2
                      0 ( n = 0; arr[n] = 1)
                    /  
                  1     ( n = 1; arr[n] = 6)
                /    
               2        ( n = 2; arr[n] = 5) <----- we returned when n is 2. since 2 is equal to 2. We returned with 0
            
               arr[n] + recurse(n + 1);
               arr[2] + recurse(2 + 1);
               arr[2] + recurse(3);
               arr[2] + 0;
                 5    + 0;
                 5


                     0 ( n = 0; arr[n] = 1)
                    /  
                  1     ( n = 1; arr[n] = 6) <----- we received a value of 5 from the last operation. We are now on this operation where n is 1 and arr[n] = 6
                /    
               2        ( n = 2; arr[n] = 5) 
            
               arr[n] + recurse(n + 1);
               arr[1] + recurse(1 + 1);
               arr[1] + recurse(2);
               arr[1] + 5;
                  6   + 5;
                  11


                     0 ( n = 0; arr[n] = 1) <----- we received a value of 11 from the last operation. We are now on this operation where n is 0 and arr[n] = 1
                    /  
                  1     ( n = 1; arr[n] = 6) 
                /    
               2        ( n = 2; arr[n] = 5) 
            
               arr[n] + recurse(n + 1);
               arr[1] + recurse(1 + 1);
               arr[1] + recurse(2);
               arr[1] + 11;
                  1   + 11;
                  11
   */
}
recurse(["1", "6", "5"], 0);
