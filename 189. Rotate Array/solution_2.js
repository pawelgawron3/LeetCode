/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const n = nums.length;
  nums.reverse();

  const reverseChunkOfArray = (start, end) => {
    while (end > start) {
      let temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
      start++;
      end--;
    }
  };

  reverseChunkOfArray(0, (k % n) - 1);
  reverseChunkOfArray(k % n, n - 1);
};
