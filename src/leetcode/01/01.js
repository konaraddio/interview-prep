// complement and search for the complement
// O(n) putting everythign into a hashtable
//

// sort it first and then look for a compl

function getTwoSum(nums, target) {
  let hashmap = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complement = target - num;
    if (hashmap[complement] !== undefined) {
      return [hashmap[complement], i];
    }
    hashmap[num] = i;
  }

  return [-1, -1]; // not found
}

export default getTwoSum;
