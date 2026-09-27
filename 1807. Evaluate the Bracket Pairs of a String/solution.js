/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
var evaluate = function (s, knowledge) {
  let map = new Map();

  knowledge.forEach(([key, value]) => {
    map.set(key, value);
  });

  let i = 0;
  let result = "";

  while (i < s.length) {
    if (s[i] === "(") {
      let j = i + 1;

      while (s[j] !== ")") j++;

      let key = s.slice(i + 1, j);
      result += map.get(key) ?? "?";
      i = j + 1;
      continue;
    }

    result += s[i];
    i++;
  }

  return result;
};
