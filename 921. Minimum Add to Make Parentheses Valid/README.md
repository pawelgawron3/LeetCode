# 921. Minimum Add to Make Parentheses Valid

## Problem

A parentheses string is valid if and only if:

- It is the empty string,
- It can be written as `AB` (`A` concatenated with `B`), where `A` and `B` are valid strings, or
- It can be written as `(A)`, where `A` is a valid string.

You are given a parentheses string `s`. In one move, you can insert a parenthesis at any position of the string.

- For example, if `s = "()))"`, you can insert an opening parenthesis to be `"(()))"` or a closing parenthesis to be `"())))"`.

Return _the minimum number of moves required to make `s` valid_.

---

Example 1:

Input: s = "())"
Output: 1

Example 2:

Input: s = "((("
Output: 3

---

Constraints:

- 1 <= s.length <= 1000
- `s[i]` is either `'('` or `')'`.

---

## Approach

I use a `balance` counter to track unmatched opening parentheses and a `counter` to track unmatched closing parentheses. When I encounter `)`, I match it with an available `(` if possible; otherwise, I count it as an extra closing parenthesis. At the end, `counter + balance` gives the minimum number of parentheses that need to be added.

---

## Complexity

### Time Complexity

$O(n)$

I iterate through the string exactly once.

### Space Complexity

$O(1)$

I use two integer variables regardless of the input size.

---

## What I learned from this exercise

- A single `balance` counter is enough to track whether parentheses are currently matched.
- Instead of storing the parentheses, I can solve the problem with constant extra space by tracking only the information that matters.

---

## Main takeaway

Keep track of unmatched elements as you iterate, and handle each case immediately instead of fixing everything at the end.
