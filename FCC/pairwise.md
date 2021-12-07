## Question
The program should look for pairs of numbers in the array whose sum equal the second argument arg. Then instead of adding those numbers up, their indices are to be added.
 
* PAIRS OF NUMBER WHOSE SUM EQUALS THE SECOND ARGUMENT
array = [20, 10, 8, 2];
arg   = 30;
20 + 10 = 30
Note that a pair is two number and it should be two numbers we add to get the array. We can't add 20 + 8 + 2 = 30 because it is 3 numbers

* SUM OF INDEXES IN PAIRS ARRAY
Given an array [20, 10, 8, 2], We have index 0, 1,. answer it 3
 
## Explanation
Given an array [20, 10, 8, 2], We have index 0, 1, 2, 3
index	0 	1	2	3
value	20	10	8   2

sum     20  10         //1 Sum of index 0 + 1. Sum of the values is 30
sum     20  8          //   Don't count this. The sum of the values is 28  
sum     20  2          //   Don't count this. The sum of the values is 22

sum     10  20         //=> this is 10 + 20. Done before in reverse 20 + 10
sum     10  8          // Don't count this. The sum of the values is 18
sum     10  2          // Don't count this. The sum of the values is 12

sum     8  20          // We don't count this . The sum of the values is 28
sum     8  10          // We don't count this . The sum of the values is 18
sum     8  2           // We don't count this . The sum of the values is 10

sum     2  20          // We don't count this . The sum of the values is 12
sum     2  10          // We don't count this . The sum of the values is 12
sum     2  8           // We don't count this . The sum of the values is 18
