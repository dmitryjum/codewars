function stray(numbers) {
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[0] !== numbers[i] && numbers[0] !== numbers[i+1]) {
      return numbers[0]
    } else if(numbers[0] !== numbers[i] && numbers[0] === numbers[i+1]) {
      return numbers[i]
    } else if(numbers[0] === numbers[i] && numbers[0] !== numbers[i+1]) {
      return numbers[i+1]
    }
  }
}
