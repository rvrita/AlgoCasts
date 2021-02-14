// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  var midChar = Math.floor(str.length/2);
  for (var i = 0; i <= midChar; i++) {
    if (str[i] !== str[str.length-1-i]) {
      return false;
    }
  }
  return true;
}

module.exports = palindrome;
