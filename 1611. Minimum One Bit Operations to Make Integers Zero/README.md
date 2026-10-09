# 1611. Minimum One Bit Operations to Make Integers Zero

## Problem

Given an integer `n`, you must transform it into `0` using the following operations any number of times:

- Change the rightmost `(0th)` bit in the binary representation of `n`.
- Change the `ith` bit in the binary representation of `n` if the `(i-1)th` bit is set to `1` and the `(i-2)th` through `0th` bits are set to `0`.

Return _the minimum number of operations to transform_ `n` into `0`.

---

Example 1:

Input: n = 3
Output: 2
Explanation: The binary representation of 3 is "11".
"11" -> "01" with the 2nd operation since the 0th bit is 1.
"01" -> "00" with the 1st operation.
Example 2:

Input: n = 6
Output: 4
Explanation: The binary representation of 6 is "110".
"110" -> "010" with the 2nd operation since the 1st bit is 1 and 0th through 0th bits are 0.
"010" -> "011" with the 1st operation.
"011" -> "001" with the 2nd operation since the 0th bit is 1.
"001" -> "000" with the 1st operation.

---

Constraints:

- 0 <= n <= 10^9

---

## Approach

The key insight is that the allowed bit operations generate numbers in **Gray code** order. Therefore, the minimum number of operations needed to transform `n` into `0` is equal to the binary value obtained by converting `n` from Gray code back to binary. We can reverse the Gray code transformation by repeatedly _XORing_ `n` with itself shifted right by one bit, accumulating the result until `n` becomes **zero**.

---

## Complexity

### Time Complexity

$O(log n)$

### Space Complexity

$O(1)$

---

## What I learned from this exercise

- The allowed operations follow Gray code order, meaning each consecutive state differs by exactly one bit. By reversing the Gray code transformation, I can calculate the minimum number of operations without simulating each operation individually.

---

## Main takeaway

Recognizing the connection between a problem's bit operations and Gray code allows us to replace a potentially expensive simulation with a simple mathematical approach using XOR and right shifts.
