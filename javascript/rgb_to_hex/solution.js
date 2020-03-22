const decHexMap = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  10: "A",
  11: "B",
  12: "C",
  13: "D",
  14: "E",
  15: "F"
}

let resultString;

function convert(str, args, counter) {
  if (args[counter] === undefined) {
    resultString = str;
    return str
  }
  
  if (args[counter] < 0) {
    args[counter] = 0
  } else if(args[counter] > 255) {
    args[counter] = 255
  }
  
  const first = Math.floor(args[counter] / 16)
  const second = (args[counter] / 16 - first) * 16
  convert(`${str}${decHexMap[first]}${decHexMap[second]}`, args, counter + 1)
}

function rgb(r, g, b) {  
  convert('', arguments, 0);
  return resultString
}