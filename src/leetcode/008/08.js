function stringToInt(str) {
  const match = /^\s*([-|+]?\d+).*$/.exec(str);
  if (match) {
    const num = Number(match[1]);
    if (num > -(2 ** 31) - 1 && num < 2 ** 31) {
      return num;
    }
    if (num <= -(2 ** 31) - 1) {
      return -2147483648;
    }
    if (num >= 2 ** 31) {
      return 2147483647;
    }
  }
  return 0;
}

// even faster (and smaller) solution from leetcode's submissions
const atoi = str =>
  Math.max(Math.min(parseInt(str) || 0, 2147483647), -2147483648);
