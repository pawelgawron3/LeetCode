# 2626. Array Reduce Transformation

## Problem

Given an integer array `nums`, a reducer function `fn`, and an initial value `init`, return the final result obtained by executing the `fn` function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.

This result is achieved through the following operations: `val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ...` until every element in the array has been processed. The ultimate value of `val` is then returned.

If the length of the array is 0, the function should return `init`.

Please solve it without using the built-in `Array.reduce` method.

---

Example 1:

Input: nums = [1,2,3,4] fn = function sum(accum, curr) { return accum + curr; } init = 0
Output: 10

Example 2:

Input: nums = [1,2,3,4] fn = function sum(accum, curr) { return accum + curr \* curr; } init = 100
Output: 130

Example 3:

Input: nums = [] fn = function sum(accum, curr) { return 0; } init = 25
Output: 25
Explanation: For empty arrays, the answer is always init.

---

Constraints:

- 0 <= nums.length <= 1000
- 0 <= nums[i] <= 1000
- 0 <= init <= 1000

---

## Approach

I iterate through the array and keep an accumulator (`sum` variable) initialized with init. For each element, I apply the provided function to the current accumulator and the element, then store the returned value as the new accumulator.

---

## Complexity

### Time Complexity

$O(n)$

### Space Complexity

$O(1)$

---

## What I learned from this exercise

- How the `reduce` operation really works.

---

## Main takeaway

An accumulator allows us to process an array element by element and build a single final result.
