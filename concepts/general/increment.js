function convertCtoF(celsius) {
  let sum = 0;
  let increase = 2;
  sum = increase++;
  // notice that sum is two and  not three
  // which means the ++ had no effect.
  // the way to do it would have being
  // sum = increase 1;
  console.log(sum);
}

convertCtoF(30);
