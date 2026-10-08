/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  let depth = 0;
  let result = "";

  let i = 0;
  let j = 0;

  while (j < s.length) {
    if (s[j] === "(") depth++;
    else depth--;

    if (depth === 0) {
      result += s.slice(i + 1, j);
      i = j + 1;
      j += 1;
    } else j++;
  }

  return result;
};
