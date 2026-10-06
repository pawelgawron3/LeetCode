# Write your MySQL query statement below

WITH t AS (
SELECT *
FROM Stadium AS s
WHERE s.people >= 100
)

SELECT *
FROM t
WHERE (t.id - 1 IN (SELECT t.id FROM t) AND t.id - 2 IN (SELECT t.id FROM t)) OR 
      (t.id - 1 IN (SELECT t.id FROM t) AND t.id + 1 IN (SELECT t.id FROM t)) OR
      (t.id + 1 IN (SELECT t.id FROM t) AND t.id + 2 IN (SELECT t.id FROM t))