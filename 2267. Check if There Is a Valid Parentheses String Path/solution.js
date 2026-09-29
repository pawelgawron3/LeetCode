/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var hasValidPath = function (grid) {
  const m = grid.length;
  const n = grid[0].length;

  if (grid[0][0] !== "(" || grid[m - 1][n - 1] !== ")") return false;
  if ((m + n - 1) % 2 !== 0) return false;

  const memo = new Map();

  function traverse(row, col, balance) {
    let isPathValid = false;

    balance += grid[row][col] === "(" ? 1 : -1;

    if (memo.has(`${row}, ${col}, ${balance}`))
      return memo.get(`${row}, ${col}, ${balance}`);

    if (balance < 0) return false;
    if (balance > m - row + (n - col) - 2) return false;

    if (row + 1 <= m - 1) {
      isPathValid = traverse(row + 1, col, balance);
    }

    if (col + 1 <= n - 1 && !isPathValid) {
      isPathValid = traverse(row, col + 1, balance);
    }

    if (row === m - 1 && col === n - 1 && balance === 0) {
      isPathValid = true;
    }

    memo.set(`${row}, ${col}, ${balance}`, isPathValid);

    return isPathValid;
  }

  return traverse(0, 0, 0);
};
