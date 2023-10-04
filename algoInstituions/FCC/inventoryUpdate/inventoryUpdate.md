## QUESTION
Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found add the new item into the inventory array. The returned inventory array should be in alphabetical order.
Example inventory list
const curInv = [
    [21, 'Bowling Ball'],
    [2, 'Dirty Sock'],
    [1, 'Hair Pin'],
    [5, 'Microphone'],
];
const newInv = [
    [2, 'Hair Pin'],
    [3, 'Half-Eaten Apple'],
    [67, 'Bowling Ball'],
    [7, 'Toothpaste'],
];
## Explanation
Example inventory list
const curInv = [
    [21, 'Bowling Ball'],
    [2, 'Dirty Sock'],
];
const newInv = [
    [67, 'Bowling Ball'],
    [2, 'Zebra'],
];
Should return
const curInv = [
    [88, 'Bowling Ball'],  // 21 + 67 = 88
    [2, 'Dirty Sock'],    // this is added to curInv array as their is non
    [2, 'Zebra'],         // the items are arranged in alphabetical order
];
## Solution
* const inventory = arr1.concat(arr2);

.concat() joins two array into one.
array1 = [['a', 'b'], [2, 'e']];
array2 = [['f', 'g']];
console.log(array1.concat(array2)); 
output: [[ 'a', 'b' ], [ 2, 'e' ], [ 'f', 'g' ]]

* .reduce(function(acc, next){}, {});
next: 
  for each iteration next is the next array item starting from the 0th index. Example:
   [ [ 21, 'Bowling Ball' ], [ 2, 'Dirty Sock' ], [ 67, 'Bowling Ball' ] ].reduce(function(acc, next) {
       console.log(next);
       // [ 21, 'Bowling Ball' ],
       //  [ 2, 'Dirty Sock' ]
       // [ 67, 'Bowling Ball' ]
   }, {});
  next is an array. example: [ 21, 'Bowling Ball' ]
  next[0] = 21
  next[1] = 'Bowling Ball'
  acc: 
    At first the accumulator(short form acc) is an empty object {}  because that is the second argument passed to reduce `.reduce(function(){} , {})`
   Subsequently accumulator is the returned value of reduce.
   What is the returned value of reduce?

    .reduce() runs 2 times
     Iteration 1:
     originalArray = [ 21, 'Bowling Ball' ], [ 2, 'Dirty Sock' ], [ 67, 'Bowling Ball' ] ]
     acc: {}
     next: [ 21, 'Bowling Ball' ]
     next[0]: 21 
     next[1]: 'Bowling Ball' 
     Therefore:
      if acc[next[1]]  --> fails. because acc['Bowling Ball'] = undefined
      else             --> runs. acc[next[1]] = next[0]
      ans: acc = {'Bowling Ball': 21}

        explanation
        acc[next[1]] = next[0]
        acc['Bowling Ball'] = acc['Bowling Ball'] + 21 //create a new property Bowling Ball
    
    iteration 2:
     originalArray = [ 21, 'Bowling Ball' ], [ 2, 'Dirty Sock' ], [ 67, 'Bowling Ball' ] ]
    acc: { 'Bowling Ball': 21}
    next: [ 2, 'Dirty Sock' ]
    next[0]: 2 
    next[1]: 'Dirty Sock'
    Therefore:
      if acc[next[1]]  --> fails. because acc['Dirty Sock'] = undefined
      else             --> runs acc[next[1]] = next[0]
      ans: acc = {'Bowling Ball': 21, Dirty Sock': 2 }

        explanation
        acc[next[1]] = next[0]
        acc['Dirty Sock'] = 2 //acc.DirtySock = 2, create a new property and assign 2 to it

    
   iteration 3:
   originalArray = [ 21, 'Bowling Ball' ], [ 2, 'Dirty Sock' ], [ 67, 'Bowling Ball' ] ]
   acc:  {'Bowling Ball': 21, Dirty Sock': 2 }
   next: [ 67, 'Bowling Ball' ]
   next[0]: 67
   next[1]: 'Bowling Ball'
   Therefore:
      if acc[next[1]]  --> runs acc[next[1]] += next[0] (because acc['Bowling Ball] = 'Bowling Ball': 21 ) 
      ans: acc = {'Bowling Ball': 88, Dirty Sock': 2 }

        explanation
        acc[next[1]] += next[0]
        acc[next[1]] = acc[next[1]] + next[0]
        acc['Bowling Ball'] = acc['Bowling Ball'] + 67
        acc['Bowling Ball'] = 21 + 67
        acc['Bowling Ball'] = 88 // update 'bowling ball; key from 21 to 88

*     const arrayItems = Object.keys(inventory).map(function (value) {
        return [inventory[value], value];
    });
    .map() runs 2 times
  iteration 1:
  inventory                 = {'Bowling Ball': 88, 'Dirty Sock': 2 }
  Object.keys(inventory)    = ['Bowling Ball', 'Dirty Sock']
  value = 'Bowling Ball'
  [inventory[value], value] = [88, 'Bowling Ball']

  iteration 2:
  inventory                 = {'Bowling Ball': 88, 'Dirty Sock': 2 }
  Object.keys(inventory)    = ['Bowling Ball', 'Dirty Sock']
  value                     = 'Dirty Sock'
  [inventory[value], value] = [2, 'Dirty Sock']

arrItems returns the array [[88, 'Bowling Ball'], [2, 'Dirty Sock']]

* arrItems.sort(function (a, b) {}
//runs once
iteration 1: 
arrItems = [[88, 'Bowling Ball'], [2, 'Dirty Sock']]
a        = [88, 'Bowling Ball']
b        = [2, 'Dirty Sock']
a[1]     = 'Bowling Ball'
b[1]     = 'Dirty Sock'
Therefore: 
 if (a[1] === b[1]) -->fails because 'Bowling Ball' is not equal 'Dirty Sock'
 else               -->runs (a[1] < b[1] ? -1 : 1) returns -1
ans: [[88, 'Bowling Ball'], [2, 'Dirty Sock']]; 


 explanation
'Bowling Ball' < 'Dirty Sock' ? - 1 : 1
'Bowling Ball' < 'Dirty Sock' returns true. check: console.log('Bowling Ball' < 'Dirty Sock')
'Bowling Ball' < 'Dirty Sock' is very interesting to me, we are comparing two strings 
normally I know u can compare numbers I did not know you can compare strings.  console.log('a' < 'b') returns true;

if(true){return -1} else { return 1} // returns -1. because 'Bowling Ball' < 'Dirty Sock'  is true.
How sort works depends on whether it return -1, 0 or 1.
0  - leave a and b unchanged
-1 - sort to a lower index than b that is a,b
1  - sort to a lower index than a  that is b,a

as said before when -1 is returned from sort it puts a first before b.
a        = [88, 'Bowling Ball']
b        = [2, 'Dirty Sock']
returns [[88, 'Bowling Ball'], [2, 'Dirty Sock']] // a is put before b which is the order it was before  


### Key Features
Array Methods used
1. concat
2. reduce
3. map
4. sort
Array Methods used
1. Object.keys()
Conditionals Used
1. if

