function multiply(n1){
    return function(n2){
        return n1*n2
    }
}


console.log(multiply(3)(2))


// 
// The given code demonstrates the concept of **higher-order functions** and **closures** in JavaScript. Here's a step-by-step explanation of how the code works:

// ### Step-by-Step Explanation

// 1. **Function Definition**:
//    ```javascript
//    function multiply(n1) {
//      return function(n2) {
//        console.log(n1 * n2)
//      }
//    }
//    ```
//    - The `multiply` function is defined to take a single argument `n1`.
//    - Inside `multiply`, another function is returned. This inner function takes a single argument `n2` and logs the product of `n1` and `n2`.

// 2. **Calling `multiply`**:
//    ```javascript
//    multiply(3)(2)
//    ```
//    - When `multiply(3)` is called, the outer function receives `n1` as `3`.
//    - It returns the inner function which takes `n2` as its argument.
//    - The returned inner function is immediately invoked with `2` as the argument `n2`.

// 3. **Execution of the Inner Function**:
//    ```javascript
//    console.log(n1 * n2)
//    ```
//    - Inside the inner function, `n1` is `3` (from the outer function's scope) and `n2` is `2` (from the inner function's argument).
//    - The multiplication `3 * 2` is performed, resulting in `6`.
//    - The `console.log` statement outputs `6`.

// ### Key Concepts

// 1. **Higher-Order Function**:
//    - A higher-order function is a function that either takes another function as an argument or returns a function as a result. Here, `multiply` is a higher-order function because it returns another function.

// 2. **Closure**:
//    - A closure is a feature in JavaScript where an inner function has access to variables in its outer enclosing function's scope, even after the outer function has returned.
//    - In this case, the inner function has access to the `n1` variable from the `multiply` function's scope, forming a closure.

// ### Summary

// - The `multiply` function creates and returns another function that multiplies its argument by the `n1` provided to the `multiply` function.
// - When `multiply(3)(2)` is called, it first sets `n1` to `3`, then immediately calls the returned function with `2`, resulting in `3 * 2` being logged to the console, which is `6`.

// This is a practical example of how closures work in JavaScript, allowing the inner function to remember and access the variables of the outer function.
// 
