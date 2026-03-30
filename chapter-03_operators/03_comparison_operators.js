const a = 12;
const b = 5;
const c = '12';

console.log(a == b); // false 
console.log(a == c); // true (loose equality, type coercion occurs)
console.log(a === b); // false
console.log(a === c); // false (strict equality, no type coercion) 

console.log(a != b); // true
console.log(a != c); // false (loose inequality, type coercion occurs)
console.log(a !== b); // true
console.log(a !== c); // true (strict inequality, no type coercion)

console.log(a > b); // true
console.log(a < b); // false
console.log(a >= b); // true
console.log(a <= b); // false

console.log(a > c); // false (loose comparison, '12' is converted to 12)
console.log(a < c); // false (loose comparison, '12' is converted to 12)
console.log(a >= c); // true (loose comparison, '12' is converted to 12)
console.log(a <= c); // true (loose comparison, '12' is converted to 12)  