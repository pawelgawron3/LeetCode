# 121. Best Time to Buy and Sell Stock

## Problem

You are given an array `prices` where `prices[i]` is the price of a given stock on the `i-th` day.

You want to maximize your profit by choosing a **single day** to buy one stock and choosing a **different day in the future** to sell that stock.

Return the _maximum profit_ you can achieve from this transaction. If you cannot achieve any profit, return `0`.

---

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.

---

Constraints:

- 1 <= prices.length <= 10^5
- 0 <= prices[i] <= 10^4

---

## Approach

The objective is to maximize profit by choosing a single day to buy a stock and a different day in the future to sell it. A brute-force approach checking every possible pair of buy and sell days would take $O(n^2)$ time, which is highly inefficient.

Instead, I can solve this efficiently in a single pass ($O(n)$ time complexity and $O(1)$ space complexity) using a greedy strategy:

1. Track the lowest price (variable `lowestPrice` initialized to the first day's price to record the minimum stock price seen so far).
2. Iterate through the array starting from the second day and do two things: update the minimum price, calculate profit.
3. After checking all prices, `maxProfit` will hold the maximum possible profit.

---

## Complexity

### Time Complexity

$O(n)$

### Space Complexity

$O(1)$

I only use two variables (`lowestPrice` and `maxProfit`), requiring **constant** extra space.

---

## What I learned from this exercise

- How to implement a greedy algorithm.

## Main takeaway

A greedy algorithm is an approach where you make the locally optimal choice at each step, hoping that this will lead to the globally optimal solution at the end.
