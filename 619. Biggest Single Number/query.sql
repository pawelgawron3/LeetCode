# Write your MySQL query statement below

WITH t AS (
 SELECT num
 FROM MyNumbers
 GROUP BY num 
 HAVING COUNT(*) = 1 
)

SELECT (
 SELECT num
 FROM t
 ORDER BY num DESC
 LIMIT 1  
) AS num;
