const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "firstName is required"],
  },
  lastName: {
    type: String,
    required: [true, "lastName is required"],
  },
  email: {
    type: String,
    required: [true, "email is Required"],
  },
  password: {
    type: String,
    required: [true, "password is Required"],
  },
  isAdmin: {
    type: Boolean,
    default: true,
  },
  mobileNo: {
    type: Number,
    required: [true, "mobileNo is Required"],
  },
});

module.exports = mongoose.model("User", userSchema);
