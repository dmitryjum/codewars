class TowerBuilder
  attr_accessor :floor_count
  attr_accessor :tower
  def initialize(n_floors)
    @floor_count = n_floors
    @tower = []
  end

  def build_tower
    bottom_layer = stars_per_floor(self.floor_count)
    while floor_count >= 1 do
      stars_count = stars_per_floor(self.floor_count)
      space_count = bottom_layer - stars_count
      if space_count == 0
        self.tower << ('*' * (stars_per_floor(self.floor_count)))
      else
        self.tower << ("#{' ' * (space_count/2)}#{'*' * (stars_per_floor(self.floor_count))}#{' ' * (space_count/2)}")
      end
      self.floor_count = self.floor_count - 1
    end
    self.tower = self.tower.reverse
  end

  private

  def stars_per_floor(floors)
    floors*2-1
  end
end