/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let numsToCount = {};
  for (let num of nums) {
    if (numsToCount[num] === undefined) {
      numsToCount[num] = 1;
    } else {
      delete numsToCount[num];
    }
  }

  return Object.keys(numsToCount)[0];
};

/**
 * A way to do it without extra memory, and still in linear time,
 * is to XOR each number with a variable, initialized to 0,
 * and set the variable to the result then return the variable
 * after going through each element. Numbers that get XOR'ed with it twice
 * will flip bits back to it's original position (as if no changes were made).
 *
 */
