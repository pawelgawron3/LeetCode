# 1. Two Sum

## Problem

You are given an array of integers `nums` and an integer `target`, return _indices of the two numbers such that they add up to_ `target`.

You may assume that each input would have **exactly one solution**, and you may not use the _same_ element twice.

You can return the answer in any order.

---

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

---

Constraints:

- 2 <= nums.length <= 104
- -109 <= nums[i] <= 109
- -109 <= target <= 109
- **Only one valid answer exists.**

The goal is to come up with an algorithm that is less than $O(n^2)$ time complexity.

---

## Approach

I used a Hash Table (Map object) to store already visited elements of the `nums` array in key-value pairs format, where a value from `nums` table is the key, and indice is the value associated to a key. I iterate through `nums` array checking if `valToBeAdded` is already in the dict object. I use `a = target - b` formula.

---

## Complexity

### Time Complexity

O(n)

### Space Complexity

O(n)

---

## What I learned from this exercise

- How to trade space for time by using a Hash Table to reduce a quadratic time complexity $O(n^2)$ down to a linear $O(n)$.
- How to implement a one-pass complement lookup using the formula `target - current_element` during iteration.
- How to efficiently use JavaScript's built-in Map object for constant-time $O(1)$ lookups and insertions.

---

## Main takeaway

Leveraging a Hash Table allows you to find the required pair in a single pass, drastically optimizing performance compared to a brute-force approach.
