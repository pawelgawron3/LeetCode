/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function (nums, x) {
  const n = nums.length;
  const sum = nums.reduce((acc, val) => acc + val);
  const target = sum - x;

  if (target < 0) return -1;

  let maxLength = -1;
  let subSum = 0;
  let i = 0;

  for (let j = 0; j < n; j++) {
    subSum += nums[j];

    while (subSum > target) {
      subSum -= nums[i];
      i++;
    }

    if (subSum === target) maxLength = Math.max(maxLength, j - i + 1);
  }

  return maxLength === -1 ? -1 : n - maxLength;
};
