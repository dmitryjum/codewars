You have been provided with a PostgreSQL database that contains an employees table. The employees table has the following structure:

id: an integer column that uniquely identifies each employee.
name: a text column that contains the name of the employee.
manager_id: an integer column that identifies the manager of each employee. The manager_id corresponds to an id in the same employees table. This means that our table has a recursive relationship with itself - an employee can be a manager to other employees. It is nullable: top managers do not have managers above them.
You are required to create a SQL query using PostgreSQL Recurvice CTE's (in part 2 - reloaded you have to do it without them) that generates a report that includes each employee's id, name, and a column named management_chain that presents the full hierarchy of managers above that employee, from the employee's immediate manager to the top manager, in a single string.

Each manager in the hierarchy should be represented by their name and id in parentheses. The immediate manager should appear first in the management_chain, followed by their manager, and so forth until the top manager.

Each manager in the management_chain should be separated by ->.

The query should return the following columns:

id: The ID of the employee.
name: The name of the employee.
management_chain: A text string representing the chain of the employee's managers, starting with their immediate manager and continuing all the way up to the top-level manager. Each manager in the chain should be represented as their name followed by their ID in parentheses, and different managers should be separated by ->. If an employee is a top-level manager, this column should be an empty string, not NULL.
Notes:

Assume that the hierarchy depth is unknown and could be arbitrarily large.
Result should be ordered by id in asc order
Please note that the organization's management hierarchy does not have cyclic relationships. In other words, it is guaranteed that there will be no situations where an employee's chain of managers loops back on itself (e.g., A's manager is B, B's manager is C, and C's manager is A).
Good luck!

Desired Output
The desired output should look like this:

id  |  name             | management_chain                         |
----+-------------------+------------------------------------------|
 1  |  Odell Cummerata  |                                          | 
 2  |  Myriam Jones     | Odell Cummerata (1)                      |
 3  |  Jarod Walsh      | Odell Cummerata (1) -> Myriam Jones (2)  |
...