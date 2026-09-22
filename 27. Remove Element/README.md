# 27. Remove Element

## Problem

Given an integer array `nums` and an integer `val`, remove all occurrences of `val` in `nums` **in-place**. The order of the elements may be changed. Then return the _number of elements in_ `nums` which are _not equal_ to `val`.

Consider the number of elements in `nums` which are not equal to `val` be `k`, to get accepted, you need to do the following things:

- Change the array `nums` such that the first `k` elements of `nums` contain the elements which are not equal to `val`. The remaining elements of `nums` are not important as well as the size of `nums`.
- Return `k`.

---

Example 1:

Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
Explanation: Your function should return `k = 2`, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned `k` (hence they are underscores).

Example 2:

Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums = [0,1,4,0,3,_,_,_]
Explanation: Your function should return `k = 5`, with the first five elements of `nums` containing 0, 0, 1, 3, and 4.
Note that the five elements can be returned in any order.
It does not matter what you leave beyond the returned `k` (hence they are underscores).

---

Constraints:

- 0 <= nums.length <= 100
- 0 <= nums[i] <= 50
- 0 <= val <= 100

---

## Approach

I used a **two-pointer technique** starting from both ends of the array to solve the problem in-place efficiently:

1. Initialize pointer `i` at the beginning (`0`) and pointer `k` at the end (`nums.length`).
2. Iterate through the array while `i < k`:
   - If the element at `nums[i]` matches `val`, overwrite it with the element from the end of our working window (`nums[k - 1]`) and decrement `k` to shrink the valid array size.
   - If it does not match, simply increment `i` to check the next element.
3. Return `k`, which represents the new count of elements not equal to `val`.

---

## Complexity

### Time Complexity

O(n)

### Space Complexity

O(1)

---

## What I learned from this exercise

- Always ensure you are comparing actual array values (`nums[i]`) rather than index positions (`i`) in conditional statements.
- Overwriting elements from the end of the array is a powerful pattern for removing specific items without needing extra memory.

---

## Main takeaway

Efficient in-place array modification sometimes relies on clever pointer management and overwriting the elements.
