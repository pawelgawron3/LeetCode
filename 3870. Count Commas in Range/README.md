# 3870. Count Commas in Range

## Problem

You are given an integer `n`.

Return the **total** number of commas used when writing all integers from `[1, n]` (inclusive) in **standard** number formatting.

In standard formatting:

- A comma is inserted after **every three** digits from the right.
- Numbers with **fewer** than 4 digits contain no commas.

---

Example 1:

Input: n = 1002
Output: 3
Explanation: The numbers "1,000", "1,001", and "1,002" each contain one comma, giving a total of 3.

Example 2:

Input: n = 998
Output: 0
Explanation: All numbers from 1 to 998 have fewer than four digits. Therefore, no commas are used.

---

Constraints:

- 1 <= n <= 10^5

---

## Approach

The only constraint in this problem is that the maximum length of an integer number is `6`. Given that, I know the integer number cannot be higher than `999.999` (after that 2 commas are used). So if `n` is less than `1000` I can return `0` or otherwise the total number of commas will be `n - 999`.

---

## Complexity

### Time Complexity

$O(1)$

### Space Complexity

$O(1)$

---

## What I learned from this exercise

- How to simplify a counting problem by identifying a clear mathematical pattern.

---

## Main takeaway

Recognizing a simple mathematical pattern can eliminate the need for iteration.
