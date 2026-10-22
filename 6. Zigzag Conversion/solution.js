/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) return s;

  let arr = Array.from({ length: numRows }, () => []);

  let row = 0;
  let direction = 1;

  for (let i = 0; i < s.length; i++) {
    arr[row].push(s[i]);

    if (row === 0) direction = 1;
    if (row === numRows - 1) direction = -1;

    row += direction;
  }

  return arr.reduce((acc, val) => (acc += val.join("")), "");
};
