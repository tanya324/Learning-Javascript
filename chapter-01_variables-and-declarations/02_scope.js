// Scope
// Global scope
var globalVariable = "I am a global variable";
console.log(globalVariable); // Output: I am a global variable


// Function scope
function myFunction() {
    var functionVariable = "I am a function variable";
    console.log(functionVariable); // Output: I am a function variable
}
myFunction();


// Block scope
if (true) {
    let blockVariable = "I am a block variable";
    console.log(blockVariable); // Output: I am a block variable
}
// console.log(blockVariable); // Uncaught ReferenceError: blockVariable is not defined 
// happens because "let" variable is block scoped and cannot be accessed outside the block


// Using "var" in block scope
if (true) {
    var blockVar = "I am a block variable declared with var";
    console.log(blockVar); // Output: I am a block variable declared with var
}
console.log(blockVar); // Output: I am a block variable declared with var
// happens because "var" variable is function scoped and can be accessed outside the block, which can lead to unintended consequences.