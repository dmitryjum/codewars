function numberFunc(num, operation){
  return operation === undefined ? num : operation(num)
}

function zero(operation) {
  return numberFunc(0, operation)
}
function one(operation) {
  return numberFunc(1, operation)
}
function two(operation) {
  return numberFunc(2, operation)
}
function three(operation) {
  return numberFunc(3, operation)
}
function four(operation) {
  return numberFunc(4, operation)
}
function five(operation) {
  return numberFunc(5, operation)
}
function six(operation) {
  return numberFunc(6, operation)
}
function seven(operation) {
  return numberFunc(7, operation)
}
function eight(operation) {
  return numberFunc(8, operation)
}
function nine(operation) {
  return numberFunc(9, operation)
}

function plus(summand_two) {
  return function(summand_one) {
    return Math.floor(summand_one + summand_two)
  }
}
function minus(subtrahend) {
  return function(minuend) {
    return Math.floor(minuend - subtrahend)
  }
}
function times(multiplicand_two) {
  return function(multiplicand_one) {
    return Math.floor(multiplicand_two * multiplicand_one)
  }
}
function dividedBy(divisor) {
  return function(dividend) {
    return Math.floor(dividend / divisor)
  }
}