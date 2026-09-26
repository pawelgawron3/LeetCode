# 21. Merge Two Sorted Lists

## Problem

You are given the heads of two sorted linked lists `list1` and `list2`.

Merge the two lists into one **sorted** list. The list should be made by splicing together the nodes of the first two lists.

Return the _head of the merged linked list_.

---

Example 1:

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:

Input: list1 = [], list2 = []
Output: []

Example 3:

Input: list1 = [], list2 = [0]
Output: [0]

---

Constraints:

- The number of nodes in both lists is in the range `[0, 50]`.
- -100 <= Node.val <= 100
- Both `list1` and `list2` are sorted in **non-decreasing order**.

---

## Approach

If both pointers point to null I return null.

I created `head` node and a `list3` pointer that points to `head`. I used a `while` loop to check if at least one linked list is not empty yet. The smaller value is always added to list3 first and then the pointer is moved to the next node.

---

## Complexity

### Time Complexity

$O(n+m)$

### Space Complexity

$O(n+m)$

---

## What I learned from this exercise

- How to merge two sorted linked lists into one sorted linked list.

## Main takeaway

Cloning vs. Re-linking: Creating new nodes ($O(n+m)$ space) keeps inputs untouched and builds an entirely fresh list, whereas re-linking existing pointers ($O(1)$ space) optimizes memory by _rearranging the original nodes_.
