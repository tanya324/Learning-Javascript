const a = 12;
const b = 5;
const c = 8;

// Logical AND (&&)
console.log(a > b && a > c); // true
console.log(a > b && a < c); // false

// Logical OR (||)
console.log(a > b || a < c); // true
console.log(a < b || a < c); // true

// Logical NOT (!)
console.log(!(a > b)); // false
console.log(!(a < b)); // true 