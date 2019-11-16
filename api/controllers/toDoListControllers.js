'use strict';

const mongoose = require('mongoose');
const Task = mongoose.model('Tasks');

exports.listAllTasks = function(req, res) {
  Task.find({}, function(err, task) {
    if (err) { return res.send(err); }
    res.json(task);
  }); 
};

exports.createAtask = function(req,res) {
  const newTask = new Task(req.body);

  newTask.save(function(err, task) {
    if (err) { return res.send(err); }
    res.json(task);
  });
};

exports.readATask = function(req, res) {
  Task.findById({_id: req.params.taskId}, req.body, function(err, task) {
    if (err) { return res.send(err); }
    res.json(task);
  });
}