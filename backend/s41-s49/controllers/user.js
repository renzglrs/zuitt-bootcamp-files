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
  if (req.body.email.includes("@")) {
    return User.find({ email: req.body.email })
      .then((result) => {
        // the "find" method returns a record if a match is found
        if (result.length > 0) {
          return res.status(409).send({ error: "Duplicate Email Found" });
        } else {
          return res.status(404).send({ message: "Email not Found" });
        }
      })
      .catch((err) =>
        res.status(500).send({ error: "Cannot find email provided." })
      );
  } else {
    return res.status(400).send({ error: "Invalid email." });
  }
};

// User registration
/*
	Steps:
	1. Create a new User object using the mongoose model and the information from the request body
	2. Make sure that the password is encrypted
	3. Save the new User to the database
*/
module.exports.registerUser = (req, res) => {
  // Checks if the email is in the right format
  if (!req.body.email.includes("@")) {
    return res.status(400).send({ error: "Email Invalid." });
  }
  // Checks if the mobile number has the correct number of characters
  else if (req.body.mobileNo.length !== 11) {
    return res.status(400).send({ error: "Mobile number Invalid." });
  }
  // Checks if the password has atleast 8 characters
  else if (req.body.password.length < 8) {
    return res
      .status(400)
      .send({ error: "Password must be at least 8 characters." });
    // If all needed requirements are achieved
  } else {
    User.findOne({ email: req.body.email }).then((existingUser) => {
      if (existingUser) {
        return res.status(400).send(false);
      } else {
        let newUser = new User({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          mobileNo: req.body.mobileNo,
          password: bcrypt.hashSync(req.body.password, 10),
        });

        return newUser
          .save()
          .then((registeredUser) =>
            res.status(201).send({
              mesasge: "Registered successfull!",
              data: registeredUser,
            })
          )
          .catch((err) =>
            res
              .status(500)
              .send({ error: "There is an error. Please try again." })
          );
      }
    });
  }
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
  if (req.body.email.includes("@")) {
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
      .catch((err) =>
        res.status(500).send({
          error: "There is an error while logging in. Please try again.",
        })
      );
  } else {
    return res.status(400).send({ error: "Invalid email" });
  }
};

// Retrieve User Details
module.exports.getProfile = (req, res) => {
  return User.findById(req.body.id)
    .then((result) => {
      if (!result) {
        return res.status(400).send({ error: "User not found" });
      }

      result.password = "******";
      return res.status(200).send(result);
    })
    .catch((err) =>
      res
        .status(500)
        .send({ error: "There is an error fetching your profile.", data: err })
    );
};

// Enroll user to a course
module.exports.enroll = (req, res) => {
  console.log(req.user.id);
  // course from our request body --> postman
  console.log(req.body.enrolledCourses);

  if (req.user.isAdmin) {
    return res.status(403).send({ error: "Access forbidden." });
  }

  let newEnrollment = new Enrollment({
    userId: req.user.id,
    enrolledCourses: req.body.enrolledCourses,
    totalPrice: req.body.totalPrice,
  });

  return newEnrollment
    .save()
    .then((enrolled) => {
      if (!enrolled) {
        return res
          .status(400)
          .send({ error: "There is an error while enrolling." });
      }

      return res
        .status(201)
        .send({ message: "Enrollment successful.", data: enrolled });
    })
    .catch((err) => res.status(500).send({ error: "Error sad" }));
};

//[SECTION] Get enrollments
/*
    Steps:
    1. Use the mongoose method "find" to retrieve all enrollments for the logged in user
    2. If no enrollments are found, return a 404 error. Else return a 200 status and the enrollment record
*/
module.exports.getEnrollments = (req, res) => {
  return Enrollment.find({ userId: req.user.id })
    .then((enrollments) => {
      if (enrollments.length > 0) {
        return res.status(200).send(enrollments);
      }
      return res.status(404).send({ error: "No enrollments found." });
    })
    .catch((err) =>
      res.status(500).send({ error: "Failed to fetch enrollments" })
    );
};
