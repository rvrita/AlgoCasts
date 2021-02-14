// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  var charDict = {};
  let max = 0;
  let maxChar = '';
  for (let i of str) {
    charDict[i] = (charDict[i] || 0) + 1;
  }
  for (let char in charDict) {
    if (charDict[char] > max) {
      max = charDict[char];
      maxChar = char;
    }
  }
  return maxChar;
}


module.exports = maxChar;
