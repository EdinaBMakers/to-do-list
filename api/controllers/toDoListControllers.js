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

exports.updateATask = function(req, res) {
  Task.findOneAndUpdate({_id: req.params.taskId}, req.body, { new: true }, function(err, task) {
    if (err) { return res.send(err) }
    res.json(task);
  });
}

exports.deleteATask = function(req, res) {
  Task.remove({_id: req.params.taskId}, req.body, function(err) {
    if (err) { return res.send(err); }
    res.json({ message: "Task successfully deleted" });
  });
}