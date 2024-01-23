// Dependencies
const Course = require("../models/Course");

// Create/Add Course
module.exports.addCourse = (req, res) => {
  try {
    let newCourse = new Course({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
    });

    Course.findOne({ name: req.body.name }).then((existingCourse) => {
      if (existingCourse) {
        return res.status(409).send(false);
      }

      return newCourse
        .save()
        .then((result) => res.status(201).send(result))
        .catch((err) => res.status(500).send(err));
    });
  } catch (err) {
    res.status(500).send("Error in Variables");
  }
};

// Retrieve all courses
module.exports.getAllCourses = (req, res) => {
  return Course.find({})
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(500).send(err));
};

// Get specific course
module.exports.getCourse = (req, res) => {
  Course.findById(req.body.id)
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(500).send(err));
};

// Get all active/available courses
module.exports.getAllActive = (req, res) => {
  Course.find({ isActive: true })
    .then((activeCourses) => {
      if (activeCourses.length > 0) {
        return res.status(200).send(activeCourses);
      } else {
        return res.status(200).send(false);
      }
    })
    .catch((err) => res.status(500).send(err));
};

// Update a course
module.exports.updateCourse = (req, res) => {
  let updateCourse = {
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
  };

  return Course.findByIdAndUpdate(req.params.courseId, updateCourse)
    .then((course) => {
      if (course) {
        res.status(200).send(true);
      } else {
        res.status(404).send(false);
      }
    })
    .catch((err) => res.status(500).send(err));
};

// Archive a Course
module.exports.archiveCourse = (req, res) => {
  if (req.user.isAdmin) {
    let updatedActiveField = {
      isActive: false,
    };

    Course.findByIdAndUpdate(req.params.courseId, updatedActiveField)
      .then((course) => {
        if (course) {
          return res.status(200).send(course);
        } else {
          return res.status(400).send("Failed Archiving");
        }
      })
      .catch((err) => res.status(500).send(err));
  } else {
    return res.status(400).send("False");
  }
};

// Activate a Course
module.exports.activateCourse = (req, res) => {
  let updatedActiveField = {
    isActive: true,
  };

  return Course.findByIdAndUpdate(req.params.courseId, updatedActiveField)
    .then((course) => {
      try {
        if (course) {
          res.status(200).send(course);
        } else {
          res.status(400).send(false);
        }
      } catch (err) {
        return res.status(400).send(err);
      }
    })
    .catch((err) => res.status(500).send(err));
};
