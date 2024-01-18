// Controllers contain the function and the business logic of our Express JS applicaiton
// Meaning all the operations it can do will be placed in this file

// Uses the "require" directive to allow access to the "Task" model which allows us to access Mongoose methods to perform CRUD function
// Allows us to use the contents of the "task.js" file in the "models" folder
const Task = require("../models/task");

// Controller function for getting all the tasks
module.exports.getAllTasks = () => {
  return Task.find({}).then((result) => {
    return result;
  });
};

// Controller function for creating a task
// The request body coming from the client was passed from the "taskRoute.js" file via the "req.body" as an argument and is  renamed as "reqBody" parameter in the controller file
module.exports.createTask = (reqBody) => {
  // Creates a task object based on the mongoose model "Tasl"
  let newTask = new Task({
    // Set the "name" property with the value received from the client/postman
    name: reqBody.name,
  });

  return newTask.save().then((task, error) => {
    if (error) {
      console.log(error);
      return false;
    } else {
      return task;
    }
  });
};

// Controller for deleting a task
// "taskID" is the URL parameter passed from the "taskRoute.js" file

// Business Logic
/*
    1. Look for the task with the corresponding id provided in the URL/route
    2. Delete the task using the Mongoose method "findByIdAndRemove" with the same id provided in the route
    3. Then Send the deleted course back to the client. 
    4. Catch the Error and send a false boolean
*/
// The task id retrieved from the "req.params.id" property coming from the client is renamed as a "taskId" parameter in the controller file
module.exports.deleteTask = (taskId) => {
  return Task.findByIdAndDelete(taskId).then((removedTask, error) => {
    if (error) {
      console.log(error);
      return false;
    } else {
      return removedTask;
    }
  });
};

module.exports.updateTask = (taskId, newContent) => {
  return Task.findById(taskId).then((result, error) => {
    if (error) {
      console.log(error);
      return false;
    }
    // Results of the "findById" method will be stored in the "result" parameter
    // It's "name" property  will be reassigned the value of the "name" received from the request
    result.name = newContent.name;

    // Saves the updated object in the MongoDB database
    // The document already exists in the database and was stored in the "result" parameter
    // Because of Mongoose we have access to the "save" method to update the existing document with the changes we applied
    // The "return" statement returns the result of the "save" method to the "then" method chained to the "findById" method which invokes this function
    return result.save().then((updateTask, saveErr) => {
      if (saveErr) {
        console.log(saveErr);
        return false;
      } else {
        return updateTask;
      }
    });
  });
};
