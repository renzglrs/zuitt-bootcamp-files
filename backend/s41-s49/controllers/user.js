// [SECTION] Dependencies and Modules
// The "User" variable is defined using a capitalized letter to indicate that we are using its user "User" model for code readability
const User = require("../models/User");
const bcrypt = require("bcrypt");
const auth = require("../auth");

// [SECTION] Check if the email already exists
/* 
    Steps:
    1. Use mongoose "find" method to find duplicate emails
    2. Use the "then" method to send a response back to the client application based on the result of the "find" method

*/

module.exports.checkEmailExists = (reqBody) => {
  // The result  is sent back to the client  via the "then" method found in the route file
  return User.find({ email: reqBody.email })
    .then((result) => {
      if (result.length > 0) {
        // the "find" method returns a record if a match is found
        return true;
      } else {
        return false;
      }
    })
    .catch((err) => err);
};

// User registration
/* 
    Steps:
    1. Create a new User object using the mongoose model and the information from the request body
    2. Make sure that the password is encrypted
    3. Save the new User to the database
*/
module.exports.registerUser = (reqBody) => {
  // Creates a new variable "newUser" and instantiates a new "User " object using the mongoose model
  let newUser = new User({
    firstName: reqBody.firstName,
    lastName: reqBody.lastName,
    email: reqBody.email,
    mobileNo: reqBody.mobileNo,
    password: bcrypt.hashSync(reqBody.password, 10),
  });

  return newUser
    .save()
    .then((result) => result)
    .catch((err) => err);
};

// User authentication
/* 
    Steps:
    1. Check the database if the user email exists 
    2. Compare the password provided in the login form with the password stored in the database
    3. Generate/return a JSON webtoken if the user is successfully logged in and return false if not
*/
module.exports.loginUser = (reqBody) => {
  // The findOne method returns the first record in the collection that matches the search criteria
  return User.findOne({ email: reqBody.email })
    .then((result) => {
      // User does not exists
      if (result == null) {
        return false;
        // If user exists
      } else {
        const isPasswordCorrect = bcrypt.compareSync(
          reqBody.password,
          result.password
        );
        if (isPasswordCorrect) {
          return { access: auth.createAccessToken(result) };
        } else {
          return false;
        }
      }
    })
    .catch((err) => err);
};
