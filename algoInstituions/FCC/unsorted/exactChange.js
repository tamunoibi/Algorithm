const denominations = [
  { name: "ONE HUNDRED", value: 100.0 },
  { name: "TWENTY", value: 20.0 },
  { name: "TEN", value: 10.0 },
  { name: "FIVE", value: 5.0 },
  { name: "ONE", value: 1.0 },
  { name: "QUARTER", value: 0.2 },
  { name: "DIME", value: 0.1 },
  { name: "NICKEL", value: 0.05 },
  { name: "PENNY", value: 0.01 },
];
function checkRegister(price, cash, cid) {
  let change = cash - price;

  const totalCid = cid.reduce(function (acc, next) {
    return acc + next[1];
  }, 0.0);

  if (totalCid < change) {
    return "Insufficient Funds";
  } else if (totalCid === change) {
    return "Closed";
  }

  cid.reverse();
  var result = denominations.reduce(function (acc, next, index) {
    if (change >= next.value) {
      let currentValue = 0.0;
      while (change >= next.value && cid[index][1] >= next.value) {
        currentValue += next.value;
        change -= next.value;
        change = Math.round(change * 100) / 100;
        cid[index][1] -= next.value;
      }
      acc.push([next.name, currentValue]);
      return acc;
    } else {
      return acc;
    }
  }, []);
  return result.length > 0 && change === 0 ? result : "Insufficient Funds";
}
checkRegister(19.5, 20.0, [
  ["PENNY", 0.01],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 1.0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
]);
