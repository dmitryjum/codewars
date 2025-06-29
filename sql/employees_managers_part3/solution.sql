
with recursive emp_tree as (
  SELECT
    id as subordinate_id,
    name as subordinate_name,
    experience,
    manager_id
  FROM employees WHERE manager_id IS NOT NULL
  
  UNION ALL
  
  SELECT
    t.subordinate_id,
    t.subordinate_name,
    t.experience,
    e.manager_id
  FROM emp_tree t
  JOIN employees e on e.id = t.manager_id
  WHERE e.manager_id IS NOT NULL
)

select
  manager_id,
  count(subordinate_id) as total_subordinates,
  round(avg(experience)::numeric, 1) as average_experience,
  string_agg(subordinate_name, ', ' order by subordinate_id) as employee_names
from emp_tree group by manager_id order by total_subordinates desc, manager_id asc limit 5;