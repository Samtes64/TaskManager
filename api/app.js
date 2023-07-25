const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config();

const { mongoose } = require("./db/mongoose");

const bodyParser = require("body-parser");

//Load in the mongoose models
const { List, Task } = require("./db/models");

//cores header middleware
app.use(cors());

//Load middleware
app.use(bodyParser.json());

/* ROUTE HANDLES */

/* LIST ROUTES */

/*
Get /lists
Purpose: Get all lists
*/

app.get("/lists", (req, res) => {
  // we want to return an array of all lists in the database
  // res.send("lists")
  List.find({})
    .then((lists) => {
      res.send(lists);
    })
    .catch((e) => {
      res.send(e);
    });
});

/*
POST /lists
Purpose: Creat a list
*/

app.post("/lists", (req, res) => {
  //want to create a new list and return the new list document back to the user (which includes the id)
  //The list information (fields) will be passed in via the JSON request body

  let title = req.body.title;

  let newList = new List({
    title,
  });

  newList.save().then((listDoc) => {
    //the full document is returned (incl. id)
    res.send(listDoc);
  });
});

/*
PATCH /lists
Purpose: Update a specified list
*/

app.patch("/lists/:id", (req, res) => {
  // we want to update the specified list (list document with id in the URL) with the new values specified in the JSON body of the request
  List.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }).then(() => {
    res.sendStatus(200);
  });
});

/*
DELETE /lists
Purpose: Delete a specified list
*/

app.delete("/lists/:id", (req, res) => {
  // want to delete the specified list (document with id in the URL)
  List.findOneAndRemove({
    _id: req.params.id,
  }).then((removeListDoc) => {
    res.send(removeListDoc);
  });
});

/*
GET /lists/:listId/tasks
Purpose: Get all tasks in a specific list
*/

app.get("/lists/:listId/tasks", (req, res) => {
  //want to return all tasks that belong to a specific list(specified by list id)
  Task.find({
    _listId: req.params.listId,
  }).then((tasks) => {
    res.send(tasks);
  });
});

/*
POST /lists/:listId/tasks
Purpose: Create a new task in a specific list
*/

app.post("/lists/:listId/tasks", (req, res) => {
  //want to create a new task in a list specified by listid

  let newTask = new Task({
    title: req.body.title,
    _listId: req.params.listId,
  });
  newTask.save().then((newTaskDoc) => {
    res.send(newTaskDoc);
  });
});

/*
Patch /lists/:listId/tasks/:taskId
Purpose: Update an existing task
*/

app.patch("/lists/:listId/tasks/:taskId", (req, res) => {
  //want to update an existing task (specified by taskId)
  Task.findByIdAndUpdate(
    {
      _id: req.params.taskId,
      _listId: req.params.listId,
    },
    {
      $set: req.body,
    }
  ).then(() => {
    res.sendStatus(200);
  });
});

/*
DELETE /lists/:listId/tasks/:taskId
Purpose: Delete an existing task
*/

app.delete("/lists/:listId/tasks/:taskId", (req, res) => {
  //want to Delete an existing task (specified by taskId)
  Task.findByIdAndRemove({
    _id: req.params.taskId,
    _listId: req.params.listId,
  }).then((removedTaskDoc) => {
    res.send(removedTaskDoc);
  });
});

/*
Get /lists/:listId/tasks/:taskId
Purpose: get only one task based on the id
*/

app.get("/lists/:listId/tasks/:taskId", (req, res) => {
  Task.findOne({
    _id: req.params.taskId,
    _listId: req.params.listId,
  }).then((task) => {
    res.send(task);
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server is listening on port 3000");
});
