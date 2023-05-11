require 'pry'

def mixup_cypher(word, row_num)
  collector = []
  row_index = 0
  up = 1
  word.each_char do |c|
    collector[row_index].nil? ? collector << [c] : collector[row_index] << c
    up = 1 if row_index === 0
    up = -1 if row_index === row_num - 1
    row_index += up
  end
  collector.join
end