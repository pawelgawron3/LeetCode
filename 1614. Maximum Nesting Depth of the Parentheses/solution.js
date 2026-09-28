/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
  let maxDepth = 0;
  let currDepth = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      currDepth++;
      maxDepth = currDepth > maxDepth ? currDepth : maxDepth;
    } else if (s[i] === ")") currDepth--;
  }

  return maxDepth;
};
