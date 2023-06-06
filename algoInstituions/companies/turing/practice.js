// Question: https://leetcode.com/problems/baseball-game/
function calPoints(ops) {
  let result = 0;
  const stack = [];
  console.log(typeof Number("C") === "number");

  ops.forEach((item) => {
    // console.log({result, stack, item})
    // result === null ? (result = 0) : (result = result);
    if (item === "D") {
      // console.log({result, stack, item})
      const double = stack[stack.length - 1] * 2;
      stack.push(double);
      result += double;
      console.log({ resultA: result });
    }
    if (item === "C") {
      const last = stack.pop();
      // console.log({result, stack, item,last})
      result -= last;
      console.log({ resultB: result, item });
    }
    if (item === "+") {
      const lastTwo = stack[stack.length - 1] + stack[stack.length - 1];
      result += lastTwo;
      console.log({ resultC: result, item });
    }
    // This solution is inncorrect
    // the item 'C' passes this test and we attempt to add with c
    if (typeof Number(item) === "number") {
      stack.push(Number(item));
      result += Number(item);
      console.log({ resultD: result, item });
    }
  });
  return result;
}

calPoints(["5", "2", "C", "D"]);

// calPoints(["5", "2", "C", "D", "+"])
