# 2621. Sleep

## Problem

Given a positive integer `millis`, write an asynchronous function that sleeps for `millis` milliseconds. It can resolve any value.

**Note** that _minor_ deviation from `millis` in the actual sleep duration is acceptable.

---

Example 1:

Input: millis = 100
Output: 100
Explanation: It should return a promise that resolves after 100ms.
let t = Date.now();
sleep(100).then(() => {
console.log(Date.now() - t); // 100
});

Example 2:

Input: millis = 200
Output: 200
Explanation: It should return a promise that resolves after 200ms.

---

Constraints:

- 1 <= millis <= 1000

---

## Approach

I return a Promise that is resolved after the specified number of milliseconds using `setTimeout`. This allows the function to pause asynchronously without blocking the execution of the rest of the program.

---

## Complexity

### Time Complexity

$O(1)$

### Space Complexity

$O(1)$

---

## Main takeaway

`setTimeout` combined with a Promise provides a simple way to implement asynchronous delays in JavaScript.
