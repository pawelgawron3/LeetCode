/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  const n = height.length;
  let leftMax = height[0];
  let rightMax = height[n - 1];

  let amount = 0;

  let i = 1;
  let j = n - 2;

  while (i <= j) {
    if (leftMax <= rightMax) {
      if (height[i] < leftMax) amount += leftMax - height[i];
      else leftMax = height[i];

      i++;
    } else {
      if (height[j] < rightMax) amount += rightMax - height[j];
      else rightMax = height[j];

      j--;
    }
  }

  return amount;
};
