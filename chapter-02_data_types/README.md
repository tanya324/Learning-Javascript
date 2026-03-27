# Chapter 2: Data Types

---

## 1. What are Data Types?

Data types define the type of data being stored in a variable — a number, string, boolean, etc.

There are two categories of data in JavaScript: **Primitives** and **References**.

---

## 2. Primitive Data Types

- Stored directly in memory (on the **stack**)
- When assigned to another variable, a **new copy** is created
- Changes in the new variable do **not** affect the original

> 🧠 Shortcut: If the value has **no brackets**, it's a primitive.

### 2.1 String
- Text data — created using `""`, `''`, or ` `` ` (backticks)
```js
let name = "Tanya";
let city = 'Delhi';
let msg = `Hello ${name}`;
```

### 2.2 Number
- Covers both **integers and floats** — no separate type for each
```js
let age = 20;
let price = 99.99;
```

### 2.3 Boolean
- Only two values: `true` or `false`
```js
let isLoggedIn = true;
```

### 2.4 Null
- Intentionally assigned "no value"
- Used when a value is **expected later but not yet available**
```js
let selectedStudents = null;
// once selected → selectedStudents = ["Tanya", "Riya", ...]
```

### 2.5 Undefined
- Variable is **declared but not assigned** — JavaScript engine sets it to `undefined` by default
```js
let score;
console.log(score); // undefined
```

### 2.6 Symbol
- Creates a **unique, immutable** identifier
- Useful when working with libraries — prevents accidental overwriting of existing fields
```js
const id = Symbol("id");
```

> 🧠 Example: If a library uses a field called `id` and you also create a field called `id`, yours will overwrite the library's — causing bugs. Symbol prevents this by making each `id` unique.

### 2.7 BigInt
- Used for numbers **larger than JavaScript's safe integer limit** (`2^53 - 1`)
- Add `n` at the end to create a BigInt
```js
const big = 9007199254740991234567890n;
```

---

## 3. Reference Data Types

- Stores a **reference (memory address)** — not the value itself
- When assigned to another variable, both variables **point to the same memory**
- Changes in one variable **will reflect** in the other

> 🧠 Shortcut: If the value is stored in **brackets**, it's a reference type.

### 3.1 Array
- Ordered collection of data, enclosed in `[]`
```js
let marks = [90, 85, 78];
```

### 3.2 Object
- Collection of **key-value pairs**, enclosed in `{}`
```js
let student = { name: "Tanya", age: 20 };
```

### 3.3 Function
- A block of reusable logic — also treated as a reference type in JS
```js
function greet() { console.log("Hello!"); }
```

---

## 4. Dynamic Typing

JavaScript is a **dynamically typed** language — you don't explicitly declare a variable's type. The type is determined by the value it holds at runtime.
```js
let x = 10;      // number
x = "Tanya";     // now a string — no error
```

Contrast with **static typing** (like TypeScript or Java):
```java
int x = 10;
x = "Tanya"; // ❌ Error at compile time
```

> ⚠️ Dynamic typing is flexible but risky — type-related bugs are **not caught at compile time**, only at runtime. This is why TypeScript (static typing) is preferred in large projects.

---

## 5. `typeof` Operator

Used to check the data type of a value or variable. Returns a **string**.
```js
typeof "Tanya"       // "string"
typeof 99            // "number"
typeof true          // "boolean"
typeof undefined     // "undefined"
typeof function(){}  // "function"
```

### ⚠️ Exceptions

| Expression | Output | Reason |
|---|---|---|
| `typeof null` | `"object"` | Known JS bug — has existed since day 1 |
| `typeof NaN` | `"number"` | NaN is technically of numeric type |
| `typeof []` | `"object"` | Arrays are objects internally |

---

## 6. Type Coercion

JavaScript **automatically converts** one data type to another when operations involve mismatched types — instead of throwing an error.
```js
"5" + 1   // "51"  → 1 is coerced to string (+ does concatenation)
"5" - 1   // 4     → "5" is coerced to number (- only does subtraction)
true + 1  // 2     → true coerces to 1
null + 1  // 1     → null coerces to 0
```

> 🧠 Why `"5" + 1 = "51"` and not `6`? Because `+` does both **addition and string concatenation**. When one operand is a string, JS prefers concatenation. But `-` only does subtraction, so the string gets converted to a number.

---

## 7. Truthy and Falsy Values

Every value in JavaScript has an implicit boolean nature — **truthy** or **falsy**.
This matters in `if/else` conditions and logical operators.

> 🧠 Quick check: Use `!!value` to find the truthy/falsy nature of any value.

### 7.1 Falsy Values
Values that evaluate to `false` in a boolean context:

| Value | Type |
|---|---|
| `false` | Boolean |
| `0` | Number |
| `""` | Empty string |
| `null` | Null |
| `undefined` | Undefined |
| `NaN` | Not a Number |
| `document.all` | Special case |

### 7.2 Truthy Values
Everything **not** in the falsy list — including:
- Non-zero numbers (`1`, `-1`, `3.14`)
- Non-empty strings (`"0"`, `"false"`)
- Arrays (`[]`) and Objects (`{}`) — even empty ones!
- Functions, Symbols, Dates
```js
if ([]) console.log("Truthy!");  // ✅ runs
if ({}) console.log("Truthy!");  // ✅ runs
if ("") console.log("Truthy!");  // ❌ doesn't run
```