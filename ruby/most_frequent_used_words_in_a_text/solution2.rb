require 'pry'

def solution(text)
  freq = Hash.new(0)
  top = []
  text.scan(/\b[\w']+\b/) { |w| freq[w.downcase] += 1}
  freq.each do |w, count|
    if top.size < 3 || count > top.last[1] || (count == top.last[1] && w < top.last[0])
      top << [w, count]
      top.sort_by! { |w, c| [-c, w] }
      top.pop while top.size > 3
    end
  end
  top.map(&:first)
end

puts solution("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")