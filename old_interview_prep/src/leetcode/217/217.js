/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let map = {};
  for (let num of nums) {
    if (map[num]) {
      return true;
    } else {
      map[num] = true;
    }
  }
  return false;
};

/**
 * As we loop thru the elements, check if it appeared twice
 * If it appeared twice then return true
 *
 * After the loop, return false since all elements are distinct
 */
