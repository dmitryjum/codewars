const RomanNumerals = {  
  toDict: {
    0: {
      1: 'I',
      2: 'II',
      3: 'III',
      4: 'IV',
      5: 'V',
      6: 'VI',
      7: 'VII',
      8: 'VIII',
      9: 'IX'
    },
    
    1: {
      1: 'X',
      2: 'XX',
      3: 'XXX',
      4: 'XL',
      5: 'L',
      6: 'LX',
      7: 'LXX',
      8: 'LXXX',
      9: 'XC'
    },
    
    2: {
      1: 'C',
      2: 'CC',
      3: 'CCC',
      4: 'CD',
      5: 'D',
      6: 'DC',
      7: 'DCC',
      8: 'DCCC',
      9: 'CM'
    },
    
    3: {
      1: 'M',
      2: 'MM',
      3: 'MMM',
      4: 'MMMM',
    }
  },
  
  fromDict: {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  },
  
  toRoman: function(num) {
    let romanString = ''
    const numString = String(num)
    for (let i = 1; i < numString.length + 1; i++) {
      const currentDigit = numString[i - 1]
      if (parseInt(currentDigit) > 0) {
        //we're looking up from the last to first object in the dictionary, but from the first to last digit in the number
        romanString = romanString.concat(RomanNumerals.toDict[numString.length - i][currentDigit])
      }
    }
    return romanString
  },
  
  fromRoman: function(num) {
    let arabNumbers = 0
    num.split('').forEach((el, i) => {
      const currentValue = RomanNumerals.fromDict[el]
      // if the current value is less than the next one - subtract it to achieve numbers 4/40/400/9/90/900
      if (currentValue < RomanNumerals.fromDict[num[i + 1]]) {
        arabNumbers = arabNumbers - currentValue
      } else {
        arabNumbers = arabNumbers + currentValue
      }
    })
    return arabNumbers
  }
}