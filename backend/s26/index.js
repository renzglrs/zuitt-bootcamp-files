// console.log("helo pilipins");

// [SECTION] Objects

let person = {
  firstName: "John",
  lastName: "Smith",
  address: {
    city: "Tokyo",
    country: "Japan",
  },
  //   arrays and functions can be put inside objects also
  emails: ["john@email.com", "johnsmith@email.biz"],
  fullName: function () {
    // by using 'this' keyword, your are pertaining to the property within the current object and not outside of it.
    return this.firstName + " " + this.lastName;
  },
};

console.log(person.fullName());

// creating objects from blueprints
/* 
    - you can also create objects by the use of function blueprints. you can use these blueprints to create new instances of an object with the same properties. and your can apply the usage  of arguments and parameters to make the values of the properties different.
*/
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// by using the 'new' keyword, we are able to create a new instance of the Person function.
let personA = new Person("John", "Smith");
let personB = new Person("Zoey", "Doey");
