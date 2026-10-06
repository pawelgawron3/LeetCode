# 856. Score of Parentheses

## Problem

Given a balanced parentheses string `s`, return the _score_ of the string.

The _score_ of a balanced parentheses string is based on the following rule:

- `"()"` has score `1`.
- `AB` has score `A + B`, where `A` and `B` are balanced parentheses strings.
- `(A)` has score `2 * A`, where `A` is a balanced parentheses string.

---

Example 1:

Input: s = "()"
Output: 1

Example 2:

Input: s = "(())"
Output: 2

Example 3:

Input: s = "()()"
Output: 2

---

Constraints:

- 2 <= s.length <= 50
- `s` consists of only `'('` and `')'`.
- `s` is a balanced parentheses string.

---

## Approach

I iterate through the string while tracking the current nesting depth. Whenever I find `()`, I add 2 \*\* depth to the total score, which correctly handles nested and consecutive parentheses.

---

## Complexity

### Time Complexity

$O(n)$

### Space Complexity

$O(1)$

---

## What I learned from this exercise

- How tracking the current depth allows me to calculate the score of nested parentheses without using an explicit stack.

---

## Main takeaway

The key idea is that the score of a primitive `()` is multiplied by 2 for every additional nesting level.
