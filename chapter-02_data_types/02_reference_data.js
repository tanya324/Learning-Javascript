// Reference data types
// 1. Arrays
let a = [1, 2, 3, 4, 5];
let b = a;
b.push(6);
console.log(b); // Output: [1, 2, 3, 4, 5, 6]
console.log(a); // Output: [1, 2, 3, 4, 5, 6] (because a and b reference the same array)


// 2. Objects
let person = {
    name: "Tanya",
    age: 20
};
let me = person;
b.age = 25;
console.log(b); // Output: { name: 'Tanya', age: 25 }
console.log(person); // Output: { name: 'Tanya', age: 25 } (because person and b reference the same object)


// 3. Functions
function greet() {
    console.log("Hello!");
}
let greetCopy = greet;
greetCopy(); // Output: Hello! (because greet and greetCopy reference the same function)