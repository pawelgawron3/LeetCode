/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function (s) {
  let map = new Map();
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i);
    } else if (s[i] === ")") {
      let openIndex = stack.pop();

      map.set(openIndex, i);
      map.set(i, openIndex);
    }
  }

  let result = "";
  let direction = 1;
  let i = 0;

  while (i < s.length) {
    if (s[i] === "(" || s[i] === ")") {
      i = map.get(i);
      direction = -direction;
    } else {
      result += s[i];
    }

    i += direction;
  }

  return result;
};
