/*
L = [1, 2, 6, 24]
R = [24, 24, 12, 4]

@ i = 0, return R[i+1]

@ i = 1 return L[i -1 ] * R[i+1]

*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let L = new Array(nums.length);
  let R = new Array(nums.length);
  L[0] = nums[0];
  R[nums.length - 1] = nums[nums.length - 1];

  for (let i = 1; i < nums.length; i++) {
    L[i] = nums[i] * L[i - 1];
  }

  for (let i = nums.length - 2; i >= 0; i--) {
    R[i] = nums[i] * R[i + 1];
  }

  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    const left = L[i - 1] != null ? L[i - 1] : 1;
    const right = R[i + 1] != null ? R[i + 1] : 1;
    ans.push(left * right);
  }

  return ans;
};

// same algorithm in O(1) space and with one less loop:

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelfWithLessSpace = function(nums) {
  let ans = new Array(nums.length);
  ans[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    ans[i] = nums[i] * ans[i - 1];
  }

  // each index in ans is the product of the values to the left

  let R = 1;
  for (let i = nums.length - 1; i > 0; i--) {
    ans[i] = ans[i - 1] * R;
    R *= nums[i];
  }

  ans[0] = R;

  return ans;
};
