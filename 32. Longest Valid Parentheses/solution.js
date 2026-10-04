/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let left = 0;
  let right = 0;
  let maxLength = 0;

  // left ---> right
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") left++;
    else right++;

    if (left === right) maxLength = Math.max(maxLength, right * 2);

    if (right > left) {
      left = 0;
      right = 0;
    }
  }

  left = 0;
  right = 0;

  // right ---> left
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === "(") left++;
    else right++;

    if (left === right) maxLength = Math.max(maxLength, left * 2);

    if (left > right) {
      left = 0;
      right = 0;
    }
  }

  return maxLength;
};
