# Write your MySQL query statement below

WITH t AS (
    SELECT q.person_name, SUM(q.weight) OVER (
        ORDER BY q.turn ASC 
        ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
        ) AS totalWeight 
    FROM Queue AS q
)

SELECT t.person_name
FROM t
WHERE t.totalWeight <= 1000
ORDER BY t.totalWeight DESC
LIMIT 1;