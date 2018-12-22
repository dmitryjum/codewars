function presses(phrase) {
  const keyboard = [
    ['1'],
    ['a','b','c','2'],
    ['d','e','f','3'],
    ['g','h','i','4'],
    ['j','k','l','5'],
    ['m','n','o','6'],
    ['p','q','r','s','7'],
    ['t','u','v','8'],
    ['w','x','y','z','9'],
    ['*'],
    ['#'],
    [' ', '0']
  ]

  const phraseSyms = phrase.toLowerCase().split('');
  let totalPressCount = 0

  for (let i = 0; i < phraseSyms.length; i++) {
    keyboard.forEach((set) => {
      const buttonPress = set.indexOf(phraseSyms[i]) + 1
      if (buttonPress > 0) {
        totalPressCount += buttonPress
      }
    })
  }

  return totalPressCount
}