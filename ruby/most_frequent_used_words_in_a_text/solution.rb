def top_3_words(text)
  {}.tap do |word_counts|
    text.scan(/\b[\w']+\b/).each do |word|
      word = word.downcase
      word_counts[word].nil? ? word_counts[word] = 1 : word_counts[word] += 1
    end
  end.sort_by {|k,v| v}.reverse.first(3).map(&:first)
end