/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let i = 0;
  let j = height.length - 1;
  let maximumAmount = 0;

  while (i < j) {
    let amount = Math.min(height[i], height[j]) * (j - i);
    maximumAmount = amount > maximumAmount ? amount : maximumAmount;
    if (height[i] < height[j]) i++;
    else if (height[i] > height[j]) j--;
    else {
      if (height[i + 1] >= height[j - 1]) j--;
      else i++;
    }
  }

  return maximumAmount;
};
