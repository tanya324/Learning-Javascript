// type coercion
// With a string
console.log('5' + 10); // '510' - string concatenation

console.log('5' - 10); // -5 - string is coerced to number

console.log('5' * 10); // 50 - string is coerced to number

console.log('5' / 10); // 0.5 - string is coerced to number

console.log('5' + true); // '5true' - string concatenation

console.log('5' - true); // 4 - true is coerced to 1


// With a boolean
console.log(true + 1); // 2 - true is coerced to 1

console.log(false + 1); // 1 - false is coerced to 0

console.log(true + true); // 2 - both true are coerced to 1

console.log(true + false); // 1 - true is coerced to 1 and false is coerced to 0

console.log(false + false); // 0 - both false are coerced to 0