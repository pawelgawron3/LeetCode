/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 !== 0) return false;

  const map = new Map([
    [")", "("],
    ["}", "{"],
    ["]", "["],
  ]);

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
    } else {
      if (stack.pop() !== map.get(s[i])) return false;
    }
  }

  return stack.length === 0;
};
