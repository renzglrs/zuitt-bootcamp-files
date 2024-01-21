// [SECTION] Dependencies and Modules
const express = require("express");
const courseController = require("../controllers/course");

// [SECTION] Routing Component
const router = express.Router();

// [SECTION] Routes
// Get all courses
router.get("/", (req, res) => {
  courseController
    .getAllCourses()
    .then((resultFromController) => res.send(resultFromController));
});

// Create new course
router.post("/", (req, res) => {
  courseController
    .addCourse(req.body)
    .then((resultFromController) => res.send(resultFromController));
});

// [SECTION] Export Route System
module.exports = router;
