/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let arr = [];
  if (n > 0) {
    helper(arr, "(", n - 1, 1);
  }

  function helper(currentStr, openParensAvailable, closedParensAvailable) {
    if (closedParensAvailable == 0 && openParensAvailable == 0) {
      arr.push(currentStr);
    }

    if (openParensAvailable > 0) {
      helper(
        arr,
        currentStr + "(",
        openParensAvailable - 1,
        closedParensAvailable + 1
      );
    }

    if (closedParensAvailable > 0) {
      helper(
        arr,
        currentStr + ")",
        openParensAvailable,
        closedParensAvailable - 1
      );
    }
  }

  return arr;
};

console.log(generateParenthesis(2));
