let variableFirst = prompt('Enter a value:')
let variableSecond = prompt('Enter a value:')
let variableTemporary


variableTemporary=variableFirst
variableFirst=variableSecond
variableSecond=variableTemporary

console.log("after swapping variableFirst:", variableFirst)
console.log("after swapping variableSecond:", variableSecond)

