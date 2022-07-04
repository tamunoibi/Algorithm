// spinal case is all-lowercase-words-joined-by-dashes.
function spinalCase(str) {
  // this selects groups small letter a-z followed immidiately by big letter A-Z, then replaces the group inserting a space between
  let camelCaseHandled = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  // this selects space or underscores and replaces them with dashes
  let spacesAndDashed = camelCaseHandled.replace(/\s|_/g, "-");
  return spacesAndDashed.toLowerCase();
}
// spinalCase('This Is Spinal Tap');
spinalCase("thisIs_NotSpinalTap");
