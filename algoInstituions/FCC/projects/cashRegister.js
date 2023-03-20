// Solution: https://www.youtube.com/watch?v=_nAUQYOjIek&t=8s
function checkCashRegisterNoComments(price, cash, cid) {
  let change = cash * 100 - price * 100;
  let cidTotal = 0;
  for (let elem of cid) {
    cidTotal += elem[1] * 100;
  }
  if (change > cidTotal) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (change === cidTotal) {
    return { status: "CLOSED", change: cid };
  } else {
    let answer = [];
    cid.reverse();
    const moneyUnits = {
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
    for (let elem of cid) {
      const holder = [elem[0], 0];
      elem[1] *= 100;
      while (change >= moneyUnits[elem[0]] && elem[1] > 0) {
        // reduce: change and  cid
        change -= moneyUnits[elem[0]];
        elem[1] -= moneyUnits[elem[0]];
        // add the money removed to the holder
        holder[1] += moneyUnits[elem[0]] / 100;
      }
      // I want to reform the array instead of ['kobo' 0, 'five': 55]
      // it becomes  ['five': 55] remove all values that are empty because the answer does not have empty values
      if (holder[1] > 0) {
        answer.push(holder);
      }
    }
    // Here my change is 96.5. But all that is available is
    // in the drawer is 100naira as 100 naira note. Yes I have up to the money
    // but not   d way that it can be paid
    if (change > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
    return { status: "OPEN", change: answer };
  }
}
checkCashRegisterNoComments(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);

function checkCashWithComments(price, cash, cid) {
  // WHY DO WE MULTIPLY BY 100??
  // we convert to penny by multiplying by 100.
  // why do we do this? because js does not do well with subtracting decimals. this one I saw it on all the solutions I follow talk am no be like say I don experience am o
  // how do we do this? we multiply values by 100. 1 dollar is 100penny. so if I multiply all the pennies by 100 they become whole numbers. so instead of 0.01 which is one penny it becomes 1. This means you would have to divide by 100 to get the answer
  let change = cash * 100 - price * 100;
  let cidTotal = 0;
  // Here we get the total amount in the drawer by summing all the cash in drawer together
  for (let elem of cid) {
    cidTotal += elem[1] * 100;
  }
  if (change > cidTotal) {
    // If the total amount in the drawer is NOT UP TO thee change
    // Example: checkCashRegister(5, 200, [["KOBO", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 10], ["TWENTY", 40], ["ONE HUNDRED", 0]]);
    // example, price = 5; cash = 200; cid = 50
    // change = cash - price = 95;
    // change > cid ? "INSUFFICIENT_FUNDS"
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (change === cidTotal) {
    // If the total amount in the drawer is EXACTLY TO the change
    // example, price = 5; cash = 200; cid = 95
    // change = cash - price = 95;
    // change > cid ? "CLOSED"
    return { status: "CLOSED", change: cid };
  } else {
    //Here the cid is more than the change
    // there are two possible scenarios
    // 1. we can pay out the change
    // 2. the denominations we have it is impossible to pay out the change

    // WHY REVERSE??
    // 1. the question asked for it
    // we are reversing because the answer needs to be in descending order and the array that
    // was passed was in ascending  order. so we reverse the order
    // this is exactly from the question 'with the change due in coins and bills, sorted in highest to lowest order,'
    // so what they gave us: ['ONE HUNDRED': 200, 'TWO HUNDRED': 400,]<ascending>
    // what we are to return : ['TWO HUNDRED': 400, 'ONE HUNDRED': 200]<descending>

    // 2. Change should be given from the biggest amount
    // second reason to reverse is because change has to be given from the biggest amount.
    // for example
    /** cash at hand ={'ten': 90, 'one hundred': 100}
     *  cash  = 200
     *  price = 190
     *  change= 110
     *
     * If I started counting from tens. that is from the smaller amount
     * I would remove all the 90 naira. then when I go to one hundred I would remove if I remove 100 it would be 190 and more than the change
     * this means I would not be able to pay out the change.
     *
     * However if I start counting from the bigger amount 100 naira
     * I would remove 100, then ten. which total 110 naira.
     * This is actually how you give change in real life. You just do it without paying attention
     *
     */
    cid.reverse();
    // we are creating an empty array that we would push the changeToGive.
    // later we push:
    // answer.push(['KOBO', 0.5,])
    // answer.push(['Ten', 30,])
    // answer becomes answer = [['KOBO', 0.5, 'TEN', 10,]]

    let answer = [];

    // We are converting every amount to penny so that we do not have to calculate with decimals
    // so instead of the value of 100naira to be 100 it is 100 * 100 = 10,000
    // moneyUnits is a lookup table, so if money is equal to 1naira set its value  as 100.
    // we are using it to assign values to words eg. dime becomes 10
    const moneyUnits = {
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
    for (let elem of cid) {
      // for each element we are creating an array
      // example:
      // elem = elem [ "KOBO", 5.05]
      // then
      // holder = [KOBO, 0]
      //
      // the idea is that subsequently we would increase the value of 0 by adding the values

      const holder = [elem[0], 0];

      // We are converting every amount to penny so that we do not have to calculate with decimals
      elem[1] *= 100;
      /**
       * This would be better explained with an example
       * Example if
       * cash = 100
       * price = 30
       * cash in drawer = [[ "KOBO", 5.05], [ "TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]
       * to make it easier to read cash in drawer =
     * { "KOBO": 5.05, 
       *   "TEN": 20,
       *   "TWENTY": 60,
       *   "ONE HUNDRED": 100
       * }
       * moneyUnits = {
            KOBO: 1, 
            TEN: 10,
            TWENTY: 20,
            "ONE HUNDRED": 100,
            };
       * Question: what is the change to be given and in what denominations
       *
       * iteration 1:
       * a. what is change?
       * change =70; reason cash - price
       *
       * b. what is moneyUnits[elem[0]]
       * elem  =   [ "ONE HUNDRED", 20"]
       * elem[0] = 'ONE HUNDRED'
       * moneyUnits = {
            KOBO: 1, 
            FIVE: 5,
            TEN: 10,
            TWENTY: 20,
            "ONE HUNDRED": 100,
            };
       * moneyUnits[elem[0]] = 100

       * d. what is the purpose of comparing change vs moneyUnitwhile(change > moneyUnits[elem[0]])
       * for each amount in the drawer we need to check its value
       * for example cash in drawer two 10 naira bills which is a total of 20 naira.
       * the amount of change I want to give is twenty naira
       * I would go through the cash in drawer, that is 10 naira. I would check if 10 naira can pay out 20 naira. that is denomination < change or reverse it change > denomination
       * the question is what is denomination?
       * the cash in drawer is 20naira.
       * it is not like real life that you can see 10naira bill.
       * this one the current item is 20naira. 
       * but the array passed the name of the bill as 'ten'I can use that name to get the value of the bill.
       *  so I would create a look up table where I get the value for ten to be 10
       * currentItemInDrawer = ['ten', 20]
       * lookupDenomination = {ten: 10}
       * I would get the value 10 lookupDenomination[currentItemInDrawer[0]]
       * kind of like saying if the amount is written as 'ten' then its value should be 10
       * USING LOOKUP TO ASSIGN VALUES TO WORDS
       * this is a pattern in programming where a lookup table is used to assign numerical values to words.
       * it is like saying if('ten') {return  10}. and quiet frankly lookup tables  just work like multiple if statements
       * 
       * In this scenario to be honest it would have worked better if instead of passing the name of the money they passed its value [10, 20] but I can see how this can get confusing. is 10 the value of the money? or the amount of 10s we have
       * In real life you would have had two 10dollar bills that you can physically remove from the cash in drawer and add to the change.
       * but in programming we mimic this behavior by assigning a name to the bill and creating a lookup to get its value
       * 
       * if I notice that I can pay then I remove change(that is 10 naira) from the total change of twenty naira . so total change becomes 10naira
       * I check again can I still pay from this denomination? is  denominationBill <= change?  if(10naira <= 10naira) the answer is yes 10naira is equal to 10naira. yes it is equal I pay out. 
       * below are listed the steps to payout
       * // I pay out:
       * 1. remove the moneyBillAmount(that is 10naira) from the total cash in drawer.  that is remove 10 naira from 20 naira. elem[1] = elem[1] - moneyBillAmount
       * 2. remove the moneyBillAmount, (that is 10 naira) from the total change to give the person that is from 20 naira.       change = change - moneyBillAmount
       * 3. add the removed bill to the stack of change to return
       * 

       * d. while(change > moneyUnits[elem[0]]) {} would not run.
       * Why are checking change >= moneyUnits[elem[0]] ?
       *  in other to give you change from a denomination bil
       *  that bill has to be less than or equal the  change
       *  for example I have 30 naira change and 10naira bill I can give it.change > denomination
       *  but if I had 500 naira bill and 30naira change I can not give you change.
       * 
       * why does the code not execute on first iteration?
       * The code evaluates to:
       * while(70 >= 100){}
       * that is run
       * if(70 >= 100){} 
       * it does not run because 70 is not greater than or equal to 100. the while condition returns false
       *
       *
       *
       *
       *  iteration 2:
       * a. what is change?
       * change = 70; reason cash - price
       *
       * b. what is moneyUnits[elem[0]]
       * elem  =   [ "TWENTY", 20"]
       * elem[0] = 'TWENTY'
       * moneyUnits = {
            KOBO: 1, 
            FIVE: 5,
            TEN: 10,
            TWENTY: 20,
            "ONE HUNDRED": 100,
            };
       * so we are accessing moneyUnits.TWENTY which returns 20
       * moneyUnits[elem[0]] = 20
       *
       * c. while(change >= moneyUnits[elem[0]]) {} this would run.
       * What is the comparison actually checking: 
       * it is checking if(20 >= 20);
       * this is true. 20 is equal to 20
       *  In this case:
       * 1. deduct 20 from the cash in drawer:   elem[1] -= moneyUnits[elem[0]];
       * 2. deduct 20 from the total cash to be paid:   change -= moneyUnits[elem[0]];
       * 3. 
       * 
       * 
       */
      while (change >= moneyUnits[elem[0]] && elem[1] > 0) {
        // deduct the amount from the change
        change -= moneyUnits[elem[0]];
        // deduct the amount from the CID
        elem[1] -= moneyUnits[elem[0]];
        // add the money removed to the holder
        holder[1] += moneyUnits[elem[0]] / 100;
      }
      // I want to reform the array instead of ['kobo' 0, 'five': 55]
      // it becomes  ['five': 55] remove all values that are empty because the answer does not have empty values
      if (holder[1] > 0) {
        answer.push(holder);
      }
    }
    // Here my example: my change is 96.5. But all that is available is
    // in the drawer is 100naira as 100 naira note. Yes I have up to the money
    // but not   d way that it can be paid
    if (change > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
    return { status: "OPEN", change: answer };
  }
}

const ans = checkCashWithComments(44.5, 100, [
  ["KOBO", 0],
  ["ONE", 10],
  ["FIVE", 5],
  ["TEN", 40],
  ["TWENTY", 0],
  ["ONE HUNDRED", 100],
]);
console.log(ans);
