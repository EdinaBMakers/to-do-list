'use strict';

module.exports = function(app) {
  const toDoList = require('../controllers/toDoListControllers');

  app.route('/tasks')
    .get(toDoList.listAllTasks)
    .post(toDoList.createAtask);

  app.route('/tasks/:taskId')
    .get(toDoList.readATask);
};