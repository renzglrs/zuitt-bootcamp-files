console.log("hi");

// [SECTION] mutator methods
let fruits = ["Apple", "Orange", "Kiwi", "Dragon Fruit"];
console.log(fruits);

// push() method - adds an item/element at the end of an array
fruits.push("Mango");
console.log(fruits);

// you can also add 2 or more items at the same time
fruits.push("Avocado", "Guava");
console.log(fruits);

// you can use the mutator within a function to make the data to be added/removed more dynamic.
function addFruit(fruit) {
  fruits.push(fruit);
}

addFruit("Pineapple");
console.log(fruits);

// pop() method - removes the last item/element in an array AND returns the removed element.
let removedFruit = fruits.pop();
console.log(removedFruit);
console.log(fruits);

// unshift() method - adds one or more elements at the BEGINNING of an array.
fruits.unshift("Lime", "Banana");
console.log(fruits);

// shift method - removes an element at the BEGINNING of an array AND returns the removed element
let anotherFruit = fruits.shift();
console.log(anotherFruit);
console.log(fruits);

// splice() method - removes elements from a specified index number and adds elements to it.
// NOTE: you can also retrieve the removed items by assigning the fruits.splice function to a variable or directly logging it in the console.
fruits.splice(1, 2, "Rambutan", "Durian");
// console.log(fruits.splice(1, 2, "Rambutan", "Durian"));
console.log(fruits);

// sort() method - rearranges the array items in alphanumeric order
fruits.sort();
console.log(fruits);

// reverse() method - reverses the order of the array elements
fruits.reverse();
console.log(fruits);

// the reverse method doens't necessarily reverse by descending alphabetical order, rather it literally reverses the array list by putting the last item first and the first item last.
let names = ["Daniel", "James", "Chiz", "Brian"];
names.reverse();
console.log(names);
