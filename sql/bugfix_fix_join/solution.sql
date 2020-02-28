select
  distinct(Job.job_title),
  round(avg(Job.salary)::decimal,2)::float as average_salary,
  count(People.id) as total_people,
  round(sum(Job.salary)::decimal,2)::float as total_salary
  from job
  INNER JOIN People on Job.people_id=People.id
  group by Job.job_title
  order by average_salary desc;