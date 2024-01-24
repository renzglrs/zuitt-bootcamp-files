// [SECTION] Dependencies and Modules
const express = require("express");
const userController = require("../controllers/user");
const passport = require("passport");

const { verify, verifyAdmin, isLoggedIn } = require("../auth");

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

// Google Login Routes
router.get(
  "/google",
  passport.authenticate("google", {
    // scopes that are allowed when retrieving data
    scope: ["email", "profile"],
    prompt: "select_account",
  })
);

// callback URL for Oauth authentication
router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/users/failed",
  }),
  function (req, res) {
    res.redirect("/users/success");
  }
);

// failed authentication
router.get("/failed", (req, res) => {
  console.log("User is not authenticated");
  res.send("Failed");
});

// success authentication
router.get("/success", isLoggedIn, (req, res) => {
  console.log("You are logged in");
  console.log(req.user);
  res.send(`Welcome ${req.user.displayName}`);
});

// Google logout
router.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log("Error while destroying session");
    } else {
      req.logout(() => {
        console.log("You are logged out.");
        res.redirect("/");
      });
    }
  });
});

// Password Reset
router.put("/reset-password", verify, userController.resetPassword);

// Update user profile
router.put("/profile", verify, userController.updateProfile);

// Set user to admin
router.patch("/:id/set-admin", verify, verifyAdmin, userController.setToAdmin);

// [SECTION] Export Route System
// Allows us to export the "router" object that will be accessed in our "index.js" file
module.exports = router;
