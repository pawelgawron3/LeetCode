/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let gasSum = gas.reduce((acc, val) => acc + val);
  let costSum = cost.reduce((acc, val) => acc + val);

  if (costSum > gasSum) return -1;

  let currGas = 0;
  let start = 0;

  for (let i = 0; i < gas.length; i++) {
    currGas += gas[i] - cost[i];

    if (currGas < 0) {
      currGas = 0;
      start = i + 1;
    }
  }

  return start;
};
