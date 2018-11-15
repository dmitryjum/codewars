function maskify(cc) {
  return cc.split('').map((val, i) => cc.length - i >= 5 ? '#' : val).join('')
}