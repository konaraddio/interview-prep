/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  const quotientIsNegative = divisor < 0 != dividend < 0;

  divisor = Math.abs(divisor);
  dividend = Math.abs(dividend);

  let remainder = dividend;
  let quotient = 0;
  while (remainder > -1) {
    remainder -= divisor;
    quotient++;
  }

  quotient -= 1;

  quotient = quotientIsNegative ? -quotient : quotient;

  if (quotient > 2147483647) {
    return 2147483647;
  }
  return quotient;
};

// 10, 3
// 7, 3, 1
// 4, 3, 2
// 1, 3, 3
// -2, 3, 4
// 3

// 10, 5
// 5, 5, 1
// 0, 5, 2
// -5, 5, 3
console.log(divide(-5, -5));
