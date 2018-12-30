function threeSum(nums, target) {
  let hashmap = {};
  let solutionSet = [];

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complement = target - num;
    let solution = twoSum(nums.slice(0, i), complement);
    if (solution !== undefined) {
      solution.push(num);
      solutionSet.push(solution);
    }
  }

  return solutionSet;
}

function twoSum(nums, target) {
  let hashmap = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complement = target - num;
    if (hashmap[complement] !== undefined) {
      return [complement, num];
    }
    hashmap[num] = i;
  }

  return undefined; // not found
}

export default threeSum;
