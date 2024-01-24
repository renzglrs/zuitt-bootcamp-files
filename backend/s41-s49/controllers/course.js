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
        return res.status(409).send({
          error: "Course already exists.",
        });
      }

      return newCourse
        .save()
        .then((savedCourse) =>
          res
            .status(201)
            .send({ message: "Course saved successfully", data: savedCourse })
        )
        .catch((err) =>
          res.status(500).send({
            error: "Failed to save course",
          })
        );
    });
  } catch (err) {
    res.status(500).send("Error in Variables");
  }
};

// Retrieve all courses
module.exports.getAllCourses = (req, res) => {
  return Course.find({})
    .then((result) => {
      if (result.length > 0) {
        return res.status(200).send(result);
      } else {
        // 200 is a result of a successful request, even if the response returned no record/content
        return res.status(200).send({ message: "No courses found." });
      }
    })
    .catch((err) =>
      res.status(500).send({
        error: "Error finding courses",
      })
    );
};

// Get specific course
module.exports.getCourse = (req, res) => {
  Course.findById(req.body.id)
    .then((course) => {
      if (!course) {
        res.status(404).send({ error: "Course not found." });
      }

      return res.status(200).send({ course });
    })
    .catch((err) =>
      res.status(500).send({
        error: "The course ID is not valid",
      })
    );
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
    .catch((err) =>
      res.status(500).send({
        error: "Error finding active courses",
      })
    );
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
        res
          .status(200)
          .send({ message: "Course updated successfully", data: course });
      } else {
        res.status(404).send({ error: "Course cannot be updated" });
      }
    })
    .catch((err) =>
      res.status(500).send({
        error: "Error in updating a course",
      })
    );
};

// Archive a Course
module.exports.archiveCourse = (req, res) => {
  let updatedActiveField = {
    isActive: false,
  };

  if (req.user.isAdmin == true) {
    return Course.findByIdAndUpdate(req.params.courseId, updatedActiveField)
      .then((course) => {
        if (course) {
          res
            .status(200)
            .send({ message: "Course archived successfully", data: course });
        } else {
          res
            .status(400)
            .send({ error: "There is a problem archiving the course." });
        }
      })
      .catch((err) => res.status(500).send({ error: "Archiving failed" }));
  } else {
    return res
      .status(403)
      .send({ error: "Your are not authorized to do this action." });
  }
};

// Activate a Course
module.exports.activateCourse = (req, res) => {
  let updatedActiveField = {
    isActive: true,
  };

  if (req.user.isAdmin == true) {
    return Course.findByIdAndUpdate(req.params.courseId, updatedActiveField)
      .then((course) => {
        if (course) {
          res
            .status(200)
            .send({ message: "Course activated successfully", data: course });
        } else {
          res
            .status(400)
            .send({ error: "There is a problem activating the course." });
        }
      })
      .catch((err) => res.status(500).send({ error: "Activating failed" }));
  } else {
    return res
      .status(403)
      .send({ error: "Your are not authorized to do this action." });
  }
};

// Search course by name
module.exports.searchCoursesByName = async (req, res) => {
  try {
    const { courseName } = req.body;

    // case insensitve
    const courses = await Course.find({
      name: { $regex: courseName, $options: "i" },
    });

    return res.json(courses);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error!" });
  }
};

// Search course by price range
module.exports.searchCoursesByPriceRange = async (req, res) => {
  try {
    const { minPrice, maxPrice } = req.body;

    const courses = await Course.find({
      price: { $gte: minPrice, $lte: maxPrice },
    });

    return res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error!" });
  }
};
