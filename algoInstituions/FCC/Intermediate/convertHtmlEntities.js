function convertHTML(str) {
  const lookup = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  };
  const newStr = str.split("");
  newStr.forEach((item, i) => {
    if (lookup[item]) {
      newStr[i] = lookup[item];
    }
  });
  return newStr.join("");
}
convertHTML("Dolce & Gabbana");
function convertHTMLComment(str) {
    const lookup = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;",
    };
  // we split the string into an array 
  const newStr = str.split("");

  // we loop through all the strings
  newStr.forEach((item, i) => {
    // if the item is found we replace that item with its corresponding html entity
    if (lookup[item]) {
      newStr[i] = lookup[item];
    }
  });
  // we join the split string back into a string
  return newStr.join("");
}
convertHTML("Dolce & Gabbana");
