let string = 'faizan'

let stringSplit = string.split('')

let stringReverse = stringSplit.reverse()

let stringJoin = stringReverse.join('')

console.log(string)
console.log(stringJoin)







// using function 
function reverseString(string) {
    let reverse = ''
    for (let i = (string.length - 1); i >= 0; i--) {
    reverse = reverse + string[i]
    }
    return  reverse
}

console.log(reverseString('car'))


// Certainly! Below is an explanation of the provided JavaScript function that reverses a string.

// ## Explanation of `revStr` Function

// The `revStr` function takes a string as input and returns the reversed version of that string. Here's a step-by-step breakdown of how the function works:

// ### Function Definition

// ```javascript
// function revStr(str) {
// ```

// - **Function Name**: `revStr`
// - **Parameter**: `str` (a string that the function will reverse)

// ### Variable Initialization

// ```javascript
// let rev = '';
// ```

// - **Variable `rev`**: An empty string that will hold the reversed version of `str` as the function builds it.

// ### For Loop

// ```javascript
// for (let i = (str.length - 1); i >= 0; i--) {
// ```

// - **Initialization**: `let i = (str.length - 1)`
//   - The loop starts with `i` set to the index of the last character in the string (`str.length - 1`).
// - **Condition**: `i >= 0`
//   - The loop runs as long as `i` is greater than or equal to 0.
// - **Decrement**: `i--`
//   - `i` is decremented by 1 after each iteration.

// ### Building the Reversed String

// ```javascript
// rev += str[i];
// ```

// - **Concatenation**: `rev += str[i]`
//   - The character at index `i` of the original string `str` is appended to the `rev` string.
//   - This effectively builds the reversed string one character at a time, starting from the end of the original string and working backwards to the beginning.

// ### Return Statement

// ```javascript
// return rev;
// ```

// - **Return**: The function returns the reversed string stored in `rev`.

// ### Example Usage

// ```javascript
// console.log(revStr("car"));
// ```

// - **Function Call**: `revStr("car")`
//   - The string `"car"` is passed as an argument to the `revStr` function.
// - **Output**: The reversed string `"rac"` is logged to the console.

// ### Complete Code

// ```javascript
// function revStr(str) {
//   let rev = '';
//   for (let i = (str.length - 1); i >= 0; i--) {
//     rev += str[i];
//   }
//   return rev;
// }

// console.log(revStr("car"));
// ```

// ### Output

// ```
// rac
// ```

// - The original string `"car"` is reversed to `"rac"` and printed to the console.

// ### Summary

// The `revStr` function iterates over the input string from the last character to the first, building a new string in reverse order by appending each character to the `rev` variable. The reversed string is then returned and printed to the console.
