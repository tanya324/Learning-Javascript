// Hoisting
// Using "var"
console.log(x); // Output: undefined
var x = 5;
console.log(x); // Output: 5



// Using "let"
console.log(y);
let y = 10; 
// This will throw a ReferenceError: Cannot access 'y' before initialization



// Using "const"
console.log(z);
const z = 15; 
// This will also throw a ReferenceError: Cannot access 'z' before initialization