require 'pry'
class RomanConvertor

  def solution(num)
    numString = num.to_s
    num_len = numString.length
    romanString = String.new
    (0..num_len - 1).each do |i|
      romanString << to_dict[4 - num_len + i][numString[i].to_i] if numString[i].to_i > 0
    end
    romanString
  end

  private

  def to_dict
    {
      3 => {
        1 => 'I',
        2 => 'II',
        3 => 'III',
        4 => 'IV',
        5 => 'V',
        6 => 'VI',
        7 => 'VII',
        8 => 'VIII',
        9 => 'IX'
      },
      
      2 => {
        1 => 'X',
        2 => 'XX',
        3 => 'XXX',
        4 => 'XL',
        5 => 'L',
        6 => 'LX',
        7 => 'LXX',
        8 => 'LXXX',
        9 => 'XC'
      },
      
      1 => {
        1 => 'C',
        2 => 'CC',
        3 => 'CCC',
        4 => 'CD',
        5 => 'D',
        6 => 'DC',
        7 => 'DCC',
        8 => 'DCCC',
        9 => 'CM'
      },
      
      0 => {
        1 => 'M',
        2 => 'MM',
        3 => 'MMM',
        4 => 'MMMM',
      }
    }
  end
end

puts RomanConvertor.new.solution(1989) #MCMLXXXIX
puts RomanConvertor.new.solution(1) #I
puts RomanConvertor.new.solution(21) #XXI
puts RomanConvertor.new.solution(1000) #M