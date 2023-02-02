-- # write your SQL statement here: you are given a table 'booltoword' with column 'bool', return a table with column 'bool' and your result in a column named 'res'.
select bool,
case
    when bool = true then 'Yes'
    when bool = false then 'No'
end as res
from booltoword;