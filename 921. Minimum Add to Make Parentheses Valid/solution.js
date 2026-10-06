/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {
  let balance = 0;
  let counter = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") balance++;
    else {
      if (balance > 0) balance--;
      else counter++;
    }
  }

  return counter + balance;
};
