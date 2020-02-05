WITH RECURSIVE employee_levels as (
  select 1 as level, id, first_name, last_name, manager_id
  from employees
  where id in (SELECT id FROM employees where manager_id is null)
  union all
  select level+1, e.id, e.first_name, e.last_name, e.manager_id
  from employees e
  inner join employee_levels on employee_levels.id = e.manager_id
)

select level, id, first_name, last_name, manager_id from employee_levels;