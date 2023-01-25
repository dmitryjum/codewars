Array.prototype.sameStructureAs = function (other) {
    // Return 'true' if and only if 'other' has the same
    // nesting structure as 'this'.

    // Note: You are given a function isArray(o) that returns
    // whether its argument is an array.
  let thisString = JSON.stringify(this);
  let otherString = JSON.stringify(other);
  // first regext replaces everything between "" and '' with 2 and the second one replaces everhthing what's not [] with 2
  thisString = thisString.replace(/'(.*?)'|"(.*?)"/g, "2").replace(/[^\]\[,]/g, "2")
  otherString = otherString.replace(/'(.*?)'|"(.*?)"/g, "2").replace(/[^\]\[,]/g, "2")
  return thisString === otherString
};