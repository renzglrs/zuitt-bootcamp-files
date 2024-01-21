// [SECTION] Dependencies and Modules
const express = require("express");
const userController = require("../controllers/user");

// [SECTION] Routing Component
const router = express.Router();

// [SECTION] Routes - POST
// Route for checking if the user's email already exists in the database
// Invokes the "checkEmailExists" function from the controller file to communicate with our database
// Passes the "body" property of our "request" object to the corresponding controller function
router.post("/checkEmail", (req, res) => {
  userController
    .checkEmailExists(req.body)
    .then((resultFromController) => res.send(resultFromController));
});

// Route for user registration
router.post("/register", (req, res) => {
  userController
    .registerUser(req.body)
    .then((resultFromController) => res.send(resultFromController));
});

// Route for logging in
router.post("/login", (req, res) => {
  userController
    .loginUser(req.body)
    .then((resultFromController) => res.send(resultFromController));
});

// Route for retrieving user details
router.post("/details", (req, res) => {
  userController
    .getProfile(req.body)
    .then((resultFromController) => res.send(resultFromController));
});

// [SECTION] Export Route System
// Allows us to export the "router" object that will be accessed in our "index.js" file
module.exports = router;
