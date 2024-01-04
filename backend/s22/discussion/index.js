// functions
// functions in JS are lines/blocks of code that tells our device to perform certain task
// used to prevent repeating lines of code

// function declaration
// function statements - defines a function with the specified parameters

/* 

    SYNTAX:

    function functionName(){
        //line of codes
        //code blocks
    }

*/

console.log("---------FUNCTIONS---------");

declaredFunction(); // hoisting

function printName(){
    console.log("My name is John");
};

// function invocation / function calling
// SYNTAX: functionName()
printName();
printName();
printName();
printName();
printName();

// hoisting -> certain variables/functions can be called before declaration
declaredFunction();

function declaredFunction(){
    console.log("Hello world from declaredFunction()");
}

declaredFunction();

// function declaration
let variableFunction = function(){
    console.log("Hello world");
}

variableFunction();

let functionExpression = function funcName(){
    console.log("hello from the other side");
}

// funcName(); -> error, this function is not accessible
functionExpression();

// re-assigning variable function values
declaredFunction = function(){
    console.log("updated declaredFunction");
}

declaredFunction();

functionExpression = function(){
    console.log("updated functionExpression");
}

functionExpression();
functionExpression();
functionExpression();

// constant variable function
const constantFunction = function(){
    console.log("initialized with const!");
}

constantFunction();

// function scoping
// the accessibility/visibility of variables within our program

// 1. local/block scope | 2. global scope | 3. function scope

// global scope
let globalVar = "Mr. Worldwide";

{
    // local/block scope
    let localVariable  = "Armando Perez";
    console.log(localVariable);
    console.log(globalVar);

}
    // console.log(localVariable); -> error, cannot access loca scoped variable

console.log(globalVar);

// function scope
function showNames(){
    // function scope variables
    let functionVar = "Joe";
    const functionConst = "Jane";

    console.log(functionVar);
    console.log(functionConst);
}

showNames();
// console.log(functionVar); 
// console.log(functionConst); -> error, cannot access variables inside a function

// nested function
function myNewFunction() {
    let name = "Jane Doe";

    function nestedFunction(){
        let nestedName = "John Smith";
        console.log(name);
    }

    nestedFunction();
}

myNewFunction();
// nestedFunction(); //-> error, cannot access nested function

// function and global scoed variables
let globalName = "Alexandro";
function myNewFunction2(){
    let nameInside = "Renz";

    console.log(globalName);
}

myNewFunction2();
// console.log(nameInside); // error, not accessible

// using alert
// alert("Hellow World!");

function showSampleAlert(){
    alert("Hello, user!");
}
// showSampleAlert(); -> we can also invoke a function in our devtool's console
// showSampleAlert();

console.log("Hello again");

// alerts are for short messages only
// disrupts the system flow

// using prompts
// propmt() is a small window and catches user inputs
// let samplePrompt = prompt("Enter your name: ");
// console.log("Hello, " + samplePrompt);

// let sampleNullPrompt = prompt("Do not enter anything: ");
// console.log(sampleNullPrompt);

function printWelcomeMessage(){
    let firstName = prompt("Enter your first name: ");
    let lastName = prompt("Enter your last name: ");
    console.log("Hello, " + firstName + " " + lastName);
    console.log("Welcome to my page!");
}

// printWelcomeMessage();

// function naming convention
// casing format
/* 

    1. camel casing 
    - thisIsCamelCasing

    2. snake casing 
    - this_is_snake_casing

    3. pascal casing 
    - ThisIsPascalCasing

    4. kebab casing 
    - this-is-kebab-casing

    5. pascal snake casing
    - This_Is_Pascal_Snake_Casing

*/

function getCourses() {
    let courses = ["Science", "Math", "English"];

    return courses;
}

let courses = getCourses();
console.log(courses);

// avoid generic names to prevent confusions
function getName(){
    let name = "Jamie";
    return name;
}
let name1 = getName();
console.log(name1);

// proper naming convention
function displayCarInfo(){
    console.log("Brand: Toyota");
    console.log("Type: Sedan");
    console.log("Price: 1,500,000");
}

displayCarInfo();