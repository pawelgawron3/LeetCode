# 42. Trapping Rain Water

## Problem

Given `n` non-negative integers representing an elevation map where the width of each bar is `1`, compute how much water it can trap after raining.

---

Example 1:

Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6

Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9

---

Constraints:

- n == height.length
- 1 <= n <= 2 \* 10^4
- 0 <= height[i] <= 10^5

---

## Approach

I use a two-pointer technique, keeping track of the maximum height seen from both the left and right. Process the side with the smaller maximum, since it determines the amount of water that can be trapped at that position.

---

## Complexity

### Time Complexity

$O(n)$

### Space Complexity

$O(1)$

---

## What I learned from this exercise

- How tracking the left and right maximum heights allows me to calculate trapped water in $O(n)$ time and $O(1)$ space.

---

## Main takeaway

The two-pointer technique can solve complex array problems efficiently without using extra space.
