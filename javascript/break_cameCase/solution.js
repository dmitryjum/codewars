function solution(string) {
  return string.split(/(.+?(?=[A-Z]))/).filter(i => i != '').join(' ')
}