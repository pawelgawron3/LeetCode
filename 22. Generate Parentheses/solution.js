/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let result = [];

  function traverse(left, right, temp) {
    if (left === 0 && right === 0) {
      result.push(temp);
      return;
    }

    if (left > 0) traverse(left - 1, right, temp + "(");

    if (right > left) traverse(left, right - 1, temp + ")");
  }

  traverse(n, n, "");

  return result;
};
