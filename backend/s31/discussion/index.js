// console.log("Excited yarn");

// [SECTION] exponent operator
const firstNum = 8 ** 2;
console.log("Pre-Math Module: " + firstNum);

const secondNum = Math.pow(8, 2);
console.log("Math Module: " + secondNum);

// Math Module Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

// [SECTION] template literals
let name = "John";
// Pre-template literal string
// uses single quotes or double quotes
let message = "Hello " + name + "! Welcome to programming!";
console.log("Message without template litrals: " + message);

// template literal string
// uses backticks
message = `Hello ${name}! Welcome to programming!`;
console.log(`Message without template litrals: ${message}`);

message = `Hello ${name}
Welcome to programming!`;
console.log(`Message without template litrals: ${message}`);

const interestRate = 0.1;
const principal = 1000;
// template literals allows us to write strings with embedded javascript expressions/equations
console.log(
  `The interest on your savings account is: ${principal * interestRate}`
);

// [SECTION] Array Destructuring
const fullName = ["Juan", "Dela", "Cruz"];

// Pre-array destructuring
console.log(fullName[0]);
console.log(fullName[1]);
console.log(fullName[2]);
console.log(
  `Hello ${fullName[0]} ${fullName[1]} ${fullName[2]}! It's nice to meet you.`
);

// array destructuring
/* 
    const firstName = fullName[0]
    const middleName = fullName[1]
    const lastName = fullName[2]
*/

// const [firstName, , lastName] = fullName; // if you don't want to access some elements
const [firstName, middleName, lastName] = fullName;

console.log(firstName);
console.log(middleName);
console.log(lastName);
console.log(
  `Hello ${firstName} ${middleName} ${lastName}! It's nice to meet you.`
);

// const [firstName, , lastName] = fullName;
// console.log(`Hello ${firstName} ${lastName}! It's nice to meet you.`);

// [SECTION] object destructuring
/*
    - Allows to unpack properties of objects into distinct variables
    - Shortens the syntax for accessing properties from objects
    - Syntax
        let/const {propertyName, propertyName, propertyName} = object;
*/
const person = {
  givenName: "Jane",
  maidenName: "Dela",
  familyName: "Cruz",
};

// pre-object destructuring
console.log(person.givenName);
console.log(person.maidenName);
console.log(person.familyName);

console.log(
  `Hello ${person.givenName} ${person.maidenName} ${person.familyName}! It's good to see you again.`
);

// object destructuring
// with object destructuring, order does not matter, spelling and case-sensitivity of your property
const { givenName, familyName, maidenName } = person;
console.log(givenName);
console.log(maidenName);
console.log(familyName);

console.log(
  `Hello ${givenName} ${maidenName} ${familyName}! It's good to see you again.`
);

function getFullName({ givenName, maidenName, familyName }) {
  console.log(
    `Hello ${givenName} ${maidenName} ${familyName}! It's good to see you again.`
  );
}

getFullName(person);

// [SECTION] arrow functions
// traditional funcitons
// function printFullName(firstName, middleName, lastName) {
//   console.log(`Hi ${firstName} ${middleName} ${lastName}!`);
// }

// printFullName("John", "D", "Smith");

// arrow function
const printFullName = (firstName, middleName, lastName) => {
  console.log(`Hi ${firstName} ${middleName} ${lastName}!`);
};

printFullName("John", "D", "Smith");

const students = ["John", "Jane", "Joe"];
// traditional function with loops
students.forEach(function (student) {
  console.log(`${student} is a student at Zuitt.`);
});

// arrow function with loops
// you can ommit the use of () if you only have 1 parameter
students.forEach((student) => {
  console.log(`${student} is a student at Zuitt.`);
});

// [SECTION] implicit return statement
const add = (x, y) => {
  return x + y;
};

let total = add(1, 2);
console.log(`Sum of 1 + 2 = ${total}`);

// arrow function with implicit return statement
// consumes one line, hence, you can only use one javascript expression
// const addition = (x, y) => (/* return */ x > y ? "true" : "false");
const addition = (x, y) => /* return */ x + y;
console.log(`Sum of 1 + 2 = ${addition(1, 2)}`);

// [SECTION] default function argument value
const greeting = (name = "User") => {
  return `Good morning, ${name}`;
};

console.log(greeting());
console.log(greeting("Renz"));

// [SECTION] class-based object blueprints
class Car {
  // the constructor is a special method for creating/initializing an object
  constructor(brand, name, year) {
    this.brand = brand;
    this.name = name;
    this.year = year;
  }
}
// instantiating an object
// declaration and initialization
const carA = new Car();

console.log(carA);

// values of properties
carA.brand = "Ford";
carA.name = "Raptor";
carA.year = 2023;

console.log(carA);

// declaration with initialization
const carB = new Car("Toyota", "Vios", 2023);
console.log(carB);
