var moveZeros = function (arr) {
  let main = []
  let zeros = []
  for (let i = 0; i < arr.length; i++) {
    arr[i] === 0 ? zeros.push(arr[i]) : main.push(arr[i])
  }
  return main.concat(zeros)
}