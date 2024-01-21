// Dependencies
const Course = require("../models/Course");
const bcrypt = require("bcrypt");
const auth = require("../auth");

module.exports.getAllCourses = () => {
  return Course.find({})
    .then((result) => {
      console.log(result);
      if (result.length != 0) {
        return result;
      } else {
        return false;
      }
    })
    .catch((err) => err);
};

module.exports.addCourse = (reqBody) => {
  let newCourse = new Course({
    name: reqBody.name,
    description: reqBody.description,
    price: reqBody.price,
    isActive: reqBody.isActive,
    createdOn: reqBody.createdOn,
  });

  return newCourse
    .save()
    .then((result) => result)
    .catch((err) => err);
};
