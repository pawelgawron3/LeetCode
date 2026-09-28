# 175. Combine Two Tables

## Problem

Table: `Person`

`personId` is the primary key (column with unique values) for this table.
This table contains information about the ID of some persons and their _first_ and _last names_.

Table: `Address`

`addressId` is the primary key (column with unique values) for this table.
Each row of this table contains information about the `city` and `state` of one person with ID = `PersonId`.

Write a solution to report the first name, last name, city, and state of each person in the `Person` table. If the address of a `personId` is not present in the `Address` table, report `null` instead.
Return the result table in **any order**.
