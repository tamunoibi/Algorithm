function binaryAgentOne(str) {
  return str
    .split(" ")
    .map((item) => String.fromCharCode(parseInt(item, 2)))
    .join("");
}
function binaryAgentOneComment(str) {
  // split the string '01000001 01110010' into an array containing two items ['01000001', '01000001']
  const splitString = str.split(" ");
  // convert each array item ['01000001', '01110010'] to there corresponding alphabet.
  // there is no direct way to convert binary to alphabet
  // '01000001' can not just be directly converted to A
  // '01000001' can be converted to base 10(in base 10 or ASCII it is 65), '01110010' in base 10 or ASCII is  114, then the base 10(ASCII) number is converted to letter
  //  String.fromCharCode() expects to be passed a base 10 number since the string is in base 2 first convert to base 10 before passing
  //  ['01000001', '01110010']  ['A', 'r']
  const mappedItem = splitString.map((item) => {
    return String.fromCharCode(parseInt(item, 2));
  });
  // merge the array back to a string:  ['A', 'b'] becomes  'ar'
  const joinArray = mappedItem.join("");

  /**
   The steps the string followed are:
   '01000001', '01110010'
   ['01000001', '01110010']
   ['A', 'r']
   Ar
   */
  return joinArray;
}
function binaryAgentTwo(str) {
  return String.fromCharCode(
    ...str.split(" ").map(function (char) {
      return parseInt(char, 2);
    })
  );
}
function binaryAgentTwoComment(str) {
  // split the string '01000001 01110010' into an array containing two items ['01000001', '01000001']
  const splitString = str.split(" ");
  // convert each array item ['01000001', '01110010'] to there corresponding ASCI character.
  const mappedString = splitString.map(function (char) {
    return parseInt(char, 2);
  });

  // Spread out the array of base 10 and convert
  // similar to doing  String.fromCharCode(...[ 65, 114 ])
  // Note String.fromCharCode(65, 114, 115) can accept multiple arguments. If you pass an array and spread it out it would be like you entred the items one after the other
  const ans = String.fromCharCode(...mappedString);
  /**
   *example: binaryAgent("01000001 01110010");
    The steps the string followed are:
    '01000001', '01110010'
    [ 65, 114 ]
    ['A', 'r']
    Ar
   */
}
binaryAgentOneComment("01000001 01110010");
