function confirmEnding(str, target) {
  const value = str.substring(str.length - target.length, str.length);

  if (target === value) {
    return true;
  } else {
    return false;
  }
}

confirmEnding("Bastian", "ian");

// function confirmEnding(str, target) {
//   const length = target.length;
//   for(let i = 0; i < str.length; i++) {
//       if(str[str.length - i]=== target[i]) {
//           return true;
//       } else {
//          return false;
//       }
//   }
// }

// confirmEnding("Bastian", "n");
