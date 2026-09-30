# 1658. Minimum Operations to Reduce X to Zero

## Problem

You are given an integer array `nums` and an integer `x`. In one operation, you can either remove the leftmost or the rightmost element from the array `nums` and subtract its value from `x`. Note that this **modifies** the array for future operations.

Return the _**minimum number** of operations to reduce `x` to exactly `0` if it is possible_, otherwise, return `-1`.

---

Example 1:

Input: nums = [1,1,4,2,3], x = 5
Output: 2
Explanation: The optimal solution is to remove the last two elements to reduce x to zero.

Example 2:

Input: nums = [5,6,7,8,9], x = 4
Output: -1

Example 3:

Input: nums = [3,2,20,1,1,3], x = 10
Output: 5

---

Constraints:

- 1 <= nums.length <= 10^5
- 1 <= nums[i] <= 10^4
- 1 <= x <= 10^9

---

## Approach

Instead of removing elements from one of the array end to reach `x`, I can find the longest contiguous subarray whose sum is equal to sum of `nums` - x. Since all numbers are positive, I can use a sliding window technique to find this subarray in linear time. The answer is n - maxLength, representing the elements removed from both ends.

---

## Complexity

### Time Complexity

$O(n)$

Each element is added to and removed from the sliding window at most once.

### Space Complexity

$O(1)$

Only a constant number of variables are used.

---

## What I learned from this exercise

- How to transform a problem of removing elements from both ends into finding the longest valid subarray using a sliding window.

---

## Main takeaway

When all elements of the array are positive, looking for the longest subarray with a target sum can be pretty easy.
