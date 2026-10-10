# 577. Employee Bonus

## Problem

Table: `Employee`

`empId` is the column with unique values for this table.
Each row of this table indicates the `name` and the ID of an employee in addition to their `salary` and the `id` of their manager.

Table: `Bonus`

`empId` is the column of unique values for this table.
`empId` is a foreign key (reference column) to empId from the `Employee` table.
Each row of this table contains the id of an employee and their respective `bonus`.

Write a solution to report the `name` and `bonus` amount of each employee who satisfies either of the following:

- The employee has a `bonus` _less than_ `1000`.
- The employee did not get any `bonus`.

Return the result table in **any order**.
