// console.log("hello");

function printInput(){
    let nickname = prompt("Enter your nickname:");
    console.log("Hi, " + nickname);
}

// printInput();

// consider this function with parameter

function printName(name){
    console.log("My name is " + name);
}

// invocation with arguments
printName("Juana");
printName("John");
printName("Joe");

let sampleVariable = "Renz G";
printName(sampleVariable);

// console.log vs return 
function getAverage(){
    let math = 90;
    let english = 92;
    let science = 89;

    let average =(math + english + science) / 3;
    console.log(average);
}

getAverage();

function getAverage2(){
    let math = 90;
    let english = 92;
    let science = 89;

    let average =(math + english + science) / 3;
    return average;
}

let myGrade = getAverage2();
console.log(myGrade);

function getEquivalent(grade){
    let isWithHonor = grade >= 90;

    console.log("The student is with honor: " + isWithHonor);
}

getEquivalent(myGrade);

function checkDivisibilityBy8(num){
    let remainder = num % 8;
    console.log("The remainder of " + num + " divided 8 is: " + remainder);
    let isDivisibleBy8 = remainder === 0;
    console.log("Is " + num + " divisible by 8?");
    console.log(isDivisibleBy8);
}

checkDivisibilityBy8(64);

// functions as argument
function argumentFunction(){
    console.log("This function was passed as an argument.");
}

function invokeFunction(argument){
    argumentFunction();
}

invokeFunction(argumentFunction);

// functions with multiple parameters
function createFullName(firstName, middleName, lastName){
    return "Your name is: " + firstName + " " + middleName + " " + lastName;
}

let fullName = createFullName("John","B.","Smith");
console.log(fullName);

let fullName2 = createFullName("John","B.");
console.log(fullName2);

let fullName3 = createFullName("John","B.", "Smith", "Hello");
console.log(fullName3);
