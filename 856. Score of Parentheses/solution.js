/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function (s) {
  let depth = 0;
  let score = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") depth++;
    else {
      depth--;

      if (s[i - 1] === "(") score += 2 ** depth;
    }
  }

  return score;
};
