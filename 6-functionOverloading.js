function add(num1,num2){
    return num1+num2
}

function add(num1,num2,num3){
    return num1+num2+num3
}

console.log(add(1,2))






// 
// In JavaScript, function overloading (i.e., defining multiple functions with the same name but different parameters) is not supported in the same way as in some other languages like Java or C++. When you define multiple functions with the same name, the last function definition overwrites any previous definitions. Therefore, in your code, the first `add` function is overwritten by the second `add` function. 

// When you call `console.log(add(2, 3))`, it is calling the second `add` function, which expects three parameters. Since you only provided two parameters, `num3` is `undefined`, leading to the result of `num1 + num2 + num3` being `NaN` because adding a number to `undefined` results in `NaN`.

// Here is a revised version of the code to handle both two and three parameter cases:

// ### Revised Code

// ```javascript
// function add(num1, num2, num3) {
//   if (num3 === undefined) {
//     return num1 + num2;
//   } else {
//     return num1 + num2 + num3;
//   }
// }

// console.log(add(2, 3));       // Output: 5
// console.log(add(2, 3, 4));    // Output: 9
// ```

// ### Explanation

// 1. **Single Function Definition**: Only one `add` function is defined, which accepts three parameters.
// 2. **Handling Undefined Parameter**: Inside the function, it checks if `num3` is `undefined`. If it is, it means the function was called with only two arguments, and it returns the sum of `num1` and `num2`. Otherwise, it returns the sum of `num1`, `num2`, and `num3`.

// ### How It Works

// 1. **Two-Parameter Call**: When `add(2, 3)` is called, `num3` is `undefined`. The function returns `2 + 3`, which is `5`.
// 2. **Three-Parameter Call**: When `add(2, 3, 4)` is called, all three parameters are provided, so the function returns `2 + 3 + 4`, which is `9`.

// This approach ensures that the `add` function can handle both cases appropriately.
// 
