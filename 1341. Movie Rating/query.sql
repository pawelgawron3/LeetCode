# Write your MySQL query statement below

WITH t1 AS (
SELECT u.user_id AS id, u.name AS name, COUNT(*) AS amount
FROM Users AS u 
JOIN MovieRating AS mr
 ON u.user_id = mr.user_id
JOIN Movies AS m
 ON mr.movie_id = m.movie_id
GROUP BY u.user_id, u.name
ORDER BY amount DESC, name
LIMIT 1
),
t2 AS (
    SELECT mr.movie_id AS movie_id, m.title AS title, SUM(mr.rating) / COUNT(*) AS rating
    FROM MovieRating AS mr
    JOIN Movies AS m
     ON mr.movie_id = m.movie_id
    WHERE mr.created_at LIKE '2020-02-%'
    GROUP BY mr.movie_id, m.title
    ORDER BY rating DESC, title
    LIMIT 1
)

SELECT u.name AS results
FROM Users AS u
WHERE u.user_id = (SELECT t1.id FROM t1)

UNION ALL

SELECT m.title AS results
FROM Movies AS m
WHERE m.movie_id = (SELECT t2.movie_id FROM t2);
