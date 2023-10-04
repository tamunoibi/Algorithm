function convertCtoF(s, n) {
  const arr = [
    "0",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let sum = 0;
  for (let j = 0; j < s.length; j++) {
    const num = arr.indexOf(s[j]).toString().split("");
    const val =
      num.length == 2 ? parseInt(num[0]) + parseInt(num[1]) : parseInt(num[0]);
    sum += val;
    if (n.length === 1) {
      return sum;
    }
  }

  for(let i = 0; i < n; i++) {
     const num = sum.toString().split('');
     
      sum = [...sum.toString()].reduce((total, num) => total + num, 0);
  }

  return sum;
}
function convertCtoF(s, n) {
  const arr = [
    "0",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let sum = 0;
  for (let j = 0; j < s.length; j++) {
    const num = arr.indexOf(s[j]).toString().split("");
    const val =
      num.length == 2 ? parseInt(num[0]) + parseInt(num[1]) : parseInt(num[0]);
    sum += val;
    if (n.length === 1) {
      return sum;
    } else {
      for (let i = 0; i < n; i++) {
        sum = [...sum.toString()].reduce((total, num) => total + num, 0);
      }
    }
  }

//   for(let i = 0; i < n; i++) {
//      const num = sum.toString().split('');
//      sum = num.length == 2 ?  parseInt(num[0]) +  parseInt(num[1]) : parseInt(num[0]);
//   }

  console.log(sum);
  return sum;
}


convertCtoF("shaphfdfhifhfdidpfaihgaifiaefdoofcaifie", 3);
