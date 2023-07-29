/**
There are only two types of recursion 
1) Direct Recursion:
There may be a call to a method in the body of the same method. This method is said to be directly recursive.

Three types of Direct Recursion are:
Linear Recursion
Binary Recursion
Multiple Recursion

Linear Recursion
Linear recursion starts its execution by testing for base cases’ sets. It then performs a single recursive call. This step involves a test that determines which recursive call to make.  It, therefore, gives you an answer on which data structure is used in recursion. This form of recursion defines every possible recursion call to ensure that it marks progress towards a base case.

Binary Recursion
Binary recursion takes place when there are two recursive calls for every non-base case.​​​​​​​
It is widely used in operations like tree traversal and merging.


Multiple Recursion
It involves making many recursive calls


2) Indirect Recursion:
The recursion in which the function calls itself via another function.
A very common implementation of this is mergeSort algorithm.
Google is saying mergeSort is not indirect recursion but rather direct recursion.
It uses an approach divide and conquer. 

Another example of this is occurs when two or more functions call each other in a circular manner.
An classic example of this is checking isEven and isOdd
 */

// Indirect recursion in a circular manner
function iseven(num) {
  if (num === 0) {
    return true;
  } else {
    return isodd(num - 1);
  }
}
function isodd(num) {
  if (num === 0) {
    return false;
  } else {
    return iseven(num - 1);
  }
}

// Example usage:
console.log(iseven(4)); // Output: true
console.log(isodd(4)); // Output: false
/**
 
In the example above, we have two functions, iseven and isodd, that indirectly call each other based on the value of the input num.
The iseven function checks if the input number is even. If num is equal to 0, it returns true (as 0 is even). Otherwise, it calls the isodd function with the argument num - 1.
The isodd function checks if the input number is odd. If num is equal to 0, it returns false (as 0 is not odd). Otherwise, it calls the iseven function with the argument num - 1.
The functions iseven and isodd keep calling each other with decremented values of num, alternating between checking for evenness and oddness until num reaches 0, at which point the recursion stops, and the functions start returning their respective results back to the initial calls.
This indirect recursion pattern allows us to determine whether a given number is even or odd using the same set of functions, but with a circular call to each other. It's important to have a base case in each function to stop the recursion and avoid an infinite loop.
* 
 */
