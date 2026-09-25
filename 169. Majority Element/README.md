# 169. Majority Element

## Problem

Given an array `nums` of size `n`, return the _majority element_.

The majority element is the element that appears more than `n / 2` times. You may assume that the majority element always exists in the array.

---

Example 1:

Input: nums = [3,2,3]
Output: 3

Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2

---

Constraints:

- n == nums.length
- 1 <= n <= 5 \* 10^4
- -10^9 <= nums[i] <= 10^9
- The input is generated such that a majority element will exist in the array.

**Follow-up:** Could you solve the problem in **linear time** and in $O(1)$ space?

---

## Approach

Initially, I approached this problem using a straightforward method: since a majority element appears more than `n / 2` times, sorting the array and selecting the middle element (`Math.floor(nums.length / 2)`) guarantees the correct result. However, this approach is not the best one, as it requires an $O(n log n)$ time complexity for sorting.To optimize this, I implemented the Boyer-Moore Majority Vote algorithm, which reduces the time complexity to an optimal $O(n)$ with a single pass through the array, while keeping the space complexity at $O(1)$.

---

## Complexity

### Time Complexity

$O(n)$

### Space Complexity

$O(1)$

---

## What I learned from this exercise

- I learned about the Boyer-Moore Majority Vote algorithm and implemented it.

---

## Main takeaway

The Boyer–Moore Majority Vote algorithm is an algorithm for finding the majority of a sequence of elements using linear time and a constant memory.
