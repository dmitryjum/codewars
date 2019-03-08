def race(v1, v2, g)
  puts [v1, v2, g]
  return nil if (v2 < v1)
  exact_time = g/(v1-v2).to_f.abs
  hours = exact_time.floor
  minutes = ((exact_time - hours)*60).floor.abs
  seconds = ((((exact_time - hours)*60).abs - minutes)*60).floor.abs
  [hours, minutes, seconds]
end