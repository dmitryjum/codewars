Array.prototype.square = function() {
  return this.map(i => Math.pow(i, 2))
}

Array.prototype.cube = function() {
  return this.map(i => Math.pow(i, 3))
}

Array.prototype.average = function() {
  if (Array.isArray(this)) {
    return this.length > 0 ? this.reduce((acc, i) => acc + i) / this.length : 'wrong average'
  } else {
    return 'wrong average'
  }
}

Array.prototype.sum = function() {
  return this.reduce((acc, i) => acc + i)
}

Array.prototype.even = function() {
  return this.filter((i) => {
    if (i % 2 === 0 || i === 0) { return i }
  })
}

Array.prototype.odd = function() {
  return this.filter((i) => {
    if (i % 2 !== 0) { return i }
  })
}