# Write your MySQL query statement below

SELECT 'Low Salary' AS category, COUNT(*) AS accounts_count
FROM Accounts AS a1
WHERE a1.income < 20000

UNION ALL

SELECT 'Average Salary', COUNT(*)
FROM Accounts AS a2
WHERE a2.income BETWEEN 20000 AND 50000

UNION ALL

SELECT 'High Salary', COUNT(*)
FROM Accounts AS a3
WHERE a3.income > 50000;