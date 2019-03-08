function incrementString (strng) {
  let number = strng.match(/\d/g)
  const string = strng.split(/\d/g)[0]
  if (number != null) {
    const nonZero = number.findIndex(el => el > 0)
    const plusOne = (parseInt(number.slice(nonZero).join('')) + 1).toString()
    if (plusOne.length >= number.length) {
      return string + plusOne
    } else {
      return string + '0'.repeat(number.length - plusOne.length) + plusOne
    }
  } else {
    return strng + 1
  }
}