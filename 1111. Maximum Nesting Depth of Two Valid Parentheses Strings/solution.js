/**
 * @param {string} seq
 * @return {number[]}
 */
var maxDepthAfterSplit = function (seq) {
  const result = [];
  let balance = 0;

  for (let i = 0; i < seq.length; i++) {
    if (seq[i] === "(") {
      balance += 1;
      result[i] = balance % 2 === 0 ? 0 : 1;
    } else {
      result[i] = balance % 2 === 0 ? 0 : 1;
      balance += -1;
    }
  }

  return result;
};
