require 'pry'

def solution(input)
  word = input.split(/\d*\z/).first
  number = input.scan(/\d*\z/).join
  return "#{input}1" if number.empty?
  new_num = (number.to_i + 1).to_s
  len_diff = number.length - new_num.length
  len_diff > 0 ? "#{word}#{"0" * len_diff}#{new_num}" : "#{word}#{new_num}"
end

puts solution("foobar001")
puts solution("lm0o24")
puts solution("foo")