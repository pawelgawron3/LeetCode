# 2267. Check if There Is a Valid Parentheses String Path

## Problem

A parentheses string is a **non-empty** string consisting only of `'('` and `')'`. It is **valid** if **any** of the following conditions is **true**:

- It is `()`.
- It can be written as `AB` (`A` concatenated with `B`), where `A` and `B` are valid parentheses strings.
- It can be written as `(A)`, where `A` is a valid parentheses string.

You are given an `m x n` matrix of parentheses `grid`. A **valid parentheses string path** in the `grid` is a path satisfying **all** of the following conditions:

- The path starts from the upper left cell `(0, 0)`.
- The path ends at the bottom-right cell `(m - 1, n - 1)`.
- The path only ever moves **down** or **right**.
- The resulting parentheses string formed by the path is **valid**.

Return `true` _if there exists a valid parentheses string path in the `grid`_. Otherwise, return `false`.

---

Example 1:

Input: grid = [["(","(","("],[")","(",")"],["(","(",")"],["(","(",")"]]
Output: true

Example 2:
Input: grid = [[")",")"],["(","("]]
Output: false
Explanation: The two possible paths form the parentheses strings `"))("` and `")(("`. Since neither of them are valid parentheses strings, we return false.

---

Constraints:

- m == grid.length
- n == grid[i].length
- 1 <= m, n <= 100
- grid[i][j] is either `'('` or `')'`.

---

## Approach

I use DFS (Depth First Search) to explore all possible paths by moving only down or right. Instead of maintaining a stack, I track the current parentheses balance: `(` increases it by one and `)` decreases it by one. I _prune_ invalid paths when the balance becomes negative or when there are not enough remaining cells to reduce the balance back to zero. To avoid recalculating the same states, I use _memoization_ based on the current row, column, and balance.

---

## Complexity

### Time Complexity

$O(m * n * (m + n))$

There are at most m _ n _ (m + n) unique states, where the balance can range up to m + n.

### Space Complexity

$O(m * n * (m + n))$

The memoization map can store up to m _ n _ (m + n) states, and the recursion stack uses $O(m + n)$ additional space.

---

## What I learned from this exercise

- How to replace a stack with a simple balance counter when only the number of unmatched parentheses matters.
- How memoization can eliminate repeated DFS work by caching the result of a function.

---

## Main takeaway

Combining DFS with pruning and memoization can lead to a manageable dynamic programming solution.
