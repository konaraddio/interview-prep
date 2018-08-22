function reverse(x) {
  let negative = x < 0;
  if (negative) {
    x *= -1;
  }
  x = String(x)
    .split("")
    .reverse()
    .join("");

  if (negative) {
    x *= -1;
  }
  if (x > 2 ** 31 - 1 || x < -(2 ** 31)) {
    return 0;
  }
  return Number(x);
}

export default reverse;
