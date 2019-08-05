/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let i = 0, j = 0;
  let length = 0;
  let maxLength = 0;
  let charToIndex = new Map();
  while (j < s.length) {
    const char = s[j];
    let indexOfChar = charToIndex.get(char);
    if (indexOfChar < i) {
      charToIndex.delete(char);
      indexOfChar = null;
    }
    if (indexOfChar == null) {
      length++;
    } else {
      charToIndex.delete(char);
      i = indexOfChar + 1;
      length = j - i + 1;
    }
    maxLength = maxLength > length ? maxLength : length;
    charToIndex.set(char, j);
    j++;
  }
  
  return maxLength;
};
