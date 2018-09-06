function convert(s, numRows) {
  if (numRows == 1) {
    return s;
  }

  let result = "";
  const n = s.length;
  const cycle = 2 * numRows - 2;

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j + i < n; j += cycle) {
      result += s[j + i];
      if (i != 0 && i != numRows - 1 && j + cycle - i < n) {
        result += s[j + cycle - i];
      }
    }
  }

  return result;
}

export default convert;
