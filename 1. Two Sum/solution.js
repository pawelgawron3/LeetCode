/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let dict = new Map();

  for (let i = 0; i < nums.length; i++) {
    let valToBeAdded = target - nums[i];

    if (dict.has(valToBeAdded)) {
      return [dict.get(valToBeAdded), i];
    } else {
      dict.set(nums[i], i);
    }
  }
};
