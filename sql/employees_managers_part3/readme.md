You have been provided with a PostgreSQL database that contains an employees table. The employees table has the following structure:

id: an integer column that uniquely identifies each employee.
name: a text column that contains the name of the employee.
experience: an integer column that contains total years of experience of an employee.
manager_id: an integer column that identifies the manager of each employee. The manager_id corresponds to an id in the same employees table. This means that our table has a recursive relationship with itself - an employee can be a manager to other employees. It is nullable: top managers do not have managers above them.
This task requires you to identify the influential managers - managers who have the greatest number of direct and indirect subordinates in the company.

An influential manager is not just a person who has many direct subordinates (employees for whom this person is a direct manager), but also employees for whom this person is an indirect manager (for example, the subordinates of their subordinates, and so on down the chain).

Find out the top 5 most influential managers. You also need to display average experience of the subordinates for these managers and employees names

The query should return the following columns:

manager_id: The ID of the manager.
total_subordinates: The total amount of his/her direct and indirect subordinates.
average_experience: Average experience all subordinates, rounded to 1 decimal place. Should be of numeric type.
employee_names: Names of all subordinates as a comma-separated list, ordered by id of an employee
Notes:

Result should be ordered by total_subordinates in desc order, and if managers have the same amount of subordinates, then by manager id in asc order.
Organization's management hierarchy does not have cyclic relationships. In other words, it is guaranteed that there will be no situations where an employee's chain of managers loops back on itself (e.g., A's manager is B, B's manager is C, and C's manager is A).
Good luck!

Desired Output
The desired output should look like this:

manager_id  | total_subordinates | average_experience | employee_names                   | 
------------+--------------------+-------------------+----------------------------------|
 1          |  45                | 0.144e2           | Evita Legros, Joetta Zieme ...   |
 5          |  34                | 0.147e2           | Joetta Zieme, Elissa Nicolas ... |