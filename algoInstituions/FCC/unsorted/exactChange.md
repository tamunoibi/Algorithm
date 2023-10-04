## QUESTION
Design a cash register drawer function `checkRegister()` that accepts purchase price as the first argument`(price)`, payment as the second argument `(cash)`, and cash-in-drawer`(cid)` as the third argument.

cid is a 2D array listing available currency.

Return the string 'Insufficient Funds' if cash-in-drawer is less than the change due. Return the string 'Closed' if cash-in-drawer is equal to the change due.

Otherwise return change in coin and bills, sorted in highest to lowest order.
Example:
checkRegister(19.50, 20.00, [['PENNY', 1.01], ['NICKEL', 2.05], ['DIME', 3.10], ['QUARTER', 4.25], ['ONE', 90.00], ['FIVE', 55.00], ['TEN', 20.00], ['TWENTY', 60.00], ['ONE HUNDRED', 100.00]]);
should return [['QUARTER', 0.50]]


## EXPLANATION
Imagine this is like a store, the total price the customer has to pay is 19.50.
They give you 20dollars and you have to give them the appropriate change.

If  the cash-in-drawer is less than the change due. Return insufficient funds.
amount given = 20dollars 
price to pay = 19.50dollars  //the change of the customer is 20 - 19.50 = 0.50 
cashInDrawer = 0.10dollars  // Return insufficient funds

If  the cash-in-drawer is equal to change due. Return closed.
amount given = 20dollars 
price to pay = 19.50dollars  //the change of the customer is 20 - 19.50 = 0.50 
cashInDrawer = 0.50dollars  // Return closed

'PENNY': 1.01: means we have 1.01dollars. It is 101 pennies
1dollar     = 100penny (1     * 100)
1.01dollars = 101penny (1.01  * 100) 

'TWENTY': 60.00: means we have 60dollars in twenty dollar bills. which means we have three
20dollar * 3     = 60dollars (1     * 100)
60dollars / 20 = 3 (note)


## SOLUTION
  const totalCid = cid.reduce(function (acc, next) {
    return acc + next[1];
  }, 0.0);

 * next[1]
  next is the array ['PENNY', 1.01]
  next[1] = 1.01
  For each iteration, next is the array item.

 * acc 
  At first the accumulator(short form acc) is 0.0 because that is the second argument passed to reduce `.reduce(function(){} , 0.0)`
   Subsequently accumulator is the returned value of reduce
  [['PENNY': 4], ['NICKLE': 2]].reduce(function (acc, next) {
      // acc = 0.0; next[i] = 4; 
      // acc = 4.0; next[i] = 2; //Returns 6
    return acc + next[1];
  
*  cid.reverse();
The need for the reverse is because the question is provided in ascending order(small, big). But the denominations array in the solution is in descending order(big, small) for it to work. (My question is why didn't the solution just make the denominations array to be in ascending order also)

* change = Math.round(change * 100) / 100
Javascript does some this just makes sure that our decimal points are most accurate as they can be

*cid[index][i] -= next.value;
we have to update our cash in drawer by decrementing it. 


## Key Features
Array Methods used
1. reduce()
2. reverse()
3. push()
Conditionals Used
1. if
2. while
3. Ternary Operator
Math Properties
1. Math.round()


