/**
 * Constructor DependencyInjector
 * @param {Object} - object with dependencies
 */
var DI = function (dependency) {
  this.dependency = dependency;
};

// Should return new function with resolved dependencies
DI.prototype.inject = function (func) {
  const passedArgString = String(func).split(/\(|\)/)[1]
  let orderedFuncs = []
  if (passedArgString.length > 0) {
    const passedArgs = passedArgString.split(', ')
    orderedFuncs = passedArgs.map(arg => this.dependency[arg])
  }
  return func.bind(null, ...orderedFuncs)
}