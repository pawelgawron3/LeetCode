# 22. Generate Parentheses

## Problem

Given `n` pairs of parentheses, write a function to _generate all combinations of well-formed parentheses_.

---

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

Example 2:

Input: n = 1
Output: ["()"]

---

Constraints:

- 1 <= n <= 8

---

## Approach

I used backtracking to generate all valid combinations of `n` pairs of parentheses. At each step, I add `(` if there are `left` parentheses remaining, and `)` only when it keeps the sequence valid (`right` > `left`).

---

## Complexity

### Time Complexity

$O(2^2n)$

### Space Complexity

$O(n)$

---

## What I learned from this exercise

- A refresher for how to use backtracking.

---

## Main takeaway

Backtracking allowed to explore all possible solutions while skipping invalid paths early.
