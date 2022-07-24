function pairElement(str) {
  const splitStr = str.split("");
  //s. First define an object with all pair possibilities, this allows us to easily find it by key or value.
  const pair = { A: "T", T: "A", C: "G", G: "C" };

  const ans = splitStr.map((item) => {
    //then use the map function to map each character in the array to an array with the character and its matching pair, creating a 2D array
    return [item, pair[item]];
  });
  console.log(ans);
  return ans;
}
pairElement("ATCGA");
function pairElement1(str) {
  const splitStr = str.split("");
  const ans = [];

  splitStr.forEach((item) => {
    if (item === "A") {
      return ans.push([item, "T"]);
    } else if (item == "T") {
      return ans.push([item, "A"]);
    } else if (item == "C") {
      return ans.push([item, "G"]);
    } else if (item == "G") {
      return ans.push([item, "C"]);
    }
  });
  return ans;
}

pairElement1("GCG");
