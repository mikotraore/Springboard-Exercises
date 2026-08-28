// ES5 Global Constants

var PI = 3.14;
PI = 42; // stop me from doing this!

// ES2015 Global Constants

const PI = 3.14 // unlike the var variable, this const variable can't be reassigned or redeclared

// Quiz

// What is the difference between "var" and "let"?
// Answer: "var" can be reassigned/redeclared while "let" cannot be redeclared after it is defined,
// "let" also creates block scope and we can use "var" to use hoisted variables.

// What is the difference between "var" and "const"?
// Answer: "const" can't be reassigned/redeclared but can be used to make block scope. As stated before, "var" 
// can be reassigned/redeclared.

// What is the difference between "let" and "const"?
// Answer: "let" can be reassigned, but "const" is static (it cannot be reassigned nor redeclared).

// What is hoisting?
// Answer: When variables are used before they are declared, this is the purpose of "var": variables are moved
// (hoisted) to the top of the scope that declares them. By using "var" we can access its variable namee and undefined
// value before it is utilized later in the scope.