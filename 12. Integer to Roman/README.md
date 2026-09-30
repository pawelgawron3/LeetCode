# 12. Integer to Roman

## Problem

Seven different symbols represent Roman numerals.

Roman numerals are formed by appending the conversions of decimal place values from highest to lowest. Given an integer, convert it to a Roman numeral.

---

Example 1:

Input: num = 3749
Output: "MMMDCCXLIX"
Explanation:
3000 = MMM as 1000 (M) + 1000 (M) + 1000 (M)
700 = DCC as 500 (D) + 100 (C) + 100 (C)
40 = XL as 10 (X) less of 50 (L)
9 = IX as 1 (I) less of 10 (X)
Note: 49 is not 1 (I) less of 50 (L) because the conversion is based on decimal places.

Example 2:

Input: num = 58
Output: "LVIII"
Explanation:
50 = L
8 = VIII

Example 3:

Input: num = 1994
Output: "MCMXCIV"
Explanation:
1000 = M
900 = CM
90 = XC
4 = IV

---

Constraints:

- 1 <= num <= 3999

---

## Approach

I created a map object where all possible combinations of Roman numerals are stored. I use `for..of` loop to gain access to both symbol and value starting from `M - 1000`. If a `num` is larger or equal than current value, I append a symbol to `romanNum` string variable and I substract it from the num (`while loop`). In the end I just return the `romanNum` variable.

---

## Complexity

### Time Complexity

$O(n)$

### Space Complexity

$O(1)$

---

## What I learned from this exercise

- How to convert an integer to Roman numerals using a greedy approach.

---

## Main takeaway

One way to deal with this problem is to always take the largest possible Roman numeral value, subtract it, and repeat.
