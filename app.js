var express = require('express');

var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var db=mongoose.connect('mongodb://localhost/MovieDb');
var moviesRouter = require('./routes/moviesRouter');

app.use(bodyParser.json())
app.listen(3000, () => {
  console.log('server is running on port 3000...')
})

app.use('/movies', moviesRouter)