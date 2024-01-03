// alert('Hello World!');

// Statement
// Statements in programming are instructions that we tell the computer to perform
// JS Statements usually end with semicolon (;)

// This is a statement
console.log("Hello World!");

// This code will do the exact same thing:
console.   log (  "Hellow World!"   )  ;

// And so will this:
console.
log
(
    "Hellow World!"
)

// Comments
// Comments are part of the code that gets ignored
/* 
    1. Single line comment (command + /)
    2. Multi-line comment (option + shift + a)
*/

// [SECTION] Variables
// It is used to contain data

// Declaring a variable

/* 
    SYNTAX:
    let/const variable name;
*/

// let is a keyword that is usually used in declaring variable

let myVariable;
console.log(myVariable);

// console.log(hello); -> error, variable needs to be declared first
let hello;

// Declaring and Initializing Variables
/* 

    let/const variable name = value;

*/

// String Variables -> alphanumeric
let productName = "desktop computer";
console.log(productName);

// Integer/Number Variables -> pure numbers
let prodcutPrice = 18999;
console.log(prodcutPrice);

// Re-assigning variable values
let test;
test = 10

console.log(test);

let friend = "Kate";
console.log(friend);

friend = "Jane";
console.log(friend);

// This will return an error
let friend2 = "Kate";
// console.log(friend);


// const -> constant/permanent
const pi = 3.1416;

// pi = 4.5; -> error, const values cannot be updated

console.log(pi);

const hoursInADay = 24;
console.log(hoursInADay);

// Multiple Variable Declaration
// Multiple variables may be declared in  one line

// let productDCode = "DC017";
// let productBrand = "Dell";

let productDCode = "DC017", productBrand = "Dell";
console.log(productDCode, productBrand);

// Using reserved keywords

// const let = hello; -> will result an error, we cannot use "let" anymore as a variable name
// console.log(let);


// [SECTION] Data Types

// Strings
// Strings are series of characters
// Can be written using ("") or ('')

let country = 'Philippines';
let province = "Metro Manila";

// Concatenating
// combining multiple string values using "+"

let fullAddress = (province + ", " + country);
// fullAddress = "Metro Manila, Philippines"
console.log(fullAddress);

let greeting = "I live in the " + country;
console.log(greeting);

// escape characters (\)
// \n -> creates a new line

let mailAddress = "Metro Manila\n\nPhilippines";
console.log(mailAddress);


//  Numbers
//  Integers/Whole Numbers
let headCount = 26;
console.log(headCount);

//  Decimal numbers 
let grade = 98.7;
console.log(grade);

//  Exponential Notation
let planetDistance = 2e10;
console.log(planetDistance);

//  Combining text and strings
console.log("Your grade last quarter is: " + grade);

//  Boolean
//  True or false
let isMarried = false;
let inGoodConduct = true;

console.log("You are married: " + isMarried);
console.log("You are in good conduct: " + inGoodConduct);

//Arrays
//  Is a special kind of data type that can store multiple values

/* 

let/const arrayName = [elementA, elementB, ...];

*/

let grades = [98, 92, 90, 94];

//  different datatypes
let details = ["John", true, 5];

console.log(grades);
console.log(details);

//  Obejects
//  used to mimic real world objects
/* 

    let/const objectName = {
        key: value,
        key: value,
        ...
    };

*/

let person = {
    fullName: "Juan Dela Cruz",
    age: 35,
    isMarried: false,
    contact: ["09123456789", "09987654321"],
    address: {
        houseNumber: "345",
        city: "Manila"
    }
}

console.log(person);

//  Null
//  intentionally giving an absent value to a variable
//  null = 0, null = ""
let spouse = null;
console.log(spouse);