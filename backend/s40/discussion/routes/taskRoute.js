// Contain all the endpoints for our application
// We separate the routes such that "index.js" only contains information on the server
// We need to use express Router() function to achieve this
const express = require("express");
// Creates a Router instance that functions as a middleware and routing system
// Allows access to HTTP method middlewares that makes it easier to create routes for our application
const router = express.Router();

// Importing taskController
const taskController = require("../controllers/taskController");

// [SECTION] Routes
// The routes are responsible for defining the URI's that our client accesses and the corresponding controller functions that will be used when a route is accessed
// They invoke the controller function from the controller files

// Route to GET all tasks
// This route expects to receive a GET request at the URL "/tasks"
// The whole URL is at "http://localhost:4001/tasks" this is because of the "/tasks" defined in the "index.js" that applies to all routes in this file.
router.get("/", (req, res) => {
  // Invokes the "getAllTasks" function from the "taskController.js" file and send the result back to the client/Postman
  taskController
    .getAllTasks()
    .then((resultFromController) => res.send(resultFromController));
});

// Route to POST/create a new task
router.post("/", (req, res) => {
  // The "createTask" function needs the data from the request body, so we need to supply it to the function
  taskController
    .createTask(req.body)
    .then((resultFromController) => res.send(resultFromController));
});

// Route to DELETE a task
// The colon : is an identifier that helps create a dynamic route which allows us to supply information in the URL
router.delete("/:id", (req, res) => {
  // URL Parameter values are accessed via the request's object's params
  taskController
    .deleteTask(req.params.id)
    .then((resultFromController) => res.send(resultFromController));
});

/* 
    Route to UPDATE a task
    This route expects to receive a PUT request at the URL "/tasks/:id"
    The updateTask will accept the following 2 arguments
        "req.params.id" retrieves the task ID from the parameter
        "req.body" retrieves the data of the updates that will be applied to a task from the request's body property 

*/
router.put("/:id", (req, res) => {
  taskController
    .updateTask(req.params.id, req.body)
    .then((resultFromController) => res.send(resultFromController));
});

// Use "module.exports" to export the router object to use in the "index.js"
module.exports = router;
