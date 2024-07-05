let variableFirst = prompt('Enter a value:')
let variableSecond = prompt('Enter a value:')
let variableTemporary


variableTemporary=variableFirst
variableFirst=variableSecond
variableSecond=variableTemporary

console.log("after swapping variableFirst:", variableFirst)
console.log("after swapping variableSecond:", variableSecond)

// 
// Sure! Here is a README document explaining the JavaScript code for swapping two variables based on user input.

// ## README

// # Variable Swap Program

// This project contains a simple JavaScript program that prompts the user to enter values for two variables, swaps the values of these variables, and then prints the swapped values to the console.

// ## Introduction

// Swapping the values of two variables is a fundamental concept in programming. This program demonstrates how to:
// 1. Prompt the user for input.
// 2. Swap the values of two variables using a temporary variable.
// 3. Print the values of the variables after swapping.

// ## Explanation

// ### Steps

// 1. **Prompt for Input**: The program uses `prompt` to ask the user to enter values for `variableFirst` and `variableSecond`.
// 2. **Initialize Temporary Variable**: A temporary variable `variableTemporary` is used to facilitate the swap.
// 3. **Swap Values**:
//     - Assign the value of `variableFirst` to `variableTemporary`.
//     - Assign the value of `variableSecond` to `variableFirst`.
//     - Assign the value of `variableTemporary` to `variableSecond`.
// 4. **Print the Swapped Values**: The `console.log()` method is used to print the values of `variableFirst` and `variableSecond` after swapping.

// ### Code

// ```javascript
// let variableFirst = prompt('Enter a value:');
// let variableSecond = prompt('Enter a value:');
// let variableTemporary;

// variableTemporary = variableFirst;
// variableFirst = variableSecond;
// variableSecond = variableTemporary;

// console.log("after swapping variableFirst:", variableFirst);
// console.log("after swapping variableSecond:", variableSecond);
// ```

// ### How It Works

// 1. **User Input**:
//     - The `prompt` function is used to get input from the user for `variableFirst` and `variableSecond`.
//     - Example: If the user enters "apple" for `variableFirst` and "banana" for `variableSecond`.
  
// 2. **Swapping Process**:
//     - `variableTemporary` is assigned the value of `variableFirst` ("apple").
//     - `variableFirst` is then assigned the value of `variableSecond` ("banana").
//     - `variableSecond` is assigned the value of `variableTemporary` ("apple").

// 3. **Output**:
//     - The values of `variableFirst` and `variableSecond` are printed to the console after swapping.
//     - Output:
//       ```
//       after swapping variableFirst: banana
//       after swapping variableSecond: apple
//       ```

// ## Usage

// 1. Open your web browser's console or use a JavaScript environment that supports `prompt`.
// 2. Copy and paste the JavaScript code into the console or script file.
// 3. Run the code to see the prompts and enter the desired values.
// 4. View the swapped values in the console.

// This program effectively demonstrates how to swap the values of two variables using a temporary variable in JavaScript.
// 