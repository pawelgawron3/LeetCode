# 20. Valid Parentheses

## Problem

Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.

---

Example 1:

Input: s = "()"
Output: true

Example 2:

Input: s = "()[]{}"
Output: true

Example 3:

Input: s = "(]"
Output: false

Example 4:

Input: s = "([])"
Output: true

Example 5:

Input: s = "([)]"
Output: false

---

Constraints:

- 1 <= s.length <= 10^4
- `s` consists of parentheses only `'()[]{}'`.

---

## Approach

I used a stack to keep track of opening brackets. For every closing bracket, I pop the last opening bracket and use a Map object to check whether they match. If they don't match, or there are unmatched brackets left at the end, return false.

---

## Complexity

### Time Complexity

$O(n)$

### Space Complexity

$O(n)$

---

## What I learned from this exercise

- A stack is a natural data structure for problems involving nested or properly ordered elements like brackets.

---

## Main takeaway

When elements need to be matched with the most recently opened element, a stack is often the simplest solution.
