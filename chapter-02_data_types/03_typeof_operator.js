// typoeof Operator

console.log(typeof "Hello");
console.log(typeof 42);     
console.log(typeof true);
console.log(typeof {});      
console.log(typeof undefined);

// Output:
// string
// number
// boolean
// object
// undefined


// A special case for null
console.log(typeof null); // Output: object

// A special case for arrays
console.log(typeof []); // Output: object

// A special case for functions
console.log(typeof function() {}); // Output: function