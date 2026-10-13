# 3727. Maximum Alternating Sum of Squares

## Problem

You are given an integer array `nums`. You may **rearrange the elements** in any order.

The **alternating score** of an array `arr` is defined as:

- `score = arr[0]^2 - arr[1]^2 + arr[2]^2 - arr[3]^2 + ...`

Return an integer denoting the **maximum possible alternating score** of `nums` after rearranging its elements.

---

Example 1:

Input: nums = [1,2,3]
Output: 12
Explanation:
A possible rearrangement for nums is [2,1,3], which gives the maximum alternating score among all possible rearrangements.
The alternating score is calculated as:
score = 2^2 - 1^2 + 3^2 = 4 - 1 + 9 = 12

Example 2:

Input: nums = [1,-1,2,-2,3,-3]
Output: 16
Explanation:
A possible rearrangement for nums is [-3,-1,-2,1,3,2], which gives the maximum alternating score among all possible rearrangements.

---

Constraints:

- 1 <= nums.length <= 10^5
- -4 _ 10^4 <= nums[i] <= 4 _ 10^4

---

## Approach

First, I sort the array in descending order based on the absolute values of its elements. Then, I use two pointers to select the largest absolute value for addition and the smallest for subtraction, alternating between them until all elements are processed.

---

## Complexity

### Time Complexity

$O(n log n)$

Due to sorting the array, the two-pointer traversal takes linear time.

### Space Complexity

$O(log n)$

Due to the sorting algorithm's internal stack space in JavaScript.

---

## What I learned from this exercise

- How sorting by absolute values and using two pointers can help optimize a greedy approach to maximize an alternating sum.

---

## Main takeaway

Choosing elements in descending order of absolute value for addition and ascending order for subtraction helps maximize the final alternating sum.
