// console.log("hi");

// [SECTION] non-mutator methods
let countries = ["US", "PH", "CAN", "SG", "TH", "PH", "FR", "DK"];

// indexOf() function - looks for an item and its index starting from left to right
let firstIndex = countries.indexOf("PH");
console.log("First index: " + firstIndex);

// lastIndexOf function - looks for an item and its index starting from right to left
let lastIndex = countries.lastIndexOf("PH");
console.log("Last index: " + lastIndex);

// slice() function - slicing off items from a specified index, and createing a new array
let slicedArrayA = countries.slice(2); // if you only use 1 argument, then it will only dictate where it will start to slice.
console.log("Sliced array A: " + slicedArrayA);

let slicedArrayB = countries.slice(2, 4); // if you use 2 argurments, then it will dictate whre the slice will START and END
console.log("Sliced array B: " + slicedArrayB);

// toString() - returns a string separated by commas.
let stringArray = countries.toString();
console.log(`String array: ${stringArray}`);

// concat() - combines two arrays and returns the combined result.
let tasksArrayA = ["drink html", "eat javascript"];
let tasksArrayB = ["inhale CSS", "breathe sql"];
let tasks = tasksArrayA.concat(tasksArrayB); // this will create a single array that contains the items from BOTH the arrays. And you can also add another argument if you would want add more items from more arrays.
console.log(tasks);

// join() - returns an array as a string separated by specified separator string
let users = ["John", "Jane", "Joe", "Jobert"];
console.log(users.join(" "));
console.log(users.join(" - "));

// [SECTION] iteration methods
// forEach() function - loops through entire array and executes an anonymous funciton for each item
tasks.forEach((task) => {
  console.log(task);
});
// tasks.reverse().forEach((task) => {
//   console.log(task);
// });

let filteredTasks = [];

tasks.forEach((task) => {
  if (task.length > 10) {
    filteredTasks.push(task);
  }
});

console.log(filteredTasks);

// map() function - loops through the entire array creates a new array operations performed on each item
let numbers = [1, 2, 3, 4, 5];
let numbersMap = numbers.map((number) => {
  return number * number;
});
console.log(`Original array: ${numbers}`);
console.log(`New array: ${numbersMap}`);

// every() function - checks if all items in an array meet the given condition. this will ONLY return true IF ALL items meet the condition.
let allValid = numbers.every((number) => {
  return number < 3;
});
console.log(allValid);

// some() function - loops through each item and checks if they match a condition. if ONLY ONE item matches the condition, then the some() function will return TRUE
let someValid = numbers.some((number) => {
  return number < 2;
});
console.log(someValid);

// filter() function - creates a new array that contains items that match the condition set in the anonymous function.
let filterValid = numbers.filter((number) => {
  return number < 3;
});
console.log(filterValid);

// includes() function - checks if the argument is an item that can be found in the array. it returns either true or false.
let products = ["Mouse", "Keyboard", "Laptop", "Monitor"];
let isThereAMouse = products.includes("Mouse");
console.log(isThereAMouse);
let isThereAHeadset = products.includes("Headset");
console.log(isThereAHeadset);
