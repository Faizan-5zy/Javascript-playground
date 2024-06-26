
# Fibonacci Sequence Generator

 This project contains a simple JavaScript program that prompts the user for a number and generates the Fibonacci sequence up to that number. The program runs in a web browser and outputs the sequence to the console.

 ## Introduction

 The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1. This program allows users to input a number, and it will generate the Fibonacci sequence up to that number of terms.

 ## Explanation

 - **Prompt for Input**: The program uses `prompt` to ask the user to enter a number. This number determines how many terms of the Fibonacci sequence will be generated.
 - **Initialize Variables**: The variables `n1` and `n2` are initialized to 0 and 1, respectively. These represent the first two numbers in the Fibonacci sequence.
 - **Generate Sequence**: A for loop runs from 0 to the entered number. Inside the loop, the current term is printed, and the next term is calculated as the sum of the previous two terms.
 - **Output Sequence**: The generated Fibonacci sequence is printed to the console.

 ## Usage

 1. Open your web browser's console.
 2. Copy and paste the JavaScript code into the console.
 3. When prompted, enter a number.
 4. View the Fibonacci sequence in the console.

 ### Code

 ```javascript
 let number = parseInt(prompt("Enter a number:"));
 let n1 = 0, n2 = 1, next;
 let fib = () => {
   for (let i = 0; i < number; i++) {
     console.log(n1);
     next = n1 + n2;
     n1 = n2;
     n2 = next;
   }
 };
 fib();
 ```

 This code snippet will prompt the user for input and then display the Fibonacci sequence up to the entered number in the console.
