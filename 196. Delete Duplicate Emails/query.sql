# Write your MySQL query statement below

WITH t AS (
    SELECT MIN(id) AS id
    FROM Person
    GROUP BY email
)

DELETE FROM Person
WHERE id NOT IN (SELECT t.id FROM t)