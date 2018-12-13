function int32ToIp(int32){
  const binary = (int32).toString(2)
  if (binary != 0) {
    return `${parseInt(binary.slice(0,8), 2)}.${parseInt(binary.slice(8, 16), 2)}.${parseInt(binary.slice(16, 24), 2)}.${parseInt(binary.slice(24, 32), 2)}`
  } else {
    return '0.0.0.0'
  }

}