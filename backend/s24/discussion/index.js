// what is conditional statements?
// conditional statements allows us to control the flow of our program. it allows us to run statement/instructions if a condition is met or run another separate instruction otherwise.

// [SECTION] if-else and else if statement

let numA = -1;

// if statement
/* 
    SYNTAX:
    if(condition){
        // code block
    }
*/

if (numA < 0) {
  console.log("hello");
}

console.log(numA < 0);

numA = 0;

if (numA <= 0) {
  console.log("Hello again if numA is 0!");
}

console.log(numA <= 0);

// Another example
let city = "New York";
if (city == "New York") {
  console.log("Welcome to new your city!");
}

// else if statement
let numH = 1;

if (numA < 0) {
  console.log("hello");
} else if (numH > 0) {
  console.log("World");
}

numA = 1;

if (numA > 0) {
  console.log("hello");
} else if (numH > 0) {
  console.log("World");
}

city = "Tokyo";

if (city === "New York") {
  console.log("Welcome to New York");
} else if (city === "Tokyo") {
  console.log("Welcome to Tokyo, Japan!");
}

// else statement
// if all conditions are "false", the else statement will run instead
numA = -2;

if (numA > 0) {
  console.log("Hello");
} else if (numH === 0) {
  console.log("World");
} else {
  console.log("Again!");
}

// if-else with function
let message = "No Message";
console.log(message);

function determineTyphoonIntensity(windSpeed) {
  if (windSpeed < 30) {
    return "Not a typhoon yet!";
  } else if (windSpeed <= 61) {
    return "Tropical depression detected.";
  } else if (windSpeed >= 62 && windSpeed <= 88) {
    return "Tropical storm detected.";
  } else if (windSpeed >= 89 && windSpeed <= 117) {
    return "Severe tropical storm detected.";
  } else {
    return "Typhoon detected.";
  }
}

message = determineTyphoonIntensity(110);
console.log(message);
message = determineTyphoonIntensity(45);
console.log(message);
message = determineTyphoonIntensity(205);
console.log(message);

// [SECTION] Truthy and Falsy

// truthy examples
if (true) {
  console.log("Truthy");
}

if (1) {
  console.log("Truthy");
}

if ([]) {
  console.log("Truthy");
}

// falsy examples
if (false) {
  console.log("Falsy");
}

if (0) {
  console.log("Falsy");
}

if (undefined) {
  console.log("Falsy");
}

// [SECTION] Conditional (Ternary) Operator
// single statement execution
/* 
    SYNTAX: 
    (expression) ? true : false ;
*/

let ternaryResult = 1 > 18 ? true : false;
console.log("Result of ternary operator: " + ternaryResult);

let name1;

function checkIfLegalAge() {
  name1 = "John";
  return "You are of legal age";
}

function checkIfUnderAge() {
  name1 = "Jane";
  return "You are under the age limit";
}

let age = parseInt(prompt("What is your age?"));
console.log(age);
let legalAge = age >= 18 ? checkIfLegalAge() : checkIfUnderAge();
console.log(legalAge + ", " + name1);

// [SECTION] switch statements
/* 
    SYNTAX:
    switch(condition){
        case value:
            // code
        case value:
            // code
        default:
            // code
            break;
    }
*/

let day = prompt("What day of the week is it today?").toLowerCase();
console.log(day);

switch (day) {
  case "monday":
    console.log("The color of the day is red.");
    break;
  case "tuesday":
    console.log("The color of the day is orange.");
    break;
  case "wednesday":
    console.log("The color of the day is yellow.");
    break;
  case "thursday":
    console.log("The color of the day is green.");
    break;
  case "friday":
    console.log("The color of the day is blue.");
    break;
  case "saturday":
    console.log("The color of the day is indigo.");
    break;
  case "sunday":
    console.log("The color of the day is violet.");
    break;
  default:
    console.log("Please input a valid day.");
    break;
}

//  [SECTION] try-catch-finally statement
function showIntensityAlert(windSpeed) {
  try {
    alerat(determineTyphoonIntensity(windSpeed));
  } catch (error) {
    console.log(typeof error);
    console.log(error);
  } finally {
    alert("Intensity updates will show new alert!");
  }
}

showIntensityAlert(56);
