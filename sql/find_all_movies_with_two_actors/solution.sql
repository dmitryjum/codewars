select title from film join film_actor on film.film_id = film_actor.film_id where film_actor.actor_id in(105,122)
group by film.film_id, film.title
having count(distinct film_actor.actor_id) = 2;