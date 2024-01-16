// [SECTION] CRUD Operations
/*
    - CRUD operations are the heart of any backend application.
    - Mastering the CRUD operations is essential for any developer.
    - This helps in building character and increasing exposure to logical statements that will help us manipulate our data.
    - Mastering the CRUD operations of any language makes us a valuable developer and makes the work easier for us to deal with huge amounts of information.
*/

// the "use" keyword is used for switching to a different database.
use <
  database_name >
  // [Section] Inserting documents (Create)

  // Insert one document
  /*
    - Since mongoDB deals with objects as it's structure for documents, we can easily create them by providing objects into our methods.
    - The mongo shell also uses JavaScript for it's syntax which makes it convenient for us to understand it's code
    - Creating MongoDB syntax in a text editor makes it easy for us to modify and create our code as opposed to typing it directly in the terminal where the whole code is only visible in one line.
    - By using a text editor it allows us to type the syntax using multiple lines and simply copying and pasting the code in terminal will make it work.
    - Syntax
        - db.collectionName.insertOne({object});
    - JavaScript syntax comparison
        - object.object.method({object});
*/
  db.users.insertOne({
    firstName: "Jane",
    lastName: "Doe",
    age: 21,
    contact: {
      phone: "87654321",
      email: "janedoe@gmail.com",
    },
    courses: ["CSS", "Javascript", "Python"],
    department: "none",
  });

// Insert Many
/*
    - Syntax
        - db.collectionName.insertMany([ {objectA}, {objectB} ]]);
*/
db.users.insertMany([
  {
    firstName: "Stephen",
    lastName: "Hawking",
    age: 76,
    contact: {
      phone: "87654321",
      email: "stephenhawking@gmail.com",
    },
    courses: ["Python", "React", "PHP"],
    department: "none",
  },
  {
    firstName: "Neil",
    lastName: "Armstrong",
    age: 82,
    contact: {
      phone: "87654321",
      email: "neilarmstrong@gmail.com",
    },
    courses: ["React", "Laravel", "Sass"],
    department: "none",
  },
]);

// [Section] Finding documents (Read)
// Find
/*
    - If multiple documents match the criteria for finding a document only the FIRST document that matches the search term will be returned
    - This is based from the order that documents are stored in a collection
    - If a document is not found, the terminal will respond with a blank line
    - Syntax
        - db.collectionName.find({});
        - db.collectionName.find({ field: value });
*/

// Finding a single document
// Leaving the search criteria empty will retrieve ALL the documents
db.users.findOne({});

db.users.findOne({ firstName: "Stephen" });

// The "pretty" method allows us to be able to view the documents returned by our terminals in a better format
db.users.findOne({ firstName: "Stephen" }).pretty();

// Finding multiple documents
/*
    - Syntax
        - db.collectionName.find({ fieldA: valueA});
*/
db.users.find({ department: "none" }).pretty();

// Finding multiple documents with multiple parameters
/*
    - Syntax
        - db.collectionName.find({ fieldA: valueA});
*/
db.users.find({ department: "none", age: 82 }).pretty();

// [Section] Updating documents (Update)

// Updating a single document
/*
    - Just like the "find" method, methods that only manipulate a single document will only update the FIRST document that matches the search criteria.
    - Syntax
        - db.collectionName.updateOne( {criteria}, {$set: {field: value}});
*/
db.users.updateOne(
  { firstName: "Test" },
  {
    $set: {
      firstName: "Bill",
      lastName: "Gates",
      age: 65,
      contact: {
        phone: "12345678",
        email: "bill@gmail.com",
      },
      courses: ["PHP", "Laravel", "HTML"],
      department: "Operations",
      status: "active",
    },
  }
);

// Updating multiple documents
/*
    - Syntax
        - db.collectionName.updateMany( {criteria}, {$set: {field: value}});
*/
db.users.updateMany(
  { department: "none" },
  {
    $set: { department: "HR" },
  }
);

// Replace One
/*
    - Can be used if replacing the whole document is necessary.
    - Syntax
        - db.collectionName.replaceOne( {criteria}, {$set: {field: value}});
*/
db.users.replaceOne(
  { firstName: "Bill" },
  {
    firstName: "Bill",
    lastName: "Gates",
    age: 65,
    contact: {
      phone: "12345678",
      email: "bill@gmail.com",
    },
    courses: ["PHP", "Laravel", "HTML"],
    department: "Operations",
  }
);

// [Section] Deleting documents (Delete)

// Deleting a single document
/*
    - Syntax
        - db.collectionName.deleteOne({criteria});
*/
db.users.deleteOne({
  firstName: "test",
});

// Delete Many
/*
    - Be careful when using the "deleteMany" method. If no search criteria is provided, it will delete all documents in a database.
    - DO NOT USE: databaseName.collectionName.deleteMany()
    - Syntax
        - db.collectionName.deleteMany({criteria});
*/
db.users.deleteMany({
  firstName: "Bill",
});

