# Write your MySQL query statement below

SELECT c.name AS Customers
FROM Customers AS c
WHERE c.id NOT IN (
 SELECT DISTINCT o.customerId
 FROM Orders AS o
)