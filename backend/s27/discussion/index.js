// console.log("helo");

// [SECTION] arrays
let grades = [98.5, 94.3, 89.2, 90.1];
let computerBrands = [
  "Machinike",
  "Acer",
  "Lenovo",
  "Redfox",
  "Gateway",
  "Toshiba",
];
let mixedArr = [12, "Asus", null, undefined, {}]; // won't produce an error but this is not good practice

// creating an array with values coming from variables.
let city1 = "Kyoto";
let city2 = "Manila";
let city3 = "Jakarta";

let cities = [city1, city2, city3];

console.log(cities);

// [SECTION] array length property
console.log(cities.length);

let blankArray = [];
console.log(blankArray.length);

let fullName = "Kathryn Bernardo";
console.log(fullName.length);

// shortening an array
cities.length = cities.length - 1; // re-assigning the length of the cities array to have its value subtracted by 1.
console.log(cities.length);
console.log(cities);

// lengthening an array
cities.length++;
console.log(cities);

// [SECTION] accessing elements of an array
let celticsLegends = ["Bird", "Russell", "Havlicek", "Tatum", "Thomas"];
console.log(celticsLegends[0]);
console.log(celticsLegends[3]);

// modifying a specific item in  array using index
celticsLegends[4] = "Allen";
console.log(celticsLegends);

// accessing the last element of an array
let indexOfLastItem = celticsLegends.length - 1;
console.log(indexOfLastItem);
console.log(celticsLegends[indexOfLastItem]);

// [SECTION] adding items to an array using indexes
let newArray = [];

newArray[0] = "Cloud Strife";
newArray[1] = "Sephiroth";

console.log(newArray);

// [SECTION] looping through arrays

let numbersArray = [5, 12, 30, 46, 40];

for (let index = 0; index < numbersArray.length; index++) {
  if (numbersArray[index] % 5 === 0) {
    console.log(numbersArray[index] + " is divisible by 5");
  } else {
    console.log(numbersArray[index] + " is NOT divisible by 5");
  }
}

// [SECTION] multi-dimensional array
let chessBoard = [
  ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"],
  ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
  ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],
  ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],
  ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],
  ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],
  ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],
  ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"],
];

console.log(chessBoard[0]);
console.log(chessBoard[5][3]);
