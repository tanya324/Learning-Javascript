Chapter-1: Variables and Declarations

1. What are variables?
- variables are the containers that hold data and values.
- They help us store, reuse, and update information in Javascript - these values can be simple as well as complex.
- In javascipt, variables can be created using keywords: var, let, const.

1.1 "var" keyword: 
- old and risky keyword
- window bounded
- function bounded
- can be redeclared and reassigned i.e. one common variable name can have more than one more values in different places with no error
- Syntax: var {variable_name} = value; or var {variable_name};

1.2 "let" keyword:
- new and modern
- not window bounded
- block bounded
- value can be reassigned but not declared again i.e. same variables cannot be declared
- Syntax: let {variable_name} = value; or let {variable_name};

1.3 "const" keyword:
- cannot be reassigned or redeclared
- value cannot change throughout
- value need to be assigned at the time of declaration
- Syntax: const {variable_name} = value;




2. What is scope?
- scope refers to the extent, range, or boundary of any part of the code
- it defines the accessibility or visibility of any variable, functions, and objects in a particular part of the code
- there are three types of scope - globally, block, and function

2.1 Globally Scope:
- can be accessed from anywhere in the code

2.2 Function Scope:
- variables defined inside a function are not accessible outside the function
- variables like: var

2.3 Block Scope: 
-  variables accessible inside a block {}
- variables like: let, const




3. What is Temporal Dead Zone (TDZ)?
- area/period in the code where any variable is inaccessible until it is initialized
- starts from the beginning of the code until the variable is declared
- accessing the variable in TDZ results in ReferenceError
- var does not have a TDZ




4. What is Hoisting?
- it is a mechanism where a variable is broken down into two parts - declaration and intialization
- the declaration part moves to the starting of the code and
- intilization part stays where it is
- Ex: 
    console.log = a;
    var a = 12;
    
    this gets broken down into two parts:
    (a) var a = undefined; (declaration part moves to the top of the code)
    (b) a = 12; (intialization part stays where it is)

- var shows no error in hoisting because it is accessible even before intialization
- let and const keywords shows ReferenceError because they need to be intialized before being accessible. 