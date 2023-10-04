// function addTogetherOne() {
//   function checkIfNumber(num) {
//     return typeof num === "number" ? num : undefined;
//   }
//   const a = arguments[0];
//   const b = arguments[1];

//   if (arguments.length > 1) {
//     console.log("here-->", a + b);
//     return a && b ? a + b : undefined;
//   } else {
//     if (a) {
    //   return function (y) {
    //     if (checkIfNumber(y)) {
    //       return a + y;
    //     } else {
    //       return undefined;
    //     }
    //   };
//     } else {
//       return undefined;
//     }
//   }
// }
// const ans = addTogether(2, 3);


function addTogetherTwo(num) {
  const sumOrUndefined = (firstItem, secondItem) => {
    if (typeof firstItem === "number" && typeof secondItem === "number") {
      return firstItem + secondItem;
    } else {
      return undefined;
    }
  };

  if (arguments.length === 1) {
    //If we have only one argument and that argument is a number
    // return the sum of that number and the next value passed
    if (typeof arguments[0] === "number") {
      return (y) => {
        return sumOrUndefined(y, arguments[0]);
      };
    } else {
      // if we have only one argument and it is not a number return undefined
      return undefined;
    }
    // if we have two numbers sun them
  } else if (arguments.length === 2) {
    return sumOrUndefined(arguments[0], arguments[1]);
  }
}

const ans = addTogether(3)([2]);
console.log({ ans });
