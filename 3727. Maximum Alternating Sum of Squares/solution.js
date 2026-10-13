/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAlternatingSum = function (nums) {
  nums.sort((a, b) => Math.abs(b) - Math.abs(a));

  let result = 0;
  let k = 0;
  let i = 0;
  let j = nums.length - 1;

  while (i <= j) {
    if (k % 2 === 0) {
      result += nums[i] ** 2;
      i++;
    } else {
      result -= nums[j] ** 2;
      j--;
    }

    k++;
  }

  return result;
};
