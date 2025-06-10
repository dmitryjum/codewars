with recursive managers as (
  select id, name, manager_id, '' as management_chain from employees where manager_id is null
  union all
  select e.id, e.name, e.manager_id,
  case
    when m.management_chain = '' then concat(m.name, ' (', m.id, ')')
    else concat(m.management_chain,' -> ', m.name, ' (', m.id, ')')
  end as management_chain from employees e inner join managers m on m.id = e.manager_id
)

select id, name, management_chain from managers order by id asc;