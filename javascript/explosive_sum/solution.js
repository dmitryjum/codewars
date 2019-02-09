const findCombinations = function(num, max, prefix, ar) {
  debugger;
  if (num === 0) {
    ar.push(prefix)
//     console.log('ar length', ar)
    // console.log('prefix',prefix)
    return;
  }

  for (let i = Math.min(max, num); i >= 1; i--) {

    findCombinations(num-i, i, prefix + " " + i, ar);
  }
  return ar
}

function sum(num) {
  let bla = findCombinations(num, num, '', [])
  console.log(bla.length)
  return bla.length
}

sum(process.argv.slice(2)[0])
// const num = process.argv.slice(2)[0]
// console.log(args)