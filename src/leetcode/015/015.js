/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let solutionSet = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i - 1]) continue;

    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      const a = nums[i];
      const b = nums[j];
      const c = nums[k];
      const sum = a + b + c;

      if (sum < 0) {
        j++;
      } else if (sum > 0) {
        k--;
      } else {
        solutionSet.push([a, b, c]);

        j++;
        k--;
        while (nums[j] == nums[j - 1]) {
          j++;
        }

        while (nums[k] == nums[k + 1]) {
          k--;
        }
      }
    }
  }

  return solutionSet;
};
