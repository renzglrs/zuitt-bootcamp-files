// Setup the dependencies
const express = require("express");
const mongoose = require("mongoose");
// This allows us to use all the routes defined in "taskRoute.js"
const taskRoute = require("./routes/taskRoute");

// Server setup
const app = express();
const port = 4001;
// Mongodb password
const mongoDBPassword = "admin1234";
// Database name
const dbName = "B362-to-do";

// Registering middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// [SECTION] MongoDB Connection thru Mongoose
mongoose.connect(
  `mongodb+srv://admin:${mongoDBPassword}@gloriosodb.gewtusc.mongodb.net/${dbName}?retryWrites=true&w=majority`,
  {
    useNewURLParser: true,
    useUnifiedTopology: true,
  }
);

// Add the task route
// Allow all the task routes created in "taskRoute.js" file to use "/tasks" route
app.use("/tasks", taskRoute);

if (require.main == module) {
  app.listen(port, () => {
    console.log(`Server is running at ${port}`);
  });
}

module.exports = { app, mongoose };
