# 1111. Maximum Nesting Depth of Two Valid Parentheses Strings

## Problem

A string is a _valid parentheses string_ (denoted VPS) if and only if it consists of `"("` and `")"` characters only, and:

- It is the empty string, or
- It can be written as `AB` (`A` concatenated with `B`), where `A` and `B` are VPS's, or
- It can be written as `(A)`, where `A` is a VPS.

We can similarly define the _nesting depth_ `depth(S)` of any VPS `S` as follows:

- `depth("") = 0`
- `depth(A + B) = max(depth(A), depth(B))`, where `A` and `B` are VPS's
- `depth("(" + A + ")") = 1 + depth(A)`, where `A` is a VPS.

For example, `""`, `"()()"`, and `"()(()())"` are VPS's (with nesting depths 0, 1, and 2), and `")("` and `"(()"` are not VPS's.

Given a VPS seq, split it into two disjoint subsequences `A` and `B`, such that `A` and `B` are VPS's (and `A.length + B.length = seq.length`). The subsequences may not necessarily be contiguous.

Choose any such `A` and `B` such that `max(depth(A), depth(B))` is the minimum possible value.

Return an `answer` array (of length `seq.length`) that encodes such a choice of `A` and `B`: `answer[i] = 0` if `seq[i]` is part of `A`, else `answer[i] = 1`. Note that even though multiple answers may exist, you may return any of them.

---

Example 1:

Input: seq = "(()())"
Output: [0,1,1,1,1,0]

Example 2:

Input: seq = "()(())()"
Output: [0,0,0,1,1,0,1,1]

---

Constraints:

- 1 <= seq.size <= 10000

---

## Approach

I use a `balance` counter to track the current nesting depth. For each parenthesis, I assign it to one of the two groups based on whether the current depth is odd or even, which keeps the maximum depth of both groups as balanced as possible.

---

## Complexity

### Time Complexity

$O(n)$

### Space Complexity

$O(n)$

Because of the `result` array.

---

## What I learned from this exercise

- The current `balance` can be used to determine the nesting depth without using a stack.
- Alternating assignments between the two groups helps distribute nested parentheses and reduce the maximum depth.

---

## Main takeaway

A simple depth counter is enough to solve this problem efficiently without needing a stack or additional data structures.
