# Write your MySQL query statement below

SELECT d.name AS Department, e.name AS Employee, e.salary AS Salary 
FROM Employee AS e
JOIN Department AS d 
 ON e.departmentId  = d.id
WHERE e.salary = (
    SELECT MAX(e2.salary)
    FROM Employee AS e2
    JOIN Department AS d2
     ON e2.departmentId  = d2.id
    WHERE d2.id = d.id
);