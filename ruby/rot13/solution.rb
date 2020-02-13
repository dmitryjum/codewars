def rot13(string)
  alpha = ('a'..'z').to_a
  string.split('').map do |e|
    char_index = alpha.index(e.downcase)
    if char_index.nil?
      e
    elsif char_index <= 12
      e == e.upcase ? alpha[char_index+13].upcase : alpha[char_index+13]
    else
      e == e.upcase ? alpha[char_index-13].upcase : alpha[char_index-13]
    end
  end.join
end