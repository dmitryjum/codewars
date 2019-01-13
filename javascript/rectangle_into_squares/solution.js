function sqInRect(lng, wdth){
  let arrayOfSquares = [];
  if (lng == wdth) {
    return null
  }
  let currentLng = lng;
  let currentWdth = wdth;
  while(currentLng * currentWdth > 0) {
    if (currentLng > currentWdth) {
      arrayOfSquares.push(currentWdth);
      let thisWidth = currentWdth;
      currentWdth = currentLng - currentWdth;
      currentLng = thisWidth
    } else {
      arrayOfSquares.push(currentLng);
      let thisLng = currentLng
      currentLng = currentWdth - currentLng;
      currentWdth = thisLng
    }
  }
  return arrayOfSquares
}
