function solution(input, markers) {
  const splitInput = input.split('\n')
  const markersRegEx = markers.map(m => `\\${m}`).join('|')
  const regexToLookFor = new RegExp(` ((${markersRegEx}).*)`)
  const cleared = splitInput.map(el => el.replace(regexToLookFor, ''));
  return cleared.join('\n')
};