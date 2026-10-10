# 1944. Number of Visible People in a Queue

## Problem

There are `n` people standing in a queue, and they numbered from `0` to `n - 1` in left to right order. You are given an array `heights` of **distinct** integers where `heights[i]` represents the height of the `ith` person.

A person can see another person to their right in the queue if everybody in between is **shorter** than both of them. More formally, the `ith` person can see the `jth` person if `i < j` and `min(heights[i], heights[j]) > max(heights[i+1], heights[i+2], ..., heights[j-1])`.

Return an array `answer` of length `n` where `answer[i]` is the **number of people** the `ith` person can **see** to their right in the queue.

---

Example 1:

Input: heights = [10,6,8,5,11,9]
Output: [3,1,2,1,1,0]
Explanation:
Person 0 can see person 1, 2, and 4.
Person 1 can see person 2.
Person 2 can see person 3 and 4.
Person 3 can see person 4.
Person 4 can see person 5.
Person 5 can see no one since nobody is to the right of them.

Example 2:

Input: heights = [5,1,2,3,10]
Output: [4,1,1,1,0]

---

Constraints:

- n == heights.length
- 1 <= n <= 10^5
- 1 <= heights[i] <= 10^5
- All the values of `heights` are **unique**.

---

## Approach

I iterate through the array from right to left using a **monotonic decreasing stack** to keep track of the visible heights to the right. For each person, I pop all shorter individuals from the stack (incrementing our view count) since the current person blocks them from anyone further left. Finally, if the stack is not empty after popping, I add `1` more to the count to account for the first taller person who limits the remaining view, then push the current person onto the stack.

---

## Complexity

### Time Complexity

$O(n)$

### Space Complexity

$O(n)$

---

## What I learned from this exercise

- How to use a monotonic stack to efficiently process range visibility problems from right to left in linear time.
- Popping elements from the stack naturally simulates occlusion, where taller elements block the line of sight for subsequent elements.

---

## Main takeaway

Monotonic stack eliminated redundant $O(n^2)$ nested scans by ensuring each element enters and leaves the stack at most once.
