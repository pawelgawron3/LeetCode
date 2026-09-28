# 112. Path Sum

## Problem

Given the `root` of a binary tree and an integer `targetSum`, return `true` if the tree has a **root-to-leaf** path such that adding up all the values along the path equals `targetSum`.

A leaf is a node with no children.

---

Example 1:

Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
Output: true

Example 2:

Input: root = [1,2,3], targetSum = 5
Output: false
Explanation: There are two root-to-leaf paths in the tree:
(1 --> 2): The sum is 3.
(1 --> 3): The sum is 4.
There is no root-to-leaf path with sum = 5.

Example 3:

Input: root = [], targetSum = 0
Output: false
Explanation: Since the tree is empty, there are no root-to-leaf paths.

---

Constraints:

- The number of nodes in the tree is in the range [0, 5000].
- -1000 <= Node.val <= 1000
- -1000 <= targetSum <= 1000

---

## Approach

I use a recursive pre-order traversal to explore every root-to-leaf path while keeping track of the current sum. When reaching a leaf node, I check whether the accumulated sum equals the `targetSum`, if it does I set the flag value and eventually return the result.

---

## Complexity

### Time Complexity

$O(n)$

Each node in the binary tree is visited once.

### Space Complexity

$O(h)$

Due to the recursion stack, where `h` is the height of the tree.

---

## What I learned from this exercise

- How to use recursion to traverse a binary tree and keep track of state between recursive calls.

---

## Main takeaway

Recursion makes it natural to explore all root-to-leaf paths.
