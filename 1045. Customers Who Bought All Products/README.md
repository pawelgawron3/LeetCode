# 1045. Customers Who Bought All Products

## Problem

Table: `Customer`

This table may contain duplicates rows.
`customer_id` is not `NULL`.
product_key is a foreign key (reference column) to `Product` table.

Table: `Product`

`product_key` is the primary key (column with unique values) for this table.

Write a solution to report _the customer ids_ from the `Customer` table that bought _all_ the products in the `Product` table.
Return the result table in **any order**.
