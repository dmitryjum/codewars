def likes(names)
  count = names.size
  if (count == 0)
    "no one likes this"
  elsif (count == 1)
    "#{names.first} likes this"
  elsif (count == 2)
    "#{names.first} and #{names.last} like this"
  elsif (count == 3)
    "#{names.first}, #{names[1]} and #{names.last} like this"
  else
    "#{names.first}, #{names[1]} and #{count - 2} others like this"
  end
end