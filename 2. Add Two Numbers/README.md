# 2. Add Two Numbers

## Problem

You are given two **non-empty** linked lists representing two non-negative integers. The digits are stored in **reverse order**, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

---

Example 1:

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]

Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]

---

Constraints:

- The number of nodes in each linked list is in the range `[1, 100]`.
- 0 <= Node.val <= 9
- It is guaranteed that the list represents a number that does not have leading zeros.

---

## Approach

I iterated through both linked lists simultaneously (`l1` and `l2`) while keeping track of a `carry` value for numbers that exceed 9. In each iteration, I extracted the values from the current nodes (defaulting to 0 if a list has ended), added them together along with the carry, and calculated the new digit using `sum % 10` and the next carry using `Math.floor(sum / 10)`. I stored the result in a new node and continued the process until both lists were fully traversed and no carry remained.

---

## Complexity

### Time Complexity

$O(max(n, m))$

(Where `n` and `m` are the lengths of the two linked lists. The algorithm iterates at most a number of times equal to the length of the longer list).

### Space Complexity

$O(max(n, m))$

(A new linked list is created to store the result, which requires space proportional to the length of the longest input list plus one extra node _if a final carry exists_).

---

## What I learned from this exercise

- A great refresher for how to traverse and manipulate singly linked lists in JavaScript using pointer references (currentNode.next).
- How to handle arithmetic with digits stored in reverse order and properly manage overflow using a carry variable.

---

## Main takeaway

Processing singly linked lists node-by-node while maintaining a carry value allows you to efficiently perform addition on large numbers represented as data structures (similar to manual column addition).
