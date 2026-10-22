# 6. Zigzag Conversion

## Problem

The string `"PAYPALISHIRING"` is written in a zigzag pattern on a given number of rows.

And then read line by line: `"PAHNAPLSIIGYIR"`

Write the code that will take a string and make this conversion given a number of rows:
_string convert(string s, int numRows);_

---

Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"

Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"

Example 3:

Input: s = "A", numRows = 1
Output: "A"

---

Constraints:

- 1 <= s.length <= 1000
- `s` consists of English letters (lower-case and upper-case), `','` and `'.'`.
- 1 <= numRows <= 1000

---

## Approach

I used an **array of arrays** to store characters for each row. A `direction` variable controls whether to move down or diagonally up, changing direction at the first and last rows.

---

## Complexity

### Time Complexity

$O(n)$

### Space Complexity

$O(n)$

---

## What I learned from this exercise

- How to simulate a zigzag pattern by tracking the current row and changing direction at the boundaries.

---

## Main takeaway

Using a `direction` variable makes it easier to solve problems that involve moving back and forth through a sequence.
