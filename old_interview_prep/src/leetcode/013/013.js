/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const romanUnitToInt = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    const current = romanUnitToInt[s[i]];
    const next = i < s.length - 1 ? romanUnitToInt[s[i + 1]] : undefined;

    if (next != undefined && next > current) {
      sum += next - current;
      i++; // skip next
    } else {
      sum += current;
    }
  }

  return sum;
};

// XVI = 16
// MCDI = 1401
