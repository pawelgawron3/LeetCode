# 9. Palindrome Number

## Problem

Given an integer `x`, return `true` if `x` is a _palindrome_, and `false` otherwise.

---

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

---

Constraints:

- -2^31 <= x <= 2^31 - 1

**Follow up:** Could you solve it without converting the integer to a string?

---

## Approach

I decided not to convert the integer to a string, as that would be the most straightforward way to solve this problem. Instead, I came up with a mathematical approach to reverse an integer using the modulo operation to extract its last digit and integer division by 10 to remove that digit.

I also noticed that any negative integer can never be a palindrome. Similarly, an integer whose last digit is 0 cannot be a palindrome unless the number itself is 0. That's why I handle these cases early with an `if` statement.

To determine whether the integer is a palindrome, I reverse the number mathematically and then compare the original value with its reversed value. If the difference between them is 0, the integer is in fact a palindrome.

---

## Complexity

### Time Complexity

$O(n)$

### Space Complexity

$O(1)$

---

## What I learned from this exercise

- How to reverse an integer number without converting it to a string.

## Main takeaway

To check if an integer number is a palindrome you don't have to always convert it to a string first. There is a mathematical way that lets you achieve this goal.
