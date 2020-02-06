def generateHashtag(str)
  return false if str.empty? || str.match(/\S/).nil?
  hashtag = "##{str.split.map {|el| el.capitalize}.join}"
  hashtag.length <= 140 ? hashtag : false
end