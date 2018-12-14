function order(words){
  if (words === '') return words;
  var wordsArray = words.split(' ');
  var hash = {};
  wordsArray.forEach(word => hash[word.match(/\d/)[0]] = word)
  var finalString = Object.keys(hash).sort().map(el => hash[el]);
  return finalString.join(' ')
}