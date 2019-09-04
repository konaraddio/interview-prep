/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let counts = [0, 0, 0];

  for (let i = 0; i < nums.length; i++) {
    counts[nums[i]]++;
  }

  let k = 0;
  for (let i = 0; i < counts.length; i++) {
    for (let j = 0; j < counts[i]; j++) {
      nums[k] = i;
      k++;
    }
  }
};
