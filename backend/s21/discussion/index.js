console.log("Hello World!");

// arithmetic operators

let num1 = 10;
let num2 = 3;

let sum = num1 + num2;
console.log(sum);

let diff = num1 - num2;
console.log(diff);

let prod = num1 * num2;
console.log(prod);

let quo = num1 / num2;
console.log(quo);

// modulo (%)
// modulo divides the given problem and gets the remainder
let mod = num1 % num2;
console.log(mod);



// increment and decrement
// pre-incrementation -> ++variable, post-incrementation -> variable++
let z = 1;

let increment = ++z;

console.log("----------INCREMENTATION----------");

console.log("Result of pre-increment: " + increment);
console.log(++z, z);
console.log("Result of pre-increment: " + z); // z = 3 

// post increment
increment = z++;
console.log("Result of post-increment: " + increment); 
console.log(z++, z);

// decrementation
// pre-decrementation -> --variables, post decrementation -> variable--
console.log("----------DECREMENTATION----------");

// z = 5
let decrement = --z;

console.log("Result of post-decrement: " + decrement);
console.log(--z, z);
console.log("Result of post-decrement: " + z); 
console.log(--z);

// post increment
decrement = z--;
console.log("Result of post-decrement: " + decrement); 
console.log(z--, z);

// type coercion
console.log("----------COERCION----------");

let numA = "10";
let numB = 12;

let coercion = numA + numB;
console.log(typeof coercion); // results to a string

let numC = 16;
let numD = 14;
let nonCoercion = numC + numD;
console.log(typeof nonCoercion);

// true = 1
let numE = true + 1;
console.log(numE);

// false = 0
let numF = false + 1;
console.log(numF);

// comparison operator
console.log("----------COMPARISON OPERATOR----------");

// equality operator (==)
let juan = "juan";
console.log("EQUALITY");
console.log(1 == 1);
console.log(1 == 2);
console.log(1 == "1");
console.log (false == 0);
console.log ("juan" == "juan");
console.log ("juan" == juan);

// inequality operator (!=) -> ! = NOT
console.log("INEQUALITY");
console.log(1 != 1);
console.log(1 != 2);
console.log(1 != "1");
console.log (false != 0);
console.log ("juan" != "juan");
console.log ("juan" != juan);

// stricly equality operator (===)
console.log("STRICT EQUALITY");
console.log(1 === 1); // true
console.log(1 === 2); // false
console.log(1 === "1"); // false
console.log (false === 0); // false 
console.log ("juan" === "juan"); // true 
console.log ("juan" === juan); // true

// relational operators
let a = 50;
let b = 65;

console.log("----------RELATIONAL OPERATORS----------");
console.log(a > b);
console.log(a < b);

console.log(a >= b);
console.log(a <= b);

let numStr = "30";
console.log (a > numStr);

let str = "twenty"; // NaN = Not a Number
console.log(b < str);

// logical operator
console.log("----------LOGICAL OPERATORS----------");
let isLegalAge = true;
let isRegisterd = false;

// logical AND operator (&&)
// returns true if all operands are true
let allRequirementsMet = isLegalAge && isRegisterd;
console.log(allRequirementsMet);

// logical OR operator (||)
let someRequirementsMet = isLegalAge || isRegisterd;
console.log(someRequirementsMet);

// logical "Not" operator (!)
let someRequirementsNotMet = !isRegisterd;
console.log(someRequirementsNotMet);
