# 80. Remove Duplicates from Sorted Array II

## Problem

Given an integer array `nums` sorted in **non-decreasing order**, remove the duplicates **in-place** such that each unique element appears **at most twice**. The relative order of the elements should be kept **the same**.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array `nums`. More formally, if there are `k` elements after removing the duplicates, then the first `k` elements of `nums` should hold the final result. It does not matter what you leave beyond the first `k` elements.

Return `k` after placing the final result in the first `k` slots of `nums`.

Do **not** allocate extra space for another array. You must do this by **modifying the input array** in-place with $O(1)$ extra memory.

---

Example 1:

Input: nums = [1,1,1,2,2,3]
Output: 5, nums = [1,1,2,2,3,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

Example 2:

Input: nums = [0,0,1,1,1,1,2,3,3]
Output: 7, nums = [0,0,1,1,2,3,3,_,_]
Explanation: Your function should return k = 7, with the first seven elements of nums being 0, 0, 1, 1, 2, 3 and 3 respectively.

---

Constraints:

- 1 <= nums.length <= 3 \* 10^4
- -10^4 <= nums[i] <= 10^4
- nums is sorted in **non-decreasing** order.

---

## Approach

I used a **two-pointer technique**, starting from the third value in a array (because the first two will always be valid). I use a pointer named `j` to mark the place where a new value should be added (in place of duplicate), and a `i` pointer which traverse through the array looking for the next unique value.

---

## Complexity

### Time Complexity

$O(n)$

### Space Complexity

$O(1)$

---

## What I learned from this exercise

- I used a reusable pattern for filtering or removing duplicates (like `j - 2` for elements that can appear twice, or `j - k` for allowing up to `k` duplicates).

---

## Main takeaway

The two-pointer approach used with that pattern helps to keep both time complexity at $O(n)$ and space complexity at $O(1)$.
