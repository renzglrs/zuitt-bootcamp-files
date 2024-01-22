// [SECTION] Dependencies and Modules
const express = require("express");
const userController = require("../controllers/user");

const { verify, verifyAdmin } = require("../auth");

// [SECTION] Routing Component
const router = express.Router();

// [SECTION] Routes - POST
// Route for checking if the user's email already exists in the database
// Invokes the "checkEmailExists" function from the controller file to communicate with our database
// Passes the "body" property of our "request" object to the corresponding controller function
router.post("/checkEmail", userController.checkEmailExists);

// Route for user registration
router.post("/register", userController.registerUser);

// Route for logging in
router.post("/login", userController.loginUser);

// Get user details
router.get("/details", verify, userController.getProfile);

// Enroll User to a course
router.post("/enroll", verify, userController.enroll);

// Get Enrollments of User
router.get("/getEnrollments", verify, userController.getEnrollments);

// [SECTION] Export Route System
// Allows us to export the "router" object that will be accessed in our "index.js" file
module.exports = router;
