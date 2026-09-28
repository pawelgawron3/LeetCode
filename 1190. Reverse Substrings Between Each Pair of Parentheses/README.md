# 1190. Reverse Substrings Between Each Pair of Parentheses

## Problem

You are given a string `s` that consists of lower case English letters and brackets.

Reverse the strings in each pair of matching parentheses, starting from the innermost one.

Your result should **not** contain any brackets.

---

Example 1:

Input: s = "(abcd)"
Output: "dcba"

Example 2:

Input: s = "(u(love)i)"
Output: "iloveu"
Explanation: The substring "love" is reversed first, then the whole string is reversed.

Example 3:

Input: s = "(ed(et(oc))el)"
Output: "leetcode"
Explanation: First, we reverse the substring "oc", then "etco", and finally, the whole string.

---

Constraints:

- 1 <= s.length <= 2000
- `s` only contains lower case English characters and parentheses.
- It is guaranteed that all parentheses are balanced.

---

## Approach

I use the **Wormhole algorithm** to efficiently reverse nested parentheses without explicitly reversing substrings. First, I match each pair of parentheses using a stack and store their corresponding indices in a map object, then I traverse the string while jumping between matching parentheses and changing the direction of traversal.

---

## Complexity

### Time Complexity

$O(n)$

### Space Complexity

$O(n)$

---

## What I learned from this exercise

- How the Wormhole algorithm can be used to jump between matching parentheses and reverse sections of a string efficiently.
- I practiced using a stack and a map together to track matching positions and control the direction of traversal.

---

## Main takeaway

The Wormhole algorithm can reverse nested sections by changing the traversal direction instead of physically reversing the string.
