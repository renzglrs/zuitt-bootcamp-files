// console.log("hello world");

// [SECTION] While Loop
// - a while loop checks the condition first before running the code block

// let count = 5;

// while (count !== 0) {
//   console.log("While: " + count);
//   count--;
// }

// [SECTION] Do-While Loop
// a do-while loop RUNS the code block first BEFORE checking the condition. this behavior ensures that the code block ALWAYS run at least once.

// let number = Number(prompt("Give me a number: "));

// do {
//   console.log("Do-While: " + number);

//   number += 1;
// } while (number < 10);

// [SECTION] For Loop
/* 
    - a for loop is more flexible than while and do-while loops. It consists of 3 parts:
    1. Initialization (usually the variable that the loop will base on)
    2. Condition (What will dictate the end of the loop)
    3. Increment/Decrement (What will advance the loop)
*/

// for (let count = 0; count <= 20; count++) {
//   console.log(count);
// }

let myString = "alex";

// getting the number of characters in a string
// console.log(myString.length);

// accessing elements of a string
// console.log(myString[0]);
// console.log(myString[1]);
// console.log(myString[2]);

// will loop through the myString variable and console.log each of its letters
// for (let count = 0; count < myString.length; count++) {
//   console.log(myString[count]);
// }

for (let count = 0; count < myString.length; count++) {
  if (
    myString[count].toLowerCase() == "a" ||
    myString[count].toLowerCase() == "e" ||
    myString[count].toLowerCase() == "i" ||
    myString[count].toLowerCase() == "o" ||
    myString[count].toLowerCase() == "u"
  ) {
    console.log(3); // all vowels within 'alex' will show 3
  } else {
    console.log(myString[count]); // all consonants will show up as themselves
  }
}

// [SECTION] Continue & Break Statements

for (let count = 0; count <= 20; count++) {
  if (count % 2 === 0) {
    continue; // once the browser reads the 'continue' it will immediately iterate the loop and skip any code below it/
  } else if (count > 10) {
    break; // strops the loop completely
  }

  console.log("Continue and Break: " + count);

  //   if (count > 10) {
  //     break;
  //   }
}