// [Section] Advanced queries
/*
    - Retrieving data with complex data structures is also a good skill for any developer to have.
    - Real world examples of data can be as complex as having two or more layers of nested objects and arrays.
    - Learning to query these kinds of data is also essential to ensure that we are able to retrieve any information that we would need in our application
*/

// Query an embedded document
db.users
  .findOne({
    contact: {
      phone: "092123456789",
      email: "stephenhawking@gmail.com",
    },
  })
  .pretty();

// Query on nested field
db.users.findOne({ "contact.email": "janedoe@gmail.com" }).pretty();

// Querying an Array with Exact Elements
db.users.findOne({ courses: ["CSS", "JavaScript", "Python"] }).pretty();

// Querying an Array without regard to order
db.users.findOne({ courses: { $all: ["React", "Python"] } }).pretty();

// Querying an Embedded Array
db.users
  .findOne({
    namearr: {
      namea: "juan",
    },
  })
  .pretty();

//[Section] Comparison Query Operators

// $gt/$gte operator
/*
    - Allows us to find documents that have field number values greater than or equal to a specified value.
    - Syntax
        db.collectionName.find({ field : { $gt : value } });
        db.collectionName.find({ field : { $gte : value } });
*/
db.users.find({ age: { $gt: 50 } });
db.users.find({ age: { $gte: 21 } });

// $lt/$lte operator
/*
    - Allows us to find documents that have field number values less than or equal to a specified value.
    - Syntax
        db.collectionName.find({ field : { $lt : value } });
        db.collectionName.find({ field : { $lte : value } });
*/
db.users.find({ age: { $lt: 50 } });
db.users.find({ age: { $lte: 76 } });

// $ne operator
/*
    - Allows us to find documents that have field number values not equal to a specified value.
    - Syntax
        db.collectionName.find({ field : { $ne : value } });
*/
db.users.find({ age: { $ne: 82 } });

// $in operator
/*
    - Allows us to find documents with specific match critieria one field using different values.
    - Syntax
        db.collectionName.find({ field : { $in : value } });
*/
db.users.find({ lastName: { $in: ["Hawking", "Doe"] } });
db.users.find({ courses: { $in: ["HTML", "React"] } });

// [Section] Logical Query Operators

// $and operator
/*
    - Allows us to find documents matching ALL criteria in a single field.
    - Syntax
        db.collectionName.find({ $and: [ { fieldA: valueB }, { fieldB: valueB } ] });
*/
db.users.find({ $and: [{ age: { $ne: 82 } }, { age: { $ne: 76 } }] });

// $or operator
/*
    - Allows us to find documents that match a single criteria from multiple provided search criteria.
    - Syntax
        db.collectionName.find({ $or: [ { fieldA: valueB }, { fieldB: valueB } ] });
*/
// multiple field value pairs
db.users.find({ $or: [{ firstName: "Neil" }, { age: "25" }] });

db.users.find({ $or: [{ firstName: "Neil" }, { age: { $gt: 30 } }] });

// [Section] Field Projection
/*
    - Retrieving documents are common operations that we do and by default MongoDB queries return the whole document as a response.
    - When dealing with complex data structures, there might be instances when fields are not useful for the query that we are trying to accomplish.
    - To help with readability of the values returned, we can include/exclude fields from the response.
*/

// Inclusion
/*
    - Allows us to include/add specific fields only when retrieving documents.
    - The value provided is 1 to denote that the field is being included.
    - Syntax
        db.users.find({criteria},{field: 1})
*/
db.users.find(
  {
    firstName: "Jane",
  },
  {
    firstName: 1,
    lastName: 1,
    contact: 1,
  }
);

// Exclusion
/*
    - Allows us to exclude/remove specific fields only when retrieving documents.
    - The value provided is 0 to denote that the field is being included.
    - Syntax
        db.users.find({criteria},{field: 1})
*/
db.users.find(
  {
    firstName: "Jane",
  },
  {
    contact: 0,
    department: 0,
  }
);

// Suppressing the ID field
/*
    - Allows us to exclude the "_id" field when retrieving documents.
    - When using field projection, field inclusion and exclusion may not be used at the same time.
    - Excluding the "_id" field is the only exception to this rule.
    - Syntax
        db.users.find({criteria},{_id: 0})
*/
db.users.find(
  {
    firstName: "Jane",
  },
  {
    firstName: 1,
    lastName: 1,
    contact: 1,
    _id: 0,
  }
);

// [Section] Evaluation Query Operators

// $regex operator
/*
    - Allows us to find documents that match a specific string pattern using regular expressions.
    - Syntax
        db.users.find({ field: $regex: 'pattern', $options: '$optionValue' });
*/

// Case sensitive query
db.users.find({ firstName: { $regex: "N" } }).pretty();

// Case insensitive query
db.users.find({ firstName: { $regex: "n", $options: "i" } }).pretty();
