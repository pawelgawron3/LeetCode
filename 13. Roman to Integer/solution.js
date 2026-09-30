/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const map = new Map([
    ["I", 1],
    ["IV", 4],
    ["V", 5],
    ["IX", 9],
    ["X", 10],
    ["XL", 40],
    ["L", 50],
    ["XC", 90],
    ["C", 100],
    ["CD", 400],
    ["D", 500],
    ["CM", 900],
    ["M", 1000],
  ]);

  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    const pair = s.slice(i, i + 2);
    const value = map.get(pair);

    if (value) {
      sum += value;
      i++;
    } else {
      sum += map.get(s[i]);
    }
  }

  return sum;
};
