// Temporal Dead Zone (TDZ)
// With var
console.log(a); 
var a = 5;
// no error - undefined is printed

// With let
console.log(b); 
let b = 10;
// ReferenceError: Cannot access 'b' before initialization

// With const
console.log(c);
const c = 15;
// ReferenceError: Cannot access 'c' before initialization
