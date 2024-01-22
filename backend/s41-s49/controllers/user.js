// [SECTION] Dependencies and Modules
// The "User" variable is defined using a capitalized letter to indicate that we are using its "User" model for code readability
const User = require("../models/User");
const Enrollment = require("../models/Enrollment");
const bcrypt = require("bcrypt");
const auth = require("../auth");

// [SECTION] Check if the email already exists
/*
 	Steps:
 	1. Use mongoose "find" method to find duplicate emails
 	2. Use the "then" method to send a response back to the client applciation based on the result of the "find" method
*/

module.exports.checkEmailExists = (req, res) => {
  // The result is sent back to the client via the "then" method found in the route file
  return User.find({ email: req.body.email })
    .then((result) => {
      // the "find" method returns a record if a match is found
      if (result.length > 0) {
        return res.status(409).send(true);
      } else {
        return res.status(404).send(false);
      }
    })
    .catch((err) => res.status(500).send(err));
};

// User registration
/*
	Steps:
	1. Create a new User object using the mongoose model and the information from the request body
	2. Make sure that the password is encrypted
	3. Save the new User to the database
*/
module.exports.registerUser = (req, res) => {
  // Creates a variable "newUser" and instantiates a new "User" object using the mongoose model
  let newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    mobileNo: req.body.mobileNo,
    password: bcrypt.hashSync(req.body.password, 10),
  });

  return newUser
    .save()
    .then((result) => res.status(201).send(result))
    .catch((err) => res.status(500).send(err));
};

// User authentication
/*
	Steps:
	1. Check the database if the user email exists
	2. Compare the password provided in the login form with the password stored in the database
	3. Generate/return a JSON web token if the user is successfully logged in and return false if not
*/
module.exports.loginUser = (req, res) => {
  // the fineOne method returns the first record in the collection that matches the search criteria
  return User.findOne({ email: req.body.email })
    .then((result) => {
      // User does not exist
      if (result == null) {
        return res.status(404).send("No email Found.");
        // If user exists
      } else {
        const isPasswordCorrect = bcrypt.compareSync(
          req.body.password,
          result.password
        );
        if (isPasswordCorrect) {
          return res
            .status(200)
            .send({ access: auth.createAccessToken(result) });
        } else {
          return res.status(401).send("Email and password do not match");
        }
      }
    })
    .catch((err) => res.status(500).send(err));
};

// Retrieve User Details
module.exports.getProfile = (req, res) => {
  return User.findById(userId)
    .then((result) => {
      result.password = "******";
      return res.status(200).send(result);
    })
    .catch((err) => res.status(500).send(err));
};

// Enroll user to a course
module.exports.enroll = (req, res) => {
  console.log(req.user.id);
  // course from our request body --> postman
  console.log(req.body.enrolledCourses);

  if (req.user.isAdmin) {
    return res.status(403).send(false);
  }

  let newEnrollment = new Enrollment({
    userId: req.user.id,
    enrolledCourses: req.body.enrolledCourses,
    totalPrice: req.body.totalPrice,
  });

  return newEnrollment
    .save()
    .then((enrolled) => {
      return res.status(201).send(true);
    })
    .catch((err) => res.status(500).send(err));
};
