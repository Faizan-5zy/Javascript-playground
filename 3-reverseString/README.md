 # String Reversal Program

 This project contains a simple JavaScript program that reverses a given string and prints both the original and reversed strings to the console.

 ## Introduction

 Reversing a string is a common task in programming. This program demonstrates how to:
 1. Split a string into an array of characters.
 2. Reverse the array.
 3. Join the array back into a string.
 4. Print both the original and reversed strings.

 ## Explanation

 - **Split the String**: The `split('')` method splits the string `str` into an array of characters.
 - **Reverse the Array**: The `reverse()` method reverses the elements in the array.
 - **Join the Array**: The `join('')` method joins the elements of the array back into a string.
 - **Print the Strings**: The `console.log()` method is used to print both the original string and the reversed string to the console.

 ## Usage

 1. Copy and paste the JavaScript code into your project or a browser console.
 2. Run the code to see the output.

 ### Code

 ```javascript
 let str = 'hello';
 let strsplit = str.split('');   Split the string into an array of characters
 let strrev = strsplit.reverse();   Reverse the array
 let strjoin = strrev.join('');   Join the array back into a string

 console.log(str);   Print the original string
 console.log(strjoin);   Print the reversed string
 ```

 ### Output

 When the above code is executed, it will produce the following output:

 ```
 hello
 olleh
 ```

 The original string "hello" is printed first, followed by the reversed string "olleh".
