select
  distinct(fighters.name), sum(fighters.won) as won, sum(fighters.lost) as lost from fighters
  right join winning_moves on fighters.move_id = winning_moves.id
  where winning_moves.move not in ('Hadoken', 'Shouoken', 'Kikoken')
  group by fighters.name order by won desc limit 6;