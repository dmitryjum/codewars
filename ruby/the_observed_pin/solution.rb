def get_pins(observed)
  # every digit neighbor could be +1 index or -1 index of the same array, or same index of -1 array or same index + 1 array
  keypad = [
    ['1','2','3'],
    ['4','5','6'],
    ['7','8','9'],
    ['_','0','_']
  ]
  
  variations = observed.chars.map do |d|
    key_row_i = keypad.index {|row| row.include?(d) }
    key_index = keypad[key_row_i].index(d)
    var = [d]
    
    unless keypad[key_row_i][key_index + 1].nil? || key_row_i == 3 # unless it's the right boundary of the row or it's 0 button row
      var << keypad[key_row_i][key_index + 1]
    end
     
    unless key_index - 1 < 0 || keypad[key_row_i][key_index - 1].nil? || key_row_i == 3 # unless it's the left boundary of the row or it's a 0 button row
      var << keypad[key_row_i][key_index - 1]
    end
    
    unless key_row_i - 1 < 0 || keypad[key_row_i - 1][key_index].nil? # unless it's a first row and there's no row before it
      var << keypad[key_row_i - 1][key_index]
    end
    
    unless keypad[key_row_i + 1].nil? || (key_row_i + 1 == 3 && (key_index == 0 || key_index == 2)) # unless it's the last row or it's the last row, but the keys are 0 or 2 (underscore)
      var << keypad[key_row_i + 1][key_index] 
    end
    
    var
  end
  variations.first.product(*variations[1..variations.length-1]).map(&:join) # takes the first array and calls product on it with all other array vars except the first one as args
end