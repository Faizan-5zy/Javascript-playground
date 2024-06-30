let string = 'faizan'

let stringSplit = string.split('')

let stringReverse = stringSplit.reverse()

let stringJoin = stringReverse.join('')

console.log(string)
console.log(stringJoin)



// 
// Certainly! Below is a README document that explains the provided JavaScript code, which reverses a string and prints both the original and reversed strings.

// ## README

// # String Reversal Program

// This project contains a simple JavaScript program that reverses a given string and prints both the original and reversed strings to the console.

// ## Introduction

// Reversing a string is a common task in programming. This program demonstrates how to:
// 1. Split a string into an array of characters.
// 2. Reverse the array.
// 3. Join the array back into a string.
// 4. Print both the original and reversed strings.

// ## Explanation

// - **Split the String**: The `split('')` method splits the string `str` into an array of characters.
// - **Reverse the Array**: The `reverse()` method reverses the elements in the array.
// - **Join the Array**: The `join('')` method joins the elements of the array back into a string.
// - **Print the Strings**: The `console.log()` method is used to print both the original string and the reversed string to the console.

// ## Usage

// 1. Copy and paste the JavaScript code into your project or a browser console.
// 2. Run the code to see the output.

// ### Code

// ```javascript
// let str = 'hello';
// let strsplit = str.split('');  // Split the string into an array of characters
// let strrev = strsplit.reverse();  // Reverse the array
// let strjoin = strrev.join('');  // Join the array back into a string

// console.log(str);  // Print the original string
// console.log(strjoin);  // Print the reversed string
// ```

// ### Output

// When the above code is executed, it will produce the following output:

// ```
// hello
// olleh
// ```

// The original string "hello" is printed first, followed by the reversed string "olleh".
// 



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