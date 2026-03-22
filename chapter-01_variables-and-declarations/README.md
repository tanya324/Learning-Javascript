# Chapter 1: Variables & Declarations

---

## 1. What are Variables?

Variables are containers that hold data and values.
They help us store, reuse, and update information in JavaScript — from simple values like numbers to complex ones like arrays and objects.

In JavaScript, variables are created using three keywords: `var`, `let`, and `const`.




## 2. Variable Keywords

### 2.1 `var`
- Old and risky — avoid using it in modern code
- Scoped to the **window** (globally) and **functions**
- Can be **redeclared and reassigned** — same variable name can be declared multiple times without any error
- Hoisted with a default value of `undefined`
```js
var name = "Tanya";
var name = "Riya"; // ✅ No error
```

### 2.2 `let`
- Modern and safe
- **Not** window-bounded
- Scoped to **blocks** `{}`
- Can be **reassigned** but **not redeclared** in the same scope
```js
let age = 20;
age = 21;     // ✅ Reassign allowed
let age = 22; // ❌ ReferenceError
```

### 2.3 `const`
- Cannot be **reassigned or redeclared**
- Value must be assigned **at the time of declaration**
- Best for values that shouldn't change
```js
const PI = 3.14;
PI = 3.14159; // ❌ TypeError
```

> ⚠️ Note: If `const` holds an object or array, its **contents** can still be modified — only the reference is locked.




## 3. Scope

Scope refers to the boundary of code within which a variable, function, or object is accessible.

There are three types of scope in JavaScript:

### 3.1 Global Scope
- Variables declared outside any block or function
- Accessible from **anywhere** in the code

### 3.2 Function Scope
- Variables declared inside a function are **not accessible outside** it
- `var` follows function scope

### 3.3 Block Scope
- Variables accessible only within a block `{}`
- `let` and `const` follow block scope




## 4. Temporal Dead Zone (TDZ)

The TDZ is the period between the **start of a block** and the point where a variable is **initialized**.

- Accessing a variable in its TDZ throws a `ReferenceError`
- Applies to `let` and `const` — **not** `var`
```js
console.log(a); // ❌ ReferenceError — TDZ
let a = 10;

console.log(b); // ✅ undefined — no TDZ for var
var b = 10;
```




## 5. Hoisting

Hoisting is a JavaScript mechanism where variable **declarations** are moved to the top of their scope before the code runs — but **initializations stay in place**.
```js
// What you write:
console.log(a); // undefined
var a = 12;

// How JS sees it:
var a = undefined; // declaration hoisted
console.log(a);    // undefined
a = 12;            // initialization stays
```

| Keyword | Hoisted? | Default Value | TDZ? |
|---------|----------|---------------|------|
| `var`   | ✅ Yes   | `undefined`   | ❌ No |
| `let`   | ✅ Yes   | ❌ Not initialized | ✅ Yes |
| `const` | ✅ Yes   | ❌ Not initialized | ✅ Yes |




## 🧠 Mindset Rule

> Use `const` by default. Use `let` only when you plan to reassign. Never use `var`.