require 'pry'

def solution(nums, target)
  seen = {}

  nums.each_with_index do |num, i|
    missing = target - num
    if seen[num]
      return "#{[i, seen[num]]}"
    else
      seen[missing] = i
    end
  end
end

puts solution([2,7,11,15], 9) #[0,1]
puts solution([3,2,4], 6) #[1,2]
puts solution([3,3], 6) #[0,1]