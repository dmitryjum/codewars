/*  SQL  */
SELECT *, 
case
    when top_half.heads > top_half.arms then 'BEAST'
    when bottom_half.tails > bottom_half.legs then 'BEAST'
    else 'WEIRDO'
end as species
from top_half INNER JOIN bottom_half on top_half.id = bottom_half.id
order by species asc;