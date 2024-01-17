// Server setup
const express = require("express");
const app = express();
const port = 4001;

// Server Middleware
app.use(express.json()); // To allow different data types to be read by the server (by default, it can only read data as string)
app.use(express.urlencoded({ extended: true })); // To allow the server to read different data types from a URL.

// [SECTION] Routes
app.get("/", (request, response) => {
  response.send("Hello World!");
});

app.get("/hello", (request, response) => {
  response.send("Hello from the /hello endpoint!");
});

app.post("/hello", (request, response) => {
  response.send(
    `Hello there, ${request.body.firstName} ${request.body.lastName}!`
  );
});

// Mock database
let users = [];

// Register new user
app.post("/register", (request, response) => {
  if (request.body.username !== "" && request.body.password !== "") {
    users.push(request.body);

    response.send("User registered successfully!");
  } else {
    response.send("Please input BOTH username AND password! Wag kang teluk");
  }
});

// Get all users
app.get("/users", (request, response) => {
  response.send(users);
});

// [MINI ACTIVITY]
// 1. Create a route for deleting a single user
// 2. If the users array is empty, then send a response saying  'User collection is empty!'
app.delete("/users/delete", (request, response) => {
  // Early exit principle
  if (users.length <= 0) {
    response.send("User collection is empty!");
  }

  let user = users.pop();
  response.send(`${user.username} has been deleted!`);
});

app.listen(port, () => console.log(`Server is running at port ${port}`));
