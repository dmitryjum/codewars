In this task, you need to write a query to find the top (most rented) five movie categories at each store. The result set should be sorted first by store ID, and then by number of rentals in descending order. You are not restricted by technique so you can use window functions, lateral joins etc.

Notes:
Sometimes two or more categories within the store can be tied by (have the same) the number of rentals. Then a category which in alphabetical order occurs earlier gets a higher rank.
By top 5 is meant top five movie category at each store, not data of "top five move category across all stores" for each store.
Let's assume that there will be no categories with 0 rentals so thus this case should not be covered.
Schema
store table:
Column           | Type          | Modifiers
-----------------+---------------+----------
store_id         | smallint      | not null
inventory table:
Column       | Type      | Modifiers
------------ +-----------+----------
inventory_id | integer   | not null
film_id      | smallint  | not null
store_id     | smallint  | not null
rental table:
Column | Type | Modifiers
--------------+---------------+----------
rental_id    | integer   | not null
rental_date  | timestamp | not null
inventory_id | integer   | not null
film_category table:
Column      | Type      | Modifiers
------------+---------- +----------
film_id     | smallint  | not null
category_id | smallint  | not null
category table:
Column      | Type      | Modifiers
------------+-----------+----------
category_id | smallint  | not null
name        | text      | not null
Desired Output
The desired output should look like this:

store_id    | category  | num_rentals
------------+-----------+----------
1           | Sports    | 745
1           | Drama     | 699 
...
store_id - ID of the store
category - name of the category
num_rentals - number of rentals