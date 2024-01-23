// [SECTION] Dependencies and Modules
const express = require("express");
const courseController = require("../controllers/course");

const { verify, verifyAdmin } = require("../auth");

const router = express.Router();

// [SECTION] Routing Component
// Create/Add a course
router.post("/", verify, verifyAdmin, courseController.addCourse);

// Retrieve all course
router.get("/all", verify, verifyAdmin, courseController.getAllCourses);

// Get Specific course
router.get("/specific", courseController.getCourse);

// Get all active/available course
router.get("/", courseController.getAllActive);

// Update a course
router.patch("/:courseId", verify, verifyAdmin, courseController.updateCourse);

// Archive a course
router.patch(
  "/:courseId/archive",
  verify,
  verifyAdmin,
  courseController.archiveCourse
);

// Activate a course
router.patch(
  "/:courseId/activate",
  verify,
  verifyAdmin,
  courseController.activateCourse
);

// [SECTION] Export Route System
module.exports = router;
