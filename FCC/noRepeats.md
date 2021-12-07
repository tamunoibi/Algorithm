/**
noRepeats
 QUESTION:

 Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each
 unique. For example 'aab' should return 2 because it has 6 total permutations ( aab, aba, aab, aba, baa, baa)
 but only two of them don't have the same letter(in this case a) repeating.
 


 EXPLANATION OF QUESTION

 What are character Repeating?
 A character repeating is something like 'eeb' notice e is repeating. 

 What are permutations:
 Permutation is how many different ways a string can be written
 E.g 1: (x, b, q);
 xbq, xqb, bxq, bqx, qxb, qbx
 how many do not have the same character repeating?: 6. 

 E.g 2: (a, c, b);
 acb, abc, cab, cba, bac, bca
 answer: 6 

 Permutation where all characters are assumed unique.
 Assumed unique means even as a appears multiple times it would still be treated like it a unique letter
 E.g 3: (a, a, b);
 aab, aba, aab, aba, baa, baa
 answer: 2 of them do not have the same character repeating they are 'aba', 'aba'



 EXPLANATION OF ANSWER

 The permAlone function has two helper functions.
 swap. Which is responsible for swapping values in an array.
 generate: generate is a recursive function

 **>arr = arr.split();
 we convert the string to an array. with .split(), this is necessary because string can easily be looped through, swapped

 **>result = 0;
 Is used as a counter to count how many non repeating permutations we have. Over time we would be adding 1 for each new permutation

 **>function swap(a, b) { var temp = a;  a = b;  b = temp;};
 this function take array index and swaps their value.
 It does not return anything. 
 Rather it modifies the array in place.
 Note the need to create a temp variable because
 a = b /// Which means we now have b, b. The value of 'a' would be lost.
 this is why we store the value of a in a temporary variable 
 var temp = a; 
 a = b;
 b = temp;// ===> Note b is not set to a but rather temp. 

 **>generate(arr.length);
 Generate takes a number as argument. We are using the length of the array

**>/([a-z]\1+)/
This is a regular expression it would match repeating letters. For example it matches
aab, baaaf, ppq. It Does not match uba, ada


**>n % 2 
means n is an odd number. Because all even number divide by 2 is 0.



 */