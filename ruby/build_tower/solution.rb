def stars_per_floor(floors)
  floors*2-1
end

def towerBuilder(n_floors)
  bottom_layer = stars_per_floor(n_floors)
  tower = []
  while n_floors >= 1 do
    stars_count = stars_per_floor(n_floors)
    space_count = bottom_layer - stars_count
    if space_count == 0
      tower << ('*' * (stars_per_floor(n_floors)))
    else
      tower << ("#{' ' * (space_count/2)}#{'*' * (stars_per_floor(n_floors))}#{' ' * (space_count/2)}")
    end
    n_floors = n_floors - 1
  end
  tower.reverse
end