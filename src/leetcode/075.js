/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// Best O(n) - in one pass
var sortColors = function(nums) {
  let indexAfter0s = 0;
  let current = 0;
  let indexBefore2s = nums.length - 1;

  while (current <= indexBefore2s) {
    if (nums[current] == 0) {
      [nums[indexAfter0s], nums[current]] = [nums[current], nums[indexAfter0s]];
      indexAfter0s++;
      current++;
    } else if (nums[current] == 2) {
      [nums[current], nums[indexBefore2s]] = [
        nums[indexBefore2s],
        nums[current]
      ];
      indexBefore2s--;
    } else {
      current++;
    }
  }
};

// Naive O(n) - uses two passes
/*
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
*/
