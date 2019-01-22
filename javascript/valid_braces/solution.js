function validBraces(braces){
  var brackets = {'(':')', '[':']', '{':'}'}
  var stack = []
  var bracesLength = braces.length
  function reduceBraces(i) {
    if (i === bracesLength) {return}
    Object.keys(brackets).includes(braces[i]) || !(brackets[stack[stack.length-1]] === braces[i]) ? stack.push(braces[i]) : stack.pop()
    reduceBraces(i + 1)
  };
  reduceBraces(0);
  return stack.length === 0
}