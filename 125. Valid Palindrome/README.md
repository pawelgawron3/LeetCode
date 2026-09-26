# 125. Valid Palindrome

## Problem

A phrase is a **palindrome** if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string `s`, return `true` if it is a **palindrome**, or `false` otherwise.

---

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.

---

Constraints:

- 1 <= s.length <= 2 \* 10^5
- `s` consists only of printable ASCII characters.

---

## Approach

First, I normalize the input string by converting all characters to lowercase and removing any non-alphanumeric characters using a regular expression. Then, I check if the cleaned string is identical to its reversed version and return the boolean result.

---

## Complexity

### Time Complexity

$O(n)$

### Space Complexity

$O(n)$

---

## What I learned from this exercise

- I learned how to efficiently clean input data by combining lowercase conversion with regular expressions to delete unwanted non-alphanumeric characters.
- I used a functional chaining.

## Main takeaway

Solving problems sometimes involves separating the data preprocessing step from the core logic check.
