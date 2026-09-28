# 1614. Maximum Nesting Depth of the Parentheses

## Problem

Given a **valid parentheses string** `s`, return **the nesting depth** of `s`. The nesting depth is the **maximum** number of nested parentheses.

---

Example 1:

Input: s = "(1+(2\*3)+((8)/4))+1"
Output: 3
Explanation: Digit 8 is inside of 3 nested parentheses in the string.

Example 2:

Input: s = "(1)+((2))+(((3)))"
Output: 3
Explanation: Digit 3 is inside of 3 nested parentheses in the string.

Example 3:

Input: s = "()(())((()()))"
Output: 3

---

Constraints:

- 1 <= s.length <= 100
- `s` consists of digits 0-9 and characters '+', '-', '\*', '/', '(', and ')'.
- It is guaranteed that parentheses expression `s` is a VPS.

---

## Approach

I use a counter to track the current nesting depth while iterating through the string. I increment the depth when encountering `(`, decrement it for `)`, and keep track of the maximum depth reached.

---

## Complexity

### Time Complexity

$O(n)$

Each character is processed once.

### Space Complexity

$O(1)$

---

## What I learned from this exercise

- How to track nested structures using a simple counter instead of using a stack.
- I practiced finding the maximum value reached during a single pass through a string.

---

## Main takeaway

Some nested structure problems can be solved efficiently with a simple counter when only the depth needs to be tracked.
