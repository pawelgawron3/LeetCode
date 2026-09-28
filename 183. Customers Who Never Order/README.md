# 183. Customers Who Never Order

## Problem

Table: `Customers`

`id` is the primary key (column with unique values) for this table.
Each row of this table indicates the ID and `name` of a customer.

Table: `Orders`

`id` is the primary key (column with unique values) for this table.
`customerId` is a foreign key (reference columns) of the ID from the `Customers` table.
Each row of this table indicates the ID of an order and the ID of the customer who ordered it.

Write a solution to find all customers who _never order anything_.
Return the result table in **any order**.
