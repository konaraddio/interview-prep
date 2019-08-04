function maxSubArray(nums) {
  let current_max = nums[0];
  let global_max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    current_max = Math.max(nums[i], nums[i] + current_max);
    global_max = Math.max(current_max, global_max);
  }

  return global_max;
}

