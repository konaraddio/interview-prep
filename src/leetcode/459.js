/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  const ss = s.repeat(2);
  return ss.substring(1, ss.length - 1).includes(s);
};
