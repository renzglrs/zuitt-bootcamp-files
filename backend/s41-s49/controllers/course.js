// Dependencies
const Course = require("../models/Course");

// [MY SOLUTION] Get all courses
// module.exports.getAllCourses = () => {
//   return Course.find({})
//     .then((result) => {
//       console.log(result);
//       if (result.length != 0) {
//         return result;
//       } else {
//         return false;
//       }
//     })
//     .catch((err) => err);
// };

// Create/Add Course
module.exports.addCourse = (req, res) => {
  try {
    let newCourse = new Course({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
    });

    return newCourse
      .save()
      .then((result) => res.send(result))
      .catch((err) => res.send(err));
  } catch (err) {
    res.send("Error in Variables");
  }
};

// Retrieve all courses
module.exports.getAllCourses = (req, res) => {
  return Course.find({})
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
};

// Get specific course
module.exports.getCourse = (req, res) => {
  Course.findById(req.body.id)
    .then((course) => res.send(course))
    .catch((err) => res.send(err));
};

// Get all active/available courses
module.exports.getAllActive = (req, res) => {
  Course.find({ isActive: true })
    .then((activeCourses) => res.send(activeCourses))
    .catch((err) => res.send(err));
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
        res.send(true);
      } else {
        res.send(false);
      }
    })
    .catch((err) => res.send(err));
};

// Archive a Course
module.exports.archiveCourse = (req, res) => {
  let updatedActiveField = {
    isActive: false,
  };

  return Course.findByIdAndUpdate(req.params.courseId, updatedActiveField)
    .then((course) => {
      if (course) {
        res.send(true);
      } else {
        res.send(false);
      }
    })
    .catch((err) => res.send(err));
};

// Activate a Course
module.exports.activateCourse = (req, res) => {
  let updatedActiveField = {
    isActive: true,
  };

  return Course.findByIdAndUpdate(req.params.courseId, updatedActiveField)
    .then((course) => {
      if (course) {
        res.send(true);
      } else {
        res.send(false);
      }
    })
    .catch((err) => res.send(err));
};
