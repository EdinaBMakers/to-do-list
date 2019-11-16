const express = require('express');
const app = express();
const routes = require('./api/routes/toDoListRoutes');
const mongoose = require('mongoose');
const Task = require('./api/models/toDoListModel');
const bodyParser = require('body-parser');

mongoose.set('useUnifiedTopology', true);
mongoose.set('useNewUrlParser', true);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/ToDodb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

module.exports = app;