// Falsy values
console.log(Boolean(false)); // false
console.log(Boolean(0)); // false
console.log(Boolean(-0)); // false
console.log(Boolean(0n)); // false
console.log(Boolean('')); // false

// Truthy values
console.log(Boolean(true)); // true
console.log(Boolean(1)); // true
console.log(Boolean(-1)); // true
console.log(Boolean(0.1)); // true
console.log(Boolean(' ')); // true because it contains a space character
console.log(Boolean([])); // true because it's an object (empty array)
console.log(Boolean({})); // true because it's an object (empty object)