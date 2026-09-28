# 2620. Counter

## Problem

Given an integer `n`, return a `counter` function. This `counter` function initially returns `n` and then returns 1 more than the previous value every subsequent time it is called (`n`, `n + 1`, `n + 2`, etc).

---

Example 1:

Input: n = 10
["call","call","call"]
Output: [10,11,12]

Example 2:

Input: n = -2
["call","call","call","call","call"]
Output: [-2,-1,0,1,2]
Explanation: counter() initially returns -2. Then increases after each sebsequent call.

---

Constraints:

- -1000 <= n <= 1000
- 0 <= calls.length <= 1000
- calls[i] === "call"

---

## Approach

I use a **closure** to keep the value of `n` between function calls. Each time the returned function is called, it returns the current value and then increments `n` by one.

---

## Complexity

### Time Complexity

$O(1)$

Per call.

### Space Complexity

$O(1)$

---

## What I learned from this exercise

- How closures can preserve and maintain state between function calls.

---

## Main takeaway

Closures allow a function to remember and modify state even after the outer function has finished executing.
