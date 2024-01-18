// Importing dependencies
const express = require("express");
const mongoose = require("mongoose");

// Initializing variables
const app = express();
const port = 4001;
const mongoDBPassword = "admin1234";

// [SECTION] MongoDB Connection thru Mongoose
mongoose.connect(
  `mongodb+srv://admin:${mongoDBPassword}@gloriosodb.gewtusc.mongodb.net/B362-to-do?retryWrites=true&w=majority`,
  {
    useNewURLParser: true,
    useUnifiedTopology: true,
  }
);

let db = mongoose.connection;
db.on("error", () => console.log("Connection Error"));
db.once("open", () => console.log("We're connected to MongoDB!"));
// End of MongoDB Connection

// [SECTION] Mongoose Schemas
const taskSchema = new mongoose.Schema({
  name: String,
  status: {
    type: String,
    default: "Pending",
  },
});

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});

// [SECTION] Mongoose Model
const Task = mongoose.model("Task", taskSchema);
const User = mongoose.model("User", userSchema);

// Registering middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// [SECTION] Routes
app.post("/tasks", (request, response) => {
  Task.findOne({ name: request.body.name }).then((result, error) => {
    // The findOne() function looks for a specific item based on the content of the object.
    if (result != null && result.name == request.body.name) {
      return response.send("Task already exists");
    } else {
      // Creates a new instance of the task model which essentially creates a new task with the name coming from the request body.
      let newTask = new Task({
        name: request.body.name,
      });

      newTask.save().then((savedTask, error) => {
        if (error) {
          return console.log(error);
        }

        return response.send("Task has been saved successfully" + savedTask);
        // return response.send({
        //   message: "Task has been saved successfully",
        //   data: savedTask,
        // });
      });
    }
  });
});

// Route for getting all tasks
app.get("/tasks", (req, res) => {
  // "find" is a Mongoose method that is similar to Mongodb "find", and an emptly {} means it returns all the documents and stores them in the "result" parameter of the callback function
  Task.find({}).then((result, err) => {
    // If an error occured
    if (err) {
      // Will print any errors found in the console
      console.log(err);
    } else {
      // Send the result to the client
      return res.send(result);
    }
  });
});

// Route for creating a user
app.post("/register", (req, res) => {
  // Check if user already exists
  User.findOne({ email: req.body.email }).then((result, err) => {
    if (result != null && result.email == req.body.email) {
      return res.send("Duplicate User found ");
    } else if (
      req.body.firstName == "" ||
      req.body.lastName == "" ||
      req.body.email == "" ||
      req.body.password == ""
    ) {
      console.log(req.body);
      return res.send(`All fields must be provided`);
    } else {
      // Create/Instantiate a "newUser" from the "User" model
      let newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
      });

      // Create a document in the database
      newUser.save().then((savedUser, err) => {
        if (err) {
          return console.log(err);
        }
        return res.status(201).send({
          message: "New user registered!",
          data: savedUser,
        });
      });
    }
  });
});

// Route for logging in a user
app.post("/login", (req, res) => {
  User.findOne({ email: req.body.email }).then((result, err) => {
    // console.log(result);
    // Check IF email exists in the database
    if (result != null && result.email == req.body.email) {
      // IF it is, check password from the db and req.body match and send a message to the client for loggin in
      // ELSE, send a message to the client for wrong password
      if (result.password != req.body.password) {
        return res.send(`Wrong password!!`);
      }
      return res.send(`Thank you for loggin in!`);
    }

    // IF email does not exis in the data base, send a message to the client for email does not exists
    return res.send(`Email does not exist!`);
  });
});

// Listening to a port
app.listen(port, () => {
  console.log(`Server is now jogging at port ${port}`);
});
