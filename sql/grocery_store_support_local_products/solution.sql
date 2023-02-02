select
  distinct(products.country) as country, count(products.name) as products
  from products where country in ('Canada', 'United States of America')
  group by products.country, products.country order by products desc;