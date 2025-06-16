with category_rentals as
  (select inventory.store_id, category.name as category, count(*) as num_rentals from rental
   join inventory on rental.inventory_id = inventory.inventory_id
   join film_category on inventory.film_id = film_category.film_id
   join category on film_category.category_id = category.category_id
   group by inventory.store_id, category.name
),
ranked_categories as (
  select store_id, category, num_rentals,
  rank() over (
    partition by store_id order by num_rentals desc, category asc
  ) as rank from category_rentals
)

select store_id, category, num_rentals
from ranked_categories
where rank <= 5
order by store_id, rank;