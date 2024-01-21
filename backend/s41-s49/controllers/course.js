// Dependencies
const Course = require("../models/Course");
const bcrypt = require("bcrypt");
const auth = require("../auth");

module.exports.getAllCourses = () => {
  return Course.find({})
    .then((result) => {
      if (!result) {
        return result;
      } else {
        return false;
      }
    })
    .catch((err) => err);
};

module.exports.addCourse = () => {
  return Course;
};
