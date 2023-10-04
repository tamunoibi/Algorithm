// the question takes a while to understand

// the question is you are given a string return a 2D (Dimensional) array of its pairs
//  example 1. str = 'A' ans would be [['A', 'T']]
//  example 2. str = 'AC' ans would be [['A', 'T'], ['A', 'T']]


// What is a 2D array?
// this is a 1D(dimension) array ['hello]
// this is a 2D(dimension) array [[], [], []] --> it has an array with a nested array, It is easy to assume that a 2D array means it has 2 array items, But no like this case has 3 array items but is is 2 levels of nesting
// this is a 3D(dimension) array [[[]], [[]]] --> it has an array with 2 nested arrays
// this question wants us to return the answer as a 2D array. example string 'A' becomes [[A, ]]


// What is a pair?
// a pair is 2. in this case each letter has its partner or pair or twin.
// what are the possible pairs?
// AT and CG,
// each letter has a pair,
// A ->(is paired to) T and
// C ->(is paired to) G
// and vice versa
// T ->(is paired to) A and
// G ->(is paired to) C

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
      return -ans.push([item, "A"]);
    } else if (item == "C") {
      return ans.push([item, "G"]);
    } else if (item == "G") {
      return ans.push([item, "C"]);
    }
  });
  return ans;
}

pairElement1("GCG");
