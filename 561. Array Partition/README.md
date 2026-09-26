# 561. Array Partition

## Problem

Given an integer array `nums` of `2n` integers, group these integers into `n` pairs `(a1, b1), (a2, b2), ..., (an, bn)` such that the sum of `min(ai, bi)` for all `i` is **maximized**. Return _the maximized sum_.

---

Example 1:

Input: nums = [1,4,3,2]
Output: 4
Explanation: All possible pairings (ignoring the ordering of elements) are:

1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3
2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3
3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4
   So the maximum possible sum is 4.

Example 2:

Input: nums = [6,2,6,5,1,2]
Output: 9
Explanation: The optimal pairing is (2, 1), (2, 5), (6, 6). min(2, 1) + min(2, 5) + min(6, 6) = 1 + 2 + 6 = 9.

---

Constraints:

- 1 <= n <= 10^4
- nums.length == 2 \* n
- -10^4 <= nums[i] <= 10^4

---

## Approach

I immediately noticed that in order to solve this problem I have to sort the array in a non-decreasing order and then select every second value from the array (starting from index `0`). This is the solution for finding the maximized sum of all `min(ai, bi)` pairs.

---

## Complexity

### Time Complexity

$O(n log n)$

The sorting function usually takes $O(n log n)$ time. The `for` loop takes a $O(n)$ time.

### Space Complexity

O(1)

---

## What I learned from this exercise

- How to find a maximized sum of all `min(ai, bi)` pairs.

---

## Main takeaway

Ockham's blade - sometimes the simplest solution is the correct one.
