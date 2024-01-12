console.log("intro to JSON Derulo");

// [SECTION] JSON Objects
/*
    - JSON stands for JavaScript Object Notation
    - JSON is also used in other programming languages hence the name JavaScript Object Notation
    - Core JavaScript has a built in JSON object that contains methods for parsing JSON objects and converting strings into JavaScript objects
    - JavaScript objects are not to be confused with JSON
    - JSON is used for serializing different data types into bytes
    - Serialization is the process of converting data into a series of bytes for easier transmission/transfer of information
    - A byte is a unit of data that is eight binary digits (1 and 0) that is used to represent a character (letters, numbers or typographic symbols)
    - Bytes are information that a computer processes to perform different tasks
    - Uses double quotes for property names
    - Syntax
        {
            "propertyA": "valueA",
            "propertyB": "valueB",
        }
*/

const jsonObject = `{
    "city": "Quezon City",
    "province": "Metro Manila",
    "country": "Philippines"
}`;

// [SECTION] JSON array
const jsonArray = `"cities": [
    { "city": "Quezon City", "province": "Metro Manila", "country": "Philippines" },
    { "city": "Manila City", "province": "Metro Manila", "country": "Philippines" },
    { "city": "Makati City", "province": "Metro Manila", "country": "Philippines" }
]`;

// [SECTION] JSON methods
// contains methods for parsing and converting data into stringified json

// method 1: converting data into stringified JSON
let jsData = {
  name: "John",
  age: 31,
  address: {
    city: "Manila",
    province: "Metro Manila",
    country: "Philippines",
  },
};

console.log(`Data:`);
console.log(jsData);

let jsonData = JSON.stringify({
  name: "John",
  age: 31,
  address: {
    city: "Manila",
    province: "Metro Manila",
    country: "Philippines",
  },
});

console.log(`Stringified JSON:`);
console.log(jsonData);

// using stringify method with variables
// let firstName = prompt("What is your first name?");
// let lastName = prompt("What is your last name?");
// let age = prompt("What is your age?");
// let address = {
//   city: prompt("What city do you live in?"),
//   province: prompt("What province do you belong to?"),
//   country: prompt("What country do your city belong to?"),
// };

// console.log("Data:");
// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(address);

// let jsonPrompt = JSON.stringify({
//   firstName: firstName,
//   lastName: lastName,
//   age: age,
//   address: address,
// });

// console.log(`Stringified JSON: `);
// console.log(jsonPrompt);

// method 2: converting stringified json into javascript objects
let stringifiedJSON = `{
  "name": "John",
  "age": 31,
  "address": {
    "city": "Manila",
    "province": "Metro Manila",
    "country": "Philippines"
  }
}`;

console.log(`Stringified JSON: `);
console.log(stringifiedJSON);

let parsedData = JSON.parse(stringifiedJSON);
console.log(`JS Object:`);
console.log(parsedData);

/* 
    Situation 1: Registering in a form

    Filling up the form > JS Object > Click Submit > stringify > stringified JSON > transport data > stringified JSON > parse > JS object

    Situation 2: Display the Profile Page

	Database > JS Object > stringify > Stringified JSON > Transport data (BE - FE) > Stringified JSON > parse > JS Object > Display it in the Profile Page

*/
