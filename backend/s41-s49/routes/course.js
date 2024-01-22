// [SECTION] Dependencies and Modules
const express = require("express");
const courseController = require("../controllers/course");

const { verify, verifyAdmin } = require("../auth");

// [SECTION] Routing Component
// Create/Add a course
router.post("/", verify, verifyAdmin, courseController.addCourse);

// Retrieve all course
router.get("/all", verify, verifyAdmin, courseController.getAllCourses);

// Get Specific course
router.post("/specific", courseController.getCourse);

// Get all active/available course
router.get("/", courseController.getAllActive);

// [SECTION] Export Route System
module.exports = router;
