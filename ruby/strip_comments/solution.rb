require 'pry'

def solution(input, markers)
  arr = input.split("\n")
  new_str = String.new
  arr.each_with_index do |line, i|
    new_str << "#{line.split(/\s#{markers.join("|\\s")}/).first}"
    new_str << "\n" unless arr.length - 1 == i
  end
  new_str
end

puts solution("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"])
puts solution("Q @b\nu\ne -e f g", ["@", "-"])