# Write your MySQL query statement below

WITH t AS (
    SELECT DISTINCT sp.sales_id
    FROM SalesPerson AS sp 
    JOIN Orders  AS o
     ON sp.sales_id = o.sales_id
    JOIN Company AS c
     ON o.com_id = c.com_id
    WHERE c.name LIKE 'RED'
)

SELECT sp2.name
FROM SalesPerson AS sp2
WHERE sp2.sales_id NOT IN (SELECT * FROM t);