const express = require('express');
const routes = require('./src/routes/routes');
const path = require('path');
const cors = require('cors');

var app = express()
app.use(cors());
app.use(express.json());
app.use('/lms', routes);



app.set('views', path.join(__dirname+'/src/views/admin'));
app.set('view engine', 'ejs');

module.exports = app;