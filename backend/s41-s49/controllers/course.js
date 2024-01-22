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

// Get all courses
module.exports.getAllCourses = (req, res) => {
  return Course.find({})
    .then((result) => res.send(result))
    .catch((err) => err);
};

// Create/add course
module.exports.addCourse = (req, res) => {
  let newCourse = new Course({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
  });

  return newCourse
    .save()
    .then((result) => res.send(result))
    .catch((err) => err);
};

// Get specific course
module.exports.getCourse = (req, res) => {
  Course.findById(req.body.id)
    .then((course) => res.send(course))
    .catch((err) => err);
};

// Get all active/available courses
module.exports.getAllActive = (req, res) => {
  Course.find({ isActive: true })
    .then((activeCourses) => res.send(activeCourses))
    .catch((err) => err);
};
