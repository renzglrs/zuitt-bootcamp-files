/*
    
    1. Create a function called addNum which will be able to add two numbers.
        - Numbers must be provided as arguments.
        - Return the result of the addition.
       
       Create a function called subNum which will be able to subtract two numbers.
        - Numbers must be provided as arguments.
        - Return the result of subtraction.

        Create a new variable called sum.
         - This sum variable should be able to receive and store the result of addNum function.

        Create a new variable called difference.
         - This difference variable should be able to receive and store the result of subNum function.

        Log the value of sum variable in the console.
        Log the value of difference variable in the console.

    

    2. Create a function called multiplyNum which will be able to multiply two numbers.
        - Numbers must be provided as arguments.
        - Return the result of the multiplication.

        Create a function divideNum which will be able to divide two numbers.
        - Numbers must be provided as arguments.
        - Return the result of the division.

        Create a new variable called product.
         - This product variable should be able to receive and store the result of multiplyNum function.

        Create a new variable called quotient.
         - This quotient variable should be able to receive and store the result of divideNum function.

        Log the value of product variable in the console.
        Log the value of quotient variable in the console.


    3. Create a function called getCircleArea which will be able to get total area of a circle from a provided radius.
        - a number should be provided as an argument.
        - look up the formula for calculating the area of a circle with a provided/given radius.
        - look up the use of the exponent operator.
        - return the result of the area calculation.

        Create a new variable called circleArea.
        - This variable should be able to receive and store the result of the circle area calculation.
        - Log the value of the circleArea variable in the console.

    4. Create a function called getAverage which will be able to get total average of four numbers.
        - 4 numbers should be provided as an argument.
        - look up the formula for calculating the average of numbers.
        - return the result of the average calculation.
        
        Create a new variable called averageVar.
        - This variable should be able to receive and store the result of the average calculation
        - Log the value of the averageVar variable in the console.
    

    5. Create a function called checkIfPassed which will be able to check if you passed by checking the percentage of your score against the passing percentage.
        - this function should take 2 numbers as an argument, your score and the total score.
        - First, get the percentage of your score against the total. You can look up the formula to get percentage.
        - Using a relational operator, check if your score percentage is greater than 75, the passing percentage. Save the value of the comparison in a variable called isPassed.
        - return the value of the variable isPassed.
        - This function should return a boolean.

        Create a global variable called outside of the function called isPassingScore.
            -This variable should be able to receive and store the boolean result of the checker function.
            -Log the value of the isPassingScore variable in the console.
*/

// Solution 1
function addNum(num1, num2){
    return num1 + num2;
}

function subNum(num1, num2){
    return num1 - num2;
}

let sum = addNum(5, 15);
let difference = subNum(20, 5);

console.log("Displayed sum of 5 and 15");
console.log(sum);
console.log("Displayed difference of 20 and 5");
console.log(difference);

// Solution 2
function multiplyNum(num1, num2){
    return num1 * num2;
}

function divideNum(num1, num2){
    return num1 / num2;
}

let product = multiplyNum(50, 10);
let quotient = divideNum(50, 10);

console.log("The product of 50 and 10:");
console.log(product);
console.log("The quotient of 50 and 10:");
console.log(quotient);

// Solution 3
function getCircleArea(radius){
    return 3.1416 * (radius ** 2);
}

let circleArea = getCircleArea(15);
console.log("The result of getting the area of a circle with 15 radius:");
console.log(circleArea);

// Solution 4
function getAverage(num1,num2,num3,num4){
    return (num1 + num2 + num3 + num4) / 4;
}

let averageVar = getAverage(20,40,60,80);
console.log("The average of 20,40,60,80:");
console.log(averageVar);


// Solution 5
function checkIfPassed(myScore, totalScore){
    let percentage = (myScore / totalScore) * 100;
    let isPassed = percentage >= 75;

    return isPassed;
}

let isPassingScore = checkIfPassed(38, 50);
console.log("Is 38/50 a passing score?");
console.log(isPassingScore);



//Do not modify
//For exporting to test.js
//Note: Do not change any variable and function names. All variables and functions to be checked are listed in the exports.
try{
    module.exports = {

        addNum: typeof addNum !== 'undefined' ? addNum : null,
        subNum: typeof subNum !== 'undefined' ? subNum : null,
        multiplyNum: typeof multiplyNum !== 'undefined' ? multiplyNum : null,
        divideNum: typeof divideNum !== 'undefined' ? divideNum : null,
        getCircleArea: typeof getCircleArea !== 'undefined' ? getCircleArea : null,
        getAverage: typeof getAverage !== 'undefined' ? getAverage : null,
        checkIfPassed: typeof checkIfPassed !== 'undefined' ? checkIfPassed : null,

    }
} catch(err){

}