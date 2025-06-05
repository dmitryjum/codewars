require 'pry'

def solution(cc)
  "#{'#' * (cc.length - 4)}#{cc[cc.length - 4, cc.length - 1]}"
end

puts solution("4556364607935616") #"############5616"
puts solution("64607935616")