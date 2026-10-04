# 32. Longest Valid Parentheses

## Problem

Given a string containing just the characters `'('` and `')'`, return _the length of the longest valid (well-formed) parentheses substring_.

---

Example 1:

Input: s = "(()"
Output: 2
Explanation: The longest valid parentheses substring is "()".

Example 2:

Input: s = ")()())"
Output: 4
Explanation: The longest valid parentheses substring is "()()".

Example 3:

Input: s = ""
Output: 0

---

Constraints:

-0 <= s.length <= 3 \* 10^4
-s[i] is `'('`, or `')'`.

---

## Approach

This approach makes two passes through the string: left-to-right to handle cases with extra closing parentheses, and right-to-left to handle cases with extra opening parentheses. In each pass, I count `(` and `)` and reset the counters when the substring becomes invalid; when both counts are equal, I update the maximum length.

---

## Complexity

### Time Complexity

$O(n)$

### Space Complexity

$O(1)$

---

## What I learned from this exercise

- How to check the longest valid parentheses substring in a linear time.

---

## Main takeaway

Sometimes two separate loops are required to check all edge cases.
