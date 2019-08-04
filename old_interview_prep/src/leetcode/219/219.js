/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  let hashmap = {};
  for (let i = 0; i < nums.length; i++) {
    const prevIndex = hashmap[nums[i]];
    if (prevIndex !== undefined && i - prevIndex <= k) {
      return true;
    }
    hashmap[nums[i]] = i;
  }

  return false;
};

/**
 * For each num in nums
 *   If not in the hashmap, add it to the hashmap and let value = index
 *   If in the hashmap, compare index with current index
 *     If within k distance then return true
 * Return false
 */
