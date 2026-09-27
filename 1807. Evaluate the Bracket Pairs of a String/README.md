# 1807. Evaluate the Bracket Pairs of a String

## Problem

You are given a string `s` that contains some bracket pairs, with each pair containing a **non-empty** key.

- For example, in the string `"(name)is(age)yearsold"`, there are two bracket pairs that contain the keys `"name"` and `"age"`.

You know the values of a wide range of keys. This is represented by a 2D string array `knowledge` where each `knowledge[i] = [keyi, valuei]` indicates that key `keyi` has a value of `valuei`.

You are tasked to evaluate **all** of the bracket pairs. When you evaluate a bracket pair that contains some key `keyi`, you will:

- Replace `keyi` and the bracket pair with the key's corresponding `valuei`.
- If you do not know the value of the key, you will replace `keyi` and the bracket pair with a question mark `"?"` (without the quotation marks).

Each key will appear at most once in your `knowledge`. There will not be any nested brackets in `s`.

Return _the resulting string after evaluating **all** of the bracket pairs_.

---

Example 1:

Input: s = "(name)is(age)yearsold", knowledge = [["name","bob"],["age","two"]]
Output: "bobistwoyearsold"
Explanation:
The key "name" has a value of "bob", so replace "(name)" with "bob".
The key "age" has a value of "two", so replace "(age)" with "two".

Example 2:

Input: s = "hi(name)", knowledge = [["a","b"]]
Output: "hi?"
Explanation: As you do not know the value of the key "name", replace "(name)" with "?".

Example 3:

Input: s = "(a)(a)(a)aaa", knowledge = [["a","yes"]]
Output: "yesyesyesaaa"
Explanation: The same key can appear multiple times.
The key "a" has a value of "yes", so replace all occurrences of "(a)" with "yes".
Notice that the "a"s not in a bracket pair are not evaluated.

---

Constraints:

- 1 <= s.length <= 10^5
- 0 <= knowledge.length <= 10^5
- knowledge[i].length == 2
- 1 <= keyi.length, valuei.length <= 10
- `s` consists of lowercase English letters and round brackets `'('` and `')'`.
- Every open bracket `'('` in `s` will have a corresponding close bracket `')'`.
- The key in each bracket pair of `s` will be non-empty.
- There will not be any nested bracket pairs in `s`.
- `keyi` and `valuei` consist of lowercase English letters.
- Each `keyi` in `knowledge` is unique.

---

## Approach

The approach uses a Hash Map to store all key-value pairs from the `knowledge` array for efficient $O(1)$ lookups. I then iterate through the string using a pointer, scanning characters until I find an opening parenthesis `(`. Once found, I extract the key up to the closing parenthesis `)`, look it up in the map, and append its value (or `?` if missing) to the result string before moving the pointer forward.

---

## Complexity

### Time Complexity

$O(n+k)$

`n` is the length of the string `s`. `k` is the total number of items in the `knowledge` array used to populate the map object.

### Space Complexity

$O(k)$

Store the key-value pairs in the hash map (`k` is the total number of items in the `knowledge` array).

---

## What I learned from this exercise

- How to efficiently parse and extract dynamic substrings bounded by specific delimiters (like parentheses) during a single linear scan of a string.
- How to use the nullish coalescing operator (`??`) to cleanly provide a fallback value when a map lookup returns undefined.

---

## Main takeaway

Preprocessing lookup data into a hash map combined with a pointer-based scan is an optimal and clean strategy for handling string substitution tasks.
