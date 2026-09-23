# 26. Remove Duplicates from Sorted Array

## Problem

Given an integer array `nums` sorted in **non-decreasing order**, remove the duplicates **in-place** such that each unique element appears only **once**. The relative order of the elements should be kept **the same**.

Consider the number of _unique_ elements in `nums` to be `k`​​​​​​​​​​​​​​. After removing duplicates, return the number of unique elements `k`.

The first `k` elements of `nums` should contain the unique numbers in **sorted order**. The remaining elements beyond index `k - 1` can be ignored.

---

Example 1:

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

Example 2:

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.

---

Constraints:

- 1 <= nums.length <= 3 \* 10^4
- -100 <= nums[i] <= 100
- nums is sorted in **non-decreasing** order.

---

## Approach

I used a **two-pointer technique**, starting from the second value in a array (because the first one will always be unique). I use a pointer named `j` to mark the place where a new value should be added (in place of duplicate), and a `i` pointer which traverse through the array looking for the next unique value.

---

## Complexity

### Time Complexity

$O(n)$

The time complexity is $O(n)$ because the loop iterates through the array once.

(Realistically, it's `n - 1` because `i` always starts from the second element.)

### Space Complexity

$O(1)$

The space complexity is $O(1)$ because it modifies the array **in-place** using a constant amount of extra memory.

---

## What I learned from this exercise

- I learned how to modify an array in-place using a two-pointer approach, avoiding the overhead of creating a new data structure.
- I discovered a reusable pattern for filtering or removing duplicates (like `j - 1` for unique elements, or `j - k` for allowing up to `k` duplicates).

---

## Main takeaway

Mastering the two-pointer technique for in-place modifications allows for cleaner, memory-efficient array algorithms.
