# 11. Container With Most Water

## Problem

You are given an integer array `height` of length `n`. There are `n` vertical lines drawn such that the two endpoints of the `ith` line are `(i, 0)` and `(i, height[i])`.

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return _the maximum amount of water a container can store_.

Notice that you may not slant the container.

---

Example 1:

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49

Example 2:

Input: height = [1,1]
Output: 1

---

Constraints:

n == height.length
2 <= n <= 10^5
0 <= height[i] <= 10^4

---

## Approach

I use the two-pointer technique, starting with one pointer at each end of the array. At each step, I calculate the current area and move the pointer with the shorter height inward, since moving the taller one cannot increase the area. This allows us to find the maximum area in $O(n)$ time with $O(1)$ extra space.

---

## Complexity

### Time Complexity

$O(n)$

### Space Complexity

$O(1)$

---

## What I learned from this exercise

- How to use the two-pointer technique to reduce a brute-force $O(n^2)$ solution to $O(n)$.

---

## Main takeaway

The two-pointer technique can significantly improve the efficiency of problems involving pairs of elements.
