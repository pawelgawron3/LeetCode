# 189. Rotate Array

## Problem

Given an integer array `nums`, rotate the array to the right by `k` steps, where `k` is non-negative.

---

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation:
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]

---

Constraints:

- 1 <= nums.length <= 10^5
- -2^31 <= nums[i] <= 2^31 - 1
- 0 <= k <= 10^5

**Follow up:**

-Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.
-Could you do it in-place with O(1) extra space?

---

## Approach

Initially, I decided that I can solve this problem with both linear time and space complexity. I created a shallow copy of `nums` array and iterated each num in a `for` loop.

Then I found out about the Reversal Algorithm for arrays and I implemented it. It uses a $O(n)$ time complexity and a $O(1)$ space complexity.

---

## Complexity

### Time Complexity

$O(n)$

### Space Complexity

$O(1)$

---

## What I learned from this exercise

- How to rotate an array by `k` elements to the right.
- How to implement Reversal Algorithm.

---

## Main takeaway

Usually, there is more than one way to solve a problem.
