/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  const regexp = new RegExp(`^${p}$`);
  return regexp.test(s);
};

// check if letters match until we see a *
// then we would check if the suffix matches
// if it does then check if the stuff between is the char before *
