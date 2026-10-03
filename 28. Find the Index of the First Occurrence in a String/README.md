# 28. Find the Index of the First Occurrence in a String

## Problem

Given two strings `needle` and `haystack`, return the index of the first occurrence of `needle` in `haystack`, or `-1` if `needle` is not part of `haystack`.

---

Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.

Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.

---

Constraints:

- 1 <= haystack.length, needle.length <= 10^4
- `haystack` and `needle` consist of only lowercase English characters.

---

## Approach

I iterate through the `haystack` and check every position where the first character matches the first character of `needle`. For each such position, I extract a substring of the same length as `needle` and compare it with `needle` - if they match, I return the starting index.

---

## Complexity

### Time Complexity

$O(n * m)$

Where `n` is the length of `haystack` and `m` is the length of `needle`.

### Space Complexity

$O(m)$

Because `slice()` creates a new substring of length `m`.

---

## What I learned from this exercise

- Checking only positions where the first character matches can avoid some unnecessary substring comparisons.

---

## Main takeaway

More advanced algorithms like KMP (Knuth–Morris–Pratt) can improve the worst-case time complexity.
