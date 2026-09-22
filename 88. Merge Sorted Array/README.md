# 88. Merge Sorted Array

## Problem

You are given two integer arrays `nums1` and `nums2`, sorted in **non-decreasing order**, and two integers `m` and `n`, representing the number of elements in `nums1` and `nums2` respectively.

Merge `nums1` and `nums2` into a single array sorted in **non-decreasing order**.

The final sorted array should not be returned by the function, but instead be _stored inside the array_ `nums1`. To accommodate this, `nums1` has a length of `m + n`, where the first `m` elements denote the elements that should be merged, and the last `n` elements are set to `0` and should be ignored. `nums2` has a length of `n`.

---

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6].

Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].

Example 3:

Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.

---

Constraints:

- nums1.length == m + n
- nums2.length == n
- 0 <= m, n <= 200
- 1 <= m + n <= 200
- -10^9 <= nums1[i], nums2[j] <= 10^9

The goal is to come up with an algorithm that runs in `O(m + n)` time.

---

## Approach

I used a two-pointer approach, starting from the end of both arrays.

The three pointers are:

- i — points to the last _valid_ element in `nums1`
- j — points to the last element in `nums2`
- k — points to the last available position in `nums1`

Instead of merging from the beginning, I merge from **right to left**.

At each step, I compare `nums1[i]` and `nums2[j]`:

- If `nums2[j]` is greater than or equal to `nums1[i]`, I place `nums2[j]` at position `k`.
- Otherwise, I place `nums1[i]` at position `k`.
- I move the corresponding pointer backwards.
- I always decrement `k`.

There is also an important edge case: if there are no valid elements left in `nums1 (i < 0)`, the remaining elements from `nums2` can be copied directly into `nums1`.

---

## Complexity

### Time Complexity

O(m + n)

### Space Complexity

O(1)

The merge is performed directly inside `nums1`, so no additional array is required.

---

## What I learned from this exercise

- How to merge two sorted arrays efficiently using the two-pointer technique without creating an additional array.
- Why processing from the end of an array can prevent overwriting useful data.
- How to modify an array in-place without using additional memory.
- How important it is to handle edge cases.

---

## Main takeaway

When merging into a sorted array that has free space at the end, consider processing the elements from right to left.
