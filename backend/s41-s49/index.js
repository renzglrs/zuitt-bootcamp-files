// [SECTION] Dependencies and Modules
const express = require("express");
const mongoose = require("mongoose");
// Allows our backend application to be available to our frontend applicaiton
// Allows us to control the app's Cross Origin Resource Shareing settings
const cors = require("cors");
// Allows access to routes defined within our applicaition
const userRoutes = require("./routes/user");
const courseRoutes = require("./routes/course");

// [SECTION] Environment Setup
const port = 4000;
// MongoDB password
const mongoDBPassword = "admin1234";
// Database name
const dbName = "B362-S41-49-Acitivty";

// [SECTION] Server Setup
// Creates an "app" variable the stores the results of the "express" function that initializes our express application and allows us access to different methods that will make backend creation ease
const app = express();

// Registering middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// [SECTION] Database Connection
// Connect to our MongoDB database
// [SECTION] MongoDB Connection thru Mongoose
mongoose.connect(
  `mongodb+srv://admin:${mongoDBPassword}@gloriosodb.gewtusc.mongodb.net/${dbName}?retryWrites=true&w=majority`
);
// Promts a message in the terminal once the connection is open and we are able to successfully connect our database
mongoose.connection.once("open", () =>
  console.log("Now connected to MongoDB  Atlas")
);

// [SECTION] Backend routes
// http://localhost:4000/users
// Defines the "/users" string to be included for all user routes defined in the "user" route file
app.use("/users", userRoutes);
app.use("/courses", courseRoutes);

// [SECTION] Server Gateway Response
// if(require.main) would allow us to listen to the app directly if it is not imported to another module, it will run the app directly
// else, if it is needed to be imported, it will not run the app and instead export it to be used in another file
if (require.main === module) {
  // "process.env.PORT || port" will use the environment variable if it is available OR will use port 4000 if none is defined
  app.listen(process.env.PORT || port, () => {
    console.log(`API is now online on port ${port}`);
  });
}
// In creating APIs, exporting modules in the "index.js" file is ommited
module.exports = app;
