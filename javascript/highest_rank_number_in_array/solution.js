function highestRank(arr){
  const freq = {}
  for (let num of arr) {
    freq[num] = freq[num] === undefined ? 1 : Number(freq[num]) + 1
  }
  return Number(Object.keys(freq).sort((a,b) => freq[a] - freq[b]).pop())
}