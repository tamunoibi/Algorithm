//Solution without comments
const currencyUnit = {
  PENNY: 1,
  NICKEL: 5,
  DIME: 10,
  QUARTER: 25,
  ONE: 100,
  FIVE: 500,
  TEN: 1000,
  TWENTY: 2000,
  "ONE HUNDRED": 10000,
};

function checkCashRegister(price, cash, cid) {
  let changeSum = cash * 100 - price * 100;
  let changeSumCheck = changeSum;
  let change = [];
  let status = "";

  let cidSum = 0;
  let filteredCid = cid.filter((elem) => elem[1] !== 0).reverse();

  filteredCid.forEach((elem) => {
    let curr = elem[0];
    let currSum = elem[1] * 100;
    cidSum += currSum;
    let amount = 0;
    while (changeSum >= currencyUnit[curr] && currSum > 0) {
      amount += currencyUnit[curr];
      changeSum -= currencyUnit[curr];
      currSum -= currencyUnit[curr];
    }
    if (amount !== 0) {
      change.push([curr, amount / 100]);
    }
  });

  if (changeSum > 0) {
    status = "INSUFFICIENT_FUNDS";
    change = [];
  } else if (changeSum == 0 && changeSumCheck == cidSum) {
    status = "CLOSED";
    change = cid;
  } else {
    status = "OPEN";
  }
  return { status: status, change: change };
}










//Solution used(https://www.youtube.com/watch?v=eFPF7CcSmvE)
/*We multiplied all by 100
    Penny	$0.01 (PENNY):  0.01 * 100 = 1
    Nickel	$0.05 (NICKEL): 0.05 * 100 = 5
    Dime	$0.1 (DIME):    0.1  * 100 = 10
    Quarter	$0.25 (QUARTER):0.25 * 100 = 25
    Dollar	$1 (ONE):       0.1  * 100 = 100

    Why? It is easier to make calculations with whole numbers(integers)  with decimals(floats)
  */
