function printA(nb) {
  console.log({ nb });
  if (nb < 0) {
    return 0;
  }
  const val = print(nb - 1);
  console.log(nb + val, { nb, val });
  nb--;
  return nb;
  /**
    * ans: 0, 0, 2, 4, 6,
print(4)
{ nb: 4 }
{ nb: 3 }
{ nb: 2 }
{ nb: 1 }
{ nb: 0 }
{ nb: -1 }
0 { nb: 0, val: 0 }
0 { nb: 1, val: -1 }
2 { nb: 2, val: 0 }
4 { nb: 3, val: 1 }
6 { nb: 4, val: 2 }
    */
}
printA(4);

function printB(nb) {
  console.log({ nb });
  if (nb < 0) {
    return 0;
  }
  const val = print(nb - 1);
  console.log(nb + val, { nb, val });
  nb--;
  return nb;
  /**
    * ans: 0, 1, 3, 5, 6, 7

{ nb: 4 }
{ nb: 3 }
{ nb: 2 }
{ nb: 1 }
{ nb: 0 }
{ nb: -1 }
0 { nb: 0, val: 0 }
1 { nb: 1, val: 0 }
3 { nb: 2, val: 1 }
5 { nb: 3, val: 2 }
7 { nb: 4, val: 3 }
    */
}
print(4);
