number = 123
console.log("number:", number)
console.log("number:", isNaN(number))


numberString='123'
console.log("numberString:", numberString)
console.log("numberString:", isNaN(numberString))
console.log("numberString:", typeof(numberString))


// isNaN(numberString) checks if numberString is "Not-a-Number".
// In JavaScript, isNaN first tries to convert the string to a number. If the conversion is successful (as it is here, since '123' can be converted to 123), isNaN returns false.
// Output: numberString isNaN: false

numberCharacter='111abc'
console.log("numberCharacter:", numberCharacter)
console.log("numberCharacter:", isNaN(numberCharacter))

// isNaN(numberCharacter) checks if numberCharacter is "Not-a-Number".
// In JavaScript, isNaN first tries to convert the string to a number. Since '111abc' cannot be fully converted to a number, isNaN returns true.
// Output: numberCharacter isNaN: true