const currencyUnit = {
  PENNY: 1,
  NICKEL: 5,
  DIME: 10,
  QUARTER: 25,
  ONE: 100,
  FIVE: 500,
  TEN: 1000,
  TWENTY: 2000,
  "ONE HUNDRED": 10000,
};
function checkCashRegister(price, cash, cid) {
  /** How to calculate change
   * To calculate a persons change you subtract the amount paid - price;
   * that is if someone gave you 500 and bought an item of 100
   *  cash - price
   *  500 - 100
   *
   * Why do I multiply by 100. Because I do not want to deal with decimals
   * (cash * 100) - (price * 100)
   */
  let changeSum = cash * 100 - price * 100;
  /**
   * I duplicated the value of changeSum because I would change the value of changeSum and so I want a duplicate
   * Kind of  like a temp value to store.
   * When did I change the value
   */
  let changeSumCheck = changeSum;
  /**
   * I created an empty array to store the value of change. Note that change would be an array
   */
  let change = [];
  /**
   * I created an empty string to store the value of status. Note that status would be a string: 'INSUFFICIENT_FUNDS' or 'CLOSED' or 'OPEN'
   */
  let status = "";
  /**
   * CidSum would store the sum of all the money in the register
   */
  let cidSum = 0;

  /**
   * 1. Why Add 
   * The need to filter amounts that are 0 is so that it would not show in the answer
   * we don't want to say your change is [Dollars: 0, Penny 2]
   * 
   * An example of where this is used is:
   * checkCashRegister(19.5, 20, [
   ["PENNY", 0.5],
  ["NICKEL", 0], 
  ["DIME", 0], 
  ["QUARTER", 0], 
  ["ONE", 0], 
  ["FIVE", 0], 
  ["TEN", 0], 
  ["TWENTY", 0], 
  ["ONE HUNDRED", 0]
  
  the output is: [ [ 'PENNY', 0.5 ] ]

  * 2. Why Reverse the value
  * Reverse is start from the bigger denomination, that is from 100 dollars instead of penny.
  * I do not get the need to do that 
  * 
]);
   */
  let filteredCid = cid
    .filter((element) => {
      // console.log(
      //   element[1],
      //   "element[0] is the currency, and element[1] is the amount example element[1] outputs a particular amount like 0.1"
      // );
      return element[1] != 0;
    })
    .reverse();
  // console.log(currencyUnitPP.DIME);

  /**
   * I want to calculate if I have enough money to give change.
   * I am going through all the money I have in the cash register starting from the 100 bills
   */
  /** elem is an array with two elements, the currency denomination and the value of that denomination
   * [DIME: 3.1]
   */
  filteredCid.forEach((elem) => {
    /** curr: refers to currency denomination example DIME
     */
    let curr = elem[0];
    /** currSum: refers to currency denomination Sum example 0.5 Dime.
     * note we multiply it by 100 because we do not want to work with decimals
     */
    let currSum = elem[1] * 100;
    /** cidSum starts at 0.
     * It is being calculated. When we finish the forEach array we would have the sum of money in the register
     * So we are adding each sum together.
     * We are adding this particular currency sum with the total
     * note we multiply it by 100 before we add because we do not want to work with decimals.
     * Example:   ["PENNY", 1.01]], ["NICKEL", 2.05], ["DIME", 3.1]
     * 1.01 * 100 =  101
     * 2.05 * 100 = 205
     * 3.1  * 100 = 310
     *      total = 616
     */
    cidSum += currSum;
    let amount = 0;
    /**changeSum
     * let changeSum = cash * 100 - price * 100;
     * initially changeSum is the change the user is supposed to get.
     * For example the user: price = 19.5 and cash  = 20,
     * price     =  19.5 * 100 = 1950
     * cash      =  20   * 100 = 2000
     * changeSum =  50
     * 
     * So now we are looking for a change of 50
     * const currencyUnit = {
  PENNY: 1,
  NICKEL: 5,
  DIME: 10,
  QUARTER: 25,
  ONE: 100,
  FIVE: 500,
  TEN: 1000,
  TWENTY: 2000,
  "ONE HUNDRED": 10000,
};
It is noteworthy that we are searching for the change in reverse. That is we start from
the big sums OneHundred, Twenty, ten etc.
If we have 50 we would need 2 quarter bills since [QUARTER: 25] .
We start at OneHundred, that is 10,000 it is above 50 that is the change
Twenty is 2,000 it is above 50.
     *
     **currSum
     * let currSum = elem[1] * 100;
     * we are checking if the currSum is greater than 0.
     * because if I do not have any money in that denomination to take then I should not try to take from it 
     * after every transaction I reduce the currSum(currencySum) by the amount
     *
     */
    while (changeSum >= currencyUnit[curr] && currSum > 0) {
      /**
       * why are we increasing amount with each currency iteration?
       * so that after the this while loop we would add the amount to be given as change
       * example: DIME: 5, PENNY: 3;
       */
      amount += currencyUnit[curr];
      /**
       * why are we reducing changeSum with each currency iteration?
       * because changeSum is the total amount of change we are to give the person.
       * Like in this scenario of 50. After iteration 1. We reduce it by 25 which remains 25. iteration 2, we reduce it by 25 it becomes 0
       *
       */
      changeSum -= currencyUnit[curr];
      /**
       * why are we reducing currencySum with each currency iteration?
       * because currencySum is the total amount of currency in the account, after we remove each amount the total amount available reduces.
       * For example if the total money I had was 100, On the first iteration I remove 25, that means the total left is 75;
       * Like in this scenario of 50. After iteration 1. We reduce it by 25 which remains 25. iteration 2, we reduce it by 25 it becomes 0
       *
       */
      currSum -= currencyUnit[curr];
    }
    /**
     * amount is initialized at 0
     * if the while loop is run and that change is calculated we increase the amount. That means there would be a need to add it to the array as a change
     * If the amount is 0, no need to push it to the change array which means that currency was not calculated
     */
    if (amount !== 0) {
      change.push([curr, amount / 100]);
    }

    /**
     * if changeSum is larger than zero that means that  we do not have enough money in the cash register 
     * or maybe we need to return 50 cents but we only have 100dollar bills.
     * 
     * Because with each change given we reduce changeSum till it gets to zero 
     */
    if (changeSum > 0) {
      status = "INSUFFICIENT_FUNDS";
      change = [];
      /**
       * If changeSum is zero and changeSumCheck == cidSum
       * changeSum is always decreasing, it would be 0 
       */
    } else if (changeSum == 0 && changeSumCheck == cidSum) {
      status = "CLOSED";
      change = cid;
    } else {
      status = "OPEN";
    }
    return { status: status, change: change };
  });
}

checkCashRegister(19.5, 20, [
  ["PENNY", 0.5],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
]);

// checkCashRegister(19.5, 20, [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100],
// ]);
