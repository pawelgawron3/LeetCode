# 24. Swap Nodes in Pairs

## Problem

Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

---

Example 1:

Input: head = [1,2,3,4]
Output: [2,1,4,3]

Example 2:

Input: head = []
Output: []

Example 3:

Input: head = [1]
Output: [1]

Example 4:

Input: head = [1,2,3]
Output: [2,1,3]

---

Constraints:

- The number of nodes in the list is in the range [0, 100].
- 0 <= Node.val <= 100

---

## Approach

The solution iterates through the linked list and swaps every two adjacent nodes by changing their next pointers. I keep track of the current node and use a temporary node to perform each swap without creating new list nodes. The moveHead flag is used to update the head after the first swap. The loop then moves forward to the next pair until there are no more nodes to swap.

---

## Complexity

### Time Complexity

$O(n)$

### Space Complexity

$O(1)$

---

## What I learned from this exercise

- How to swap adjacent nodes in a singly linked list by manipulating pointers.

---

## Main takeaway

Linked-list problems often become much simpler once you carefully track how each next pointer changes during a swap (for example with a pen and paper).
