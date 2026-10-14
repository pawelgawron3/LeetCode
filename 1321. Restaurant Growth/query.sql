# Write your MySQL query statement below

WITH daily AS (
    SELECT c.visited_on AS "day", SUM(c.amount) AS amount
    FROM Customer AS c
    GROUP BY c.visited_on 
),
t AS (
    SELECT d.day,
    SUM(d.amount) OVER (ORDER BY d.day ROWS BETWEEN 6 PRECEDING AND CURRENT ROW) AS amount,
    COUNT(*) OVER (ORDER BY d.day ROWS BETWEEN 6 PRECEDING AND CURRENT ROW) AS days_count
    FROM daily AS d
)

SELECT t.day AS visited_on, t.amount, ROUND(t.amount / 7, 2) AS average_amount
FROM t
WHERE t.days_count = 7
ORDER BY t.day;
