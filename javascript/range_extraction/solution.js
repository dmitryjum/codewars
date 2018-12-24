function solution(list){
  let nums = {
    0: [list[0]]
  }
  for (let i = 1; i < list.length; i++) {
    const numsLastKey = Object.keys(nums).slice(-1)[0]
    const arrayLastNum = nums[numsLastKey].slice(-1)[0]
    if (list[i] - 1 === arrayLastNum) {
      nums[numsLastKey].push(list[i])
    } else {
      nums[parseInt(numsLastKey) + 1] = [list[i]]
    }
  }

  const numsKeys = Object.keys(nums)
  let ranges = numsKeys.map((k) => {
    let miniAr = []
    if (nums[k].length === 1) {
      miniAr.push(nums[k].pop())
    } else {
      miniAr.push(nums[k].shift())
      miniAr.push(nums[k].pop())
      if((miniAr[1] - miniAr[0]) > 1) {
        miniAr = miniAr.join("-")
      } else {
        miniAr = miniAr.join(",")
      }
    }
    return miniAr
  })
  return ranges.join(",")
}