def unique_in_order(iterable)
  [].tap do |arr|
    iterable.length.times do |n|
      arr << iterable[n] if iterable[n-1] != iterable[n] || iterable.length == 1 || n == 0
    end
  end
end