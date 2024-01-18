// Create the Schema, model, and exprot the file
const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: String,
  status: {
    type: String,
    default: "pending",
  },
});

module.exports = mongoose.model("Task", taskSchema);
// Module exports is a way for node JS to treat this value as a package that can be used by other files
