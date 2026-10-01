# 67. Add Binary

## Problem

Given two binary strings `a` and `b`, return _their sum as a binary string_.

---

Example 1:

Input: a = "11", b = "1"
Output: "100"

Example 2:

Input: a = "1010", b = "1011"
Output: "10101"

---

Constraints:

- 1 <= a.length, b.length <= 10^4
- `a` and `b` consist only of `'0'` or `'1'` characters.
- Each string does not contain leading zeros except for the zero itself.

---

## Approach

Reverse both strings so I can add the bits from right to left, just like normal binary addition. At each position, I calculate the sum of both bits and the carry, then append `value % 2` to the result and update the carry with `value // 2`.

---

## Complexity

### Time Complexity

$O(n)$

### Space Complexity

$O(n)$

---

## What I learned from this exercise

Binary addition can be implemented using simple modulo and integer division operations to calculate the current bit and carry.

---

## Main takeaway

Reversing the inputs makes binary addition straightforward because we can process the bits from the least significant to the most significant.
